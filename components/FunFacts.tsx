import { motion } from 'motion/react'
import { Zap, Heart, Music, Award, Clock, Smile } from 'lucide-react'

const stats = [
  {
    icon: Zap,
    number: "∞",
    label: "Daily Zoomies",
    color: "text-yellow-500"
  },
  {
    icon: Heart,
    number: "24/7",
    label: "Cuddle Availability",
    color: "text-red-500"
  },
  {
    icon: Music,
    number: "5★",
    label: "Howling Rating",
    color: "text-purple-500"
  },
  {
    icon: Award,
    number: "#1",
    label: "String Cheese Rank",
    color: "text-orange-500"
  }
]

const fears = [
  { item: "🚌 Buses", intensity: 100 },
  { item: "🚛 Big Vehicles", intensity: 85 },
  { item: "😢 Being Alone", intensity: 95 },
  { item: "💨 Vacuum Cleaners", intensity: 70 }
]

const loves = [
  { item: "🧀 String Cheese", intensity: 100 },
  { item: "🤗 Cuddles", intensity: 98 },
  { item: "🛏️ Blanket Piles", intensity: 95 },
  { item: "🍃 Leaf Chasing", intensity: 88 },
  { item: "🎵 Singing Along", intensity: 92 },
  { item: "🏃‍♂️ Hallway Zoomies", intensity: 96 }
]

export function FunFacts() {
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
          Tortie By The Numbers
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/50 rounded-3xl p-8 shadow-lg"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              </motion.div>
              <motion.div 
                className={`text-4xl font-bold mb-2 ${stat.color}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {stat.number}
              </motion.div>
              <p className="text-amber-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Loves & Fears */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Loves */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Smile className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-green-800">Tortie Loves</h3>
            </div>
            
            <div className="space-y-4">
              {loves.map((love, index) => (
                <motion.div
                  key={love.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between"
                >
                  <span className="text-lg text-green-800">{love.item}</span>
                  <div className="flex-1 mx-4 bg-green-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${love.intensity}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-green-600 font-medium">{love.intensity}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fears */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              >
                😰
              </motion.div>
              <h3 className="text-3xl font-bold text-red-800">Tortie's Fears</h3>
            </div>
            
            <div className="space-y-4">
              {fears.map((fear, index) => (
                <motion.div
                  key={fear.item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between"
                >
                  <span className="text-lg text-red-800">{fear.item}</span>
                  <div className="flex-1 mx-4 bg-red-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-400 to-red-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fear.intensity}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-red-600 font-medium">{fear.intensity}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}