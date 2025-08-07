import { motion } from 'motion/react'
import { Heart, Music, Zap, Moon, Users, Leaf } from 'lucide-react'

const personalities = [
  {
    icon: Heart,
    title: "Cuddle Expert",
    description: "Loves sitting on people and being held like a baby. Tortie is the ultimate lap warmer.",
    color: "from-pink-400 to-red-400",
    emoji: "🤗"
  },
  {
    icon: Music,
    title: "Howling Virtuoso", 
    description: "Will howl (and sometimes squeak) along if you sing. His vocal range is quite impressive!",
    color: "from-purple-400 to-pink-400",
    emoji: "🎵"
  },
  {
    icon: Zap,
    title: "Zoomie Champion",
    description: "Hallway zoomies are his specialty. Watch out for the blur of brown fur racing past!",
    color: "from-yellow-400 to-orange-400",
    emoji: "💨"
  },
  {
    icon: Moon,
    title: "Blanket Burrower",
    description: "Master of finding the coziest spot in any blanket pile. Tongue often sticks out when sleeping.",
    color: "from-blue-400 to-purple-400",
    emoji: "😴"
  },
  {
    icon: Users,
    title: "Social Butterfly",
    description: "Clingy little guy who just wants to be where the action is. FOMO is real for Tortie.",
    color: "from-green-400 to-blue-400",
    emoji: "👥"
  },
  {
    icon: Leaf,
    title: "Leaf Hunter",
    description: "Professional leaf chaser and head-tilting expert. Every leaf is a potential adventure.",
    color: "from-green-400 to-yellow-400",
    emoji: "🍃"
  }
]

export function PersonalityCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center text-amber-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tortie's Personality Traits
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalities.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${trait.color} p-8 rounded-3xl shadow-xl relative overflow-hidden`}>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-4 right-4 text-3xl"
                >
                  {trait.emoji}
                </motion.div>

                <trait.icon className="w-12 h-12 text-white mb-4" />
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {trait.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed">
                  {trait.description}
                </p>

                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}