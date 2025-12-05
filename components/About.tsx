'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Layers, Clock } from 'lucide-react'

const skills = [
  'App Development',
  'AI & Automation',
  'No-Code',
  'Sports Analytics',
  'Marketing',
  'Content Creation',
]

const cards = [
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Ideas are worthless without execution. I ship fast and iterate faster.',
  },
  {
    icon: Layers,
    title: 'Full Stack Builder',
    description: 'From concept to launch, I handle product, development, and marketing.',
  },
  {
    icon: Clock,
    title: 'Results Driven',
    description: 'I focus on outcomes, not vanity metrics. Real users, real revenue, real impact.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-accent-1 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Building the future,
            <br />
            <span className="gradient-text">one app at a time.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-zinc-50 leading-relaxed mb-6">
              I dropped out of school to pursue entrepreneurship full-time. Not because I didn&apos;t value education, but because I couldn&apos;t wait to start building.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Today, I run multiple ventures spanning AI consulting, app development, and education. I&apos;ve helped law firms leverage AI, built SaaS products used by creators and businesses, and taught hundreds of people how to build and ship apps without writing a single line of code.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Before going all-in on entrepreneurship, I was a professional Madden player and member of 818 - the most prestigious Madden crew of all time. I reached the top level in just one year, proving that with enough focus and dedication, rapid mastery is possible.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Now I apply that same intensity to building products that solve real problems.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm text-zinc-400 border border-border rounded-full gradient-subtle"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-accent-1 hover:translate-x-2 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg gradient-subtle mb-4">
                  <card.icon className="w-6 h-6 text-accent-1" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-zinc-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
