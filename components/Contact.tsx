'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Twitter, Youtube, Linkedin, Github } from 'lucide-react'

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Let&apos;s connect
            <br />
            <span className="gradient-text">and build together.</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10">
            Looking for collaborators, advisors, or just interesting people to talk to.
            Whether it&apos;s about startups, AI, or competitive gaming—I&apos;m always down to chat.
          </p>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <a
              href="mailto:contact@adnanyonathan.com"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold bg-white text-black rounded-lg hover:bg-neutral-200 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center bg-surface border border-border rounded-lg text-neutral-400 transition-all duration-300 hover:text-white hover:border-white/20 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
