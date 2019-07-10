import * as React from 'react'

export default function Word(props) {
   
        return (
            <div>
                <h3>{props.word}</h3>
                <i className="Clue">{props.clue}</i>
                <h1 className="Guessed">{props.guessed}</h1>
                {props.guessed.map(letter =>
                <button type="submit" value={letter} onClick={props.onSubmit}>{letter}</button>
                )}
            </div>

            )
    
}