import video from "../assets/hero.mp4"
import hero from "../assets/hero.png"
import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden bg-slate-800">
            <video
                src={video} className="h-full w-full object-cover opacity-25" 
                muted autoPlay loop playsInline poster={hero}>
            </video>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-90% to-black"></div>

        <div className="relative z-20 flex h-screen flex-col justify-center py-10 px-10">
            <motion.img
            initial={{ opacity: 0, y:-50 }} 
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: .75 }}
            viewport={{once: true}}
            src={logo} alt="Rowan IEEE" className="w-full" />
            <a href="https://rowan.campuslabs.com/engage/organization/ieee/events" className="bg-cyan-700 opacity-75 hover:bg-blue-700 font-bold text-white rounded text-2xl text-center py-3 transition ease-in-out hover:-translate-y-1 duration-300" target="_blank">Upcoming events</a>
            
            <div className="flex items-center justify-center gap-8 p-8">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>

            
        </div>
        

    </section>
  )
}

export default Hero