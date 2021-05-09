import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';


const SelectHouse = (props) => {
    const [houses, setHouses] = useState([]);

    const location = useLocation();
    const employeeId = location.state?.employeeId;

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        }
        const fetchData = () => {
            fetch(`http://localhost:8080/api/v1/house`,requestOptions)
                .then(res => res.json())
                .then((data) => {
                    setHouses(data)
                })
                .catch(console.log)
        }
        fetchData();
    }, [])


    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-10">
                    <h1>Select House</h1>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                    {houses.map((item, i) => (
                            <li key={i} className="list-group-item d-flex justify-content-center align-items-start">
                                <Link to={{
                                    pathname: '/addPayment',
                                    state: {
                                        employeeId: employeeId,
                                        houseId: item.id
                                    }}} role="button"
                                    className="btn col-md-12">
                                    <div className="justify-content-center"><div className="fw-bold">{item.firstName} {item.lastName}</div>
                                    {item.address}<br></br>{item.phoneNumber}</div>
                                </Link>
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SelectHouse;