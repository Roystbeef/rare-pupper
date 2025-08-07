import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5
          }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face"
              alt="Tortie the chihuahua-rat terrier mix"
              className="w-80 h-80 rounded-full object-cover border-8 border-white shadow-2xl mx-auto"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-3"
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-amber-800 mb-6">
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1.5
              }}
            >
              Tortie
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-amber-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            The <span className="font-bold text-red-600">rare pupper</span> with a big personality in a small, brown, blanket-burrowing body
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-lg text-amber-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="bg-white/80 px-4 py-2 rounded-full">🐕 Chihuahua × Rat Terrier</span>
            <span className="bg-white/80 px-4 py-2 rounded-full">🧀 String Cheese Enthusiast</span>
            <span className="bg-white/80 px-4 py-2 rounded-full">🏃‍♂️ Hallway Zoomie Champion</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-amber-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}