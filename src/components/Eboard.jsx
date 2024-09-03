import { EBOARD } from "../constants"
import EboardCard from "./EboardCard"

const Eboard = () => {
  return (
    <section className="container mx-auto my-8" id="eboard">
        <h2 className="mb-8 text-center text-5xl tracking-tighter lg:text-6xl pt-14">Meet the E-Board!</h2>

        <div className='grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 px-10'>
            {EBOARD.map((member, index) => (
                <EboardCard key={index} member={member} />
            ))}
        </div>
        <p className="m-8 text-xl leading-relaxed tracking-tight whitespace-pre-wrap text-center">
            Additionally, a big thanks to the ProfHacks committee for all of their hard work!
        </p>
    </section>
  )
}

export default Eboard