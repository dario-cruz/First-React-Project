import React from "react";

function RandoElement() {
    const listItems = ['Apple', 'Bananna', 'Orange', 'Guava', 'Pear']

    return (
        <div>
            <h1>Test title</h1>
            <ol className="test-list">
                {listItems.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ol>
            <svg >
               <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
                <input type="text" />
            </form>
        </div>
    )
}

export default RandoElement
