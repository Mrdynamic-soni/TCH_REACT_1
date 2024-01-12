import React, { useEffect, useState } from 'react'
import './SelectionList.css';


const SelectionList = () => {
    const [ list, setList] = useState([])

    const contacts = [
        { id: 0, name: "Datta", phone: 56694738 },
        { id: 1, name: "Nisha", phone: 83740565 },
        { id: 2, name: "sanket", phone: 8576647774 },
        { id: 3, name: "Abhishak", phone: 8576647774 },
        { id: 4, name: "Meghna", phone: 8576647774 },
        { id: 5, name: "Rutvik", phone: 8576647774 },
        { id: 6, name: "Kirti", phone: 8576647774 },

    ]


    return (
       <div>
        {
            contacts.map((item)=>{
                return(
                    <div key={item?.id}  className='maincontainer'>
                      <div>
                         <div className='name'>{item?.name}</div>
                       <div className='phone'>{item?.phone}</div>
                      </div>
                      <input type='checkbox' onClick={()=>{
                       setList([...list, item?.name])
                      }}/>
                    </div>
                )
            })
        }
       </div>
    )
}

export default SelectionList