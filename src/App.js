// de radio button werkt nog niet goed, je kan nu wel togglen, maar hij geeft als waarde in de formstate alleen maar terug true en niet of dat overdag of 's avonds is.

// de reset button werkt nog niet; ik weet niet hoe ik alles weer op 0 krijg of alles weghaal

import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

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
            <div className="fruits">
            <h1>Fruitmand bezorgservice</h1>
            <article>
                <Counter
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
                <Counter
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
                <Counter
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
                <Counter
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
                <h2>Jouw gegevens
                </h2>
                <label htmlFor="firstName">
                    Voornaam
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formState.firstName}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="lastName">
                    Achternaam
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formState.lastName}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="age">
                    Leeftijd
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formState.age}
                        min="0"
                        max="120"
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="postalCode">
                    Postcode
                    <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        value={formState.postalCode}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="frequency" id="frequencyId">
                    Bezorgfrequentie
                    <select
                        name="frequency"
                        id="frequency">
                        <option value="iedereWeek" className="option">iedere week</option>
                        <option value="omDeWeek" className="option">om de week</option>
                        <option value="maandelijks" className="option">iedere maand</option>
                        onChange={handleFormChange}
                    </select>

                    <div id="radioButtons">
                        <label htmlFor="day">
                            <input
                                type="radio"
                                name="radio"
                                value="day"
                                checked={formState.day}
                                onChange={handleFormChange}
                            />Overdag
                        </label>
                        <label htmlFor="afternoon">
                            <input
                                type="radio"
                                name="radio"
                                value="afternoon"
                                checked={formState.afternoon}
                                onChange={handleFormChange}
                            />'s Avonds
                        </label>
                    </div>
                </label>

                <label htmlFor="comments" id="commentsId">
                    Opmerking
                    <textarea
                        type="text"
                        name="comments"
                        id="comments"
                        rows="4"
                        cols="70"
                        value={formState.comments}
                        onChange={handleFormChange}
                    ></textarea>
                </label>

                <label htmlFor="conditions">
                    <input
                        type="checkbox"
                        name="conditions"
                        id="conditions"
                        checked={formState.conditions}
                        onChange={handleFormChange}
                    /> Ik ga akkoord met de voorwaarden
                </label>

                <Button
                    id="submitButton"
                    type="submit"
                >
                    Submit
                </Button>


            </form>
        </>
    )
        ;
}

export default App;


