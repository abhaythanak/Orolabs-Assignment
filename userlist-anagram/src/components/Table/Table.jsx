import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
export default function Table() {
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
                    <tr>
                    <td>name</td>
                    <td className="expand">email</td>
                    <td>phone</td>
                    <td><BsFillPencilFill className="edit-btn"/></td>
                    <td><BsFillTrashFill className="delete-btn"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
