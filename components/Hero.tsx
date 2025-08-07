import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <ImageWithFallback
              src="/images/profile.png"
              alt="Tortie the chihuahua-rat terrier mix"
              className="object-cover mx-auto border-8 border-white rounded-full shadow-2xl w-80 h-80"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute p-3 text-white bg-red-500 rounded-full -top-4 -right-4"
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
          <h1 className="mb-6 text-6xl font-bold md:text-8xl text-amber-800">
            <motion.span
              initial={{ display: 'inline-block' }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1.5,
              }}
            >
              Tortie
            </motion.span>
          </h1>

          <motion.p
            className="max-w-3xl mx-auto mb-8 text-2xl leading-relaxed md:text-3xl text-amber-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            The <span className="font-bold text-red-600">rare pupper</span> with
            a big personality in a small, brown, blanket-burrowing body
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-lg text-amber-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full bg-white/80">
              🐕 Chihuahua × Rat Terrier
            </span>
            <span className="px-4 py-2 rounded-full bg-white/80">
              🧀 String Cheese Enthusiast
            </span>
            <span className="px-4 py-2 rounded-full bg-white/80">
              🏃‍♂️ Hallway Zoomie Champion
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute transform -translate-x-1/2 bottom-10 left-1/2"
        >
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-amber-600">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 mt-2 rounded-full bg-amber-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
