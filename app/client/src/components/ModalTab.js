import React, { Component } from "react";
import M from "materialize-css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Despesa from "./Despesa";
import Receita from "./Receita";
import { get } from "../services/apiRest";
class ModalTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { description: "" };
  }
  componentDidMount() {
    M.ModalTab.init(this.Modal);
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
          ref={(ModalTab) => {
            this.ModalTab = ModalTab;
          }}
          id="modal1"
          className="modal"
        >
          <BrowserRouter>
            <form className="col s4" onSubmit={this.handlerDescription}>
              <div className="row">
                <a
                  href="/"
                  className="modal-close waves-effect waves-red btn-flat right"
                >
                  <span>
                    <i className="large material-icons red">close</i>
                  </span>
                </a>
              </div>

              <fieldset>
                <div className="row">
                  <div className="col s12">
                    <div className="tabs">
                      <Link className="col s6" to="/receita">
                        <label>
                          <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            defaultChecked
                          />
                          <span>Receita</span>
                        </label>
                      </Link>

                      <Link className="col s6" to="/despesa">
                        <label>
                          <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                          />
                          <span>Despesa</span>
                        </label>
                      </Link>
                    </div>
                  </div>
                  <Switch>
                    <Route path="/despesa" exact={true} component={Despesa} />
                    <Route path="/receita" component={Receita} />
                  </Switch>
                </div>
              </fieldset>

              <button
                className="modal-close waves-effect waves-light btn-large left"
                type="submit"
              >
                salvar
              </button>
            </form>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default ModalTab;
