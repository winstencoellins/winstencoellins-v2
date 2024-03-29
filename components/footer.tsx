import Link from "next/link";

export default function Footer() {
    function currentYear() {
        let date = new Date()

        return date.getFullYear()
    }

    return (
        <div className="my-20 text-slate-300 text-sm font-thin">
            Coded in <Link href='https://code.visualstudio.com' className="text-white font-normal hover:text-cyan-300">Visual Studio Code</Link>. Built with <Link href='https://nextjs.org' className="text-white font-normal">Next.js</Link> and <Link href='https://tailwindcss.com' className="text-white font-normal">Tailwind CSS</Link>, deployed with <Link href='https://vercel.com' className="text-white font-normal">Vercel</Link> by Winsten Coellins &copy; {currentYear()}.
        </div>
    )
}