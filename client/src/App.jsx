import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Landing = lazy(() => import("./pages/Landing.jsx"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...go get a taco</h2>}>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
