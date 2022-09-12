import React from 'react';

import About from '../components/About';
import BackToTop from '../components/BackToTop';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Counter from '../components/Counter';
import CTA from '../components/CTA';
import Footer from '../Layout/Footer';
import FooterAlt from '../Layout/FooterAlt';

import Process from '../components/Process';

import Layout6 from '../pages/Layout6/Layout6';

const Layout = () => {
  return (
    <React.Fragment>
      <Layout6 />
      {/* <Services />*/}
      <Blog />
      <Process />
      <About />
      <Counter />
      {/* <Testimonial /> */}
      {/* <Team />
      <Portfolio />*/}
      {/*<Pricing />*/}
      <CTA />
      <Contact />
    </React.Fragment>
  );
};

export default Layout;
