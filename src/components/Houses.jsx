import React, { useEffect, useState } from 'react';
import Items from "./Items";


const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        }
        fetch(`http://localhost:8080/api/v1/house`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                setHouses(data)
            })
            .catch(console.log)
    }, [])

    return( 
        <Items itemType="Houses" items={houses}></Items>
    )
}

export default Houses;