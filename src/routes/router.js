import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
// import {DefaultLayout} from '../layouts/defaultLayout/defaultLayout';
import {IndexLayout} from '../layouts/index'
// import LoginUser from '../layouts/loginUser/loginUser';
export default class RouterWrap extends Component{
  render(){
    return (
      <div id="router">
        <HashRouter>
          <Switch>
            <Route path="/" component={IndexLayout}  exact />
            {/* <Route path="/login" component={LoginUser} /> */}
          </Switch>
        </HashRouter>
      </div>
    )
  }
}