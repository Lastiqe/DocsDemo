import { connect } from 'react-redux'
import React from 'react'
import PlacesExplorer from './PlacesExplorer'
import { setSelectedPlaceAction} from '../../redux/firebaseDataReducer'
import { AppStateType } from '../../redux/store'
import { TPlacesTree } from '../../redux/types'

type TMapState = {
    placesTree: TPlacesTree[]
    selectedPlace: TPlacesTree
}

type TMapDispatch = {
    setSelectedPlaceAction: (place: TPlacesTree) => void
}

type TProps = TMapState & TMapDispatch

const PlacesExplorerContainer: React.FC<TProps> = (props) => {
   
    return (
        <PlacesExplorer placesTree={props.placesTree}
            selectedPlace={props.selectedPlace}
            setSelectedPlaceAction={props.setSelectedPlaceAction} />
    )  
}


const mapState = (state: AppStateType): TMapState => {
    return ({
        placesTree: state.fireBase.placesTree,
        selectedPlace: state.fireBase.selectedPlace,
    })
}


export default connect<TMapState, TMapDispatch, {}, AppStateType>(mapState, { setSelectedPlaceAction })(PlacesExplorerContainer)