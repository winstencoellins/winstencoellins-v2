import Link from "next/link";

export default function Footer() {
    function currentYear() {
        let date = new Date()

        return date.getFullYear()
    }

    return (
        <div className="my-20 text-slate-300 text-sm font-thin">
            Coded in <Link href='/' className="text-white font-normal">Visual Studio Code</Link>. Built with <Link href='' className="text-white font-normal">Next.js</Link> and <Link href='' className="text-white font-normal">Tailwind CSS</Link>, deployed with <Link href='' className="text-white font-normal">Vercel</Link> by Winsten Coellins &copy; {currentYear()}.
        </div>
    )
}