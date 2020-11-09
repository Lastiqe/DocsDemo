import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MainView from './MainView'
import { editInventoryItemThunk, deleteInventoryItemThunk, addInventoryItemThunk }from '../../redux/firebaseDataReducer'
import { AppStateType } from '../../redux/store'
import { TInventory, TPlacesFlat, TPlacesTree} from '../../redux/types'


type TMapState = {
    inventory: TInventory[]
    selectedPlace: TPlacesTree
    placesFlat: TPlacesFlat[]
    isPending: boolean
}
type TMapDispatch = {
    editInventoryItemThunk: (id: string, name: string, count: string, placePath: string) => void
    deleteInventoryItemThunk: (id: string, placesFlat: TPlacesFlat[]) => void
    addInventoryItemThunk: (name: string, placeId: string, count: string, placesFlat: TPlacesFlat[]) => void
}
type TProps = TMapState & TMapDispatch


const MainViewContainer: React.FC<TProps> = (props) => {
    const [currentInventory, setCurrentInventory] = useState<Array<TInventory>>([])

    useEffect(() => {
        setCurrentInventory((): TInventory[] => {
            const currentPlaceInventory: TInventory[] = []
            props.inventory.map((invItem) => {
                if (props.selectedPlace.parts) {
                    deepChildsSearch(props.selectedPlace.parts)
                        .map((item) => {
                            if (item.id === invItem.placeId) {
                                currentPlaceInventory.push(invItem)
                            }
                        })
                } else if (invItem.placeId === props.selectedPlace.id) {
                    currentPlaceInventory.push(invItem)
                }
            })
            
            return currentPlaceInventory
        })
        
    }, [props.selectedPlace, props.inventory])

    const deepChildsSearch = useCallback(
        (arr: TPlacesTree[], nodeChildsArr: TPlacesTree[] = []) => {
            arr.map((item) => {
                if (!item.parts) {
                    nodeChildsArr.push(item)
                }
                if (item.parts) {
                    deepChildsSearch(item.parts, nodeChildsArr)
                }
            })
            return nodeChildsArr
        }, [])

    return (
        <MainView inventory={currentInventory}
            selectedPlace={props.selectedPlace}
            isPending={props.isPending}
            placesFlat={props.placesFlat}
            editInventoryItem={props.editInventoryItemThunk}
            deleteInventoryItem={props.deleteInventoryItemThunk}
            addInventoryItem={props.addInventoryItemThunk}
        />
        
        
    )
}
function mapState(state: AppStateType): TMapState {
    
    return ({
        inventory: state.fireBase.inventory,
        selectedPlace: state.fireBase.selectedPlace,
        placesFlat: state.fireBase.placesFlat,
        isPending: state.fireBase.isPending,
    })
}

export default connect<TMapState, TMapDispatch, {}, AppStateType>(mapState, { editInventoryItemThunk, deleteInventoryItemThunk, addInventoryItemThunk })(MainViewContainer)