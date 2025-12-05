export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-white">AY</span>
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Adnan Yonathan. Always building.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#ventures" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Ventures
            </a>
            <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
