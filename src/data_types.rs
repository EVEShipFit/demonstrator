use serde::Deserialize;

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct TypeId {
    pub capacity: Option<f32>,
    pub groupID: i32,
    pub categoryID: i32,
    pub marketGroupID: Option<i32>,
    pub mass: Option<f32>,
    pub metaGroupID: Option<i32>,
    pub name: String,
    pub portionSize: Option<i32>,
    pub radius: Option<f32>,
    pub volume: Option<f32>,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct TypeDogmaAttribute {
    pub attributeID: i32,
    pub value: f32,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct TypeDogmaEffect {
    pub effectID: i32,
    pub isDefault: bool,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct TypeDogma {
    pub dogmaAttributes: Vec<TypeDogmaAttribute>,
    pub dogmaEffects: Vec<TypeDogmaEffect>,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct DogmaAttribute {
    pub dataType: i32,
    pub defaultValue: f32,
    pub highIsGood: bool,
    pub stackable: bool,
    pub unitID: Option<i32>,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct DogmaEffectModifierInfo {
    pub domain: String,
    pub func: String,
    pub modifiedAttributeID: Option<i32>,
    pub modifyingAttributeID: Option<i32>,
    pub operation: Option<i32>,
    pub groupID: Option<i32>,
    pub skillTypeID: Option<i32>,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct DogmaEffect {
    pub dischargeAttributeID: Option<i32>,
    pub durationAttributeID: Option<i32>,
    pub effectCategory: i32,
    pub electronicChance: bool,
    pub isAssistance: bool,
    pub isOffensive: bool,
    pub isWarpSafe: bool,
    pub propulsionChance: bool,
    pub rangeChance: bool,
    pub rangeAttributeID: Option<i32>,
    pub falloffAttributeID: Option<i32>,
    pub trackingSpeedAttributeID: Option<i32>,
    pub fittingUsageChanceAttributeID: Option<i32>,
    pub resistanceAttributeID: Option<i32>,
    pub modifierInfo: Option<Vec<DogmaEffectModifierInfo>>,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Debug)]
pub struct ShipLayout {
    pub ship_id: i32,
    pub items: Vec<i32>,
}
