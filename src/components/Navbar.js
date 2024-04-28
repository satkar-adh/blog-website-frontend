import "../App.css"
import {useState} from "react"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const options = ["Long","Medium","Short"]
    function handleNewsClick(){

        setIsOpen(prevVal => !prevVal)
    }

    return (
        <div className="navbar">
                <img className="logo" alt="logo" src="../images/logo.png" />
                <button className="navelement">Home</button>
                <button className="navelement">Popular</button>
                <button className="navelement" onClick={handleNewsClick}>Format</button>
                {isOpen && (
                    <div className="Buttons">
                    {options.map(option => (
                        <button key={option} onClick={() => console.log(option)}>
                            {option}
                        </button>
                    ))}
                </div>
                )}
                <button className="navelement">About</button>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button">Search</button>
                </div>
        </div>
    )
}