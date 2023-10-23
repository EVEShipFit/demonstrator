# Protobuf definition for EVE Ship Fit (ESF)

In this folder is a tool (`convert.py`), which converts the YAML files from the SDE into Protobuf (v2) binary files.

In `esf.proto` is the Protobuf definition.
This is exported to Python and Javascript with the following commands:

```bash
protoc --python_out=. protobuf/esf.proto
web/node_modules/.bin/pbjs -t static-module -w es6 -o web/esf_pb2.js protobuf/esf.proto --no-create --no-encode --no-verify --no-convert --no-delimited --no-typeurl --no-beautify --no-comments --no-service
```
