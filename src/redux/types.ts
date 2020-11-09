import { SET_INVENTORY_DATA, SET_PENDING_STATUS, SET_PLACES_FLATTEN_DATA, SET_PLACES_TREE_DATA, SET_SELECTED_PLACE } from "./firebaseDataReducer";

export type TInventory = {
    id: string
    name: string
    count: string
    placeId: string | undefined
}
export type TPlacesRaw = {
    id: string
    name: string,
    parts: string[] | undefined
}
export type TPlacesFlat = {
    path: string[]
    parent: string
} & TPlacesRaw

export type TPlacesFilled = {
    isFilled?: true
} & TPlacesFlat

export type TPlacesTree = {
    name: string
    id: string
    isFilled?: boolean
    path: string[]
    parts: TPlacesTree[] |undefined
    parent: string | undefined
}

//action-creators
export interface ISetPlacesDataAction {
    type: typeof SET_PLACES_TREE_DATA
    data: TPlacesTree[]
}
export interface ISetPlacesFlattenDataAction {
    type: typeof SET_PLACES_FLATTEN_DATA
    data: TPlacesFlat[]
}
export interface ISetInventoryDataAction {
    type: typeof SET_INVENTORY_DATA
    data: TInventory[]
}
export interface ISetSelectedPlaceAction {
    type: typeof SET_SELECTED_PLACE
    place: TPlacesTree
}
export interface ISetPendingStatusAction {
    type: typeof SET_PENDING_STATUS
    status: boolean
}
export type TActionTypes = ISetPlacesDataAction | ISetPlacesFlattenDataAction | ISetInventoryDataAction | ISetSelectedPlaceAction | ISetPendingStatusAction