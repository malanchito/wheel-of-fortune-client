import * as React from 'react'

export default function Game(props) {

    return (
        <div>

            <h3>{props.word}</h3>
            <i className="Clue">{props.clue}</i>
            <h1 className="Guessed">{props.puzzle}</h1>
            {props.guessed.map(letter =>
                <button
                    type="submit"
                    value={letter}
                    key={letter}
                    onClick={props.onSubmit}>{letter}
                </button>
            )}

        </div>
    )

}