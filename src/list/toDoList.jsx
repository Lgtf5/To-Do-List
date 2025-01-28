import React, { useState } from "react";


function List() {
    const [foods, setFoods] = useState(["apple", "banana", "orange",]);

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (<div>
                <h2>List of Food</h2>
                <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}


export default List