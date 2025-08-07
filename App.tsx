import { motion } from 'motion/react'
import { Heart, Camera, Music, Zap } from 'lucide-react'
import { Hero } from './components/Hero'
import { PersonalityCards } from './components/PersonalityCards'
import { PhotoGallery } from './components/PhotoGallery'
import { FunFacts } from './components/FunFacts'
import { Footer } from './components/Footer'
import { PawPrints } from './components/PawPrints'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-hidden">
      <PawPrints />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <PersonalityCards />
        <PhotoGallery />
        <FunFacts />
        <Footer />
      </motion.div>
    </div>
  )
}