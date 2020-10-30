import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import ExplorerComponent from './ExplorerComponent'
import {setPlaces} from '../../redux/firebaseDataReducer'

function ExplorerComponentContainer (props: any) {
    const [num, setNum] = useState(15)

    useEffect(() => {
        console.log('меняется');
        
    }, [props.rooms]) 
    return (
        <ExplorerComponent props={props}/>
    )
    
}
function mapStateToProps(state: any) {
    
    return ({
        rooms: state.rooms,
    })
}

export default connect(mapStateToProps, { setPlaces })(ExplorerComponentContainer)