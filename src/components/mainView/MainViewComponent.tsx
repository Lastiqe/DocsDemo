import React from 'react'
import style from './MainViewComponent.module.scss'


function MainViewComponent(props: any) {

    return (
        <div className={`${style.class} ${style.viewComponent}`}>
            <h1>Список оборудовния</h1>
            <ul>
                <li>какое-то оборудование</li>
                <li>какое-то оборудование</li>
                <li>какое-то оборудование</li>
                <li>какое-то оборудование</li>
            </ul>
        </div>
    )
    
}
export default MainViewComponent