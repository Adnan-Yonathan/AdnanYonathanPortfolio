'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const ventures = [
  {
    number: '01',
    title: 'AI Consulting for Law Firms',
    description:
      'Helping law firms integrate AI and automation into their workflows. Focused on document processing, client intake, and operational efficiency.',
    link: 'https://opspilot.legal/',
  },
  {
    number: '02',
    title: '7th Street Marketing',
    description:
      'Digital marketing and customer acquisition for local businesses. From SEO to paid ads, helping small businesses compete online.',
    link: 'https://7thstreetmarketing.com/',
  },
  {
    number: '03',
    title: 'Content & Community',
    description:
      'Building in public on YouTube and Twitter. Documenting the journey and teaching others how to build and ship products.',
    link: null,
  },
  {
    number: '04',
    title: 'Sports Analytics R&D',
    description:
      'Researching and developing predictive models for sports betting. The foundation for Delta Sports\' intelligence layer.',
    link: null,
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
          <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            Active Ventures
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Revenue streams &
            <br />
            <span className="gradient-text">active experiments.</span>
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
              className="relative p-8 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Left line on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-bold text-neutral-500">
                  {venture.number}
                </span>
                {venture.link && (
                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{venture.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {venture.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
