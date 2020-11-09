import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'
import { getPlaces, getInventory, deleteInventory, addInventory, editInventory} from '../firebase/firebaseApi'
import filledNodesChecker from '../helpers/filledNodesChecker'
import findNodesRoots from '../helpers/findNodesRoots'
import { toTreeArrReducer} from '../helpers/toTreeReducer'
import { AppStateType } from './store'
import { TActionTypes, TInventory, ISetInventoryDataAction, TPlacesTree, TPlacesFlat, ISetPendingStatusAction, ISetPlacesDataAction, ISetPlacesFlattenDataAction, ISetSelectedPlaceAction } from './types'

export const SET_INVENTORY_DATA = 'SET_INVENTORY_DATA'
export const SET_PLACES_TREE_DATA = 'SET_PLACES_TREE_DATA'
export const SET_PLACES_FLATTEN_DATA = 'SET_PLACES_FLATTEN_DATA'
export const SET_SELECTED_PLACE = 'SET_SELECTED_PLACE'
export const SET_PENDING_STATUS = 'SET_PENDING_STATUS'

const initialState = {
    placesTree: [] as TPlacesTree[],
    placesFlat: [] as TPlacesFlat[],
    inventory: [] as TInventory[],
    selectedPlace: {} as TPlacesTree,
    isPending: false,
}

export type InitialStateType = typeof initialState

export const fireBaseDataReducer = (state = initialState, action: TActionTypes): InitialStateType => {
    
    switch (action.type) {
        case SET_PLACES_TREE_DATA: {
            return {
                ...state,
                placesTree: [
                    ...action.data.map((item: TPlacesTree) => item)]
            }
        }
        case SET_PLACES_FLATTEN_DATA: {
            return {
                ...state,
                placesFlat: [
                    ...action.data.map((item: TPlacesFlat) => item)]
            }
        }
        case SET_INVENTORY_DATA: {
            return {
                ...state,
                inventory: [...action.data.map((item: TInventory) => item)]
            }
        }
            
        case SET_SELECTED_PLACE: {
            return {
                ...state,
                selectedPlace: action.place
            }
        }
            
        case SET_PENDING_STATUS: {
            return {
                ...state,
                isPending: action.status
            }
        }
        
        default: return state
    }
}

export type TDispatch = Dispatch<TActionTypes | TThunkAction>
export type TThunkAction = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    TActionTypes>

    
export const dataInit = () => async (dispatch: TDispatch) => {
    const responseInv = await getInventory()
    dispatch(setInventoryDataAction(responseInv))
    const response = await getPlaces()
    dispatch(setPlacesFlattenDataAction(findNodesRoots(response)))
    
    dispatch(setPlacesTreeDataAction(toTreeArrReducer(
        filledNodesChecker((findNodesRoots(response)), responseInv)
    )))
}   

export const setInventoryThunk = (placesFlat?: TPlacesFlat[]): TThunkAction => async (dispatch: TDispatch) => {
    const responseInv = await getInventory()
    dispatch(setInventoryDataAction(responseInv))
    if (placesFlat) {
        dispatch(setPlacesTreeDataAction(toTreeArrReducer(filledNodesChecker(placesFlat, responseInv))))
    }
}   

export const addInventoryItemThunk = (name: string, placeId: string, count: string, placesFlat: TPlacesFlat[]): TThunkAction => async (dispatch: TDispatch) => {
    dispatch(setPendingStatusAction(true))
    await addInventory(name, placeId, count)
    await dispatch(setInventoryThunk(placesFlat))
    dispatch(setPendingStatusAction(false))
}

export const editInventoryItemThunk = (id: string, name: string, count: string, placePath: string): TThunkAction => async (dispatch: TDispatch) => {
    dispatch(setPendingStatusAction(true))
    await editInventory(id, name, count, placePath)
    await dispatch(dataInit())
    dispatch(setPendingStatusAction(false))
} 

export const deleteInventoryItemThunk = (id: string, placesFlat: TPlacesFlat[]): TThunkAction => async (dispatch: TDispatch) => {
    dispatch(setPendingStatusAction(true))
    await deleteInventory(id)
    await dispatch(setInventoryThunk(placesFlat))
    dispatch(setPendingStatusAction(false))
}


export const setPlacesTreeDataAction = (data: TPlacesTree[]): ISetPlacesDataAction => ({ type: SET_PLACES_TREE_DATA, data })

export const setPlacesFlattenDataAction = (data: TPlacesFlat[]): ISetPlacesFlattenDataAction => ({ type: SET_PLACES_FLATTEN_DATA, data })

export const setInventoryDataAction = (data: TInventory[]): ISetInventoryDataAction => ({ type: SET_INVENTORY_DATA, data })

export const setSelectedPlaceAction = (place: TPlacesTree): ISetSelectedPlaceAction => ({ type: SET_SELECTED_PLACE, place })

export const setPendingStatusAction = (status: boolean): ISetPendingStatusAction => ({ type: SET_PENDING_STATUS, status })
