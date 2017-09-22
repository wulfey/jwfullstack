import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./landing";
import Dashboard from "./dashboard";
import SurveyNew from "./SurveySubComponents/SurveyNew";
// import fetchUserV1 from "../actions/index";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchUserV2();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;

export default connect(null, actions)(App);
