import React from 'react';
// import routes from './allRoutes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from '../Layout/Index';
import Formation from '../components/formations/Formation';
import Entreprise from '../components/entreprise/Entreprise';
import Footer from '../Layout/Footer';
import FooterAlt from '../Layout/FooterAlt';
import BackToTop from '../components/BackToTop';

// render app route pages
//const AppRoute = ({ component, path, ...rest }) => {
//const Component = component;
// return (
// <Route
// {...rest}
//render={(props) => {
// return (
// <Layout>
// <Component {...props} />
// </Layout>
//);
//}}
///>
//);
//};

const Index = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/formations/:formationId">
            <Formation />
          </Route>
          <Route path="/entreprise">
            <Entreprise />
          </Route>
          <Route path="/">
            <Layout />
          </Route>

          {/*routes.map((route, idx) => (
       <AppRoute path={route.path} component={route.component} key={idx} />
         ))*/}
        </Switch>
        <Footer />
        <FooterAlt />
        <BackToTop />
      </Router>
    </React.Fragment>
  );
};

export default Index;
