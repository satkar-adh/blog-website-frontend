import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/crud/${id}`);
                setFormData({
                    email: response.data.email,
                    title: response.data.title,
                    description: response.data.description
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/crud/${id}`, formData);
            navigate('/edit'); // Redirect to the homepage or any other page
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="container">
            <h1>Edit Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <textarea
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <textarea
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default EditPage;
