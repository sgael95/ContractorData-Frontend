import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


const AddPayment = (props) => {
    const [payment, setPayment] = useState({
        "houseId": "",
        "employeeId": "",
        "amountPaid": 0
    });

    const location = useLocation();
    const employeeId = location.state?.employeeId;
    const houseId = location.state?.houseId;

    useEffect(() => {
        setPayment(state => ({
            ...state,
            "employeeId": employeeId,
            "houseId": houseId,
        }));
    }, [props]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitAmount = () => {
        if(!payment) {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payment)
        }

        fetch(`http://localhost:8080/api/v1/pay`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch(console.log);
    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="form" onSubmit={submitAmount} >
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Amount paid</label>
                    </div>
                    <div className="col-4">
                        <input type="text"
                            className="form-control"
                            name="amountPaid"
                            value={payment.amountPaid}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <Link
                        to="/payments"
                        className="btn btn-secondary w-25"
                        onClick={submitAmount}>
                        Submit
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddPayment;