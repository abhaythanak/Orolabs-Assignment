

export default function DeletePopUp({ showDeleteConfirmation, confirmDelete, cancelDelete}) {
    return(
        <div className="">
            {showDeleteConfirmation && (
                        <div className="custom-popup">
                            <p>Are you sure you want to delete this row?</p>
                            <button onClick={confirmDelete}>Yes</button>
                            <button onClick={cancelDelete}>No</button>
                        </div>
                    )}
        </div>
    )
}
