import { useState } from 'react';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "address": "",
        "phoneNumber": 0
    });
    const submitForm = () => {
        
    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="form" onSubmit={submitForm} >
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label for="firstName" className="form-label">First name</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label for="lastName" className="form-label">Last name</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label for="address" className="form-label">Address</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="address" />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label for="phoneNumber" className="form-label">Phone number</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="phoneNumber" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm;