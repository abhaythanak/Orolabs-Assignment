import { useState } from 'react'
import './App.css'
import Table from './components/Table/Table'
import Input from './components/Input/Input'
import DeletePopUp from './components/Delete-PopUp/DeletePopUp';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {name: "sam", email: "sam@yahoo.com", phone: "7894561587"},
    {name: "tam", email: "tam@yahoo.com", phone: "1288465587"},
    {name: "ham", email: "ham@yahoo.com", phone: "9854561587"},
  ])
  const [rowToEdit, setRowToEdit] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [targetIndexToDelete, setTargetIndexToDelete] = useState(null);

  // const handleDeleteRow = (targetIndex) => {
  //   setRows(rows.filter((_, idx) => idx !== targetIndex));
  // };
  const handleDeleteRow = (targetIndex) => {
    setTargetIndexToDelete(targetIndex);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (targetIndexToDelete !== null) {
      setRows(rows.filter((_, idx) => idx !== targetIndexToDelete));
      setTargetIndexToDelete(null);
      setShowDeleteConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setTargetIndexToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <>
      <div className='App'>
        <DeletePopUp
        showDeleteConfirmation={showDeleteConfirmation}
        cancelDelete={cancelDelete}
        confirmDelete={confirmDelete}
        />
        <Table rows={rows} handleDeleteRow={handleDeleteRow} 
        editRow={handleEditRow}
        />
        <button onClick={() => setModalOpen(true)} className="btn">Add</button>
        {modalOpen &&
        ( <Input
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>  
    </>
  )
}

export default App
