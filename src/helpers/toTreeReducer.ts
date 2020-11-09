import { cloneDeep } from 'lodash'
import { TPlacesFilled, TPlacesTree } from '../redux/types'

export function toTreeArrReducer(arr: TPlacesFilled[]): TPlacesTree[] {
    const sourceNode = cloneDeep(arr)
    const treeArr = sourceNode.filter((item) => !item.parent) as TPlacesTree[]
    
    arrSplice(treeArr)

    function arrSplice(arr: TPlacesTree[]) {
        arr.map((item) => {
            if (item.parts) {
                item.parts?.map((partId, index) => {
                    if (typeof partId === 'string') {
                        sourceNode.map((sourceItem: any) => {
                            if (sourceItem.id === partId && sourceItem ) {
                                item.parts?.splice(index, 1, sourceItem)
                            }
                        })
                        if(item.parts)
                        arrSplice(item.parts)
                    }
                })
            } else {
                return
            }
        })
    }
    return treeArr 
}