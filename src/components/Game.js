import * as React from 'react'

export default function Game(props) {

    if(!props.guessed[0]){
        return (
            <div>
                <h1 className="Guessed">{props.puzzle}</h1>
                <h3 className="End">Round ended</h3>
            </div>
        )
    }

    const otherPlayers = props.players.filter(player=>player.name!==props.currentPlayer)
    if(props.turn===0){
        return (
            <div>
                <h3>{props.word}</h3>
                <i className="Clue">{props.clue}</i>
                <h1 className="Guessed">{props.puzzle}</h1>
                <p className="waiting">Waiting for the other player</p>
                <p className="CurrentPlayer">You are <b>{props.currentPlayer}</b></p>
                <p className="Score">Your score is <b>{props.score}</b></p>
                <p className="Rivals"><b>Rivals</b></p>
                <p className="Wheel">Wheel value is ${props.wheelValue}</p>
                {otherPlayers.map(player=>
                <ul key={player.name}>
                    <li>{player.name}</li>
                    <li>{player.score}</li>
                </ul>
                    )}
            </div>
            )
    }
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
                <form onChange={props.onChange} onSubmit={props.guessWord}>
                    <input
                        type="text"
                        name="answer"
                        value={props.values.answer}
                        onChange={props.onChange}
                    />
                    <input
                     type="submit"
                     value="Solve Puzzle"
                     onSubmit={props.guessWord}
                    />
                </form>
                <p className="CurrentPlayer">You are <b>{props.currentPlayer}</b></p>
                <p className="Score">Your score is <b>{props.score}</b></p>
                <p className="Wheel">Wheel value is ${props.wheelValue}</p>
                <p className="Rivals"><b>Rivals</b></p>
                {otherPlayers.map(player=>
                <ul key={player.name}>
                    <li>{player.name}</li>
                    <li>{player.score}</li>
                </ul>
                    )}
            </div>
            )
    
}