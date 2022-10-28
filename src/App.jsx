import SearchBar from "./components/searchBar/searchBar.jsx"
import './App.css'
import {useState} from "react";

function App() {
    const [data, setData] = useState("")
    async function fetchData(palavra) {
        try {
            const response = await fetch(`https://significado.herokuapp.com/${palavra}`);
            let _data = await response.json();
            _data = _data[0]
            _data.palavra = palavra;
            setData(_data)
        } catch (err) {
            setData({
                err: err,
            })
        }

    }
    return (
    <main className="app">
        <SearchBar fetchData={fetchData}/>
        {data && !data.err &&
            <>
                <h1 className="palavra">{data.palavra}</h1>
                <p className="classe">{data.class}</p>
                <ul className="meanings">
                    <h1>Significados: </h1>
                    {data.meanings.map((mean) => <li>{mean}</li>)}
                </ul>
            </>
        }
        {data.err &&
            <h1 className="error">Não encontrei essa palavra :(</h1>
        }
    </main>
  )
}

export default App
