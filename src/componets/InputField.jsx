// Koden för Input components som kommer kopplas till headern 
import { useState, useRef } from 'react';

function InputField ({}){
    // Vill att 'food' ska vara tom så blir en tom sträng
    const[food, setFood] = useState("");
    const searchInput = useRef()

    return (
        <div>
            <form className="form_Container">
                {/* Istället för onChange så använder vi useRef */}
                <input 
                id= "searchInput"
                type="text" 
                value={food}
                // Använd ref-attributet:
                ref={searchInput}
                placeholder='Sök efter maträtt' />

                <button id="search-btn" type='submit'>Sök</button>
            </form>
        </div>
    )
}

export default InputField;

