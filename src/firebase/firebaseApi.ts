import firebase from 'firebase/app'
import "firebase/firestore";
import { firebaseConfig } from './fireBaseConfig';




export function fireBaseDataInit() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
export function getPlaces() {
    return firebase.firestore().collection("places").get().then(response => {
        return response.docs.map(x => ({
            id: x.id,
            data: x.data(),
            parts: x.data().parts && x.data().parts.map((part: any) => part.id)
        }));
    });
    
}

export function getInventory() {
    return firebase.firestore().collection("inventory").get().then(response => {
        return response.docs.filter(x => (x.data().place !== undefined)).map(x => ({
            id: x.id,
            data: x.data(),
            placeId: x.data().place.id
        }));
    });

}

fireBaseDataInit()
// let Places: any
// getPlaces().then(r => {
//     Places = r
//     return Places
    
// }).then(r => {
//     console.log(r);
    
//     Places.map((item: any) => {
//         function partsChecker(node: any, counter = 0) {
//             let deepLevelCounter: number = counter
           
//             if (node.parts) {
//                 deepLevelCounter++
//                 node.parts.map((item: any) => {
//                     if (item.parts) {
//                         partsChecker(item.parts, counter)
//                     } else {
//                         console.log('дочки', node.id, '==', item);
//                     }
//                 })
//             }
//         }
//         partsChecker(item)
        
//     })
// })




getInventory().then(r => console.log('оборудование',r))
    








