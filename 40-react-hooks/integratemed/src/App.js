import React from 'react';
import { 
  Navbar, 
  Home, 
  SubmissionForm, 
  RemedyPage, 
  MaladyPage 
} from './components'
import IndexContainer from './containers/IndexContainer'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/submissions" component={SubmissionForm} />
        <Route path="/maladies/:id" component={MaladyPage} />
        <Route path="/remedies/:id" component={RemedyPage} />
        <Route path="/maladies" component={IndexContainer} />
        <Route path="/remedies" component={IndexContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  ); 
}

export default App;
