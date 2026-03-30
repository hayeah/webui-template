import { Link } from 'wouter'
import { ArrowLeft, Sun, Moon, Bell, Search, ChevronRight } from 'lucide-react'

export function DesignSampler() {
  return (
    <div className="min-h-full bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Design Sampler</h1>
      </nav>

      {/* Page Links */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex gap-3">
          <Link href="/design/dashboard" className="text-sm text-primary underline hover:opacity-70">
            Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-16">
        {/* Typography */}
        <section>
          <SectionTitle>Typography</SectionTitle>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Heading One — The quick brown fox</h1>
            <h2 className="text-3xl font-semibold">Heading Two — Jumps over the lazy dog</h2>
            <h3 className="text-2xl font-medium">Heading Three — Pack my box with five dozen liquor jugs</h3>
            <h4 className="text-xl font-medium">Heading Four — How vexingly quick daft zebras jump</h4>
            <p className="text-base leading-relaxed">
              Body text at base size. Good typography is invisible — it serves the content without calling
              attention to itself. The spacing between lines (leading), the measure (line length), and the
              contrast between heading and body weights all contribute to readability.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Secondary text in muted foreground. Used for captions, timestamps, metadata, and supporting
              information that shouldn't compete with primary content.
            </p>
            <code className="block text-sm font-mono bg-muted px-3 py-2 rounded-md">
              const template = "monospace for code, configs, and terminal output";
            </code>
          </div>
        </section>

        {/* Colors */}
        <section>
          <SectionTitle>Semantic Colors</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <ColorSwatch name="background" bg="bg-background" fg="text-foreground" border />
            <ColorSwatch name="foreground" bg="bg-foreground" fg="text-background" />
            <ColorSwatch name="primary" bg="bg-primary" fg="text-primary-foreground" />
            <ColorSwatch name="secondary" bg="bg-secondary" fg="text-secondary-foreground" />
            <ColorSwatch name="muted" bg="bg-muted" fg="text-muted-foreground" />
            <ColorSwatch name="accent" bg="bg-accent" fg="text-accent-foreground" />
            <ColorSwatch name="destructive" bg="bg-destructive" fg="text-white" />
            <ColorSwatch name="card" bg="bg-card" fg="text-card-foreground" border />
            <ColorSwatch name="popover" bg="bg-popover" fg="text-popover-foreground" border />
          </div>
        </section>

        {/* Buttons */}
        <section>
          <SectionTitle>Buttons</SectionTitle>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Primary
            </button>
            <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-80 transition-opacity">
              Secondary
            </button>
            <button className="px-4 py-2 rounded-lg bg-destructive text-white font-medium hover:opacity-90 transition-opacity">
              Destructive
            </button>
            <button className="px-4 py-2 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors">
              Outline
            </button>
            <button className="px-4 py-2 text-muted-foreground font-medium hover:text-foreground transition-colors">
              Ghost
            </button>
          </div>
        </section>

        {/* Cards */}
        <section>
          <SectionTitle>Cards</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <h3 className="font-semibold text-card-foreground">Dashboard Card</h3>
              <p className="text-sm text-muted-foreground">
                A simple card with border and background. Check that the card surface is
                distinguishable from the page background.
              </p>
              <div className="flex gap-2 pt-2">
                <span className="text-2xl font-bold">2,847</span>
                <span className="text-sm text-muted-foreground self-end pb-1">active users</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <h3 className="font-semibold text-card-foreground">Notification</h3>
              <p className="text-sm text-muted-foreground">
                Cards should feel contained but not boxed in. Border color and radius should
                harmonize with the overall theme.
              </p>
              <div className="flex items-center gap-2 pt-2 text-sm">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">3 unread messages</span>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section>
          <SectionTitle>Inputs</SectionTitle>
          <div className="space-y-4 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              type="text"
              placeholder="Text input"
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </section>

        {/* List */}
        <section>
          <SectionTitle>List Items</SectionTitle>
          <div className="rounded-xl border border-border divide-y divide-border overflow-hidden">
            {['Settings', 'Profile', 'Notifications', 'Billing'].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between px-4 py-3 bg-card hover:bg-accent transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium">{item}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </section>

        {/* Blog Post Sample */}
        <section>
          <SectionTitle>Blog Post (Typography Test)</SectionTitle>
          <article className="prose-like space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">On the Craft of Building Interfaces</h2>
            <p className="text-sm text-muted-foreground">March 30, 2026 · 4 min read</p>
            <p className="leading-relaxed">
              The best interfaces disappear. They become so natural, so aligned with the user's
              intent, that the boundary between thought and action dissolves. This is not minimalism
              for its own sake — it's <em>clarity</em> earned through deliberate choices about
              hierarchy, rhythm, and restraint.
            </p>
            <p className="leading-relaxed">
              Every pixel carries weight. A heading that's too bold overwhelms; too light and it
              fails to anchor the section. Body text needs room to breathe — generous leading,
              a comfortable measure, and enough contrast against the background to be read without
              strain but not so much that it <strong>shouts</strong>.
            </p>
            <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground">
              "The details are not the details. They make the design."
              <span className="block text-sm mt-1 not-italic">— Charles Eames</span>
            </blockquote>
            <p className="leading-relaxed">
              Color is meaning. A destructive action wears red not as decoration but as warning.
              Muted text recedes to give primary content room. The accent color draws the eye
              precisely where interaction lives. When these signals are coherent, the interface
              teaches itself.
            </p>
          </article>
        </section>

        {/* Dark/Light indicator */}
        <section>
          <SectionTitle>Theme Info</SectionTitle>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Sun className="w-4 h-4" />
            <span>Light mode active (add <code className="font-mono bg-muted px-1 rounded">.dark</code> class to root for dark mode)</span>
            <Moon className="w-4 h-4 ml-2 opacity-40" />
          </div>
        </section>
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
      {children}
    </h2>
  )
}

function ColorSwatch({
  name,
  bg,
  fg,
  border,
}: {
  name: string
  bg: string
  fg: string
  border?: boolean
}) {
  return (
    <div
      className={`rounded-lg px-4 py-3 ${bg} ${fg} ${border ? 'border border-border' : ''}`}
    >
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}
