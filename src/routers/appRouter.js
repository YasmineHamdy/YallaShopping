import React from 'react';
import { ConnectedRouter } from 'react-router-redux'
import { Route ,Switch } from 'react-router';

import NavBar from '../components/navBar'
import DashBoard from '../components/dashBoard'
import CheckOut from '../components/Cart/cart'
import  store,{ history } from '../store/storeConfg'
import MyLoader from '../components/loader'
import NotFound from '../components/notFound'
import Orders from '../components/orders'
const AppRouter = () => {
  return(
  <div>
    <ConnectedRouter history={history}>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={DashBoard}    />
        <Route path="/checkout" component={CheckOut}  />
        <Route path="/orders" component={Orders}  />
        <Route  component={NotFound}   />
        </Switch>
      </div>
    </ConnectedRouter>
  </div>
  )};

export default AppRouter;