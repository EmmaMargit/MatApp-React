// Koden för Input components som kommer kopplas till headern 
import { useState, useRef } from 'react';

function InputField (){
    // Vill att 'food' ska vara tom så blir en tom sträng
    const[food, setFood] = useState("");
    const searchInput = useRef()

    // Hur ska nedanstående hämtas/skickas
    // searchInput.current.value
    const searchHandler = () => {
        setFood(searchInput.current.value)
    }

    return (
        <div className="form_Container">
            <input 
            id= "searchInput"
            type="text" 
            // value={food}
            // Använd ref-attributet:
            ref={searchInput}
            placeholder='Sök efter maträtt' />

            <button id="search-btn" onClick={searchHandler}>Sök</button>
        </div>
    )
}

export default InputField;

