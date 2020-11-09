import React, { useState } from 'react'
import style from './MainView.module.scss'
import addIcon from '../../assets/icons/add.svg'
import InventoryListItem from './inventoryListItem/InventoryListItem'
import AddItemModal from './AddItemModal/AddItemModal'
import { TInventory, TPlacesTree, TPlacesFlat} from '../../redux/types'
import ActionButton from './inventoryListItem/inventoryActionButton/InventoryActionButton'

type TProps = {
    inventory: TInventory[]
    selectedPlace: TPlacesTree
    placesFlat: TPlacesFlat[]
    isPending: boolean
    editInventoryItem: (id: string, name: string, count: string, placePath: string) => void
    deleteInventoryItem: (id: string, placesFlat: TPlacesFlat[]) => void
    addInventoryItem: (name: string, placeId: string, count: string, placesFlat: TPlacesFlat[]) => void
}

const MainView: React.FC<TProps> = (props) => {
    const [isModalOpen, setModalState] = useState(false)
    const [editModeId, setEditModeId] = useState('')
    
    function modalToggle(): void {
        setModalState(!isModalOpen)
    }
    function editModeToggle(inventoryId: string): void {
        
        setEditModeId(inventoryId)
       
    }
    function btnClickHandler(role: string, inventoryId: string = ''): void {
        
        switch (role) {
            case 'edit': editModeToggle(inventoryId)
                break
            case 'delete': props.deleteInventoryItem(inventoryId, props.placesFlat) 
                break
            case 'add': modalToggle()
                break
                
            default: return
        }
    }
    return (
        <div className={`${style.viewComponent} ${isModalOpen && style.modalOpened}`}>
            <h1>Список оборудования</h1>
            <hr />
            {!props.selectedPlace.id && <span className={style.info}>Выберите помещение в меню слева, чтобы поспотреть имеющееся в ней оборудование</span>}
            {props.selectedPlace.id &&
                <section className={style.inventoryListWrapper}>
                <div className={style.sectionTopRow}>
                    <div className={`${style.inventoryListHeader} ${style.inventoryListItem}`}>
                        <h4>{props.selectedPlace.name}</h4>
                    </div>
                    {props.selectedPlace.id && !props.selectedPlace.parts &&
                    <ActionButton
                        icon={addIcon}
                        role={'add'}
                        btnClickHandler={btnClickHandler} />}
                </div>
                <ul className={style.inventoryList}>
                    {props.inventory.map((item) => {
                        if (props.selectedPlace.id) {
                            return <InventoryListItem
                                editInventoryItem={props.editInventoryItem}
                                btnClickHandler={btnClickHandler}
                                key={item.id}
                                inventory={item}
                                selectedPlace={props.selectedPlace}
                                editModeId={editModeId}
                                isPending={props.isPending}/>
                        }
                    })}
                </ul>
            </section>}
            {isModalOpen && <AddItemModal
                modalToggle={modalToggle}
                addInventoryItem={props.addInventoryItem}
                selectedPlaceId={props.selectedPlace.id}
                isPending={props.isPending}
                placesFlat={props.placesFlat}/>}
        </div>
    )
    
}
export default React.memo(MainView)