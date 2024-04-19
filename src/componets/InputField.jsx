// Koden för Input components som kommer kopplas till headern 
import { useRef } from 'react';

function InputField ({ onSearch, onError }) {
    const searchInput = useRef();

    const searchHandler = () => {
        const searchTerm = searchInput.current.value;
        onSearch(searchTerm, onError); // Skicka med onError till onSearch
    }

    return (
        <div className="form_Container">
            <input 
                id="searchInput"
                type="text" 
                ref={searchInput} 
                placeholder='Sök efter maträtter' 
            />
            <button id="search-btn" onClick={searchHandler}>Sök</button>
        </div>
    )
}

export default InputField;



