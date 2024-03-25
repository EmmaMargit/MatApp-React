// Koden för Input components som kommer kopplas till headern 
import { useState, useRef } from 'react';

function InputField ({onSearch}){
    // Vill att 'food' ska vara tom så blir en tom sträng
    const[food, setFood] = useState("");
    const searchInput = useRef()

    // Hur ska nedanstående hämtas/skickas
    // searchInput.current.value
    const searchHandler = () => {
        setFood(searchInput.current.value)
        onSearch(searchTerm);
    }

    return (
        <div className="form_Container">
            <input 
            id= "searchInput"
            type="text" 
            ref={searchInput} // Använder ref-attributet
            placeholder='Sök efter maträtter' />

            <button id="search-btn" onClick={searchHandler}>Sök</button>
        </div>
    )
}

export default InputField;

