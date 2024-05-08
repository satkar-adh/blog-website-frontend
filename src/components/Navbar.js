import axios from "axios";
import "../App.css"
import {useState} from "react"
import SearchResults from './SearchComponents';

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const options = ["Long","Medium","Short"]
    const [query, setQuery] = useState("")
    const [searchItems, setSearchItems] = useState(null)
    function handleNewsClick(){

        setIsOpen(prevVal => !prevVal)
    }

    const fetchData = async () => {
        const result = await axios.get(`http://localhost:3000/crud/search/${query}`)
        if (result){
            setSearchItems(result.data)
        }else{
            console.log("NO REULTS FOUND")
        }
    }

    const handleQuery = (e)=>{
        setQuery(e.target.value)
        e.preventDefault();
        if (e.target.value.length>2){
            fetchData()
        }
        else {
            setSearchItems([]);
        }
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
                    <input type="text" placeholder="Search..." className="search-input" onChange={handleQuery}/>
                    {searchItems && searchItems.length > 0 && <SearchResults searchItems={searchItems} />}
                </div>
                {/* <div className="searchedItems">
                    {searchItems && searchItems.length > 0 ? (
                        <ul>
                            {searchItems.map(item => (
                                <li key={item._id}>{item.title}</li>
                            ))}
                        </ul>
                    ) : (
                        query.length > 2 && <p>No results found.</p>  // Feedback for no results
                    )}
                </div> */}
        </div>
    )
}