import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const articles = [
  {
    name: "Password Guessing as an Attack Vector",
    description:
      "This article highlights the significance of addressing weak passwords, exploring various password cracking methods including three prominent password cracking tools and their role in strengthening password security for system administrators.",
    image: "/PasswordGuessing.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://linuxsecurity.com/features/password-guessing-as-an-attack-vector",
  },
  {
    name: "Open Source OSINT Tools and Techniques",
    description: "This article explores the concept of Open Source Intelligence (OSINT), discussing its importance in industry, history, legal aspects to using the tools, and the various free OSINT tools available.",
    image: "/OSINT.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://linuxsecurity.com/features/open-source-osint-tools-and-techniques",
  },
  {
    name: "Linux Log Analysis",
    description:
      "This article emphasizes why consistent log analysis in Linux systems is important, introducing the concept of log files, their importance, and the use of both command line tools and open source log management solutions for improved system observability and problem detection.",
    image: "/linuxloganalysis.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://linuxsecurity.com/features/linux-log-analysis",
  },
]

const ArticlesSection = () => {
  return (
    <section id="articles" className="pb-48">
      <h1 className="my-10 text-center font-bold text-4xl">
        Articles
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-700 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {articles.map((article, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={article.link}>
                      <Image
                        src={article.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{article.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {article.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={article.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ArticlesSection
