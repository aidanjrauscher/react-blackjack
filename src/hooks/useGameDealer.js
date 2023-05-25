import { useEffect } from "react"

export default function useGameDealer(game, setGame){
    useEffect(()=>{
        setTimeout(()=>{
            if(game.dealerTurn &&  game.dealerScore<17 && game.playerScore<22 && !game.dealerDone){
                const deck = game.deck
                const nextCard = deck.splice(0,1)
                const newDealerHand = game.dealerHand.concat(nextCard)
                setGame({
                    ...game,
                    deck: deck,
                    dealerHand: newDealerHand,
                    dealerTurn: game.playerDone
                })
            }
            else if(game.dealerTurn && game.dealerScore>16){
                setGame({
                    ...game,
                    dealerDone: true,
                    dealerTurn: game.playerDone
                })
            }
        }, 2000)
    },[game.playerScore, game.playerDone, game.dealerScore])
}