import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import { Editmode } from "editmode-react";

class App extends Component {
  render() {
    return (
      <Editmode projectId={'prj_8nRsLqAarA60'}>
      <div className="App">
           <Header resumeData={resumeData}/>
           <About resumeData={resumeData}/>
           <Resume resumeData={resumeData}/>
           <Portfolio resumeData={resumeData}/>
           <Testimonials resumeData={resumeData}/>
           <ContactUs resumeData={resumeData}/>
           <Footer resumeData={resumeData}/>
   
         </div>
     </Editmode>
    );
  }
}

export default App;
