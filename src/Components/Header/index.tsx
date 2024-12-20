export default function Header() {
    return (
        <div className="bg-black flex items-center justify-between h-16 px-4 w-full fixed top-0 z-50">
            <h1 className="text-white font-bold text-lg"><a href="/">Home</a></h1>

            <ul className="flex gap-4">
               
                <li>
                    <a href="#" className="text-white hover:underline">
                        Sobre
                    </a>
                </li>
                <li>
                    <a
                        href="/document/curriculo.pdf"
                        download="curriculo.pdf"
                        className="text-white hover:underline"
                    >
                        Currículo
                    </a>
                </li>
            </ul>
        </div>
    );
}
