import React, { Component } from 'react';
import { Chunk } from "editmode-react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home"><Chunk identifier='cnk_64a31d0a4b7aeaac84c6'>Home</Chunk></a></li>
               <li><a className="smoothscroll" href="#about"><Chunk identifier='cnk_11b975e3cfcf1012ea2d'>About</Chunk></a></li>
             <li><a className="smoothscroll" href="#resume"><Chunk identifier='cnk_566935bacb50fdbaac43'>Resume</Chunk></a></li>
               <li><a className="smoothscroll" href="#portfolio"><Chunk identifier='cnk_7bbf3453fa48141eaa70'>Works</Chunk></a></li>
               <li><a className="smoothscroll" href="#testimonials"><Chunk identifier='cnk_eea447c76fa63a03916e'>Testimonials</Chunk></a></li>
               <li><a className="smoothscroll" href="#contact"><Chunk identifier='cnk_2e39b7b8537e72b39c87'>Contact</Chunk></a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline"><Chunk identifier='cnk_7a59aaad3d0095737bf4'>I am LJ Figueras.</Chunk></h1>
               <h3 style={{color:'#f6f6f6', fontFamily:'sans-serif '}}><Chunk identifier='cnk_55059d3f12798ea21f9d'>Hello! My name is Lovely Joy Figueras. My perfect day would start with a coffee and end with a coffee.</Chunk>
               </h3>
               <hr/>
               <ul className="social">
                  
      
                              <li>
                                <a href="https://github.com/" target="_blank" className="a"><Chunk identifier="cnk_40ce4970f4589505e74e" /></a>
                              </li>
                              <li>
                                <a href="https://www.linkedin.com/in/lovely-joy-figueras/ "  className="a" target="_blank"> <Chunk identifier="cnk_5ea3105f549fae7fc4de"/></a>
                              </li>
                     
                              <li>
                                <a href="https://twitter.com/FiguerasLj"  className="a" target="_blank"><Chunk identifier="cnk_00a7a7f5438c6172718a"/></a>
                              </li>
                     
                     
                          
                  
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}