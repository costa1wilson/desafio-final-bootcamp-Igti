import React, { Component } from "react";
import Modal from "./Modal";

export default class Search extends Component {
  // constructor() {
  //   super();
  // }

  // componentDidMount() {
  //   M.Modal.init(this.render);
  // }
  render() {
    return (
      <div className="file-field input-field">
        <Modal></Modal>
        {/*
        <div>
           <a
            className="waves-effect waves-light btn modal-trigger"
            href="#modal1"
          >
            Novo Lançamento
          </a> 
        </div>
          */}
        <div className="file-path-wrapper">
          <input type="text" />
        </div>

        {/* <div id="modal1" className="modal browser-default">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}
