import { useState } from "react"
import { Link } from 'react-router-dom';

const AddHouse = () => {
    const [house, setHouse] = useState({
        "address": "",
        "size": 0,
        "amount paid": 0
    });

    const submitForm = () => {
        if(!house){
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(house)
        }

        fetch(`http://localhost:8080/api/v1/house`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch(console.log);
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setHouse(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="form" onSubmit={submitForm}>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Address</label>
                    </div>
                    <div className="col-4">
                        <input type="text"
                            className="form-control"
                            name="address"
                            value={house.address}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Size</label>
                    </div>
                    <div className="col-4">
                        <input type="text"
                            className="form-control"
                            name="size"
                            value={house.size}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Amount paid</label>
                    </div>
                    <div className="col-4">
                        <input type="text"
                            className="form-control"
                            name="amount paid"
                            value={house["amount paid"]}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <Link 
                        to="/houses"
                        className="btn btn-secondary w-25"
                        onClick={submitForm}>
                            Submit
                    </Link>
                </div>
            </form>
        </div>
    )

}

export default AddHouse;