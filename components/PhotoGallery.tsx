import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    src: '/images/head-back.png',
    caption: 'Professional head-tilting pose',
    hearts: 347,
  },
  {
    src: '/images/sleepy.png',
    caption: 'Tongue-out sleeping beauty',
    hearts: 892,
  },
  {
    src: '/images/pawing.png',
    caption: 'String cheese appreciation moment',
    hearts: 1205,
  },
  {
    src: '/images/laundry.png',
    caption: 'Blanket burrow headquarters',
    hearts: 654,
  },
  {
    src: '/images/tortugas.png',
    caption: 'Tortuga and the tortugas',
    hearts: 428,
  },
  {
    src: '/images/leafs.png',
    caption: 'Leaf hunting expedition',
    hearts: 733,
  },
];

export function PhotoGallery() {
  return (
    <section className="px-6 py-20 bg-white/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-xl group rounded-2xl"
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.caption}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <motion.div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100" />

              <motion.div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                <p className="mb-2 font-semibold">{photo.caption}</p>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                  <span className="text-sm">{photo.hearts} hearts</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute p-2 text-white bg-red-500 rounded-full opacity-0 top-4 right-4 group-hover:opacity-100"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
