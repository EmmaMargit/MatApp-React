// Koden för Input components som kommer kopplas till headern 
import { useState, useRef } from 'react';


function InputField ({}){
    // Vill att 'food' ska vara tom så blir en tom sträng
    const[food, setFood] = useState("");
    const searchInput = useRef()

    return (
        <div>
            <form>
                {/* onChange är en attribut som utför en funktion när något händer med inputen */}
                {/* Vi tar emot en händelse(event) och sätter dess värde till variabeln food. */}
                <input 
                id= "searchInput"
                type="text" 
                value={food}
                ref={searchInput}
                onChange={(e) => setFood(e.target.value)}
                placeholder='Sök efter maträtt' />

                <button id="search-btn" type='submit'>Sök</button>
            </form>
        </div>
    )
}

export default InputField;

