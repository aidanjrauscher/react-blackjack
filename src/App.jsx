import { useState } from 'react'
import Table from './Components/Table'
import Label from './Components/Label'
import Controls from './Components/Controls'
import Hand from './Components/Hand'
import useGameScore from './hooks/useGameScore'
import useGameSetup from './hooks/useGameSetup'
import useGameDealer from './hooks/useGameDealer'

function App() {
  const [game, setGame] = useState({
    deck: [],
    playerHand: [],
    playerScore: 0,
    playerDone: false,
    dealerHand: [],
    dealerScore: 0,
    dealerDone: false,
    over: false,
    winner: "",
    dealerTurn: false,
  })

  // GAME LOGIC
  useGameSetup(game, setGame)
  useGameScore(game, setGame)
  useGameDealer(game, setGame)

  return (
    <>
      <Label text="Dealer"></Label>
      <Table 
        label={game.over ? game.winner : ""}
        dealer={<Hand cards={game.dealerHand} dealer show={game.playerHand?.length>2 || game.dealerHand?.length>2}/>}
        player={<Hand cards={game.playerHand}/>}
        over={game.over}
      />
      <Label text="Player"></Label>
      <Controls game={game} setGame={setGame}></Controls>
    </>
  )
}

export default App
