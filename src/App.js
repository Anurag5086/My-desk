import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Desk from "./pages/Desk/Desk";
import GroupStudying from "./pages/GroupStudy/GroupStudy";
import College from "./pages/College/College";
import Personal from "./pages/Personal/Personal";
import Assignment from "./pages/Assignment/Assignment";
import MainCalender from "./pages/MainCalender/MainCalender";

function App() {
  const Assignment1 = ({ match }) => {
    return <Assignment type={match.params.type} />;
  };
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/desk" exact component={Desk} />
          <Route path="/login" exact component={Login} />
          <Route path="/groupstudying" exact component={GroupStudying} />
          <Route path="/college" exact component={College} />
          <Route path="/college/:type" exact component={Assignment1} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/personal/:type" exact component={Assignment1} />
          <Route path="/fullcalender" exact component={MainCalender} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
