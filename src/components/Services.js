import React, { useState } from 'react'
import Products from './Products'


function Services() {

    const [selectoption, setSelectOption] = useState('1');

    const handleOptionChange = (e)=>{
        setSelectOption(e.target.value);
    }


    return (
        <>
            <div className="container " style={{
                marginTop: '100px'

            }}>
                <h2>Projects</h2>
                <select className="form-select" aria-label="Default select example" value={selectoption} onChange={handleOptionChange} style={{marginBottom: '10px'}}>
                    <option value="1">Open this select menu</option>
                    <option value="1">Web Projects</option>
                    <option value="2">Cpp Projects</option>
                    <option value="3">Python Projects</option>
                </select>
                <Products  selectoption={selectoption} />
            </div>
        </>
    )
}

export default Services
