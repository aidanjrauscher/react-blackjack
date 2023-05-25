import { useEffect } from "react"
import scoreHand from "../utils/score"
import useGameDealer from "./useGameDealer"

export default function useGameScore(game, setGame){
    useEffect(()=>{
        if(game.playerHand?.length==0 || game.dealerHand?.length==0){
            return
        }
        const playerScore = scoreHand(game.playerHand)
        const dealerScore = scoreHand(game.dealerHand)
        let over = false
        let winner = ""
        if(playerScore>21){
            over = true
            winner="DEALER"
        }
        else if(dealerScore>21){
            over= true
            winner="PLAYER"
        }
        else if(dealerScore==21 && playerScore==21){
            over=true
            winner="DEALER"
        }
        else if(dealerScore==21){
            over=true,
            winner="DEALER"
        }
        else if(playerScore==21 && game.dealerDone){
            over=true,
            winner="PLAYER"
        }
        else if(game.playerDone && game.dealerDone){
            over = true
            winner = playerScore>dealerScore ? "PLAYER" : "DEALER"
        }
        setGame({
            ...game,
            dealerScore: dealerScore,
            playerScore: playerScore,
            over: over,
            winner: winner
        })
    }, [game.playerHand, game.dealerHand, game.dealerDone, game.playerDone])
}