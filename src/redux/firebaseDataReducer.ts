import { getPlaces, getInventory} from '../firebase/firebaseApi'
const SET_INVENTORY_DATA = 'SET_USERS_DATA'
const SET_PLACES_DATA = 'SET_USERS_DATA'

export type PlacesType = {
    name: string | null,
    id: string | null,
    parts: string[] | null,
    parent: string | null
}
type InventoryType = {
    count: number | null,
    name: string | null,
    placeId: string | null
}

const initialState = {
    rooms: [1123123, 132131, 123123213] as any[],
    inventory: [] as InventoryType[]
}

type InitialStateType = typeof initialState


export const fireBaseDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PLACES_DATA: {
            console.log('сработал экшн');
            return {
                ...state,
                rooms: [
                    action.data.map((item: any) => {
                       return {...item}
                   })
                ]
            }
        }
        case SET_INVENTORY_DATA: {
            return {
                ...state
            }
        }
        default: return state
    }
}
export const setPlaces = () => async (dispatch: any) => {
    const response = await getPlaces()
    function placesArrayModify (response:any) {
        const arrayCopy = response.slice()
        function modifyArray(parent: string, itemId: string) {
            arrayCopy.map((item: any) => {
                if (item.id === itemId) {
                    item.parent = parent
                }
            })
        }

        response.filter((item: any) => item.parts).map((item: any) => {
            function partsChecker(item: any) {
                item.parts.map((part: any) => {
                    if (part.parts) {
                        partsChecker(part)
                    } else {
                        modifyArray(item.id, part)
                    }
                })
            }
            partsChecker(item)
        })
        return arrayCopy
    }
   
    
    dispatch(setPlacesData(placesArrayModify(response)))
}
export const setInventory = () => async (dispatch: any) => {
    const response = await getInventory()
    dispatch(setPlacesData(response))
}
export const setPlacesData = (data: any) => ({ type: SET_PLACES_DATA, data })
export const setInventoryData = (data: any) => ({type: SET_INVENTORY_DATA, data})