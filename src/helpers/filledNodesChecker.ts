import { cloneDeep } from "lodash"
import { TInventory, TPlacesFilled } from "../redux/types"

export default function filledNodesChecker(placesArr: TPlacesFilled[], inventoryArr: TInventory[], path?: string[]) {

    const modifiedArr = cloneDeep(placesArr)
    const tempArr: TPlacesFilled[] = []

    modifiedArr.map((item) => {
        if (!item.parts) {
            inventoryArr.map((invItem) => {
                if (invItem.placeId === item.id && !item.isFilled) {
                    item.isFilled = true
                    tempArr.push(item)
                }
            })
        }
    })
    tempArr.map((item) => {
        item.path?.map((pathId) => {
            modifiedArr.map((item) => {
                if (item.id === pathId && !item.isFilled) {
                    item.isFilled = true
                    return item
                }
            })
        })
    })
    
    return modifiedArr
}

