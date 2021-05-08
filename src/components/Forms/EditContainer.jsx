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
        switch (itemType){
            case "Houses":
                return <HouseForm item={item}/>
            case "Employees":
                return <EmployeeForm item={item} />
            default:
                return <PaymentForm item={item}/>
        }
    }

    return (
        <div>
            {itemForm()}
        </div>
    )
}

export default EditContainer;