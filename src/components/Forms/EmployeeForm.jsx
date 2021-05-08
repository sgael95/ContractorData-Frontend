import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeForm = (props) => {
    const [employee, setEmployee] = useState({
        "id": "",
        "firstName": "",
        "lastName": "",
        "address": "",
        "phoneNumber": 0
    });

    useEffect(() => {
        const { item } = props;
        setEmployee(state => ({
            ...state,
            "id": item.id,
            "firstName": item.firstName,
            "lastName": item.lastName,
            "address": item.address,
            "phoneNumber": item.phoneNumber
        }));
    }, [props.item]);

    const submitForm = () => {
        if(!employee){
            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        }

        fetch(`http://localhost:8080/api/v1/employee/${employee.id}`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch(console.log);
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="form" onSubmit={submitForm} >
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">First name</label>
                    </div>
                    <div className="col-4">
                        <input type="text" 
                            className="form-control" 
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Last name</label>
                    </div>
                    <div className="col-4">
                        <input type="text"
                            className="form-control" 
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Address</label>
                    </div>
                    <div className="col-4">
                        <input type="text" 
                        className="form-control" 
                        name="address"
                        value={employee.address}
                        onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Phone number</label>
                    </div>
                    <div className="col-4">
                        <input type="text" 
                            className="form-control" 
                            name="phoneNumber"
                            value={employee.phoneNumber}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <Link
                        to="/employees"
                        className="btn btn-secondary w-25"
                        onClick={submitForm}>
                            Submit
                        </Link>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm;