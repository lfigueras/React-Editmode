import React, { Component } from 'react';
import { Chunk } from "editmode-react";
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span><Chunk identifier='cnk_31a8689b52239a380cc7'>Education</Chunk></span></h1>
            </div>

            <div className="nine columns main-col">
              
                
                
                    <div className="row item">
                       <div className="twelve columns">
                          <h3><Chunk identifier='cnk_9a59bd36e58de6cfa251'>Eulogio Amang Rodriguez Institute of Science and Technology</Chunk></h3>
                          <p className="info">
                          <Chunk identifier='cnk_61a857c139ac62e4d7d1'>BS Applied Physics with Computer Science</Chunk>
                          <span>&bull;</span> <em className="date"><Chunk identifier='cnk_d9a2641f840f90985c26'>June 2020</Chunk></em></p>                       
                       </div>
                    </div>
                  
                
              
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span><Chunk identifier='cnk_078b3826d0a8186ac41d'>Work</Chunk></span></h1>
            </div>

            <div className="nine columns main-col">
            
                    <div className="row item">
                       <div className="twelve columns">
                          <h3><Chunk identifier='cnk_1a261379c16cd2e7ebf9'>Concentrix</Chunk></h3>
                          <p className="info">
                         
                          <em className="date"><Chunk identifier='cnk_ececebd07b04436a4de8'>December 2020</Chunk></em></p>
                          <p>
                        
                          </p>
                       </div>

                    </div>
              
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span><Chunk identifier='cnk_d8065a1f05cb96df6d49'>Skills</Chunk></span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
               
                      <li>
                      <span className="bar-expand html">
                      </span><em><Chunk identifier='cnk_82b9e62316359de53657'>HTML5</Chunk></em>
                      </li>
                      <li>
                      <span className="bar-expand css">
                      </span><em><Chunk identifier='cnk_891da91ac9c57d17f6cd'>CSS</Chunk></em>
                      </li>
                      <li>
                      <span className="bar-expand">
                      </span><em><Chunk identifier='cnk_1f070415808908caf827'>Reactjs</Chunk></em>
                      </li>
   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}