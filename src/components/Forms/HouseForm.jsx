
const HouseForm = () => {
    

    const submitForm = () => {

    }

    return (
        <div className="container px-4 d-grid gap-3">
            <form name="form" onSubmit={submitForm} >
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
                        <label for="size" className="form-label">Size (sq/ft)</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" id="size" />
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-4">
                        <label for="amountPaid" className="form-label">Amount paid</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="from-contorl" id="amountPaid" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HouseForm;