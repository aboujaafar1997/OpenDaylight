import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Host from './components/Host';
import Statistique from './components/Statistique';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useState, useEffect } from 'react';
import { USER, PASSWORD } from './StaticData';

function App() {
  const [state, setstate] = useState({ isLogin: false, user: { nom: "" } });
  const [dataOdl, setdataOdl] = useState({});


  let login = (data) => {
    return (data.user === USER && data.password === PASSWORD) ? setstate({ isLogin: true, user: { nom: USER } }) : 0
  };
  return (
    <Router>
      <Route
        render={props => {
          return <Navbar {...props} setstate={setstate} islogin={state.isLogin} iscompnentLogin={false} nom={state.user.nom} />
        }} />
      <Switch>
        <PrivateRoute iscompnentLogin={false} islogin={state.isLogin} exact path="/" component={Home} />
        <PrivateRoute iscompnentLogin={true} islogin={state.isLogin} exact path="/login" component={() => <Login dispatch={login} />} />
        <PrivateRoute iscompnentLogin={false} islogin={state.isLogin} exact path="/home" component={() => <Home setdataOdl={setdataOdl} dataOdl={dataOdl} />} />
        <PrivateRoute iscompnentLogin={false} islogin={state.isLogin} exact path="/hosts" component={() => <Host setdataOdl={setdataOdl} dataOdl={dataOdl} />} />
        <PrivateRoute iscompnentLogin={false} islogin={state.isLogin} exact path="/statistique" component={() => <Statistique />} />

      </Switch>
    </Router>
  );
}

export default App;
