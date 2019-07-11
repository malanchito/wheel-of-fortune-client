import * as React from 'react'
import GameScreen from './GameScreen'

export default function Game(props) {
   
        return (
            <div>
                 <GameScreen />
                <h3>{props.word}</h3>
                <i className="Clue">{props.clue}</i>
                <h1 className="Guessed">{props.puzzle}</h1>
                {props.guessed.map(letter =>
                <button type="submit" value={letter} key={letter} onClick={props.onSubmit}>{letter}</button>
                )}
               
            </div>
            )
    
}