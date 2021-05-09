import { useState } from "react";
import Popup from './Popup';
import PayItem from './PayItem';
import { Link } from "react-router-dom";
import SelectEmployee from './Forms/AddItemForms/SelectEmployee'

const Items = (props) => {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const renderItemType = (itemType, item) => {
        switch(itemType) {
            case 'Houses':
                return (<div className="ms-2 me-auto"><div className="fw-bold">{item.address}</div>
                    {item.size}<br></br>{item["amount paid"]}</div>);
            case 'Employees':
                return (<div className="ms-2 me-auto"><div className="fw-bold">{item.firstName} {item.lastName}</div>
                        {item.address}<br></br>{item.phoneNumber}</div>);
            default:
                return (<PayItem item={item} />);
        }
    }

    const togglePopup = () => {
        setConfirmDelete(!confirmDelete);
    }

    const routeToAddItem = () => {
        const { itemType } = props;
        switch(itemType) {
            case 'Payments':
                return(<Link 
                    to="/selectEmployee" 
                    role="button"
                    className="btn btn-danger rounded-pill"
                    ><i className="fas fa-plus"></i></Link>);
            default:
                return;
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-10">
                    <h1>{props.itemType}</h1>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-10">
                    <div className="button-margin float-end">
                        {routeToAddItem()}
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-10">
                    <ul className="list-group list-group-flush">
                    {props.items.map((item, i) => (
                            <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                                {renderItemType(props.itemType, item)}
                                <Link to={{
                                     pathname: 'editItem', 
                                     state: {
                                        itemType: props.itemType,
                                        item: item
                                    }}}
                                      role="button" className="btn btn-secondary rounded-pill" >
                                    <i className="far fa-edit"></i>
                                </Link>
                                <button type="button" className="btn btn-light rounded-circle" onClick={togglePopup}>
                                <i className="fas fa-trash"></i> 
                                </button>
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
            {confirmDelete && <Popup handleClose={togglePopup} />}
        </div>
    )
}

export default Items;