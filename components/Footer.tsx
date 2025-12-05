export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold gradient-text">AY</span>
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Adnan Yonathan. Building the future.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              Projects
            </a>
            <a href="#ventures" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              Ventures
            </a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
