import React from 'react'
import { TPlacesFlat } from '../../../redux/types'
import Spinner from '../../spinner/Spinner'
import InventoryForm from '../inventoryForm/InventoryForm'
import style from './AddItemModal.module.scss'

type TProps = {
    isPending: boolean
    placesFlat: TPlacesFlat[]
    selectedPlaceId: string 
    modalToggle: () => void
    addInventoryItem: (name: string, placeId: string, count: string, placesFlat: TPlacesFlat[]) => void
}

const AddItemModal: React.FC<TProps> = (props) => {
    
    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if(e.target === e.currentTarget) props.modalToggle()
    }
    return (
        <div className={style.modalWrapper}
            onClick={closeModal}>

            <div className={style.modal}>
                {props.isPending && <div className={style.spinnerWrapper}>
                    <Spinner width={100} />
                </div>}
                <h4>Добавление оборудования</h4>
                <InventoryForm
                    role={'modal'}
                    selectedPlaceId={props.selectedPlaceId}
                    addInventoryItem={props.addInventoryItem}
                    placesFlat={props.placesFlat}/>
            </div>
        </div>
    )
    
}
export default AddItemModal