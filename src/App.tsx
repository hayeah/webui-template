import { Route, Switch } from 'wouter'
import { HomePage } from './pages/HomePage'
import { DesignSampler } from './pages/design/DesignSampler'
import { Dashboard } from './pages/design/Dashboard'

export function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/design" component={DesignSampler} />
      <Route path="/design/dashboard" component={Dashboard} />
      <Route>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          404 — Not Found
        </div>
      </Route>
    </Switch>
  )
}
