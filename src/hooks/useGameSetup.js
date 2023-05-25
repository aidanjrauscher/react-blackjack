import { useEffect } from "react"
import buildDeck from "../utils/deck"
import scoreHand from "../utils/score"

export default function useGameSetup(game, setGame){
    useEffect(()=>{
        const deck = buildDeck()
        const dealerCards = deck.splice(0,2)
        const dealerScore = scoreHand(dealerCards)
        const playerCards = deck.splice(0,2)
        const playerScore = scoreHand(playerCards)
        setGame({
            ...game,
            deck: deck, 
            dealerHand: dealerCards,
            dealerScore: dealerScore,
            playerHand: playerCards,
            playerScore: playerScore
        })
    }, [])
}