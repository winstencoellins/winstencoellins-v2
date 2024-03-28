import Image from "next/image"
import Link from "next/link"

import calculator from '@/public/images/calculator-app.png'
import ipAddressTracker from '@/public/images/ip-address-tracker.png'
import adviceGenerator from '@/public/images/advice-generator.png'
import arrowUpRight from '@/public/svgs/arrow-up-right.svg'


export default function Projects() {
    const projects = [
        {id: 1, title: 'IP Address Tracker', desc: 'A one-paged web application to track IP Address entered based on location. This project is to demonstrate the knowledge of using multiple API in a single project.', link: 'https://ip-address-tracker-coellins.vercel.app', stack: ['React Js', 'CSS', 'Leaflet Js', 'Geolocation API'], 'img': ipAddressTracker},
        {id: 2, title: 'Advice Generator', desc: 'A web application that could generate advice taken from the real-world. This project integrate with the API use for generating random advice.', link: 'https://advice-generator-app-coellins.vercel.app', stack: ['React Js', 'CSS', 'API'], 'img': adviceGenerator},
        {id: 3, title: 'Calculator App', desc: 'A simple web application calculator that could be used to calculate simple arithmetic stuff.', link: 'https://winstencoellins.github.io/calculator-app/', stack: ['HTML', 'CSS', 'JavaScript'], 'img': calculator},
    ]

    function displayStack(idx: number) {
        let project = projects[idx - 1].stack

        return (
            <div className="flex flex-row flex-wrap">
                {
                    project.map((p) => (
                        <p key={p} className="bg-cyan-400/10 text-cyan-300 w-fit px-3 py-1 text-xs rounded-full mr-2 mt-2">{p}</p>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="my-10">
            <h1 className="tracking-widest text-sm my-10 lg:hidden">PROJECTS</h1>

            <div>
                {
                    projects.map((proj) => (
                        <div key={proj.id} className="my-10">
                            <Link href={proj.link} className="group my-5 flex w-fit hover:text-cyan-300">{proj.title} <Image src={arrowUpRight} alt='arrow-up-right' width={15} height={15} className="ml-1 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-100" /></Link>
                            <p className="my-5 text-slate-300 text-sm font-extralight">{proj.desc}</p>
                            {
                                displayStack(proj.id)
                            }
                            <Image src={proj.img} alt='demo' width={250} className="mt-5" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}