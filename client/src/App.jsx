import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainNav = lazy(() => import("./components/MainNav.jsx"));
const Landing = lazy(() => import("./pages/Landing.jsx"));
const ViewData = lazy(() => import("./pages/ViewData.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...go get a taco</h2>}>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/theApi" component={ViewData} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
