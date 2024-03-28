import { Inter } from "next/font/google"

import Image from "next/image"
import Link from "next/link"

import instagram from '@/public/svgs/instagram.svg'
import linkedin from '@/public/svgs/linkedin.svg'
import github from '@/public/svgs/github.svg'

const inter = Inter({ subsets: ["latin"] })

export default function Hero() {
    return (
        <div className="my-10 lg:h-screen lg:w-fit lg:fixed lg:mt-20">
            <Link href='/' className={`text-4xl font-semibold tracking-tight text-slate-200 lg:text-5xl ${inter.className}`}>Winsten Coellins</Link>
            <p className={`mt-3 text-lg tracking-tight text-slate-200 lg:text-xl ${inter.className}`}>Associate Software Engineer</p>
            <p className="text-slate-300 max-w-xs mt-4 leading-normal font-extralight lg:text-lg">I build web applications, serve, and mentoring.</p>

            <div className="hidden lg:flex lg:flex-col lg:my-16">
                <Link className="group flex items-center py-3 w-fit" href=""><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></Link>
                <Link className="group flex items-center py-3 w-fit" href=""><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></Link>
                <Link className="group flex items-center py-3 w-fit" href=""><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Project</span></Link>

            </div>

            <div className="flex flex-row my-4 w-fit lg:inset-x-100 lg:bottom-0 lg:my-20 lg:fixed">
                <Image src={instagram} alt='instagram' width={30} height={30} className="mr-3 lg:mr-6"/>
                <Image src={linkedin} alt='instagram' width={30} height={30} className="mr-3 lg:mr-6"/>
                <Image src={github} alt='instagram' width={30} height={30} className="mr-3 lg:mr-6"/>
            </div>
        </div>
    )
}