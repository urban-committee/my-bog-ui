import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios";

const UserRoleForm = ({ user }) => {
    // Define all possible roles
    const allRoles = [
        { id: 1, name: "ROLE_USER" },
        { id: 2, name: "ROLE_ADMIN" },
        // { id: 3, name: "ROLE_SUPER_ADMIN" }
    ];

    // Set the initial selected roles based on the user's current roles
    const [selectedRoles, setSelectedRoles] = useState(new Set(
        user.roles.map(role => role.name)
    ));

    const handleRoleChange = (event) => {
        const { value, checked } = event.target;
        const updatedRoles = new Set(selectedRoles);

        if (checked) {
            updatedRoles.add(value);
            console.log("added Role for "+user.id, value);
        } else {
            updatedRoles.delete(value);
            console.log("remove Role", value);
        }

        setSelectedRoles(updatedRoles);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Convert the Set to an array
        const rolesArray = Array.from(selectedRoles);

        console.log('Selected Roles:', rolesArray);

        // Perform API call to update roles
        try {

            const response = await axios.put(`http://localhost:8080/api/v1.0/blogsite/user/${user.id}/roles`, rolesArray, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response) {
                console.log('Roles updated successfully!');
                setSuccessMessage("Roles updated successfully!")
            } else {
                console.error('Failed to update roles');
                setErrorMessage('Failed to update roles');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            <div className="row">
                {allRoles.map((role, index) => (
                    <div className="col s12" key={role.id}>
                        <label>
                            <input
                                type="checkbox"
                                className="filled-in"
                                value={role.name}
                                checked={selectedRoles.has(role.name)}
                                onChange={handleRoleChange}
                            />
                            <span>{role.name}</span>
                        </label>
                    </div>
                ))}

                {/* Button aligned after the last checkbox */}
                <div className="col s12">
                    <button type="submit" className="btn">Update Roles</button>
                </div>
            </div>

            {/*<div className="row">*/}
            {/*    {allRoles.map(role => (*/}
            {/*        <div className="col s12" key={role.id}>*/}
            {/*            <label>*/}
            {/*                <input*/}
            {/*                    type="checkbox"*/}
            {/*                    className="filled-in"*/}
            {/*                    value={role.name}*/}
            {/*                    checked={selectedRoles.has(role.name)}*/}
            {/*                    onChange={handleRoleChange}*/}
            {/*                />*/}
            {/*                <span>{role.name}</span>*/}
            {/*            </label>*/}


            {/*        </div>*/}
            {/*    ))}*/}
            {/*    <button type="submit" className="btn">Update Roles</button>*/}
            {/*</div>*/}

        </form>
    );
};

export default UserRoleForm;
