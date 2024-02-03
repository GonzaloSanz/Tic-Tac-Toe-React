const GameOver = ({ winner, onRestart }) => {
    return <div id="game-over">
        <h2>¡La partida ha terminado!</h2>

        {winner && <p>¡{winner} ha ganado!</p>}
        {!winner && <p>¡Es un empate!</p>}

        <p>
            <button
                onClick={() => onRestart()}
            >Volver a jugar</button>
        </p>
    </div>
}

export default GameOver;