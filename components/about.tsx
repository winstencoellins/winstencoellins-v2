import Link from "next/link"

export default function About() {
    return (
        <div className="my-20 scroll-my-20" id="about">
            <h1 className="my-10 text-sm tracking-widest lg:hidden">ABOUT</h1>

            <p className="text-slate-300 my-5 font-thin">
                Back in 2020, I decided to open my own technology education company with my friend in Medan, Indonesia. Focusing on teaching high school students to get their understanding and interest in the field of technology.
            </p>

            <p className="text-slate-300 my-5 font-thin">
                We started with only enough knowledge of technology back then as we were on our studies at University by teaching the basics of programming to high school students.
            </p>

            <p className="text-slate-300 my-5 font-thin">
                Fast forward to today, after graduating from University in the United States, did some work in a <Link href='https://www.linkedin.com/company/collab4good' className="text-white font-normal hover:text-cyan-300">non-profit organization</Link> and <Link href='https://www.linkedin.com/company/umify-io/?originalSubdomain=sg' className="text-white font-normal hover:text-cyan-300">financial technology company</Link>, and came back home. My friend and I continue the dreams of establishing our own technology education company that now developed to not only teach high school students but also University students in Medan. Later on, we called this project<Link href="" className="text-white font-normal hover:text-cyan-300">ProjectX MDN</Link>.
            </p>
            
            <p className="text-slate-300 my-5 font-thin">
                Currently, I am also working full-time as a Software Developer in an <Link href='https://www.linkedin.com/company/wilmar-consultancy-services/' className="text-white font-normal hover:text-cyan-300">IT Consulting</Link> company in Medan.
            </p>
        </div>
    )
}