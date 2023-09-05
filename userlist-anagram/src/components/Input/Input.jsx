import { useState } from "react";
import "./Input.css";

export default function Input({closeModal,onSubmit,defaultValue}) {
    const [formState, setFormState] = useState(
    defaultValue || {
        name: "",
        email: "",
        phone: "",
    }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.name && formState.email && formState.phone) {
          setErrors("");
          return true;
        } else {
          let errorFields = [];
          for (const [key, value] of Object.entries(formState)) {
            if (!value) {
              errorFields.push(key);
            }
          }
          setErrors(errorFields.join(", "));
          return false;
        }
      };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;
    
        onSubmit(formState);
    
        closeModal();
      };
    return(
        <div className="modal-container"  
           onClick={(e) => {
            if (e.target.className === "modal-container") closeModal();
          }}>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name="name" value={formState.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" value={formState.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone No.</label>
                        <input name="phone" value={formState.phone} onChange={handleChange}/>
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <div className="">
                        <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
