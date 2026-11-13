
import { useEffect, useState } from "react";

const initialForm = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    city: "",
};

function UserForm({ onSubmit, editingUser, setEditingUser }) {
    const [formData, setFormData] = useState(initialForm);
    const [submitting, setSubmitting] = useState(false);

    // Load selected user details into the form
    useEffect(() => {
        if (editingUser) {
            setFormData({
                name: editingUser.name || "",
                username: editingUser.username || "",
                email: editingUser.email || "",
                phone: editingUser.phone || "",
                website: editingUser.website || "",
                city: editingUser.address?.city || "",
            });
        } else {
            setFormData(initialForm);
        }
    }, [editingUser]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name: formData.name.trim(),
            username: formData.username.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            website: formData.website.trim(),
            address: {
                city: formData.city.trim(),
            },
        };

        try {
            setSubmitting(true);
            await onSubmit(userData);

            setFormData(initialForm);
            setEditingUser(null);
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancel = () => {
        setEditingUser(null);
        setFormData(initialForm);
    };

    return (
        <section className="form-section">
            <h2>
                {editingUser ? "Edit User" : "Add New User"}
            </h2>

            <form onSubmit={handleSubmit} className="user-form">

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Website</label>
                    <input
                        type="text"
                        name="website"
                        placeholder="Enter website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-buttons">
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={submitting}
                    >
                        {submitting
                            ? "Please wait..."
                            : editingUser
                                ? "Update User"
                                : "Add User"}
                    </button>

                    {editingUser && (
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    )}
                </div>

            </form>
        </section>
    );
}

export default UserForm;
