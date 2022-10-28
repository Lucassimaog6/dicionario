import SearchBar from "./components/searchBar/searchBar.jsx"
import './App.css'
import {useState} from "react";

function App() {
    const [data, setData] = useState("")
     async function fetchData(palavra) {
        const response = await fetch(`https://significado.herokuapp.com/${palavra}`);
        setData(await response.json())
    }
    return (
    <main className="app">
        <SearchBar fetchData={fetchData}/>
        {data &&
            <>
                <h1 className="class">Classe: <br/> {data[0]?.class}</h1>
                <ul className="meanings">
                    <h1>Significados: <br/></h1>
                    {data[0]?.meanings.map((meaning) => <li className="meaning_item">{meaning}</li>)}
                </ul>
            </>
        }
    </main>
  )
}

export default App
