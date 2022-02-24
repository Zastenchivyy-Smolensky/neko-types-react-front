// App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Detail from './components/Detail';
import Edit from './components/Edit';
import List from './components/List';
import New from './components/New';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List} />
        <Route path='/post/:id' component={Detail} />
        <Route exact path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
};
export default App;