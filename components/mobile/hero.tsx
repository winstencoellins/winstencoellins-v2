import { Inter } from "next/font/google"

import Image from "next/image"
import Link from "next/link"

import instagram from '@/public/svgs/instagram.svg'
import linkedin from '@/public/svgs/linkedin.svg'
import github from '@/public/svgs/github.svg'

const inter = Inter({ subsets: ["latin"] })

export default function Hero() {
    return (
        <div className="my-10">
            <Link href='/' className={`text-4xl font-semibold tracking-tight text-slate-200`}>Winsten Coellins</Link>
            <p className={`mt-3 text-lg tracking-tight text-slate-200`}>Associate Software Engineer</p>
            <p className="text-slate-300 max-w-xs mt-4 leading-normal font-extralight">I build web applications, serve, and mentoring.</p>

            <div className="flex flex-row my-4">
                <Image src={instagram} alt='instagram' width={25} height={25} className="mr-3"/>
                <Image src={linkedin} alt='instagram' width={25} height={25} className="mr-3"/>
                <Image src={github} alt='instagram' width={25} height={25} className="mr-3"/>
            </div>
        </div>
    )
}