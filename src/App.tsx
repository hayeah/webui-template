import { Route, Switch } from 'wouter'
import { HomePage } from './pages/HomePage'
import { DesignSampler } from './pages/design/DesignSampler'

export function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/design" component={DesignSampler} />
      <Route>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          404 — Not Found
        </div>
      </Route>
    </Switch>
  )
}
