
import { useSelector } from "react-redux";

function ComponentB() {
    const employees = useSelector((state) => state.employee);

    return (
        <div>
            <h2>Employee Details</h2>

            {employees.map((emp, index) => (
                <div key={index}>
                    <p>Name: {emp.name}</p>
                    <p>Email: {emp.email}</p>
                    <p>Phone: {emp.phone}</p>
                    <p>City: {emp.city}</p>
                    <p>Role: {emp.role}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ComponentB;
