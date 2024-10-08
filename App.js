import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, dob, salary, address };
        await axios.post('http://localhost:5000/api/users', newUser);
        fetchUsers();
        resetForm();
    };

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
    };

    const resetForm = () => {
        setName('');
        setDob('');
        setSalary('');
        setAddress('');
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserSelect = (e) => {
        const userId = e.target.value;
        const user = users.find(user => user._id === userId);
        setSelectedUser(user);
    };

    return (
        <div>
            <h1>User Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
                <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <h2>User List</h2>
            <select onChange={handleUserSelect} defaultValue="">
                <option value="" disabled>Select a user</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>
            {selectedUser && (
                <div>
                    <h3>Selected User Information</h3>
                    <p>Name: {selectedUser.name}</p>
                    <p>Date of Birth: {selectedUser.dob}</p>
                    <p>Salary: {selectedUser.salary}</p>
                    <p>Address: {selectedUser.address}</p>
                </div>
            )}
        </div>
    );
}

export default App;
