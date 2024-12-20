import Image from "next/image";

export default function Feed() {
    return (
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-600 min-h-screen flex flex-col items-center justify-start p-8 gap-8">
            {/* Texto e Foto lado a lado */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full mt-28 px-4 md:px-16">
                {/* Texto com animação */}
                <div className="text-white text-lg md:text-3xl font-bold max-w-md leading-relaxed opacity-0 translate-y-10 animate-fade-in w-full md:w-2/3 ml-0 md:ml-44">
                    Olá! Meu nome é Bruno Rodrigues, tenho 27 anos, sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade Cearense, programador fullStack e sou apaixonado por tecnologia. Sempre tive curiosidade por entender como as coisas funcionam, o que despertou em mim o desejo de explorar o mundo da programação.
                </div>

                {/* Cartão com animação */}
                <div className="transform opacity-0 animate-slide-up rounded-lg">
                    <div className="flex items-center justify-center w-[400px] h-[400px] md:w-[500px] md:h-[600px] rounded-full overflow-hidden shadow-lg bg-gray-800">
                        <Image
                            src="/imagens/perfil1.jpg"
                            alt="Imagem"
                            width={700}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Seção Habilidades */}
            <div className="text-white text-lg md:text-3xl font-bold max-w-4xl leading-relaxed opacity-0 translate-y-10 animate-fade-in mt-60">
                <h1 className="text-center text-4xl">Tecnologias que tenho habilidades</h1>

                <div className="flex flex-wrap gap-8 mt-8 justify-center">
                    {[
                        { name: "JavaScript", image: "/imagens/javascript.png", level: 80 },
                        { name: "CSS", image: "/imagens/css.jpg", level: 85 },
                        { name: "HTML", image: "/imagens/html.png", level: 95 },
                        { name: "Node.js", image: "/imagens/node.jpg", level: 70 },
                        { name: "PostgreSQL", image: "/imagens/postgres.png", level: 65 },
                        { name: "Prisma", image: "/imagens/prisma.png", level: 60 },
                        { name: "TypeScript", image: "/imagens/Typescript.png", level: 80 },
                        { name: "GitHub", image: "/imagens/github.png", level: 80 },
                        { name: "Next.js", image: "/imagens/next.jpg", level: 70 },
                        { name: "React.js", image: "/imagens/react.png", level: 79 },
                        { name: "React Native.js", image: "/imagens/reactnative.png", level: 70 },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center"
                            style={{
                                background: `conic-gradient(
                                    #3b82f6 ${skill.level}%, 
                                    #1e293b ${skill.level}%
                                )`,
                            }}
                        >
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-full h-full object-top object-cover"
                                />
                            </div>

                            <span className="absolute -bottom-7 text-slate-300 text-xs md:text-sm font-semibold">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Redes Sociais */}
            <div className="flex flex-col items-center justify-center mt-60">
                <h1 className="text-white text-lg md:text-3xl font-bold max-w-4xl leading-relaxed opacity-0 translate-y-10 animate-fade-in">Redes Sociais</h1>
                <div className="flex gap-4 mt-4">
                    <a
                        href="https://www.facebook.com/BrunoRodrigues1616/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src="/imagens/facebook.jpeg" alt="facebook" className="w-12 h-12 rounded-full" />
                    </a>
                    <a
                        href="https://www.instagram.com/_bruno.rf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src="/imagens/instagram.jpg" alt="instagram" className="w-12 h-12 rounded-full" />
                    </a>
                    <a
                        href="https://github.com/Bruno-rodrigues-farias"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src="/imagens/github.png" alt="github" className="w-12 h-12 rounded-full" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bruno-rodrigues-farias/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src="/imagens/linkedin.jpeg" alt="linkedin" className="w-12 h-12 rounded-full" />
                    </a>
                </div>
            </div>
        </div>
    );
}
