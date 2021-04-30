import React, { useEffect, useState } from 'react';
import Items from './Items';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        }
        const fetchdata = () => {
            fetch(`http://localhost:8080/api/v1/employee`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                setEmployees(data)
            })
            .catch(console.log)
        }
        fetchdata();
    }, [])


    return(
        <Items itemType="Employees" items={employees} />
    )
}

export default Employees;