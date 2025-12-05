'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  {
    age: 'High School',
    title: 'JV to D1 Track Recruit',
    description: 'Started on JV, worked my way up and got recruited to run D1 track at Lehigh and FDU.',
    highlight: false,
  },
  {
    age: '18',
    title: 'Competitive Madden',
    description: 'Started competing in Madden professionally. Learned the game obsessively.',
    highlight: false,
  },
  {
    age: '19',
    title: '818 Madden & Top 16 LCQ',
    description: 'Joined 818—the most prestigious Madden crew of all time. Also joined 1v1me. Placed Final 16 in the Madden 25 Last Chance Qualifier. Ran a successful wagering and betting Discord.',
    highlight: true,
  },
  {
    age: '20',
    title: 'Full-Time Entrepreneur',
    description: 'Did door-to-door pest control sales (learned grit). Started 7th Street Marketing agency. Launched AI consulting for law firms. Started building and shipping SaaS products.',
    highlight: true,
  },
  {
    age: 'Now',
    title: 'Founder, Delta Sports',
    description: 'Building the sports betting intelligence layer full-time. Combining everything I\'ve learned about sports, AI, and building products.',
    highlight: true,
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="journey" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            The Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            From athlete to
            <br />
            <span className="gradient-text">entrepreneur.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.age}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div
                  className={`relative pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white md:hidden" />

                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                      event.highlight
                        ? 'bg-white text-black'
                        : 'bg-surface border border-border text-neutral-400'
                    }`}
                  >
                    {event.age}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Center dot (desktop) */}
              <div className="hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    event.highlight
                      ? 'bg-white border-white'
                      : 'bg-bg border-border'
                  }`}
                />
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
