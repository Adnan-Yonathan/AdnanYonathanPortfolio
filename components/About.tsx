'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Target, TrendingUp } from 'lucide-react'

const skills = [
  'Product Development',
  'AI & Automation',
  'No-Code/Low-Code',
  'Growth & Marketing',
  'Sports Analytics',
  'Content Creation',
]

const cards = [
  {
    icon: Zap,
    title: 'Bias Toward Action',
    description: 'I don\'t wait for perfect conditions. I ship MVPs, get user feedback, and iterate fast.',
  },
  {
    icon: Target,
    title: 'Full-Stack Founder',
    description: 'I handle everything from product ideation to development, marketing, and customer acquisition.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Went from zero to top-level Madden pro in 1 year. Now applying that same intensity to startups.',
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
          <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Why I&apos;m building
            <br />
            <span className="gradient-text">and why now.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xl text-white leading-relaxed mb-6">
              I dropped out to build full-time because I couldn&apos;t justify waiting. Every day in a classroom felt like a day I wasn&apos;t shipping.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Today, I run multiple ventures: an AI consulting practice for law firms, a local marketing agency, and an education platform that hit 51 signups in days with zero paid marketing. I&apos;ve shipped SEO tools, trading leaderboards, and social analytics platforms.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Before startups, I was a professional Madden player and member of 818—the most prestigious crew in competitive Madden history. I reached the top level in just one year, proving I can master anything I commit to.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Now I&apos;m channeling that same obsessive focus into Delta AI—a conversational sports betting intelligence platform. Think StatMuse meets ChatGPT for sports bettors.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm text-neutral-400 border border-border rounded-full gradient-subtle"
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
                className="p-6 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-white/20 hover:translate-x-2 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg gradient-subtle border border-border mb-4">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
