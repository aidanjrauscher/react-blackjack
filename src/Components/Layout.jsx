export default function Layout({children}){
    return(
        <div className="flex flex-col gap-4 w-screen h-screen  bg-green-600 justify-center items-center">
            {children}
        </div>
    )
}
