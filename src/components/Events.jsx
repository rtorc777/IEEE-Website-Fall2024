import { EVENTS } from "../constants"
import { motion } from "framer-motion"

export const Events = () => {
  return (
    <section className="container mx-auto my-8" id="events">
        <h2 className="mb-8 text-center text-5xl tracking-tighter lg:text-6xl pt-14">Events</h2>

        <motion.div className="container mx-auto px-4"
            initial={{ opacity: 0}} 
            whileInView={{ opacity: 1}}
            transition={{ duration: .75 }}
            viewport={{once: true}}>
            {EVENTS.map((event, index) =>(
                <div key={index} className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"> 
                    <div className="w-1/3 flex-shrink-0">
                        <img src={event.image} alt={event.title} className="h-auto rounded-3xl" />
                    </div>
                    <div className="pl-8">
                        <h3 className="text-2xl uppercase tracking-tighter text-emerald-500">
                            {event.title}
                        </h3>
                        <p className="mt-4 text-lg tracking-tighter">
                            {event.description}
                        </p>
                    </div>
                </div>
            ))}
        </motion.div>
    </section>
  )
}

export default Events