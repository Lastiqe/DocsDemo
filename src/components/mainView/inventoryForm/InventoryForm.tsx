import React, { FormEvent, useEffect, useState } from 'react'
import { TInventory, TPlacesFlat } from '../../../redux/types'
import style from './InventoryForm.module.scss'

type TProps = { 
    placesFlat?: TPlacesFlat[]
    inventory?: TInventory
    path?: string[]
    editMode?: boolean 
    isPending?: boolean
    selectedPlaceId?: string 
    role: string
    setPendingStatus?: React.Dispatch<React.SetStateAction<boolean>>
    setEditMode?: React.Dispatch<React.SetStateAction<boolean>>
    addInventoryItem?: (name: string, placeId: string, count: string, placesFlat: TPlacesFlat[]) => void 
    editInventoryItem?: (id: string, name: string, count: string, placePath: string) => void
}

const InventoryForm: React.FC<TProps> = (props) => {
    const [name, setName] = useState('')
    const [count, setCount] = useState('')
    const [nameValid, setNameValid] = useState('default')
    const [countValid, setCountValid] = useState('default')
    const [formClass, setFormClass] = useState(style.form)

    useEffect(() => {
        if (props.role === 'listItem' && typeof props.inventory !== 'undefined'){
            setName(props.inventory.name)
            setCount(`${props.inventory.count}`)
            setFormClass(`${style.form} ${style.listItemParamsWrapper}`)
        }

        if (props.role === 'modal')
            setFormClass(`${style.form} ${style.modalWrapper}`)
            
    }, [props.editMode, props.inventory?.name, props.inventory?.count])
    
    function validateName(value: string): string {
        return value.trim() && value.match(/[a-zа-яё]/i)
            ? 'valid'
            : 'notValid'
    }

    function validateCount(value: string): string {
        return value.match(/^[1-9]\d*$/)
            ? 'valid'
            : 'notValid'
    }

    function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.name === 'name') {
            setName(e.currentTarget.value)
            setNameValid(validateName(e.currentTarget.value))
        }
            
        if (e.currentTarget.name === 'count') {
            setCount(e.currentTarget.value)
            setCountValid(validateCount(e.currentTarget.value))
        }
    }
    
    function onSubmitingForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setNameValid(validateName(name))
        setCountValid(validateCount(count))
        
        if (nameValid === 'notValid') setName('')
        
        if (countValid === 'notValid') setCount('')

        if (props.role === 'modal' && props.addInventoryItem && props.selectedPlaceId && props.placesFlat) {
            if (countValid === 'valid' && nameValid === 'valid') {
                props.addInventoryItem(name, props.selectedPlaceId, count, props.placesFlat)
                setCount('')
                setName('')
            }
        }
        if (props.role === 'listItem' && props.inventory && props.path && props.setPendingStatus && props.editInventoryItem && props.setEditMode) {
            if (countValid === 'valid' || countValid === 'default'
                && nameValid === 'valid' || nameValid === 'default') {
                props.setPendingStatus(true)
                props.editInventoryItem(props.inventory.id, name, count, props.path?.join('/'))
                props.setEditMode(true)
            }
        }
    }
    function closeEdit() {
        setNameValid('default')
        setCountValid('default')
        if (props.setEditMode)
        props.setEditMode(true)
    }
    return (
        <form className={formClass}
            onSubmit={onSubmitingForm}>
            <div className={`${style.inputWrapper} ${nameValid === 'notValid' && style.error}`}>
                <label>Наименование</label>
                <div className={`${style.textWrapper} ${props.editMode && style.disabled}`}>
                    <input type="text"
                        name="name"
                        placeholder="Введите наименование"
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        value={name}
                        autoComplete='off'
                        disabled={props.editMode}>
                    </input>
                    {props.editMode && <div className={style.fullText}>{name}</div>}
                </div>
            </div>
            <div className={`${style.inputWrapper} ${countValid === 'notValid' && style.error}`}>
                <label>Количество</label>
                <input type="text"
                    name="count"
                    placeholder="Введите число"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    value={count}
                    autoComplete="off"
                    disabled={props.editMode} />
            </div>
            <div className={style.buttonsWrapper}>
                {!props.editMode && <button type="submit" className={`${style.formButton} ${style.submit} `}>подтвердить</button>}
                {!props.editMode && props.role === 'listItem' &&
                    <button type="button" onClick={closeEdit} className={`${style.formButton} ${style.cancel}`}>отменить</button>}
            </div>
            
           
        </form>
    )
    
}
export default InventoryForm