import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface PawPrint {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
}

export function PawPrints() {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([])

  useEffect(() => {
    const prints: PawPrint[] = []
    for (let i = 0; i < 20; i++) {
      prints.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 20,
        size: 0.5 + Math.random() * 1
      })
    }
    setPawPrints(prints)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pawPrints.map((print) => (
        <motion.div
          key={print.id}
          className="absolute text-amber-200/30"
          style={{
            left: `${print.x}%`,
            top: `${print.y}%`,
            fontSize: `${print.size}rem`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: print.duration,
            delay: print.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🐾
        </motion.div>
      ))}
    </div>
  )
}