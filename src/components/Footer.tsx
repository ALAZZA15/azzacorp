import Brand from "@/components/Brand";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cosmic/10 bg-space-deep/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Brand size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dust">
              A holding company for independent digital products. One sky, many stars.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-dust">Divisions</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/80">
              <li><a href="/ezindustrion" className="transition-colors hover:text-cosmic">EzIndustrion</a></li>
              <li><a href="/ezorb" className="transition-colors hover:text-cosmic">EzOrb</a></li>
              <li><a href="/smartkey" className="transition-colors hover:text-cosmic">Smart Key</a></li>
              <li><a href="/ai" className="transition-colors hover:text-cosmic">Azza AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-dust">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/80">
              <li>
                <a href="mailto:hello@azzacorp.com" className="transition-colors hover:text-cosmic">
                  hello@azzacorp.com
                </a>
              </li>
              <li>
                <a href="https://github.com/ALAZZA15" target="_blank" rel="noreferrer" className="transition-colors hover:text-cosmic">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-dust sm:flex-row sm:items-center">
          <p>© 2026 Azza Corporation. All rights reserved.</p>
          <p>Built with curiosity, somewhere under the stars.</p>
        </div>
      </div>
    </footer>
  );
}