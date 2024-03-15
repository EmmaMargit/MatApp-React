// Koden för Input components som kommer kopplas till headern 
import { useState } from 'react';

function InputField (){
    // Vill att 'food' ska vara tom så blir en tom sträng
    const[food, setFood]=useState("")

    // Funktionen för inputen när något händer 'trigged' 
    function handleChange() {
        console.log('Change occured');
    }

    return (
        <div>
            <form>
                {/* onChange är en attribut som utför en funktion när något händer med 
                inputen */}
                <input onChange={handleChange} type="text" value="" />
            </form>
        </div>
    )
}

export default InputField;