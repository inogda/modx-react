import React from 'react'
import { Switch, Route } from 'react-router-dom'
//
/*

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/about.html/" component={About}/>
      <Route path="/orders.html/" component={Orders}/>
    </Switch>
)
export default Routes
*/

export default class Routes {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/about.html/" component={About}/>
          <Route path="/orders.html/" component={Orders}/>
        </Switch>
      </main>
    )
  }
}

