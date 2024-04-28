import { useEffect, useState } from "react";
import "../App.css"
import BodyComponent from "./body-components"
import { Link } from 'react-router-dom';
import axios from "axios"
// import data from "./data";


export default function Intro(){
    const [state, setState] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3000/crud");
                if (response) {
                    setState(response.data);
                    console.log(response.data)
                }
            } catch (error) {
                console.error('Error fetching data :: INTRO' );
                // Handle error, e.g., show error message to user
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className="intro">
                <div className="description">
                    <h2>Meet Blogger</h2>
                    <p>The open source publishing platform of choice for millions of websites worldwide—from creators and small businesses to enterprises.</p>
                </div>
                <img src="../images/website_pic.png" className="website-pic" alt="data-here"></img>
            </div>
            <div className="body-component">
                {state && state.map((item, index) => (
                    <BodyComponent key={index} email={item.email} title={item.title} description={item.description} />
                ))}
            </div>
            <div className="options">
                <Link to="/add">Add Item</Link>
                <Link to="/edit">Edit Item</Link>
                <Link to="/delete">Delete Item</Link>
            </div>
        </div>
        
    )
}