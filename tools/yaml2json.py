import json
import sys
import yaml

with open(sys.argv[1]) as f:
    data = yaml.load(f, Loader=yaml.CSafeLoader)

for entry in data.values():
    for deletable in ("description", "effectID", "attributeID"):
        if deletable in entry:
            del entry[deletable]

    for translation in ("displayNameID", "name", "tooltipTitleID", "tooltipDescriptionID"):
        if translation in entry and type(entry[translation]) == dict:
            entry[translation] = entry[translation]["en"]

    if "traits" in entry:
        if "miscBonuses" in entry["traits"]:
            for trait in entry["traits"]["miscBonuses"]:
                trait["bonusText"] = trait["bonusText"]["en"]

        if "roleBonuses" in entry["traits"]:
            for trait in entry["traits"]["roleBonuses"]:
                trait["bonusText"] = trait["bonusText"]["en"]

        if "types" in entry["traits"]:
            for types in entry["traits"]["types"].values():
                for trait in types:
                    trait["bonusText"] = trait["bonusText"]["en"]

print(json.dumps(data))
