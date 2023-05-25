import {BsSuitSpadeFill, BsSuitClubFill, BsSuitDiamondFill, BsSuitHeartFill} from "react-icons/bs"

export default function Card({index, rank, suit}){
    const cardColor = (suit=="diamonds" || suit=="hearts") ? "text-red-600" : "text-black"
    const icons = {
        "diamonds":<BsSuitDiamondFill size={100}/>,
        "hearts": <BsSuitHeartFill size={100}/>,
        "spades": <BsSuitSpadeFill size={100}/>,
        "clubs": <BsSuitClubFill size={100}/>,
    }
    const SuitIcon = suit ? icons[suit]  : ""
    return(
        <>
            <div className={`hidden md:flex relative flex-col bg-white w-[9vw] h-[13vw] rounded-md p-2 border-2 border-black justify-between ${cardColor} z-[${index}] -ml-20 hover:z-50`}>
                <div className="md:text-4xl font-semibold">{rank}</div>
                <div className="self-center">{SuitIcon}</div>
                <div className="md:text-4xl font-semibold self-end rotate-180">{rank}</div>
            </div>
            <div className={`flex md:hidden relative flex-col bg-white w-[9vw] h-[13vw] rounded-md p-2 border-2 border-black justify-center items-center ${cardColor} z-[${index}] -ml-2 hover:z-50`}>
                {SuitIcon}
                <div className="text-sm font-semibold">{rank}</div>
            </div>
        </>
    )
}