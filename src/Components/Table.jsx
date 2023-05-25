export default function Table({label, dealer, player, over}){
    return(
        <div className="w-5/6 h-4/5">
            <div className="flex flex-col items-center justify-between p-4 h-full">
                {dealer}
                {over && <h1 className="text-white text-4xl font-bold">{label} WINS</h1>}
                {player}
            </div>
        </div>
    )
}