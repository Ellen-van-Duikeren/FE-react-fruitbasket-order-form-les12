// de radio button werkt nog niet goed, je kan nu wel togglen, maar hij geeft als waarde in de formstate alleen maar terug true en niet of dat overdag of 's avonds is.

// de reset button werkt nog niet; ik weet niet hoe ik alles weer op 0 krijg of alles weghaal

import React, {useState} from 'react';
import './App.css';
import Fruit from "./components/Fruit";
import Button from "./components/Button";
import Label from "./components/LabelInput";

function App() {

    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [kiwi, setKiwi] = useState(0);
    const [apple, setApple] = useState(0);

    function reset() {
        setBanana(0);
        setKiwi(0);
        setApple(0);
        setStrawberry(0);
    }

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        postalCode: "",
        frequency: "iedere week",
        radio: false,
        comments: "",
        conditions: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        console.log("Strawberries: " + strawberry);
        console.log("Bananas: " + banana);
        console.log("Kiwis: " + kiwi);
        console.log("Apples: " + apple);
    }

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="total">
                <div className="fruits">
                    <h2>Jouw fruit</h2>
                    <article>
                        <Fruit
                            emoji="🍓"
                            fruitName="Strawberries"
                            type="button"
                            fruitValue={strawberry}
                            isDisabled={strawberry === 0}
                            decrement={() => setStrawberry(strawberry => strawberry - 1)}
                            increment={() => setStrawberry(strawberry => strawberry + 1)}
                        />
                    </article>

                    <article>

                        <Fruit
                            emoji="🍌"
                            fruitName="Bananas"
                            type="button"
                            fruitValue={banana}
                            isDisabled={banana === 0}
                            decrement={() => setBanana(banana => banana - 1)}
                            increment={() => setBanana(banana => banana + 1)}
                        />
                    </article>

                    <article>
                        <Fruit
                            emoji="🥝"
                            fruitName="Kiwis"
                            type="button"
                            fruitValue={kiwi}
                            isDisabled={kiwi === 0}
                            decrement={() => setKiwi(kiwi => kiwi - 1)}
                            increment={() => setKiwi(kiwi => kiwi + 1)}
                        />
                    </article>

                    <article>
                        <Fruit
                            emoji="🍎"
                            fruitName="Apples"
                            type="button"
                            fruitValue={apple}
                            isDisabled={apple === 0}
                            decrement={() => setApple(apple => apple - 1)}
                            increment={() => setApple(apple => apple + 1)}
                        />
                    </article>

                    <Button
                        id="resetButton"
                        type="button"
                        handleClick={() => reset()}
                    >Reset</Button>
                </div>

                {/*form.................................*/}

                <form onSubmit={handleSubmit}>

                    <Label
                        htmlFor="firstName"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formState.firstName}
                        onChange={handleFormChange}
                    >
                        Voornaam
                    </Label>


                    <Label
                        htmlFor="firstName"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formState.firstName}
                        onChange={handleFormChange}
                    >
                        Achternaam
                    </Label>

                    <Label
                        htmlFor="age"
                        type="number"
                        name="age"
                        id="age"
                        value={formState.age}
                        min="0"
                        max="120"
                        onChange={handleFormChange}
                    >Leeftijd</Label>

                    <Label
                        htmlFor="postalCode"
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        value={formState.postalCode}
                        onChange={handleFormChange}
                    >
                        Postcode
                    </Label>


                    <label htmlFor="frequency" id="frequencyId">
                        Bezorgfrequentie
                        <select
                            name="frequency"
                            id="frequency">
                            <option value="iedere week" className="option">iedere week</option>
                            <option value="om de week" className="option">om de week</option>
                            <option value="maandelijks" className="option">iedere maand</option>
                            onChange={handleFormChange}
                        </select>
                    </label>

                    <div id="radioButtons">
                        <Label
                            type="radio"
                            name="radio"
                            value="day"
                            checked={formState.day}
                            onChange={handleFormChange}
                            text="overdag"
                        >
                        </Label>

                        <Label
                            type="radio"
                            name="radio"
                            value="afternoon"
                            checked={formState.afternoon}
                            onChange={handleFormChange}
                            text="'s avonds"
                        >
                        </Label>
                    </div>


                    <label htmlFor="comments" id="commentsId">
                        Opmerking
                        <textarea
                            type="text"
                            name="comments"
                            id="comments"
                            rows="4"
                            cols="50"
                            value={formState.comments}
                            onChange={handleFormChange}
                        ></textarea>
                    </label>

                    <Label
                        type="checkbox"
                        name="conditions"
                        id="conditions"
                        checked={formState.conditions}
                        onChange={handleFormChange}
                        text={"Ik ga akkoord met de voorwaarden"}
                    >
                    </Label>

                    <Button
                        id="submitButton"
                        type="submit"
                    >
                        Submit
                    </Button>


                </form>
            </div>
        </>
    )
        ;
}

export default App;


