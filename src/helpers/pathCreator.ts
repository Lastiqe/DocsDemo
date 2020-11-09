import { TPlacesFlat } from "../redux/types"

export default function pathCreator(arr: TPlacesFlat[], parentId?: string, history: string[] = []): string[] {
    arr.map((item) => {
        if (item.id === parentId) {
            history.unshift(item.id)
            pathCreator(arr, item.parent, history)
        }
        else return history
    })
    return history
}
