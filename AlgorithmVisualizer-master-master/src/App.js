import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {HashRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queen from "./queenComponents/queen";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Login from './components/login.component'
import SignUp from './components/signup.component'




class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
     <div className="App">
                <Switch>
                    <Route path='/prime' component={Seive}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/nqueen' component={Queen}/>
                    <Route path='/binarysearch' component={BinarySearch}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/' component={Home}/>
                    

                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
