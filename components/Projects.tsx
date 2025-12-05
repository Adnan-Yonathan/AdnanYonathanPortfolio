'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Triangle, GraduationCap, LayoutGrid, Check } from 'lucide-react'

const projects = [
  {
    id: 'delta-ai',
    featured: true,
    icon: Triangle,
    iconColor: 'text-white',
    iconBg: 'bg-white/10',
    tags: ['AI', 'Sports', 'Analytics'],
    title: 'Delta AI',
    description:
      'Building the sports betting intelligence layer. A conversational AI platform that combines real-time odds tracking, statistical analysis, and predictive insights. Think StatMuse meets ChatGPT—ask anything and get data-driven answers instantly.',
    features: [
      'Real-time odds aggregation across books',
      'Natural language query interface',
      'AI-powered edge detection',
      'Historical trends & pattern analysis',
    ],
    status: 'In Active Development',
    statusColor: 'text-white',
    statusDotColor: 'bg-white',
  },
  {
    id: 'education',
    icon: GraduationCap,
    iconColor: 'text-white',
    iconBg: 'bg-white/10',
    tags: ['Education', 'No-Code'],
    title: 'No-Code App Academy',
    description:
      'Teaching non-technical founders how to build, ship, and market apps without code. Launched with a free lifetime access offer and hit 51 signups in the first few days—zero paid marketing.',
    metrics: [
      { value: '51+', label: 'Launch signups' },
      { value: '$0', label: 'Marketing spend' },
    ],
    status: 'Live & Growing',
    statusColor: 'text-white',
    statusDotColor: 'bg-white',
  },
  {
    id: 'saas',
    icon: LayoutGrid,
    iconColor: 'text-white',
    iconBg: 'bg-white/10',
    tags: ['SaaS', 'Tools'],
    title: 'SaaS Portfolio',
    description:
      'A collection of specialized tools I\'ve built and shipped for creators and businesses. Each product was built to solve a specific pain point I observed in the market.',
    list: [
      'SEO Tools for E-commerce',
      'Trading Leaderboard Apps',
      'Social Media Analytics',
      'Creator Monetization Tools',
    ],
    status: 'Multiple Live Products',
    statusColor: 'text-neutral-400',
    statusDotColor: 'bg-neutral-400',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            Traction & Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            What I&apos;ve built
            <br />
            <span className="gradient-text">and what&apos;s next.</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative p-8 bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 group overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-white text-black rounded-full">
                  Current Focus
                </span>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl border border-border ${project.iconBg}`}>
                  <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-neutral-500 bg-bg-tertiary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">{project.description}</p>

              {/* Features */}
              {project.features && (
                <ul className={`grid gap-3 mb-6 ${project.featured ? 'md:grid-cols-2' : ''}`}>
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-400">
                      <Check className="w-4 h-4 text-white flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Metrics */}
              {project.metrics && (
                <div className="flex gap-8 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="block text-2xl font-bold text-white">{metric.value}</span>
                      <span className="text-sm text-neutral-500">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* List */}
              {project.list && (
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {project.list.map((item) => (
                    <li key={item} className="text-sm text-neutral-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Status */}
              <div className="pt-4 border-t border-border">
                <span className={`inline-flex items-center gap-2 text-sm ${project.statusColor}`}>
                  <span className={`w-2 h-2 rounded-full ${project.statusDotColor} animate-pulse`} />
                  {project.status}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
