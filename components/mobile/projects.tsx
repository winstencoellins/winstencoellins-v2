import Image from "next/image"
import Link from "next/link"

import calculator from '@/public/images/calculator-app.png'
import arrowUpRight from '@/public/svgs/arrow-up-right.svg'


export default function Projects() {
    const projects = [
        {id: 1, title: 'IP Address Tracker', desc: 'asdf', link: 'https://ip-address-tracker-coellins.vercel.app/', stack: ['React Js', 'CSS', 'Leaflet Js', 'Geolocation API'], 'img': calculator},
        {id: 2, title: 'Calculator App', desc: 'asdf', link: 'https://winstencoellins.github.io/calculator-app/', stack: ['HTML', 'CSS', 'JavaScript'], 'img': calculator},
    ]

    function displayStack(idx: number) {
        let project = projects[idx - 1].stack

        return (
            <div className="flex flex-row flex-wrap">
                {
                    project.map((p) => (
                        <p key={p} className="bg-orange-400/10 text-orange-300 w-fit px-3 py-1 text-sm rounded-full mr-2 mt-2">{p}</p>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="my-10">
            <h1 className="tracking-widest text-sm my-10">PROJECTS</h1>

            <div>
                {
                    projects.map((proj) => (
                        <div key={proj.id}>
                            <Link href={proj.link} className="group my-5 flex w-fit">{proj.title} <Image src={arrowUpRight} alt='arrow-up-right' width={15} height={15} className="ml-1 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-100 -translate-x-.5 translate-y-1" /></Link>
                            <p className="my-5 text-slate-300 text-sm">{proj.desc}</p>
                            {
                                displayStack(proj.id)
                            }
                            <Image src={proj.img} alt='demo' width={100} className="mt-5" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}