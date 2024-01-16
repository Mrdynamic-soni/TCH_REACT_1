import React, { useEffect, useState } from 'react'
import './SelectionList.css';


const SelectionList = () => {
    const [list, setList] = useState([])
    const [contacts, setContacts] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setContacts(json)
            });
    }, []);


    const addElement = (name) => {
        const index = list.findIndex((item) => item === name)
        if (index === -1) setList([...list, name])
        else {
            list.splice(index, 1)
            setList(list)
        }
    }

    return (
        <div>
            {
                contacts?.map((item) => {
                    return (
                        <div key={item?.id} className='maincontainer'>
                            <div>
                                <div className='name'>{item?.name}</div>
                                <div className='phone'>{item?.phone}</div>
                            </div>
                            <input type='checkbox' onClick={() => { addElement(item?.name) }} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SelectionList