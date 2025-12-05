'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] animate-float" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border gradient-subtle text-sm text-zinc-400 mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Currently building Delta AI
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          I build apps that
          <br />
          <span className="gradient-text">ship and scale.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Entrepreneur and developer turning ideas into products.
          From AI-powered sports analytics to education platforms teaching
          thousands to build without code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white gradient-bg rounded-lg shadow-lg hover:shadow-accent-1/25 transition-all hover:-translate-y-0.5 group"
          >
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-50 bg-surface border border-border rounded-lg hover:bg-bg-tertiary hover:border-border-light transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              <AnimatedCounter target={10} />+
            </div>
            <div className="text-sm text-zinc-500 mt-1">Apps Shipped</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              <AnimatedCounter target={5} />+
            </div>
            <div className="text-sm text-zinc-500 mt-1">Active Ventures</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              <AnimatedCounter target={1000} />s
            </div>
            <div className="text-sm text-zinc-500 mt-1">Users Reached</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-zinc-500 rounded-full"
          />
        </div>
        <span className="text-xs">Scroll to explore</span>
      </motion.div>
    </section>
  )
}
