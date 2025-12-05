'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ventures = [
  {
    number: '01',
    title: 'Local Marketing Agency',
    description:
      'Helping local businesses grow their online presence and acquire customers through digital marketing strategies.',
  },
  {
    number: '02',
    title: 'AI Consulting for Law Firms',
    description:
      'Helping law firms leverage AI and automation to streamline operations, improve efficiency, and deliver better client outcomes.',
  },
  {
    number: '03',
    title: 'Content Creation',
    description:
      'YouTube channels and social media content focused on app development, entrepreneurship, and building in public.',
  },
  {
    number: '04',
    title: 'Sports Analytics',
    description:
      'Building AI-powered prediction systems and analytics tools for the sports betting industry.',
  },
]

export default function Ventures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ventures" className="py-24 bg-bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-accent-1 uppercase tracking-wider">
            Ventures
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Companies &
            <br />
            <span className="gradient-text">initiatives I run.</span>
          </h2>
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative p-8 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-border-light hover:-translate-y-1 group overflow-hidden"
            >
              {/* Left gradient line on hover */}
              <div className="absolute top-0 left-0 w-1 h-full gradient-bg opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-sm font-bold text-accent-1 mb-4 block">
                {venture.number}
              </span>
              <h3 className="text-xl font-semibold mb-3">{venture.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {venture.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
