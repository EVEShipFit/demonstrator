import * as wasm from "eveshipfit";

wasm.init();

for (let div of document.getElementsByClassName("slot")) {
    div.addEventListener("dblclick", function(event) {
        /* On double-click, remove the item from the fit. */
        for (let type of ["lowslot", "medslot", "hislot", "rig", "subsystem"]) {
            if (div.dataset[type] !== undefined) {
                current_fit[type][div.dataset[type] - 1] = undefined;
                recalculate();
                return;
            }
        }
    });
}

document.getElementById("hulls-filter").addEventListener("input", function(event) {
    rebuild_hulls_list();
});
document.getElementById("hardware-filter").addEventListener("input", function(event) {
    rebuild_hardware_list();
});

const categories = {
    "hulls": document.getElementById("hulls"),
    "hardware": document.getElementById("hardware"),
};
for (let child of document.getElementById("category").children) {
    child.addEventListener("click", function(event) {
        for (let child of document.getElementById("category").children) {
            child.classList.remove("selected");
        }

        event.currentTarget.classList.add("selected");

        for (let category in categories) {
            categories[category].style.display = "none";
        }
        categories[event.currentTarget.dataset.category].style.display = "block";
    });
}

const esi_fit = {"name": "C3 Ratter : NishEM", "ship_type_id": 29984, "description": "", "items": [{"flag": 125, "quantity": 1, "type_id": 45626}, {"flag": 126, "quantity": 1, "type_id": 45591}, {"flag": 127, "quantity": 1, "type_id": 45601}, {"flag": 128, "quantity": 1, "type_id": 45615}, {"flag": 11, "quantity": 1, "type_id": 22291}, {"flag": 12, "quantity": 1, "type_id": 22291}, {"flag": 13, "quantity": 1, "type_id": 22291}, {"flag": 19, "quantity": 1, "type_id": 41218}, {"flag": 20, "quantity": 1, "type_id": 35790}, {"flag": 21, "quantity": 1, "type_id": 2281}, {"flag": 22, "quantity": 1, "type_id": 15766}, {"flag": 23, "quantity": 1, "type_id": 19187}, {"flag": 24, "quantity": 1, "type_id": 19187}, {"flag": 25, "quantity": 1, "type_id": 35790}, {"flag": 27, "quantity": 1, "type_id": 25715}, {"flag": 28, "quantity": 1, "type_id": 25715}, {"flag": 29, "quantity": 1, "type_id": 25715}, {"flag": 30, "quantity": 1, "type_id": 25715}, {"flag": 31, "quantity": 1, "type_id": 25715}, {"flag": 32, "quantity": 1, "type_id": 25715}, {"flag": 33, "quantity": 1, "type_id": 28756}, {"flag": 92, "quantity": 1, "type_id": 31724}, {"flag": 93, "quantity": 1, "type_id": 31824}, {"flag": 94, "quantity": 1, "type_id": 31378}, {"flag": 5, "quantity": 3720, "type_id": 24492}, {"flag": 5, "quantity": 5472, "type_id": 2679}, {"flag": 5, "quantity": 1, "type_id": 35795}, {"flag": 5, "quantity": 1, "type_id": 35794}, {"flag": 5, "quantity": 8, "type_id": 30486}, {"flag": 5, "quantity": 1, "type_id": 35794}, {"flag": 5, "quantity": 396, "type_id": 24492}]};

const esi_flag_mapping = {
    "cargo": 5,
    "drone_bay": 87,
    "ship_hangar": 90,
    "fleet_hangar": 155,
    "lowslot": [
        11, 12, 13, 14, 15, 16, 17, 18
    ],
    "medslot": [
        19, 20, 21, 22, 23, 24, 25, 26
    ],
    "hislot": [
        27, 28, 29, 30, 31, 32, 33, 34
    ],
    "rig": [
        92, 93, 94
    ],
    "subsystem": [
        125, 126, 127, 128
    ],
};

const dogma_effect_to_slots = {
    11: "lowslot",
    12: "hislot",
    13: "medslot",
    2663: "rig",
    3772: "subsystem",
};

let dogma_attributes = null;
let dogma_effects = null;
let group_ids = null;
let type_ids = null;
let type_dogma = null;
let attribute_mapping = {};
let skills = null;

let current_fit = convert_esi_fit(esi_fit);
fetch_datafiles();

window.get_dogma_attributes = function(type_id) {
    return type_dogma[type_id].dogmaAttributes;
}
window.get_dogma_attribute = function(attribute_id) {
    return dogma_attributes[attribute_id];
}
window.get_dogma_effects = function(type_id) {
    return type_dogma[type_id].dogmaEffects;
}
window.get_dogma_effect = function(effect_id) {
    return dogma_effects[effect_id];
}
window.get_type_id = function(type_id) {
    return type_ids[type_id];
}

async function fetch_datafiles() {
    let start = performance.now();

    let response = await fetch("static/typeDogma.json");
    type_dogma = await response.json();

    response = await fetch("static/groupIDs.json");
    group_ids = await response.json();

    response = await fetch("static/typeIDs.json");
    type_ids = await response.json();

    response = await fetch("static/dogmaEffects.json");
    dogma_effects = await response.json();

    response = await fetch("static/dogmaAttributes.json");
    dogma_attributes = await response.json();

    /* Add for all TypeIDs a CategoryID, to speed up lookups. */
    for (let type_id in type_ids) {
        type_ids[type_id].categoryID = group_ids[type_ids[type_id].groupID].categoryID;
    }

    /* We augment the dogma attributes with some extra attributes we calculate. */
    dogma_attributes[-1] = {
        "name": "alignTime",
        "high_is_good": false,
        "published": true,
    }
    dogma_attributes[-2] = {
        "name": "scanStrength",
        "high_is_good": true,
        "published": true,
    }
    dogma_attributes[-3] = {
        "name": "cpuUsage",
        "high_is_good": true,
        "published": true,
    }
    dogma_attributes[-4] = {
        "name": "powerUsage",
        "high_is_good": true,
        "published": true,
    }

    /* Create a reverse lookup table for dogma attributes. */
    for (let dogma_attribute in dogma_attributes) {
        attribute_mapping[dogma_attributes[dogma_attribute].name] = parseInt(dogma_attribute);
    }

    console.log("Datafiles loaded in ms:", performance.now() - start);

    skills = load_skills(5);
    recalculate();

    rebuild_hulls_list();
    rebuild_hardware_list();
}

function click_change_hull(e) {
    const type_id = e.currentTarget.dataset.type_id;

    current_fit = convert_esi_fit({"ship_type_id": parseInt(type_id), "items": []});

    recalculate();
}

function click_add_to_fit(e) {
    const type_id = e.currentTarget.dataset.type_id;

    /* Find out what type of module this is. */
    let slot_type = undefined;
    type_dogma[type_id].dogmaEffects.forEach(effect => {
        if (slot_type === undefined) {
            slot_type = dogma_effect_to_slots[effect.effectID];
        }
    });

    if (slot_type === undefined) return;

    /* Find the first empty slot and add the item there. */
    let slot = current_fit[slot_type];
    for (let index in slot) {
        if (slot[index] === undefined) {
            slot[index] = parseInt(type_id);
            break;
        }
    }

    recalculate();
}

function rebuild_hulls_list() {
    const item_list = document.getElementById("hulls-list");
    const item_filter = document.getElementById("hulls-filter");

    item_list.innerHTML = "";

    /* Create the list by applying the filter, and sort. */
    let filtered_type_ids = {};
    for (let type_id in type_ids) {
        /* Filter out non-published items. */
        if (!type_ids[type_id].published) continue;
        /* Filter out non-ships (6). */
        if (type_ids[type_id].categoryID != 6) continue;

        /* Filter out items that don't match the filter. */
        if (item_filter.value != "" && !type_ids[type_id].name.toLowerCase().includes(item_filter.value.toLowerCase())) continue;

        filtered_type_ids[type_id] = type_ids[type_id];
    }

    /* Sort the list by name. */
    const sorted_type_ids = Object.keys(filtered_type_ids).sort((a, b) => {
        return filtered_type_ids[a].name.localeCompare(filtered_type_ids[b].name);
    });

    console.log(filtered_type_ids, sorted_type_ids);

    for (let type_id of sorted_type_ids) {
        const item = document.createElement("li");
        item.dataset.type_id = type_id;
        item.innerHTML = "<img src=\"https://images.evetech.net/types/" + type_id + "/icon?size=32\" title=\"" + filtered_type_ids[type_id].name + "\" />" + filtered_type_ids[type_id].name;

        item.addEventListener("dblclick", click_change_hull);
        item_list.appendChild(item);
    }
}

function rebuild_hardware_list() {
    const item_list = document.getElementById("hardware-list");
    const item_filter = document.getElementById("hardware-filter");

    item_list.innerHTML = "";

    if (item_filter.value == "" || item_filter.value.length < 3) {
        item_list.innerHTML = "Enter a search term to input box to start searching.";
        return;
    }

    /* Create the list by applying the filter, and sort. */
    let filtered_type_ids = {};
    for (let type_id in type_ids) {
        /* Filter out non-published items. */
        if (!type_ids[type_id].published) continue;
        /* Filter out non-modules (7). */
        if (type_ids[type_id].categoryID != 7) continue;

        /* Filter out items that don't match the filter. */
        if (!type_ids[type_id].name.toLowerCase().includes(item_filter.value.toLowerCase())) continue;

        filtered_type_ids[type_id] = type_ids[type_id];
    }

    /* Sort the list by name. */
    const sorted_type_ids = Object.keys(filtered_type_ids).sort((a, b) => {
        return filtered_type_ids[a].name.localeCompare(filtered_type_ids[b].name);
    });

    for (let type_id of sorted_type_ids) {
        const item = document.createElement("li");
        item.dataset.type_id = type_id;
        item.innerHTML = "<img src=\"https://images.evetech.net/types/" + type_id + "/icon?size=32\" title=\"" + filtered_type_ids[type_id].name + "\" />" + filtered_type_ids[type_id].name;

        item.addEventListener("dblclick", click_add_to_fit);
        item_list.appendChild(item);
    }
}

function recalculate() {
    const calculation = calculate_ship(current_fit, skills);
    render_ship(calculation);
    print_debug_information(calculation);
}

function convert_esi_fit(esi_fit) {
    const fitting = {
        "ship_type_id": esi_fit.ship_type_id,
    };

    for (let type in esi_flag_mapping) {
        if (Array.isArray(esi_flag_mapping[type])) {
            fitting[type] = {};

            for (let index in esi_flag_mapping[type]) {
                let item = esi_fit.items.filter(item => item.flag == esi_flag_mapping[type][index])[0];
                if (item) {
                    fitting[type][index] = item.type_id;
                } else {
                    fitting[type][index] = undefined;
                }
            }
        } else {
            fitting[type] = esi_fit.items.filter(item => item.flag == esi_flag_mapping[type]);
        }
    }

    return fitting;
}

function calculate_ship(ship_fit, skills) {
    const calculator_fit = {
        ship_id: ship_fit.ship_type_id,
        items: [],
    };
    for (let slot in ship_fit) {
        if (slot != "lowslot" && slot != "medslot" && slot != "hislot" && slot != "rig" && slot != "subsystem") continue;

        for (let index in current_fit[slot]) {
            if (current_fit[slot][index] !== undefined) {
                calculator_fit.items.push(current_fit[slot][index]);
            }
        }
    }

    const start = performance.now();
    const result = wasm.calculate(calculator_fit, skills);
    console.log("Calculated in ms:", performance.now() - start);

    return result;
}

function load_skills(level) {
    let skills = {};

    for (let item_id in type_ids) {
        if (type_ids[item_id].categoryID != 16) continue;
        if (!type_ids[item_id].published) continue;

        skills[item_id] = level;
    }

    return skills;
}

function render_ship(calculation) {
    let slot_modifier = {
        "hiSlots": 0,
        "medSlots": 0,
        "lowSlots": 0,
    };

    for (let item of calculation.items) {
        slot_modifier["hiSlots"] += item.attributes.get(attribute_mapping["hiSlotModifier"])?.value || 0;
        slot_modifier["medSlots"] += item.attributes.get(attribute_mapping["medSlotModifier"])?.value || 0;
        slot_modifier["lowSlots"] += item.attributes.get(attribute_mapping["lowSlotModifier"])?.value || 0;
    }

    function render_slots(slot_type, atribute_name) {
        const slots = current_fit[slot_type];

        const slot_divs = document.querySelectorAll("[data-" + slot_type + "]");
        const maxSlots = (calculation.hull.attributes.get(attribute_mapping[atribute_name])?.value || 0) + (slot_modifier[atribute_name] || 0);
        for (let slot_div of slot_divs) {
            const type_id = slots[slot_div.dataset[slot_type] - 1];
            const slot_inner = slot_div.querySelector(".slot-inner");
            if (type_id) {
                slot_inner.innerHTML = "<img src=\"https://images.evetech.net/types/" + type_id + "/icon?size=64\" title=\"" + type_ids[type_id].name + "\" />";
            } else {
                slot_inner.innerHTML = "";
            }

            if (slot_div.dataset[slot_type] > maxSlots && type_id === undefined) {
                slot_div.style.display = "none";
            } else if (slot_div.dataset[slot_type] > maxSlots) {
                slot_div.style.display = "block";
                slot_div.style.opacity = 0.5;
                slot_inner.classList.add("invalid");
            } else {
                slot_div.style.display = "block";
                slot_inner.classList.remove("invalid");
            }
        }
    }

    render_slots("hislot", "hiSlots");
    render_slots("medslot", "medSlots");
    render_slots("lowslot", "lowSlots");
    render_slots("rig", "upgradeSlotsLeft");
    render_slots("subsystem", "maxSubSystems");

    document.getElementById("hull-inner").innerHTML = "<img src=\"https://images.evetech.net/types/" + current_fit.ship_type_id + "/render?size=512\" />";

    /* Check all span elements with a data-attribute on them, and replace it with the ships stats. */
    let spans = document.getElementsByTagName("span");
    for (let span of spans) {
        let attribute = span.dataset.attribute;
        if (attribute == null) continue;

        let value;
        let high_is_good;

        attribute = attribute_mapping[attribute];
        value = calculation.hull.attributes.get(attribute).value;
        high_is_good = dogma_attributes[attribute].high_is_good;

        if (span.dataset.resistance !== undefined) {
            value = 100 - value * 100;
            high_is_good = !high_is_good;
        }

        if (span.dataset.divide !== undefined) {
            value /= span.dataset.divide;
        }

        const k = Math.pow(10, span.dataset.fixed);

        if (k > 0) {
            if (high_is_good) {
                value -= 1 / k / 10;
                value = Math.ceil(value * k) / k;
            } else {
                value += 1 / k / 10;
                value = Math.floor(value * k) / k;
            }
        }

        span.innerHTML = value.toLocaleString("en", {
            minimumFractionDigits: span.dataset.fixed,
            maximumFractionDigits: span.dataset.fixed,
        });
    }
}

function print_debug_information(calculation) {
    let stats = "";

    function print_local_effects(effects) {
        stats += "Local effects: <ul>";
        for (let effect of effects) {
            stats += "<li>" + dogma_effects[effect].effectName + "</li>";
        }
        stats += "</ul>";
    }

    function print_attributes(attributes) {
        stats += "<table>";

        for (let [key, attribute] of attributes) {
            // Hide attributes CCP deemed not needed to see for us mere mortals.
            if (!dogma_attributes[key].published) continue;
            // Hide attributes that are on default value and have no effects applied.
            if (attribute.value == dogma_attributes[key].defaultValue && attribute.effects.length == 0) continue;

            let effects = "<ul>";
            for (let effect of attribute.effects) {
                effects += "<li>" + JSON.stringify(effect) + "</li>";
            }
            effects += "</ul>";

            stats += "<tr><td>" + key + ": " + dogma_attributes[key].name + "</td><td>" + attribute.base_value + "</td><td>" + attribute.value + "</td><td>" + effects + "</td></tr>";
        }

        stats += "</table>";
    }

    stats += "<h2>" + type_ids[calculation.hull.type_id].name + "</h2>";
    print_local_effects(calculation.hull.effects);
    print_attributes(calculation.hull.attributes);

    for (let item of calculation.items) {
        stats += "<h3>" + type_ids[item.type_id].name + "</h3>";
        print_local_effects(item.effects);
        print_attributes(item.attributes);
    }

    let ship_stats = document.getElementById("ship-stats");
    ship_stats.innerHTML = stats;
}
