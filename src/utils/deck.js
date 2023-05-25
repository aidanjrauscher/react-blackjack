export default function buildDeck(){
    const suits = ["clubs","diamonds","hearts","spades"]
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    const nums = Array.from(Array(53).keys()).slice(1)

    const cards = nums.map((num)=>{
    return {
        rank: ranks[(num % 13)],
        suit: suits[Math.ceil(num/13)-1],
        value: ((num % 13) + 1) < 11 ? ((num % 13) + 1) : 10,
        hand: null
    }
    })
    const shuffled = cards.sort(() => Math.random() - 0.5)
    return shuffled
}