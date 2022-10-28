import "./searchBar.css"
import {useState} from "react";

function SearchBar({fetchData}) {
    const [inputValue, setInputValue] = useState("")
    return(
        <div className="searchBar">
            <input
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value)}
                placeholder="Digite uma palavra:"
                type="text"/>
            <button onClick={() => fetchData(inputValue)}>Search</button>
        </div>
);}

export default SearchBar;