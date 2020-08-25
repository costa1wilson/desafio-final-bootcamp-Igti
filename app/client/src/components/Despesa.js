import React, { Component } from "react";
import { insert } from "../services/apiRest";

export default class Despesa extends Component {
  constructor() {
    super();
    this.state = {
      receita: true,
      despesa: false,
      description: "",
      category: "",
      value: 0,
      date: 0,
      type: "+",
    };
  }
  handlerClickedRadioR = async () => {
    let { receita, type, despesa } = this.state;
    receita = true;
    despesa = false;
    type = "+";
    this.setState({ receita: receita, type: type, despesa: despesa });
  };
  handlerClickedRadioD = async () => {
    let { receita, type, despesa } = this.state;
    receita = false;
    despesa = true;
    type = "-";
    this.setState({ receita: receita, type: type, despesa: despesa });
  };
  onChangedate = async (event) => {
    let { date } = this.state;
    date = event.target.value;
    this.setState({ date: date });
  };
  onChangecategory = async (event) => {
    let { category } = this.state;
    category = event.target.value;
    this.setState({ category: category });
  };
  onChangevalue = async (event) => {
    let { value } = this.state;
    value = Number.parseFloat(event.target.value);
    this.setState({ value: value });
  };
  onChangeDescription = async (event) => {
    let { description } = this.state;
    description = event.target.value;
    this.setState({ description: description });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let { description, category, value, date, type } = this.state;
    insert({
      description,
      category,
      value,
      year: date.substring(0, 4),
      month: date.substring(5, 7),
      day: date.substring(8, 9),
      yearMonth: date.substring(0, 7),
      date,
      type,
    });
  };
  render() {
    return (
      <form className="col s4" onSubmit={this.onSubmit}>
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
                <label className="col s6">
                  <input
                    className="with-gap"
                    name="group3"
                    type="radio"
                    onClick={this.handlerClickedRadioR}
                    defaultChecked
                  />
                  <span>Receita</span>
                </label>

                <label className="col s6">
                  <input
                    className="with-gap"
                    onClick={this.handlerClickedRadioD}
                    name="group3"
                    type="radio"
                  />
                  <span>Despesa</span>
                </label>
              </div>
            </div>
            <div className="col">
              <div className="input-field col s10">
                <input
                  id="descricao"
                  name="description"
                  type="text"
                  className="validate"
                  onChange={this.onChangeDescription}
                />
                <label htmlFor="descricao">Descrição</label>
              </div>
              <div className="input-field col s10">
                <input
                  id="categoria"
                  name="category"
                  type="text"
                  onChange={this.onChangecategory}
                  className="validate"
                />
                <label htmlFor="categoria">Categoria</label>
              </div>
              <div className="input-field col s7">
                <input
                  id="value"
                  name="value"
                  type="text"
                  onChange={this.onChangevalue}
                  className="validate"
                />
                <label htmlFor="value">Valor</label>
              </div>
              <div className="input-field col s3">
                <input
                  id="date"
                  name="date"
                  onChange={this.onChangedate}
                  className="validate"
                  type="date"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <button
          className="modal-close waves-effect waves-light btn-large left"
          type="submit"
        >
          salvar
        </button>
      </form>
    );
  }
}
