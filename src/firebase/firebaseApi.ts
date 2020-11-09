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
            name: x.data()?.name,
            parts: x.data().parts && x.data().parts.map((part: any) => part.id),
        }));
    });
}
export function getInventory() {
    return firebase.firestore().collection("inventory").get().then(response => {
        return response.docs.filter(x => (x.data().place !== undefined)).map(x => ({
            id: x.id,
            name: x.data()?.name,
            count: x.data()?.count,
            placeId: x.data().place.id
        }));
    });

}

export function deleteInventory(id: string) {
    return firebase.firestore().collection("inventory").doc(id).delete().then(() => {
    });
}

export function addInventory(name: string, placeId: string, count: string) {
    return firebase.firestore().collection("inventory").doc().set({
        name,
        count,
        place: firebase.firestore().collection("places").doc(placeId) 
    }).then(() => {
    });
}

export function editInventory(id: string, name: string, count: string, placePath: string) {
    return firebase.firestore().collection("inventory").doc(id).set({
        name,
        count: count,
        place: firebase.firestore().collection("places").doc(placePath)
    }).then(() => {
    })
}










