"use strict";

/*
 * A stripped down copy of protobuf.js's reader.
 *
 * The minimal version of protobuf.js is 100KB. But most of the stuff is not used.
 * This code in fact is the only code that is being used from the protobuf.js library.
 *
 * NOTE: this is not a generic Protobuf loader, and when you feed it broken protobuf
 * files, it will crash in weird ways.
 *
 * Original source: https://github.com/protobufjs/protobuf.js/blob/master/src/reader.js
 */

module.exports = Reader;

function Reader(buffers) {
    this._buffers = buffers;
    this._buf = buffers[0];
    this._remaining = new Uint8Array();
    this._buf_pos = 0;

    this.pos = 0;
    this.len = 0;
}

Reader.create = function create(buffers) {
    return new Reader(buffers);
}

/* This is an early attempt in making the reader more streamable.
 * It allows for a list of buffers, and stitches them together correctly. */
Reader.prototype.read = function read(len) {
    if (this._remaining.length > 0) {
        if (this._buf_pos >= this._remaining.length) {
            /* If more bytes were consumed than the remaining buffer has, reset the remaining buffer. */
            this._buf_pos -= this._remaining.length;
            this._remaining = new Uint8Array();
        } else {
            /* Otherwise only remove the bytes from the remaining buffer. */
            this._remaining = this._remaining.slice(this._buf_pos);
            this._buf_pos = 0;
        }
    }

    /* If the requested length doesn't fit in the buffer, fetch a new chunk. */
    if (this._buf_pos + len > this._remaining.length + this._buf.length) {
        let cur_buf = undefined;
        let next_buf = undefined;
        for (let buffer of this._buffers) {
            if (cur_buf !== undefined) {
                next_buf = buffer;
                break;
            }
            if (buffer === this._buf) {
                cur_buf = buffer;
            }
        }

        if (next_buf === undefined) {
            return this._buf;
        }

        this._remaining = this._buf.slice(this._buf_pos);
        this._buf = next_buf;
        this._buf_pos = 0;
    }

    /* If we have some bytes remaining from the last pass, we have to do an expensive copy. */
    if (this._remaining.length > 0) {
        this._buf_pos = 0;
        return new Uint8Array([...this._remaining, ...this._buf.slice(0, len - this._remaining.length)]);
    }
    return this._buf;
}

Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        const buf = this.read(10);

        value = (         buf[this._buf_pos] & 127       ) >>> 0; this.pos++; if (buf[this._buf_pos++] < 128) return value;
        value = (value | (buf[this._buf_pos] & 127) <<  7) >>> 0; this.pos++; if (buf[this._buf_pos++] < 128) return value;
        value = (value | (buf[this._buf_pos] & 127) << 14) >>> 0; this.pos++; if (buf[this._buf_pos++] < 128) return value;
        value = (value | (buf[this._buf_pos] & 127) << 21) >>> 0; this.pos++; if (buf[this._buf_pos++] < 128) return value;
        value = (value | (buf[this._buf_pos] &  15) << 28) >>> 0; this.pos++; if (buf[this._buf_pos++] < 128) return value;

        this.pos += 5;
        this._buf_pos += 5;
        return value;
    };
})();

Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
}

Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32();

    const buf = this.read(length);
    this.pos += length;

    const res = buf.slice(this._buf_pos, this._buf_pos + length);
    this._buf_pos += length;
    return res;
};

Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return new TextDecoder().decode(bytes);
};

let f32 = new Float32Array([ -0 ]), f8b = new Uint8Array(f32.buffer);

Reader.prototype.float = function read_float() {
    const buf = this.read(4);
    this.pos += 4;

    f8b[0] = buf[this._buf_pos++];
    f8b[1] = buf[this._buf_pos++];
    f8b[2] = buf[this._buf_pos++];
    f8b[3] = buf[this._buf_pos++];
    return f32[0];
};

Reader.prototype.skipType = function(wireType) {
    throw Error("Please avoid skipping fields; it is really slow.");
};
