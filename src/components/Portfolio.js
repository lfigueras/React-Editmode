import React, { Component } from 'react';
import { Chunk } from "editmode-react";
import { ChunkCollection, ChunkFieldValue } from "editmode-react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1><Chunk identifier='cnk_80731c71aaa2f30bee47'>Check Out Some of My Works.</Chunk></h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
         
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <Chunk identifier="cnk_a293a14f6559135e7264"></Chunk>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                       <p><Chunk identifier="cnk_4085011f447bdc905429" /></p>
                         <p><Chunk identifier='cnk_524f8e2834fc01a4c74c'>Developed a feature for users to create custom categories to easily sort their tasks.</Chunk></p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
           
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <Chunk identifier="cnk_adc2384e501e7c1a7076"></Chunk>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                       <p><Chunk identifier="cnk_4085011f447bdc905429" /></p>
                         <p><Chunk identifier='cnk_524f8e2834fc01a4c74c'>Developed a feature for users to create custom categories to easily sort their tasks.</Chunk></p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
           
       


          </div>
        </div>
      </div>
  </section>
        );
  }
}