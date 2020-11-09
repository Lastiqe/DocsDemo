import React, { useState } from 'react'
import style from './RecrusiveTree.module.scss'
import arrowIcon from '../../../assets/icons/angle-arrow-down.svg'
import { TPlacesTree } from '../../../redux/types'

type TProps = {
    place: TPlacesTree
    selectedPlace: TPlacesTree
    setSelectedPlaceAction: (place: TPlacesTree) => void
}

const RecrusiveTree: React.FC<TProps> = (props) => {
    const wrapperClassesOpened = `${style.detailsWrapper}`
    const wrapperClassesAnimated = `${style.detailsWrapper} ${style.detailsWrapperAnimated}`
    const wrapperClassesClosed = `${style.detailsWrapper} ${style.closed}`

    const arrowIconClosed = `${style.arrowIcon}`
    const arrowIconOpened = `${style.arrowIcon} ${style.opened}`
    const listItemSelected = `${style.selected}`

    const [isOpened, setNodeState] = useState(true)
    const [wrapperClasses, setWrapperClasses] = useState(wrapperClassesClosed)
    const [arrowIconClasses, setArrowIconClasses] = useState(arrowIconClosed)
    
    function openNode() {
        setNodeState(!isOpened)
        
        if (!isOpened) {
            setArrowIconClasses(arrowIconClosed)
            setWrapperClasses(wrapperClassesOpened)
            setTimeout(() => {
                setWrapperClasses(wrapperClassesClosed)
            }, 150)
        }
        if (isOpened) {
            setArrowIconClasses(arrowIconOpened)
            setWrapperClasses(wrapperClassesOpened)
            setTimeout(() => {
                setWrapperClasses(wrapperClassesAnimated)
            }, 150)
        }
    }

    function setSelectedPlace() {
        props.setSelectedPlaceAction(props.place)
    }

    function renderTree(node: TPlacesTree) {
        if (node.parts) {
            return (
                <RecrusiveTree
                    key={node.id}
                    place={node}
                    selectedPlace={props.selectedPlace}
                    setSelectedPlaceAction={props.setSelectedPlaceAction}>
                    {node.parts.map((item1) => renderTree(item1))}
            </RecrusiveTree>)
        } else {

            return <RecrusiveTree key={node.id}
                setSelectedPlaceAction={props.setSelectedPlaceAction}
                selectedPlace={props.selectedPlace}
                place={node}/>
        }
    }
    
    return (
        props.place.parts
            ? <div className={`${style.treeLi} ${style.nodeLi}`}>
                <span onClick={openNode} className={style.iconWrapper}>
                    <img src={arrowIcon}
                        className={arrowIconClasses}
                        alt="arrow" />
                </span>
                <span className={`${style.name} ${props.selectedPlace.id === props.place.id ? listItemSelected : ''}`} onClick={setSelectedPlace}>{props.place.name}
                    {props.place.isFilled && <span className={style.filled}></span>}
                </span>
                <div className={wrapperClasses}>
                    {props.place.parts.map((item) => renderTree(item))}
                </div>
            </div>
            : <div className={style.treeLi} >
                <span className={`${style.name} ${props.selectedPlace.id === props.place.id ? listItemSelected : ''} `} onClick={setSelectedPlace}>{props.place.name}
                    {props.place.isFilled && <span className={style.filled}></span>}
                </span>
            </div>
    )
}

export default React.memo(RecrusiveTree)