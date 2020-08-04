import {GovernmentBuildingType, HouseType} from "../02_02/02_02";

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStation(building: GovernmentBuildingType, staffCountTofire: number) {
building.staffCount -= staffCountTofire;
}

export function toHireStation(building: GovernmentBuildingType, staffCountTohire: number) {
building.staffCount += staffCountTohire;
}