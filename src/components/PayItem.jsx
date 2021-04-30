import { useEffect, useState } from "react";

const PayItem = (props) => {
    const [employee, setEmployee] = useState({
        "id": "",
        "address": "",
        "size": 0,
        "amount paid": 0
    });
    const [house, setHouse] = useState({
        "id": "",
        "firstName": "",
        "lastName": "",
        "address": "",
        "phoneNumber": 0
    });

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        }
        fetch(`http://localhost:8080/api/v1/house/${props.item.houseId}`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                setHouse(data)
            })
            .catch(console.log);
        
        fetch(`http://localhost:8080/api/v1/employee/${props.item.employeeId}`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                setEmployee(data);
            })
            .catch(console.log);
    }, [])


    return(
        <div className="ms-2 me-auto">
            <div>
                {house.address}<br></br>{employee.firstName} {employee.lastName}<br></br>{props.item.amountPaid}
            </div>
        </div>
    )
}

export default PayItem;