import "./DeletePopUp.css";

export default function DeletePopUp({ showDeleteConfirmation, confirmDelete, cancelDelete}) {
    return(
        <div className="popup">
            <div className="sub-popup">
            {showDeleteConfirmation && (
                        <div className="custom-popup">
                            <p>Are you sure you want to delete this row?</p>
                            <div className="">
                            <button className="confirm" onClick={confirmDelete}>Yes</button>
                            <button className="cancel" onClick={cancelDelete}>No</button>
                            </div>
                            
                        </div>
                    )}
            </div>        
        </div>
    )
}
