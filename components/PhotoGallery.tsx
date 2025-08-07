import { motion } from 'framer-motion'
import { Camera, Heart } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const photos = [
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
    caption: "Professional head-tilting pose",
    hearts: 347
  },
  {
    src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop",
    caption: "Tongue-out sleeping beauty",
    hearts: 892
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop",
    caption: "String cheese appreciation moment",
    hearts: 1205
  },
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=600&fit=crop",
    caption: "Blanket burrow headquarters",
    hearts: 654
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop",
    caption: "Hallway zoomie preparation",
    hearts: 428
  },
  {
    src: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&h=600&fit=crop",
    caption: "Leaf hunting expedition",
    hearts: 733
  }
]

export function PhotoGallery() {
  return (
    <section className="py-20 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Camera className="w-8 h-8 text-amber-600" />
            <h2 className="text-5xl font-bold text-amber-800">
              Tortie's Gallery
            </h2>
            <Camera className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-xl text-amber-700">
            A collection of Tortie's most adorable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <p className="font-semibold mb-2">{photo.caption}</p>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current text-red-400" />
                  <span className="text-sm">{photo.hearts} hearts</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}