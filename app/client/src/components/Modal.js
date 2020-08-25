import React, { Component } from "react";
import M from "materialize-css";
import Despesa from "./Despesa";
import { get } from "../services/apiRest";
class Modal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { description: "" };
  }
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  // onChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }
  handlerDescription = async (event) => {
    //let res = await fetch("http://localhost:3000/receita");
    console.log(get());
  };
  // onSubmit = (event) => {
  //   event.preventDefault();
  //   fetch(this.props.formAction, {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ description: this.state.description }),
  //   });
  //   this.setState({ description: "" });
  //   console.log(event);
  // };
  // action={this.props.action}
  //             method={this.props.method}
  //             onSubmit={this.onSubmit}
  render() {
    return (
      <div>
        <a
          href="/"
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          <span>
            <i className="material-icons">add</i>
          </span>
          <span>Novo Lançamento</span>
        </a>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <Despesa></Despesa>
        </div>
      </div>
    );
  }
}
Modal.defaultProps = {
  action: "http://localhost:3001/transaction/receita",
  method: "post",
};
export default Modal;
