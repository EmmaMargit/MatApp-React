import React, { useState, useEffect } from 'react';

function ShowDetail({ recipes }) {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!recipes) return; // Om recepten inte är tillgängliga, avsluta här
        setLoading(true); // Sätt laddningsstatus till true när vi börjar hämta detaljer

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipes}`)
            .then(response => response.json())
            .then(data => {
                if (data.meals && data.meals.length > 0) {
                    setRecipe(data.meals[0]); // Sätt receptet om det finns
                } else {
                    setRecipe(null); // Annars sätt receptet till null
                }
                setLoading(false); // Sätt laddningsstatus till false när hämtningen är klar
            })
            .catch(error => {
                console.error('Error fetching meal details:', error);
                setLoading(false); // Sätt laddningsstatus till false vid fel
            });
    }, [recipes]);

    // Om vi fortfarande hämtar detaljer, visa laddningsindikator
    if (loading) {
        return <p>Loading...</p>;
    }

    // Om receptet finns, returnera null (inget att skriva ut)
    if (recipe) {
        return null;
    }
}

export default ShowDetail;


