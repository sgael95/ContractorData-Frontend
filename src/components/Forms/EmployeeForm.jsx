import { useEffect, useState } from 'react';

const EmployeeForm = (props) => {
    const [employee, setEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "address": "",
        "phoneNumber": 0
    });

    useEffect(() => {
        setEmployee(props.item);
        console.log(employee);
    }, []);

    const submitForm = () => {
        
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
            </form>
        </div>
    )
}

export default EmployeeForm;