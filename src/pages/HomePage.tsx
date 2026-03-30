import { Link } from 'wouter'

export function HomePage() {
  return (
    <div className="min-h-full bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-6">Web UI Template</h1>
      <ul className="space-y-3">
        <li>
          <Link
            href="/design"
            className="text-lg text-primary underline hover:opacity-70"
          >
            Design Sampler
          </Link>
          <span className="text-muted-foreground ml-2">— typography, colors, components</span>
        </li>
      </ul>
    </div>
  )
}
