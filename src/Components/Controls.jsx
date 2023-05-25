import buildDeck from "../utils/deck"

export default function Controls({game, setGame}){

    const handleNewGame = ()=>{
        const deck = buildDeck()
        const dealerCards = deck.splice(0,2)
        const playerCards = deck.splice(0,2)
        setGame({
            deck: deck, 
            dealerHand: dealerCards,
            dealerScore: 0,
            dealerDone: false,
            playerHand: playerCards,
            playerScore: 0,
            playerDone: false,
            over: false,
            winner: "",
            dealerTurn: false
        })
    }

    const handleHit = ()=>{
        const deck = game.deck
        const nextCard = deck.splice(0,1)
        const newPlayerHand = game.playerHand.concat(nextCard)
        setGame({
            ...game,
            deck: deck,
            playerHand: newPlayerHand,
            dealerTurn: true
        })
    }

    const handleStand=()=>{
        setGame({
            ...game,
            playerDone: true, 
            dealerTurn: true,
        })
    }

    return(
        <div className="flex flex-col gap-2 mb-2">
            <div className="flex flex-row gap-2">
                <button 
                    disabled={game.over || (!game.dealerDone && game.dealerTurn) || game.playerDone}
                    onClick={handleHit}
                    className={`rounded-md text-white text-xl font-semibold bg-blue-600 px-2 py-1 w-24 hover:opacity-80 ${game.over ? "opacity-80" : ""}`}
                >
                    Hit
                </button>
                <button 
                    disabled={game.over || (!game.dealerDone && game.dealerTurn) || game.playerDone}
                    onClick={handleStand}
                    className={`rounded-md text-white text-xl font-semibold bg-blue-600 px-2 py-1 w-24 hover:opacity-80 ${game.over ? "opacity-80" : ""}`}
                >
                    Stand
                </button>
            </div>
            <button 
                onClick={handleNewGame}
                className="rounded-md text-white text-xl font-semibold bg-red-600 px-2 py-1 hover:opacity-80"
            >
                New Game
            </button>
        </div>
    )
}