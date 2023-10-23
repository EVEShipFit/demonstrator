/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const esf = $root.esf = (() => {

    const esf = {};

    esf.TypeDogma = (function() {

        function TypeDogma(properties) {
            this.entries = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TypeDogma.prototype.entries = $util.emptyObject;

        TypeDogma.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.TypeDogma(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.entries === $util.emptyObject)
                            message.entries = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.esf.TypeDogma.TypeDogmaEntry.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.entries[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TypeDogma.fromObject = function fromObject(object) {
            if (object instanceof $root.esf.TypeDogma)
                return object;
            let message = new $root.esf.TypeDogma();
            if (object.entries) {
                if (typeof object.entries !== "object")
                    throw TypeError(".esf.TypeDogma.entries: object expected");
                message.entries = {};
                for (let keys = Object.keys(object.entries), i = 0; i < keys.length; ++i) {
                    if (typeof object.entries[keys[i]] !== "object")
                        throw TypeError(".esf.TypeDogma.entries: object expected");
                    message.entries[keys[i]] = $root.esf.TypeDogma.TypeDogmaEntry.fromObject(object.entries[keys[i]]);
                }
            }
            return message;
        };

        TypeDogma.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.entries = {};
            let keys2;
            if (message.entries && (keys2 = Object.keys(message.entries)).length) {
                object.entries = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.entries[keys2[j]] = $root.esf.TypeDogma.TypeDogmaEntry.toObject(message.entries[keys2[j]], options);
            }
            return object;
        };

        TypeDogma.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TypeDogma.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/esf.TypeDogma";
        };

        TypeDogma.TypeDogmaEntry = (function() {

            function TypeDogmaEntry(properties) {
                this.dogmaAttributes = [];
                this.dogmaEffects = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            TypeDogmaEntry.prototype.dogmaAttributes = $util.emptyArray;
            TypeDogmaEntry.prototype.dogmaEffects = $util.emptyArray;

            TypeDogmaEntry.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.TypeDogma.TypeDogmaEntry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.dogmaAttributes && message.dogmaAttributes.length))
                                message.dogmaAttributes = [];
                            message.dogmaAttributes.push($root.esf.TypeDogma.TypeDogmaEntry.DogmaAttributes.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(message.dogmaEffects && message.dogmaEffects.length))
                                message.dogmaEffects = [];
                            message.dogmaEffects.push($root.esf.TypeDogma.TypeDogmaEntry.DogmaEffects.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            TypeDogmaEntry.fromObject = function fromObject(object) {
                if (object instanceof $root.esf.TypeDogma.TypeDogmaEntry)
                    return object;
                let message = new $root.esf.TypeDogma.TypeDogmaEntry();
                if (object.dogmaAttributes) {
                    if (!Array.isArray(object.dogmaAttributes))
                        throw TypeError(".esf.TypeDogma.TypeDogmaEntry.dogmaAttributes: array expected");
                    message.dogmaAttributes = [];
                    for (let i = 0; i < object.dogmaAttributes.length; ++i) {
                        if (typeof object.dogmaAttributes[i] !== "object")
                            throw TypeError(".esf.TypeDogma.TypeDogmaEntry.dogmaAttributes: object expected");
                        message.dogmaAttributes[i] = $root.esf.TypeDogma.TypeDogmaEntry.DogmaAttributes.fromObject(object.dogmaAttributes[i]);
                    }
                }
                if (object.dogmaEffects) {
                    if (!Array.isArray(object.dogmaEffects))
                        throw TypeError(".esf.TypeDogma.TypeDogmaEntry.dogmaEffects: array expected");
                    message.dogmaEffects = [];
                    for (let i = 0; i < object.dogmaEffects.length; ++i) {
                        if (typeof object.dogmaEffects[i] !== "object")
                            throw TypeError(".esf.TypeDogma.TypeDogmaEntry.dogmaEffects: object expected");
                        message.dogmaEffects[i] = $root.esf.TypeDogma.TypeDogmaEntry.DogmaEffects.fromObject(object.dogmaEffects[i]);
                    }
                }
                return message;
            };

            TypeDogmaEntry.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.dogmaAttributes = [];
                    object.dogmaEffects = [];
                }
                if (message.dogmaAttributes && message.dogmaAttributes.length) {
                    object.dogmaAttributes = [];
                    for (let j = 0; j < message.dogmaAttributes.length; ++j)
                        object.dogmaAttributes[j] = $root.esf.TypeDogma.TypeDogmaEntry.DogmaAttributes.toObject(message.dogmaAttributes[j], options);
                }
                if (message.dogmaEffects && message.dogmaEffects.length) {
                    object.dogmaEffects = [];
                    for (let j = 0; j < message.dogmaEffects.length; ++j)
                        object.dogmaEffects[j] = $root.esf.TypeDogma.TypeDogmaEntry.DogmaEffects.toObject(message.dogmaEffects[j], options);
                }
                return object;
            };

            TypeDogmaEntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            TypeDogmaEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/esf.TypeDogma.TypeDogmaEntry";
            };

            TypeDogmaEntry.DogmaAttributes = (function() {

                function DogmaAttributes(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DogmaAttributes.prototype.attributeID = 0;
                DogmaAttributes.prototype.value = 0;

                DogmaAttributes.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.TypeDogma.TypeDogmaEntry.DogmaAttributes();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.attributeID = reader.int32();
                                break;
                            }
                        case 2: {
                                message.value = reader.float();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("attributeID"))
                        throw $util.ProtocolError("missing required 'attributeID'", { instance: message });
                    if (!message.hasOwnProperty("value"))
                        throw $util.ProtocolError("missing required 'value'", { instance: message });
                    return message;
                };

                DogmaAttributes.fromObject = function fromObject(object) {
                    if (object instanceof $root.esf.TypeDogma.TypeDogmaEntry.DogmaAttributes)
                        return object;
                    let message = new $root.esf.TypeDogma.TypeDogmaEntry.DogmaAttributes();
                    if (object.attributeID != null)
                        message.attributeID = object.attributeID | 0;
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };

                DogmaAttributes.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.attributeID = 0;
                        object.value = 0;
                    }
                    if (message.attributeID != null && message.hasOwnProperty("attributeID"))
                        object.attributeID = message.attributeID;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };

                DogmaAttributes.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                DogmaAttributes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/esf.TypeDogma.TypeDogmaEntry.DogmaAttributes";
                };

                return DogmaAttributes;
            })();

            TypeDogmaEntry.DogmaEffects = (function() {

                function DogmaEffects(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DogmaEffects.prototype.effectID = 0;
                DogmaEffects.prototype.isDefault = false;

                DogmaEffects.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.TypeDogma.TypeDogmaEntry.DogmaEffects();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.effectID = reader.int32();
                                break;
                            }
                        case 2: {
                                message.isDefault = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("effectID"))
                        throw $util.ProtocolError("missing required 'effectID'", { instance: message });
                    if (!message.hasOwnProperty("isDefault"))
                        throw $util.ProtocolError("missing required 'isDefault'", { instance: message });
                    return message;
                };

                DogmaEffects.fromObject = function fromObject(object) {
                    if (object instanceof $root.esf.TypeDogma.TypeDogmaEntry.DogmaEffects)
                        return object;
                    let message = new $root.esf.TypeDogma.TypeDogmaEntry.DogmaEffects();
                    if (object.effectID != null)
                        message.effectID = object.effectID | 0;
                    if (object.isDefault != null)
                        message.isDefault = Boolean(object.isDefault);
                    return message;
                };

                DogmaEffects.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.effectID = 0;
                        object.isDefault = false;
                    }
                    if (message.effectID != null && message.hasOwnProperty("effectID"))
                        object.effectID = message.effectID;
                    if (message.isDefault != null && message.hasOwnProperty("isDefault"))
                        object.isDefault = message.isDefault;
                    return object;
                };

                DogmaEffects.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                DogmaEffects.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/esf.TypeDogma.TypeDogmaEntry.DogmaEffects";
                };

                return DogmaEffects;
            })();

            return TypeDogmaEntry;
        })();

        return TypeDogma;
    })();

    esf.TypeIDs = (function() {

        function TypeIDs(properties) {
            this.entries = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TypeIDs.prototype.entries = $util.emptyObject;

        TypeIDs.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.TypeIDs(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.entries === $util.emptyObject)
                            message.entries = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.esf.TypeIDs.TypeID.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.entries[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TypeIDs.fromObject = function fromObject(object) {
            if (object instanceof $root.esf.TypeIDs)
                return object;
            let message = new $root.esf.TypeIDs();
            if (object.entries) {
                if (typeof object.entries !== "object")
                    throw TypeError(".esf.TypeIDs.entries: object expected");
                message.entries = {};
                for (let keys = Object.keys(object.entries), i = 0; i < keys.length; ++i) {
                    if (typeof object.entries[keys[i]] !== "object")
                        throw TypeError(".esf.TypeIDs.entries: object expected");
                    message.entries[keys[i]] = $root.esf.TypeIDs.TypeID.fromObject(object.entries[keys[i]]);
                }
            }
            return message;
        };

        TypeIDs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.entries = {};
            let keys2;
            if (message.entries && (keys2 = Object.keys(message.entries)).length) {
                object.entries = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.entries[keys2[j]] = $root.esf.TypeIDs.TypeID.toObject(message.entries[keys2[j]], options);
            }
            return object;
        };

        TypeIDs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TypeIDs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/esf.TypeIDs";
        };

        TypeIDs.TypeID = (function() {

            function TypeID(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            TypeID.prototype.name = "";
            TypeID.prototype.groupID = 0;
            TypeID.prototype.categoryID = 0;
            TypeID.prototype.published = false;
            TypeID.prototype.marketGroupID = 0;
            TypeID.prototype.capacity = 0;
            TypeID.prototype.mass = 0;
            TypeID.prototype.radius = 0;
            TypeID.prototype.volume = 0;

            TypeID.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.TypeIDs.TypeID();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.groupID = reader.int32();
                            break;
                        }
                    case 3: {
                            message.categoryID = reader.int32();
                            break;
                        }
                    case 4: {
                            message.published = reader.bool();
                            break;
                        }
                    case 5: {
                            message.marketGroupID = reader.int32();
                            break;
                        }
                    case 6: {
                            message.capacity = reader.float();
                            break;
                        }
                    case 7: {
                            message.mass = reader.float();
                            break;
                        }
                    case 8: {
                            message.radius = reader.float();
                            break;
                        }
                    case 9: {
                            message.volume = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("groupID"))
                    throw $util.ProtocolError("missing required 'groupID'", { instance: message });
                if (!message.hasOwnProperty("categoryID"))
                    throw $util.ProtocolError("missing required 'categoryID'", { instance: message });
                if (!message.hasOwnProperty("published"))
                    throw $util.ProtocolError("missing required 'published'", { instance: message });
                return message;
            };

            TypeID.fromObject = function fromObject(object) {
                if (object instanceof $root.esf.TypeIDs.TypeID)
                    return object;
                let message = new $root.esf.TypeIDs.TypeID();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.groupID != null)
                    message.groupID = object.groupID | 0;
                if (object.categoryID != null)
                    message.categoryID = object.categoryID | 0;
                if (object.published != null)
                    message.published = Boolean(object.published);
                if (object.marketGroupID != null)
                    message.marketGroupID = object.marketGroupID | 0;
                if (object.capacity != null)
                    message.capacity = Number(object.capacity);
                if (object.mass != null)
                    message.mass = Number(object.mass);
                if (object.radius != null)
                    message.radius = Number(object.radius);
                if (object.volume != null)
                    message.volume = Number(object.volume);
                return message;
            };

            TypeID.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.groupID = 0;
                    object.categoryID = 0;
                    object.published = false;
                    object.marketGroupID = 0;
                    object.capacity = 0;
                    object.mass = 0;
                    object.radius = 0;
                    object.volume = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.groupID != null && message.hasOwnProperty("groupID"))
                    object.groupID = message.groupID;
                if (message.categoryID != null && message.hasOwnProperty("categoryID"))
                    object.categoryID = message.categoryID;
                if (message.published != null && message.hasOwnProperty("published"))
                    object.published = message.published;
                if (message.marketGroupID != null && message.hasOwnProperty("marketGroupID"))
                    object.marketGroupID = message.marketGroupID;
                if (message.capacity != null && message.hasOwnProperty("capacity"))
                    object.capacity = options.json && !isFinite(message.capacity) ? String(message.capacity) : message.capacity;
                if (message.mass != null && message.hasOwnProperty("mass"))
                    object.mass = options.json && !isFinite(message.mass) ? String(message.mass) : message.mass;
                if (message.radius != null && message.hasOwnProperty("radius"))
                    object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
                if (message.volume != null && message.hasOwnProperty("volume"))
                    object.volume = options.json && !isFinite(message.volume) ? String(message.volume) : message.volume;
                return object;
            };

            TypeID.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            TypeID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/esf.TypeIDs.TypeID";
            };

            return TypeID;
        })();

        return TypeIDs;
    })();

    esf.DogmaAttributes = (function() {

        function DogmaAttributes(properties) {
            this.entries = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        DogmaAttributes.prototype.entries = $util.emptyObject;

        DogmaAttributes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.DogmaAttributes(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.entries === $util.emptyObject)
                            message.entries = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.esf.DogmaAttributes.DogmaAttribute.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.entries[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        DogmaAttributes.fromObject = function fromObject(object) {
            if (object instanceof $root.esf.DogmaAttributes)
                return object;
            let message = new $root.esf.DogmaAttributes();
            if (object.entries) {
                if (typeof object.entries !== "object")
                    throw TypeError(".esf.DogmaAttributes.entries: object expected");
                message.entries = {};
                for (let keys = Object.keys(object.entries), i = 0; i < keys.length; ++i) {
                    if (typeof object.entries[keys[i]] !== "object")
                        throw TypeError(".esf.DogmaAttributes.entries: object expected");
                    message.entries[keys[i]] = $root.esf.DogmaAttributes.DogmaAttribute.fromObject(object.entries[keys[i]]);
                }
            }
            return message;
        };

        DogmaAttributes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.entries = {};
            let keys2;
            if (message.entries && (keys2 = Object.keys(message.entries)).length) {
                object.entries = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.entries[keys2[j]] = $root.esf.DogmaAttributes.DogmaAttribute.toObject(message.entries[keys2[j]], options);
            }
            return object;
        };

        DogmaAttributes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DogmaAttributes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/esf.DogmaAttributes";
        };

        DogmaAttributes.DogmaAttribute = (function() {

            function DogmaAttribute(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            DogmaAttribute.prototype.name = "";
            DogmaAttribute.prototype.published = false;
            DogmaAttribute.prototype.defaultValue = 0;
            DogmaAttribute.prototype.highIsGood = false;
            DogmaAttribute.prototype.stackable = false;

            DogmaAttribute.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.DogmaAttributes.DogmaAttribute();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.published = reader.bool();
                            break;
                        }
                    case 3: {
                            message.defaultValue = reader.float();
                            break;
                        }
                    case 4: {
                            message.highIsGood = reader.bool();
                            break;
                        }
                    case 5: {
                            message.stackable = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("published"))
                    throw $util.ProtocolError("missing required 'published'", { instance: message });
                if (!message.hasOwnProperty("defaultValue"))
                    throw $util.ProtocolError("missing required 'defaultValue'", { instance: message });
                if (!message.hasOwnProperty("highIsGood"))
                    throw $util.ProtocolError("missing required 'highIsGood'", { instance: message });
                if (!message.hasOwnProperty("stackable"))
                    throw $util.ProtocolError("missing required 'stackable'", { instance: message });
                return message;
            };

            DogmaAttribute.fromObject = function fromObject(object) {
                if (object instanceof $root.esf.DogmaAttributes.DogmaAttribute)
                    return object;
                let message = new $root.esf.DogmaAttributes.DogmaAttribute();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.published != null)
                    message.published = Boolean(object.published);
                if (object.defaultValue != null)
                    message.defaultValue = Number(object.defaultValue);
                if (object.highIsGood != null)
                    message.highIsGood = Boolean(object.highIsGood);
                if (object.stackable != null)
                    message.stackable = Boolean(object.stackable);
                return message;
            };

            DogmaAttribute.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.published = false;
                    object.defaultValue = 0;
                    object.highIsGood = false;
                    object.stackable = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.published != null && message.hasOwnProperty("published"))
                    object.published = message.published;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = options.json && !isFinite(message.defaultValue) ? String(message.defaultValue) : message.defaultValue;
                if (message.highIsGood != null && message.hasOwnProperty("highIsGood"))
                    object.highIsGood = message.highIsGood;
                if (message.stackable != null && message.hasOwnProperty("stackable"))
                    object.stackable = message.stackable;
                return object;
            };

            DogmaAttribute.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DogmaAttribute.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/esf.DogmaAttributes.DogmaAttribute";
            };

            return DogmaAttribute;
        })();

        return DogmaAttributes;
    })();

    esf.DogmaEffects = (function() {

        function DogmaEffects(properties) {
            this.entries = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        DogmaEffects.prototype.entries = $util.emptyObject;

        DogmaEffects.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.DogmaEffects(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.entries === $util.emptyObject)
                            message.entries = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.esf.DogmaEffects.DogmaEffect.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.entries[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        DogmaEffects.fromObject = function fromObject(object) {
            if (object instanceof $root.esf.DogmaEffects)
                return object;
            let message = new $root.esf.DogmaEffects();
            if (object.entries) {
                if (typeof object.entries !== "object")
                    throw TypeError(".esf.DogmaEffects.entries: object expected");
                message.entries = {};
                for (let keys = Object.keys(object.entries), i = 0; i < keys.length; ++i) {
                    if (typeof object.entries[keys[i]] !== "object")
                        throw TypeError(".esf.DogmaEffects.entries: object expected");
                    message.entries[keys[i]] = $root.esf.DogmaEffects.DogmaEffect.fromObject(object.entries[keys[i]]);
                }
            }
            return message;
        };

        DogmaEffects.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.entries = {};
            let keys2;
            if (message.entries && (keys2 = Object.keys(message.entries)).length) {
                object.entries = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.entries[keys2[j]] = $root.esf.DogmaEffects.DogmaEffect.toObject(message.entries[keys2[j]], options);
            }
            return object;
        };

        DogmaEffects.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DogmaEffects.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/esf.DogmaEffects";
        };

        DogmaEffects.DogmaEffect = (function() {

            function DogmaEffect(properties) {
                this.modifierInfo = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            DogmaEffect.prototype.name = "";
            DogmaEffect.prototype.effectCategory = 0;
            DogmaEffect.prototype.electronicChance = false;
            DogmaEffect.prototype.isAssistance = false;
            DogmaEffect.prototype.isOffensive = false;
            DogmaEffect.prototype.isWarpSafe = false;
            DogmaEffect.prototype.propulsionChance = false;
            DogmaEffect.prototype.rangeChance = false;
            DogmaEffect.prototype.dischargeAttributeID = 0;
            DogmaEffect.prototype.durationAttributeID = 0;
            DogmaEffect.prototype.rangeAttributeID = 0;
            DogmaEffect.prototype.falloffAttributeID = 0;
            DogmaEffect.prototype.trackingSpeedAttributeID = 0;
            DogmaEffect.prototype.fittingUsageChanceAttributeID = 0;
            DogmaEffect.prototype.resistanceAttributeID = 0;
            DogmaEffect.prototype.modifierInfo = $util.emptyArray;

            DogmaEffect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.DogmaEffects.DogmaEffect();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.effectCategory = reader.int32();
                            break;
                        }
                    case 3: {
                            message.electronicChance = reader.bool();
                            break;
                        }
                    case 4: {
                            message.isAssistance = reader.bool();
                            break;
                        }
                    case 5: {
                            message.isOffensive = reader.bool();
                            break;
                        }
                    case 6: {
                            message.isWarpSafe = reader.bool();
                            break;
                        }
                    case 7: {
                            message.propulsionChance = reader.bool();
                            break;
                        }
                    case 8: {
                            message.rangeChance = reader.bool();
                            break;
                        }
                    case 9: {
                            message.dischargeAttributeID = reader.int32();
                            break;
                        }
                    case 10: {
                            message.durationAttributeID = reader.int32();
                            break;
                        }
                    case 11: {
                            message.rangeAttributeID = reader.int32();
                            break;
                        }
                    case 12: {
                            message.falloffAttributeID = reader.int32();
                            break;
                        }
                    case 13: {
                            message.trackingSpeedAttributeID = reader.int32();
                            break;
                        }
                    case 14: {
                            message.fittingUsageChanceAttributeID = reader.int32();
                            break;
                        }
                    case 15: {
                            message.resistanceAttributeID = reader.int32();
                            break;
                        }
                    case 16: {
                            if (!(message.modifierInfo && message.modifierInfo.length))
                                message.modifierInfo = [];
                            message.modifierInfo.push($root.esf.DogmaEffects.DogmaEffect.ModifierInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("effectCategory"))
                    throw $util.ProtocolError("missing required 'effectCategory'", { instance: message });
                if (!message.hasOwnProperty("electronicChance"))
                    throw $util.ProtocolError("missing required 'electronicChance'", { instance: message });
                if (!message.hasOwnProperty("isAssistance"))
                    throw $util.ProtocolError("missing required 'isAssistance'", { instance: message });
                if (!message.hasOwnProperty("isOffensive"))
                    throw $util.ProtocolError("missing required 'isOffensive'", { instance: message });
                if (!message.hasOwnProperty("isWarpSafe"))
                    throw $util.ProtocolError("missing required 'isWarpSafe'", { instance: message });
                if (!message.hasOwnProperty("propulsionChance"))
                    throw $util.ProtocolError("missing required 'propulsionChance'", { instance: message });
                if (!message.hasOwnProperty("rangeChance"))
                    throw $util.ProtocolError("missing required 'rangeChance'", { instance: message });
                return message;
            };

            DogmaEffect.fromObject = function fromObject(object) {
                if (object instanceof $root.esf.DogmaEffects.DogmaEffect)
                    return object;
                let message = new $root.esf.DogmaEffects.DogmaEffect();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.effectCategory != null)
                    message.effectCategory = object.effectCategory | 0;
                if (object.electronicChance != null)
                    message.electronicChance = Boolean(object.electronicChance);
                if (object.isAssistance != null)
                    message.isAssistance = Boolean(object.isAssistance);
                if (object.isOffensive != null)
                    message.isOffensive = Boolean(object.isOffensive);
                if (object.isWarpSafe != null)
                    message.isWarpSafe = Boolean(object.isWarpSafe);
                if (object.propulsionChance != null)
                    message.propulsionChance = Boolean(object.propulsionChance);
                if (object.rangeChance != null)
                    message.rangeChance = Boolean(object.rangeChance);
                if (object.dischargeAttributeID != null)
                    message.dischargeAttributeID = object.dischargeAttributeID | 0;
                if (object.durationAttributeID != null)
                    message.durationAttributeID = object.durationAttributeID | 0;
                if (object.rangeAttributeID != null)
                    message.rangeAttributeID = object.rangeAttributeID | 0;
                if (object.falloffAttributeID != null)
                    message.falloffAttributeID = object.falloffAttributeID | 0;
                if (object.trackingSpeedAttributeID != null)
                    message.trackingSpeedAttributeID = object.trackingSpeedAttributeID | 0;
                if (object.fittingUsageChanceAttributeID != null)
                    message.fittingUsageChanceAttributeID = object.fittingUsageChanceAttributeID | 0;
                if (object.resistanceAttributeID != null)
                    message.resistanceAttributeID = object.resistanceAttributeID | 0;
                if (object.modifierInfo) {
                    if (!Array.isArray(object.modifierInfo))
                        throw TypeError(".esf.DogmaEffects.DogmaEffect.modifierInfo: array expected");
                    message.modifierInfo = [];
                    for (let i = 0; i < object.modifierInfo.length; ++i) {
                        if (typeof object.modifierInfo[i] !== "object")
                            throw TypeError(".esf.DogmaEffects.DogmaEffect.modifierInfo: object expected");
                        message.modifierInfo[i] = $root.esf.DogmaEffects.DogmaEffect.ModifierInfo.fromObject(object.modifierInfo[i]);
                    }
                }
                return message;
            };

            DogmaEffect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.modifierInfo = [];
                if (options.defaults) {
                    object.name = "";
                    object.effectCategory = 0;
                    object.electronicChance = false;
                    object.isAssistance = false;
                    object.isOffensive = false;
                    object.isWarpSafe = false;
                    object.propulsionChance = false;
                    object.rangeChance = false;
                    object.dischargeAttributeID = 0;
                    object.durationAttributeID = 0;
                    object.rangeAttributeID = 0;
                    object.falloffAttributeID = 0;
                    object.trackingSpeedAttributeID = 0;
                    object.fittingUsageChanceAttributeID = 0;
                    object.resistanceAttributeID = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.effectCategory != null && message.hasOwnProperty("effectCategory"))
                    object.effectCategory = message.effectCategory;
                if (message.electronicChance != null && message.hasOwnProperty("electronicChance"))
                    object.electronicChance = message.electronicChance;
                if (message.isAssistance != null && message.hasOwnProperty("isAssistance"))
                    object.isAssistance = message.isAssistance;
                if (message.isOffensive != null && message.hasOwnProperty("isOffensive"))
                    object.isOffensive = message.isOffensive;
                if (message.isWarpSafe != null && message.hasOwnProperty("isWarpSafe"))
                    object.isWarpSafe = message.isWarpSafe;
                if (message.propulsionChance != null && message.hasOwnProperty("propulsionChance"))
                    object.propulsionChance = message.propulsionChance;
                if (message.rangeChance != null && message.hasOwnProperty("rangeChance"))
                    object.rangeChance = message.rangeChance;
                if (message.dischargeAttributeID != null && message.hasOwnProperty("dischargeAttributeID"))
                    object.dischargeAttributeID = message.dischargeAttributeID;
                if (message.durationAttributeID != null && message.hasOwnProperty("durationAttributeID"))
                    object.durationAttributeID = message.durationAttributeID;
                if (message.rangeAttributeID != null && message.hasOwnProperty("rangeAttributeID"))
                    object.rangeAttributeID = message.rangeAttributeID;
                if (message.falloffAttributeID != null && message.hasOwnProperty("falloffAttributeID"))
                    object.falloffAttributeID = message.falloffAttributeID;
                if (message.trackingSpeedAttributeID != null && message.hasOwnProperty("trackingSpeedAttributeID"))
                    object.trackingSpeedAttributeID = message.trackingSpeedAttributeID;
                if (message.fittingUsageChanceAttributeID != null && message.hasOwnProperty("fittingUsageChanceAttributeID"))
                    object.fittingUsageChanceAttributeID = message.fittingUsageChanceAttributeID;
                if (message.resistanceAttributeID != null && message.hasOwnProperty("resistanceAttributeID"))
                    object.resistanceAttributeID = message.resistanceAttributeID;
                if (message.modifierInfo && message.modifierInfo.length) {
                    object.modifierInfo = [];
                    for (let j = 0; j < message.modifierInfo.length; ++j)
                        object.modifierInfo[j] = $root.esf.DogmaEffects.DogmaEffect.ModifierInfo.toObject(message.modifierInfo[j], options);
                }
                return object;
            };

            DogmaEffect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DogmaEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/esf.DogmaEffects.DogmaEffect";
            };

            DogmaEffect.ModifierInfo = (function() {

                function ModifierInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ModifierInfo.prototype.domain = "";
                ModifierInfo.prototype.func = "";
                ModifierInfo.prototype.modifiedAttributeID = 0;
                ModifierInfo.prototype.modifyingAttributeID = 0;
                ModifierInfo.prototype.operation = 0;
                ModifierInfo.prototype.groupID = 0;
                ModifierInfo.prototype.skillTypeID = 0;

                ModifierInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.esf.DogmaEffects.DogmaEffect.ModifierInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.domain = reader.string();
                                break;
                            }
                        case 2: {
                                message.func = reader.string();
                                break;
                            }
                        case 3: {
                                message.modifiedAttributeID = reader.int32();
                                break;
                            }
                        case 4: {
                                message.modifyingAttributeID = reader.int32();
                                break;
                            }
                        case 5: {
                                message.operation = reader.int32();
                                break;
                            }
                        case 6: {
                                message.groupID = reader.int32();
                                break;
                            }
                        case 7: {
                                message.skillTypeID = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("domain"))
                        throw $util.ProtocolError("missing required 'domain'", { instance: message });
                    if (!message.hasOwnProperty("func"))
                        throw $util.ProtocolError("missing required 'func'", { instance: message });
                    return message;
                };

                ModifierInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.esf.DogmaEffects.DogmaEffect.ModifierInfo)
                        return object;
                    let message = new $root.esf.DogmaEffects.DogmaEffect.ModifierInfo();
                    if (object.domain != null)
                        message.domain = String(object.domain);
                    if (object.func != null)
                        message.func = String(object.func);
                    if (object.modifiedAttributeID != null)
                        message.modifiedAttributeID = object.modifiedAttributeID | 0;
                    if (object.modifyingAttributeID != null)
                        message.modifyingAttributeID = object.modifyingAttributeID | 0;
                    if (object.operation != null)
                        message.operation = object.operation | 0;
                    if (object.groupID != null)
                        message.groupID = object.groupID | 0;
                    if (object.skillTypeID != null)
                        message.skillTypeID = object.skillTypeID | 0;
                    return message;
                };

                ModifierInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.domain = "";
                        object.func = "";
                        object.modifiedAttributeID = 0;
                        object.modifyingAttributeID = 0;
                        object.operation = 0;
                        object.groupID = 0;
                        object.skillTypeID = 0;
                    }
                    if (message.domain != null && message.hasOwnProperty("domain"))
                        object.domain = message.domain;
                    if (message.func != null && message.hasOwnProperty("func"))
                        object.func = message.func;
                    if (message.modifiedAttributeID != null && message.hasOwnProperty("modifiedAttributeID"))
                        object.modifiedAttributeID = message.modifiedAttributeID;
                    if (message.modifyingAttributeID != null && message.hasOwnProperty("modifyingAttributeID"))
                        object.modifyingAttributeID = message.modifyingAttributeID;
                    if (message.operation != null && message.hasOwnProperty("operation"))
                        object.operation = message.operation;
                    if (message.groupID != null && message.hasOwnProperty("groupID"))
                        object.groupID = message.groupID;
                    if (message.skillTypeID != null && message.hasOwnProperty("skillTypeID"))
                        object.skillTypeID = message.skillTypeID;
                    return object;
                };

                ModifierInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ModifierInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/esf.DogmaEffects.DogmaEffect.ModifierInfo";
                };

                return ModifierInfo;
            })();

            return DogmaEffect;
        })();

        return DogmaEffects;
    })();

    return esf;
})();

export { $root as default };
