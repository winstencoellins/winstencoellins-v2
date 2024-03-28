import Link from "next/link"

export default function About() {


    return (
        <div className="my-20">
            <h1 className="text-sm my-10 tracking-widest">ABOUT</h1>

            <p className="text-slate-300 my-5">
                Back in 2020, I decided to open my own technology education company with my friend in Medan, Indonesia. Focusing on teaching high school students to get their understanding and interest in the field of technology.
            </p>

            <p className="text-slate-300 my-5">
                We started with an only enough knowledge of technology back then as we are still continuing our study in University by teaching the basics of programming to high school students.
            </p>

            <p className="text-slate-300 my-5">
                Fast forward today, after graduating from University in the United States, did some work in <Link href='' className="text-white">non-profit organization</Link> and <Link href='' className="text-white">financial technology company</Link>, and coming back home. My friend and I continue the dreams of establishing our own technology education company that now developed to not only teaching high school students, but also University students in Medan. Later on, we called this project as <Link href="" className="text-white">ProjectX MDN</Link>.
            </p>
            
            <p className="text-slate-300 my-5">
                Currently, I am also working full-time as a Software Developer in an <Link href='/' className="text-white">IT Consulting</Link> company in Medan.
            </p>
        </div>
    )
}