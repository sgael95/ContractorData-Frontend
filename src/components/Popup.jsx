const Popup = (props) => {
    return(
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <p>Are you sure you want to delete this item?</p>
                <button type="button" className="btn btn-secondary button-margin" onClick={props.handleClose}>Cancel</button>
                <button type="button" className="btn btn-danger button-margin">DELETE</button>
            </div>
        </div>
    )
}

export default Popup;