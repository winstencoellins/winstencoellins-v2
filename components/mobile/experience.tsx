import Link from "next/link";
import Image from "next/image";

import arrowUpRight from '@/public/svgs/arrow-up-right.svg'

export default function Experience() {
    const experiences = [
        {start: 'Jul 2023', end: 'PRESENT', title: 'Outsystems Developer', company: 'Wilmar Consultancy Services', desc: 'Lorem ipsum', id: 1, stack: ['Outsystems', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'SQL']},
        {start: 'Jun 2023', end: 'PRESENT', title: 'Software Engineer, Mentor', company: 'ProjectX MDN', desc: 'Lorem ipsum', id: 2, stack: ['Next Js', 'React Js', 'HTML', 'Tailwind CSS', 'PostgreSQL', 'Express', 'Python']},
        {start: 'Nov 2022', end: 'Apr 2023', title: 'Software Engineer', company: 'Umify', desc: 'Lorem ipsum', id: 3, stack: ['Next Js', 'React Js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Prisma', 'Github', 'Agile', 'Typescript', 'Stripe']},
        {start: 'Aug 2022', end: 'Apr 2023', title: 'Web Developer', company: 'Collaboration 4 Good', desc: 'Lorem ipsum', id: 4, stack: ['JavaScript', 'HTML', 'Tailwind CSS', 'Expression Engine (CMS)', 'SQL']},
        {start: 'Oct 2021', end: 'May 2022', title: 'IT Assistant, Accessibility', company: 'University of Wisconsin - Madison', desc: 'Lorem ipsum', id: 5, stack: ['HTML', 'Networking', 'File Conversion', 'Hardware', 'Process Flow']},
        
    ]

    function displayStack(idx: number) {
        let stack = experiences[idx - 1].stack

        return (
            <div className="flex flex-row flex-wrap">
                {
                    stack.map((s) => (
                        <p key={s} className="bg-orange-400/10 text-orange-300 w-fit px-3 py-1 text-xs rounded-full mr-2 mt-2">{s}</p>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="my-20">
            <h1 className="my-10 text-sm tracking-widest">EXPERIENCE</h1>

            <div className="my-10">
                {
                    experiences.map((exp) => (
                        <div key={exp.id} className="my-10">
                            <p className="text-slate-300 text-xs my-2">{exp.start} &mdash; {exp.end}</p>
                            <h3 className="my-2 text-lg">{exp.title} · {exp.company}</h3>
                            <p className="my-2 text-slate-300">{exp.desc}</p>
                            {
                                displayStack(exp.id)
                            }
                        </div>
                    ))
                }
            </div>

            <Link href='' className="flex flex-row hover:text-orange-300 group">View Full Résumé <Image src={arrowUpRight} alt='arrow' height={15} width={15} className="ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:fill-current group-hover:text-orange-300 duration-100"/></Link>
        </div>
    )
}