import { Link } from "wouter";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Activity,
  BarChart3,
} from "lucide-react";

const STATS = [
  {
    label: "Total Revenue",
    value: "$1,250.00",
    trend: "+12.5%",
    up: true,
    note: "Trending up this month",
    detail: "Visitors for the last 6 months",
    icon: DollarSign,
  },
  {
    label: "New Customers",
    value: "1,234",
    trend: "-20%",
    up: false,
    note: "Down 20% this period",
    detail: "Acquisition needs attention",
    icon: Users,
  },
  {
    label: "Active Accounts",
    value: "45,678",
    trend: "+12.5%",
    up: true,
    note: "Strong user retention",
    detail: "Engagement exceeds targets",
    icon: Activity,
  },
  {
    label: "Growth Rate",
    value: "4.5%",
    trend: "+4.5%",
    up: true,
    note: "Steady performance increase",
    detail: "Meets growth projections",
    icon: BarChart3,
  },
];

const RECENT_ACTIVITY = [
  { action: "New signup", user: "alice@example.com", time: "2 min ago" },
  { action: "Purchase completed", user: "bob@example.com", time: "15 min ago" },
  { action: "Report exported", user: "carol@example.com", time: "1 hr ago" },
  { action: "Settings updated", user: "dave@example.com", time: "3 hr ago" },
  { action: "New signup", user: "eve@example.com", time: "5 hr ago" },
];

export function Dashboard() {
  return (
    <div className="min-h-full bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Link href="/design" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span
                  className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                    stat.up ? "text-success bg-success/10" : "text-destructive bg-destructive/10"
                  }`}
                >
                  {stat.up ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
              <div>
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  {stat.note}
                  {stat.up ? (
                    <TrendingUp className="w-3.5 h-3.5" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Total Visitors</h2>
              <p className="text-sm text-muted-foreground">Total for the last 3 months</p>
            </div>
            <span className="text-sm text-muted-foreground border border-border rounded-lg px-3 py-1.5">
              Last 3 months
            </span>
          </div>
          {/* Chart area — placeholder bars */}
          <div className="flex items-end gap-2 h-40">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/15" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold">Recent Activity</h2>
          </div>
          <div className="divide-y divide-border">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="px-5 py-3 flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">{item.action}</span>
                  <span className="text-sm text-muted-foreground ml-2">{item.user}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
