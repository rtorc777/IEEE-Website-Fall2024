import about from "../assets/about.jpeg"
import { ABOUT } from "../constants"

const About = () => {
  return (
    <section className="container mx-auto my-8" id="about">
        <h2 className="mb-8 text-center text-5xl tracking-tighter lg:text-6xl pt-14">About Us</h2>

        <div className="flex flex-wrap">
            <div className="w-full p-10 lg:w-1/2">
                <img src={about} className="rounded-3xl lg:-rotate-3 shadow-lg shadow-slate-400" />
            </div>

            <div className="w-full px-4 lg:w-1/2">
                <h2 className="text-3xl tracking-tighter lg:text-4xl">
                    {ABOUT.header}
                </h2>
                
                <div className="mb-8 mt-1 h-1 w-56 bg-emerald-500 lg:-rotate-1">
                </div>

                <p className="m-8 text-xl leading-relaxed tracking-tight lg:max-w-xl whitespace-pre-wrap">
                        {ABOUT.content}
                </p>
            </div>
        </div>

    </section>
  )
}

export default About