import React, { useEffect, useState } from 'react'
import style from './InventoryListItem.module.scss'
import editIcon from '../../../assets/icons/edit.svg'
import deleteIcon from '../../../assets/icons/delete.svg'
import InventoryForm from '../inventoryForm/InventoryForm'
import Spinner from '../../spinner/Spinner'
import { TInventory, TPlacesTree } from '../../../redux/types'
import ActionButton from './inventoryActionButton/InventoryActionButton'

type TProps = {
    inventory: TInventory
    selectedPlace: TPlacesTree
    editModeId: string
    isPending: boolean
    editInventoryItem: (id: string, name: string, count: string, placePath: string) => void
    btnClickHandler: (role: string, inventoryId?: string) => void
}

const InventoryListItem: React.FC <TProps> = (props) => {
    const [editMode, setEditModeId] = useState(true)
    const [pendingStatus, setPendingStatus] = useState(false)

    useEffect(() => {
        if (!props.isPending) setPendingStatus(false)
    }, [props.isPending])

    function btnClickHandler(role: string) {
        if (role === 'edit') setEditModeId(!editMode)
        if (role === 'delete') {
            setPendingStatus(true)
            props.btnClickHandler(role, props.inventory.id)
        }
    }
    
    return ( 
        <li className={style.inventoryListItemWrapper}>
            <div className={style.inventoryListItem}>
                <InventoryForm role={'listItem'}
                    editInventoryItem={props.editInventoryItem}
                    inventory={props.inventory}
                    path={props.selectedPlace.path}
                    editMode={editMode}
                    setEditMode={setEditModeId}
                    isPending={props.isPending}
                    setPendingStatus={setPendingStatus}/>
                
                {!props.selectedPlace.parts && <div className={style.iconWrapper}>
                    <ActionButton role={'edit'} icon={editIcon} btnClickHandler={btnClickHandler}/>
                    <ActionButton role={'delete'}
                        icon={deleteIcon}
                        btnClickHandler={btnClickHandler}/>
                </div>}
            </div>
            {pendingStatus && <div className={style.spinnerWrapper}>
                <Spinner width={80}/>
            </div>}
        </li>
    )
    
}
export default InventoryListItem