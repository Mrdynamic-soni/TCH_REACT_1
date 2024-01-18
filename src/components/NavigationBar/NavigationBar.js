import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div className='navigationBar'>
            <div className='leftView'>TCH</div>
            <div className='rightView'>
                <Link to="/">Contacts</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/renderList">Cards</Link>
            </div>
        </div>
    )
}

export default NavigationBar