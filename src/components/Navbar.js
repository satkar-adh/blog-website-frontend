import "../App.css"
import {useState} from "react"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const options = ["Course1","Course2","Course3"]
    function handleNewsClick(){

        setIsOpen(prevVal => !prevVal)
    }

    return (
        <div className="navbar">
                <button className="navelement">News</button>
                <button className="navelement">Showcase</button>
                <button className="navelement">Hosting</button>
                <button className="navelement">Extend</button>
                <button className="navelement" onClick={handleNewsClick}>Learn</button>
                {isOpen && (
                    <div className="Buttons">
                    {options.map(option => (
                        <button key={option} onClick={() => console.log(option)}>
                            {option}
                        </button>
                    ))}
                </div>
                )}
                <button className="navelement">Community</button>
                <button className="navelement">About</button>
        </div>
    )
}