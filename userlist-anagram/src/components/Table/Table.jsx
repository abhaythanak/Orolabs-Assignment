import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export default function Table({rows, handleDeleteRow, editRow}) {
    return(
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className='expand'>Email</th>
                        <th>Phone No.</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { rows.map((Item, idx)=>{
                        return (
                            <tr key={idx}>
                                <td>{Item.name}</td>
                                <td className="expand">{Item.email}</td>
                                <td>{Item.phone}</td>
                                <td><BsFillPencilFill className="edit-btn" onClick={() => editRow(idx)}/></td>
                                <td><BsFillTrashFill className="delete-btn" onClick={()=>handleDeleteRow(idx)}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
