import React, { Component } from 'react';
import { Chunk } from "editmode-react";
import { ChunkCollection, ChunkFieldValue } from "editmode-react";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span><Chunk identifier='cnk_d4e5fb05f4570ed5bd6a'>Client Testimonials</Chunk></span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  
                        <li>
                          
                          <blockquote>
                            <ChunkCollection identifier="col_I0BZopL0k2EW" className="testimonials">
                            <p>
                                {/* Render the 'Content' field. */}
                                <div className="content" >
                                  <ChunkFieldValue identifier="fld_nAxlsMLpR2Ib" />
                                </div>
                                </p>
                                                     
                                <cite> {/* Render the 'name' field. */}
                                <div className="name" >
                                  <ChunkFieldValue identifier="fld_ds978doqwIDl" />
                                </div></cite>
                                </ChunkCollection>
                               
                          </blockquote>
                        
                        </li>
                        
                      )
                  
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}