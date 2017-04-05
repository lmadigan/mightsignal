import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import EntryContainer from './entry/entry_container';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
    <Route path='/' component={ EntryContainer }></Route>
    </HashRouter>
  </Provider>
);

export default Root;


// <IndexRoute component={}/>

// <Route path="trips/new" component={TripFormContainer} />
// <Route path="/discover" component={HomeFeed} />
// <Route path="trips/:tripId" component={TripIndexItemContainer}/>
// <Route path="users/:userId" component={HomeFeed} />
// <Route path="users/:userId/trips" component={UserProfileContainer} />
// <Route path="users/:userId/saved" component={UserProfileContainer} />
// <Route path="users/:userId/map" component={UserProfileContainer} />
