import React, { useEffect, useState } from 'react';
import Items from './Items';

const Payments = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        }
        fetch(`http://localhost:8080/api/v1/pay`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                setPayments(data)
               })
            .catch(console.log);
    }, [])

    return(
        <Items itemType="Payments" items={payments} />
    )
}

export default Payments;