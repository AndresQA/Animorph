import React from 'react';
import Home from '../Home/Home'
import Instructions from '../Instructions/Instructions'
import Choose from '../Choose/Choose'
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  const [skin , setSkin] = React.useState(1)

  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/instrucciones" component={Instructions} />
        <Route path="/escoge" render={(props)=><Choose skin={skin} setSkin={setSkin} location={props.location}/>}/>

      </Router>


    </div>
  );
}

export default App;
