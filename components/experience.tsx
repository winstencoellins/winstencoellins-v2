import Link from "next/link";
import Image from "next/image";

import arrowUpRight from '@/public/svgs/arrow-up-right.svg'

export default function Experience() {
    const experiences = [
        {start: 'Jul 2023', end: 'PRESENT', title: 'Outsystems Developer', company: 'Wilmar Consultancy Services', desc: 'Maintain an existing Customer Relationship Management (CRM) project for Europe and Singapore users. Work closely with the Singapore business team in migrating data transfer method from the RFC (Remote Function Call) into IDoc (Intermediate Documents) to enhance the business process.', id: 1, stack: ['Outsystems', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'SQL']},
        {start: 'Jun 2023', end: 'PRESENT', title: 'Software Engineer, Mentor', company: 'ProjectX MDN', desc: 'Build an online dashboard for educational purposes with Next.js, and constructing curriculum according to the industries standard. Securing deals with clients to help automate businesses with our custom build technology. Mentoring students from high schools and Universities in Medan for their career path in tech.', id: 2, stack: ['Next Js', 'React Js', 'HTML', 'Tailwind CSS', 'PostgreSQL', 'Express', 'Python']},
        {start: 'Nov 2022', end: 'Apr 2023', title: 'Software Engineer', company: 'Umify', desc: 'Work closely with CEO, Tech Lead, and Product Manager in creating the MVP (Minimum Viable Product) for the web application based on the design in Figma. Migrate codebase from React.js into Next.js. Integrate Stripe payment gateway and Sendgrid cloud based email marketing tools. Performing data migration with Prisma ORM.', id: 3, stack: ['Next Js', 'React Js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Prisma', 'Github', 'Agile', 'Typescript', 'Stripe']},
        {start: 'Aug 2022', end: 'Apr 2023', title: 'Web Developer', company: 'Collaboration 4 Good', desc: 'Work closely with the owner of the non-profit organization in creating landing page for an event that invites more than 500+ visitors. Ensure that the landing page is able to handle high traffic. Make sure the landing page is accessible, and able to give a good experience to users.', id: 4, stack: ['JavaScript', 'HTML', 'Tailwind CSS', 'Expression Engine (CMS)', 'SQL']},
        {start: 'Oct 2021', end: 'May 2022', title: 'IT Assistant, Accessibility', company: 'University of Wisconsin - Madison', desc: 'Work closely with Associate Director in managing, and upgrading the software and hardware of the whole building. Participate in the converting files for accessibility purposes. Maintain networking to decrease the expenses of operational. Create and design a barcode scanning process flow in enhancing the productivity of the office.', id: 5, stack: ['HTML', 'Networking', 'File Conversion', 'Hardware', 'Process Flow']},
        
    ]

    function displayStack(idx: number) {
        let stack = experiences[idx - 1].stack

        return (
            <div className="flex flex-row flex-wrap">
                {
                    stack.map((s) => (
                        <p key={s} className="bg-cyan-400/10 text-cyan-300 w-fit px-3 py-1 text-xs rounded-full mr-2 mt-2">{s}</p>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="my-20 scroll-my-10" id="experience">
            <h1 className="my-10 text-sm tracking-widest lg:hidden">EXPERIENCE</h1>

            <div className="my-10 lg:mb-20">
                {
                    experiences.map((exp) => (
                        <div key={exp.id} className="my-10 lg:flex lg:flex-row lg:cursor-pointer lg:hover:rounded-xl group">
                            <p className="text-slate-500 text-xs my-2 lg:w-1/4 lg:my-1.5">{exp.start} &mdash; {exp.end}</p>
                            <div className="lg:w-3/4">
                                <h3 className="my-2 text-lg hover:text-cyan-300 group w-fit flex flex-wrap lg:my-0 lg:group-hover:text-cyan-300">{exp.title} · <span className="flex ml-1">{exp.company} <Image src={arrowUpRight} alt='arrow' height={15} width={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-100 ml-1 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1" /></span></h3>
                                <p className="my-2 text-slate-300 font-extralight">{exp.desc}</p>
                                {
                                    displayStack(exp.id)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <Link href='' className="flex flex-row hover:text-cyan-300 group w-fit">View Full Résumé <Image src={arrowUpRight} alt='arrow' height={15} width={15} className="ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:fill-current group-hover:text-orange-300 duration-100"/></Link>
        </div>
    )
}