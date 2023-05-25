import Card from "./Card";

export default function Hand({cards, dealer, show}){
    return(
    <div className="flex flex-row justify-center">
        {cards.map((card, index)=>(
            (dealer && index==0 && !show) ? 
                <Card key={index} index={index} rank={""} suite={""}/> :
                <Card key={index} index={index} rank={card.rank} suit={card.suit}/>
        ))}
    </div>
)
}