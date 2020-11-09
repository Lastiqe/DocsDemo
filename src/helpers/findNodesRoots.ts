import { cloneDeep } from 'lodash'
import { TPlacesFlat, TPlacesRaw } from '../redux/types'
import pathCreator from "./pathCreator"

export default function findNodesRoots(arr: TPlacesRaw[]): TPlacesFlat[] {
    const arrCopy = cloneDeep(arr) as TPlacesFlat[]

    arrCopy.filter((item) => item.parts).map((item) => {
        function partsChecker(item: TPlacesFlat) {
            item.parts?.map((part) => {
                setParent(item.id, part)
            })
        }
        partsChecker(item)
    })

    function setParent(parent: string, itemId: string) {
        arrCopy.map((item) => {
            if (item.id === itemId) {
                item.parent = parent
            }
        })
    }

    arrCopy.map((item) => {
        item.path = pathCreator(arrCopy, item.id)
    })
    
    return arrCopy 
}
