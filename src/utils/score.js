export default function scoreHand(cards){
    let score = cards.reduce((acc, curr)=>(
        acc+curr.value
    ), 0)
    //handle cases where ace = 11
    if(cards.some((card)=>(card.rank == "A")) && score<12){
        score+=10
    }
    return score
}