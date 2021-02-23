import React, { Component } from 'react';
import { Chunk } from "editmode-react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               {/* <img className="profile-pic"  src="images/profilepic.jpg" alt="" /> */}
                  <Chunk identifier="cnk_fdbe6c89f551f37090e3"  className="profile-pic" />
          </div>

            <div className="nine columns main-col">

               <h2><Chunk identifier='cnk_7d2e65cccf4069bd8d1c'>About Me</Chunk></h2>
               <p>
              <Chunk identifier='cnk_2c2986a33a26673de74a'>I am currently working as a Junior Dev, diving deeper into React. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.</Chunk>
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2><Chunk identifier='cnk_0b49f19fbfade6e4aba3'>Contact Details</Chunk></h2>
                  <p className="address">
       						<span><Chunk identifier='cnk_777b145f738b0c5482d6'>LJ Figueras</Chunk></span>
                     <br></br>
       						   <span>
                     <Chunk identifier='cnk_675be883e7a815b115fd'>Philippines</Chunk>
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}