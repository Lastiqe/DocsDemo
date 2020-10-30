import React, { useEffect, useState } from 'react'
import style from './ExplorerComponent.module.scss'
import ExplorerTreeItemComponent from './explorerTreeItem/ExplorerComponentContainer'


function ExplorerComponent(props: any) {
    const [rooms, setRooms] = useState(props.rooms)
    useEffect(() => {
        setRooms(props.rooms)

    }, [props.rooms])
    console.log(props);
    
   
    return (
        <div className={style.explorer}>
            <div className={style.explorerHeader}>
                <h2>Explorer</h2>
            </div>
            <div className={style.explorerBody}>
                <div className={style.placesTree}>
                    <ExplorerTreeItemComponent/>
                </div>
            </div>
            
        </div>
    )
    
}
export default ExplorerComponent