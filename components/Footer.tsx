import { motion } from 'motion/react'
import { Heart, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-800 to-red-800 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-6xl mb-8"
          >
            🐕
          </motion.div>

          <h3 className="text-4xl font-bold mb-6">
            One Rare Pupper, Infinite Love
          </h3>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Tortie continues to bring joy, laughter, and the occasional zoomie chaos to everyone he meets. 
            His little paws have left big pawprints on our hearts.
          </p>

          <motion.div 
            className="flex items-center justify-center gap-3 text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-6 h-6 fill-current text-red-400" />
            </motion.div>
            <span>for the goodest boy</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>

          <motion.div 
            className="mt-12 pt-8 border-t border-white/30 text-sm opacity-70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>© 2024 RarePupper.com • A shrine to Tortie • String cheese not included</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}