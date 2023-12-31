use super::item::Attribute;
use super::{Info, Pass, Ship};

pub struct PassFour {}

fn add_attribute(ship: &mut Ship, attribute_id: i32, base_value: f32, value: f32) {
    let mut attribute = Attribute::new(base_value);
    attribute.value = Some(value);
    ship.hull.attributes.insert(attribute_id, attribute);
}

fn calculate_align_time(ship: &mut Ship) -> (f32, f32) {
    /* Align-time is based on agility (70) and mass (4). */

    let base_agility = ship.hull.attributes.get(&70).unwrap().base_value;
    let base_mass = ship.hull.attributes.get(&4).unwrap().base_value;
    let base_align_time = -(0.25 as f32).ln() * base_agility * base_mass / 1000000.0;

    let agility = ship.hull.attributes.get(&70).unwrap().value.unwrap();
    let mass = ship.hull.attributes.get(&4).unwrap().value.unwrap();
    let align_time = -(0.25 as f32).ln() * agility * mass / 1000000.0;

    (base_align_time, align_time)
}

fn add_scan_strength(ship: &mut Ship) -> (f32, f32) {
    /* Scan Strength can be one of 4 values. */

    let mut base_scan_strength = 0.0;
    let mut scan_strength = 0.0;
    for attribute_id in vec![208, 209, 210, 211].iter() {
        if ship.hull.attributes.contains_key(attribute_id) && ship.hull.attributes.get(attribute_id).unwrap().base_value > base_scan_strength {
            base_scan_strength = ship.hull.attributes.get(attribute_id).unwrap().base_value;
        }

        if ship.hull.attributes.contains_key(attribute_id) && ship.hull.attributes.get(attribute_id).unwrap().value.unwrap() > scan_strength {
            scan_strength = ship.hull.attributes.get(attribute_id).unwrap().value.unwrap();
        }
    }

    (base_scan_strength, scan_strength)
}

fn add_cpu_usage(ship: &mut Ship) -> (f32, f32) {
    /* How much CPU is being used, which is adding up cpuOuput (50) from all items. */

    let mut cpu_usage = 0.0;
    for item in &ship.items {
        if item.attributes.contains_key(&50) {
            cpu_usage += item.attributes.get(&50).unwrap().value.unwrap();
        }
    }

    (0.0, cpu_usage)
}

fn add_pg_usage(ship: &mut Ship) -> (f32, f32) {
    /* How much PG is being used, which is adding up powerOutput (30) from all items. */

    let mut pg_usage = 0.0;
    for item in &ship.items {
        if item.attributes.contains_key(&30) {
            pg_usage += item.attributes.get(&30).unwrap().value.unwrap();
        }
    }

    (0.0, pg_usage)
}

/* Attributes don't contain all information displayed, so we calculate some fake attributes with those values. */
impl Pass for PassFour {
    fn pass(_info: &Info, ship: &mut Ship) {

        let align_time = calculate_align_time(ship);
        add_attribute(ship, -1, align_time.0, align_time.1);

        let scan_strength = add_scan_strength(ship);
        add_attribute(ship, -2, scan_strength.0, scan_strength.1);

        let cpu_usage = add_cpu_usage(ship);
        add_attribute(ship, -3, cpu_usage.0, cpu_usage.1);

        let pg_usage = add_pg_usage(ship);
        add_attribute(ship, -4, pg_usage.0, pg_usage.1);
    }
}
