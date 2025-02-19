
export default function Header(){
    return(
        <header className="bg-green-500 p-5">
            <h1 className="text-white text-2xl text-center">Zapmini</h1>
            <nav>
                <ul className="flex justify-center list-none gap-5">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Sobre</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}