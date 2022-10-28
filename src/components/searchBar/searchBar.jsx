import "./searchBar.css"
import {useState} from "react";

function SearchBar({fetchData}) {
    const [inputValue, setInputValue] = useState("")
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            fetchData(inputValue)
        }
    }

    return(
        <div className="searchBar">
            <input
                onKeyPress={handleKeyPress}
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value)}
                placeholder="Digite uma palavra:"
                type="text"/>
        </div>
);}

export default SearchBar;