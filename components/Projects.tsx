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
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/10',
    tags: ['AI', 'Sports', 'Analytics'],
    title: 'Delta AI',
    description:
      'The sports betting version of StatMuse meets ChatGPT. A conversational AI platform combining real-time odds tracking, statistical analysis, and AI-powered insights. Ask anything about sports betting and get intelligent, data-driven answers.',
    features: [
      'Real-time odds aggregation',
      'ChatGPT-style conversational interface',
      'AI-powered predictions & insights',
      'Advanced statistical analysis',
    ],
    status: 'In Active Development',
    statusColor: 'text-amber-500',
    statusDotColor: 'bg-amber-500',
  },
  {
    id: 'education',
    icon: GraduationCap,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    tags: ['Education', 'No-Code'],
    title: 'No-Code App Academy',
    description:
      'Teaching people how to build, ship, and market apps without writing code. Launched with a free lifetime access offer that generated 51 signups in the first few days.',
    metrics: [
      { value: '51+', label: 'Launch signups' },
      { value: 'Free', label: 'Lifetime access' },
    ],
    status: 'Live',
    statusColor: 'text-green-500',
    statusDotColor: 'bg-green-500',
  },
  {
    id: 'saas',
    icon: LayoutGrid,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    tags: ['SaaS', 'Tools'],
    title: 'SaaS Portfolio',
    description:
      'A collection of specialized tools built for creators and businesses. From SEO optimization for e-commerce to trading leaderboards and social media analytics.',
    list: [
      'SEO Tools for E-commerce',
      'Trading Leaderboard Apps',
      'Social Media Analytics',
      'Creator Tools',
    ],
    status: 'Multiple Products',
    statusColor: 'text-purple-500',
    statusDotColor: 'bg-purple-500',
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
          <span className="text-sm font-semibold text-accent-1 uppercase tracking-wider">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Products I&apos;ve
            <br />
            <span className="gradient-text">built and shipped.</span>
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
              className={`relative p-8 bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-border-light hover:-translate-y-1 hover:shadow-xl group overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white gradient-bg rounded-full">
                  Featured
                </span>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${project.iconBg}`}>
                  <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-zinc-500 bg-bg-tertiary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

              {/* Features */}
              {project.features && (
                <ul className={`grid gap-3 mb-6 ${project.featured ? 'md:grid-cols-2' : ''}`}>
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                      <span className="block text-2xl font-bold">{metric.value}</span>
                      <span className="text-sm text-zinc-500">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* List */}
              {project.list && (
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {project.list.map((item) => (
                    <li key={item} className="text-sm text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-2 rounded-full" />
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
