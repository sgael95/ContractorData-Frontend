import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PaymentForm = (props) => {

    const [payment, setPayment] = useState({
        "id": "",
        "houseId": "",
        "employeeId": "",
        "amountPaid": 0
    });

    useEffect(() => {
        const { item } = props;
        setPayment(state => ({ ...state, 
            "id": item.id,
            "houseId": item.houseId,
            "employeeId": item.employeeId,
            "amountPaid": item.amountPaid
        }));
    }, [props.item]);

    const submitForm = () => {
        if(!payment){
            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payment)
        }

        fetch(`http://localhost:8080/api/v1/pay/${payment.id}`, requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch(console.log);
    }

    const handleChange = event => {
        
        const { name, value } = event.target;
        setPayment(prevState => ({
                ...prevState,
                [name]: value
        }));
    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="form">
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label className="form-label">Amount paid</label>
                    </div>
                    <div className="col-4">
                        <input type="text" 
                            className="form-control" 
                            id="amountPaid" 
                            name="amountPaid"
                            value={payment.amountPaid} 
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <Link 
                        to="/payments"
                        className="btn btn-secondary w-25"
                        onClick={submitForm}>
                        Submit
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default PaymentForm;