import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Сomponents/Header'


import TodoList from './Todo/TodoList'
//import Routes from './Router/Routes'
//import { Routes } from './Router/Routes';


import About from './Templates/About'
//function About(){ return ( <div><h2>About us</h2></div> ) }
import Home from './Templates/Home'
//function Home(){ return ( <div><h2>Home page</h2></div> ) }

const todos = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить булку'},
    {id: 3, completed: false, title: 'Купить пирог'}
]






function Orders(){
    return ( 
        <div className="wrapper">
            
            <h2>Order Page</h2>
            <TodoList todos={todos} />
        </div>
    )
}
function NoPageFound(){
    return (
        <div>
            <h2>NoPageFound</h2>
        </div>
    )
}

class App extends React.Component{
    render(){

            
        return(
            <div className="wrapper">
                    {/*<Header
                        //title={TITLE}
                        title='Title'
                        userName='Иванов Иван Иванович'
                        className='Home-Header'
                        //renderIcon={() => ( <House className='Header-Icon'/> )}
                    />*/}
                    
                    <Router>
                        <ul>
                            <li>
                                <Link to="/">Home1</Link>
                            </li>
                            <li>
                                <Link to="/about.html">About</Link>
                            </li>
                            <li>
                                <Link to="/orders.html">Orders</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path="/about.html/" component={About}/>
                            <Route path="/orders.html/" component={Orders}/>
                        </Switch>
                        {//{Routes}
                        }
                        
                    </Router>
            </div>
        )
    }
}

export default App