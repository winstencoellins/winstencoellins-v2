import Image from "next/image"
import Link from "next/link"

import instagram from '@/public/svgs/instagram.svg'
import linkedin from '@/public/svgs/linkedin.svg'
import github from '@/public/svgs/github.svg'

export default function Hero() {
    return (
        <div className="my-10">
            <Link href='/' className="text-3xl">Winsten Coellins</Link>
            <p className="my-4 text-lg">Associate Software Engineer</p>
            <p className="text-slate-300 text-sm">I build web applications, serve, and mentoring.</p>

            <div className="flex flex-row my-4">
                <Image src={instagram} alt='instagram' width={25} height={25} className="mr-3"/>
                <Image src={linkedin} alt='instagram' width={25} height={25} className="mr-3"/>
                <Image src={github} alt='instagram' width={25} height={25} className="mr-3"/>
            </div>
        </div>
    )
}