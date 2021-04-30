import { useState } from "react";
import { useLocation } from "react-router";
import EmployeeForm from "./EmployeeForm";
import HouseForm from "./HouseForm";
import PaymentForm from "./PaymentForm";

const EditContainer = (props) => {
    const location = useLocation();
    const itemType = location.state?.itemType;
    const item = location.state?.item;

    const itemForm = () => {
        console.log(item)
        switch (itemType){
            case "Houses":
                return <HouseForm />
            case "Employees":
                return <EmployeeForm />
            default:
                return <PaymentForm />
        }
    }

    return (
        <div>
            {itemForm()}
        </div>
    )
}

export default EditContainer;