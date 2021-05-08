import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";

const HouseForm = (props) => {
    const [house, setHouse] = useState({
        "id": "",
        "address": "",
        "size": 0,
        "amount paid": 0
    })

    useEffect(() => {
        console.log(props.item)
        setHouse(props.item);
        console.log(house);
    }, []);

    const submitForm = () => {

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
            <form name="form" onSubmit={submitForm} >
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
                        <label className="form-label">Size (sq/ft)</label>
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
                            className="from-contorl" 
                            name="amount paid"
                            value={house["amount paid"]}
                            onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HouseForm;