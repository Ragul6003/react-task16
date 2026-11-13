
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./redux/store";

function ComponentA() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        role: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee(form));
        alert("Employee Added!");

        setForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            role: ""
        });
    };

    return (
        <div>
            <h2>Employee Form</h2>

            <form onSubmit={handleSubmit}>
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        placeholder={key}
                        value={form[key]}
                        onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                        }
                        required
                    />
                ))}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ComponentA;
