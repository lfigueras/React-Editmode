import React, { Component } from 'react';
import { Chunk } from "editmode-react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              <Chunk identifier='cnk_225d5eb0637857711d70'>Feel free to contact me for any work or suggestions below</Chunk>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><Chunk identifier='cnk_70cb9de3bd6f32fc40d7' variables={{"variable": resumeData.role }}>Linked in :</Chunk>
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}