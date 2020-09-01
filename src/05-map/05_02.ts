import {GovernmentBuildingType, HouseType} from "../02_02/02_02";

export const getStreetsOfGovBuildings =
    (buildings: Array<GovernmentBuildingType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitles =
    (houses: Array<HouseType>) => {
        return houses.map(b => b.address.street.title)
    }

export function createMessages(houses: Array<HouseType>) {
    let callbackfn = (h: HouseType) => {
        return
        `Hello from ${h.address.street.title}`
    }
    let newArray = houses.map(callbackfn);
    return newArray

}
