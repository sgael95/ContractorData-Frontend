

const PaymentForm = () => {

    const submitForm = () => {

    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="from" onSubmit={submitForm} >
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label for="amountPaid" className="form-label">Amount paid</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="amountPaid" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PaymentForm;