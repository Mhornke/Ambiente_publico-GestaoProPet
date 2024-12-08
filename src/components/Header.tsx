"use client";
import Link from "next/link";


export function Header() {
    

    return (
        <nav className="bg-gray-400 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        Seu <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                        Pet</span>.adota
                    </h1>
                    <img
                                className="w-full h-full object-cover"
                                src="/logoSVG.svg"
                                alt="logo"
                                width={200}
                                height={300}
                                
                            />
                </Link>
                            <Link href="https://medium.com/@rodrigogastaud97/gest%C3%A3opropet-3d482b4235ac" className="font-bold text-blue-600 dark:text-blue-500 hover:underline">
                                Sobre nós
                            </Link>
                
                
            
            </div>
        </nav>  
    );
}

