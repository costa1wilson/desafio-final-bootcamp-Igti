import React, { Component } from "react";
import Next from "./Next";
import Periods from "./../helpers/Periods";

import Extratos from "./Extratos";
import Card from "./Card";
import Search from "./Search";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
export default class Data extends Component {
  constructor() {
    super();
    this.state = {
      currentPeriods: "2019-01",
      transactions: [],
      countReceitas: 0,
      countDespesas: 0,
    };
  }
  handlerClick = async (event) => {
    let { currentPeriods, transactions } = this.state;
    currentPeriods = event.target.value;
    this.setState({ currentPeriods: currentPeriods });
    let periodUrl = `http://localhost:3001/api/transaction/${currentPeriods}`;
    let resource = await (await fetch(periodUrl)).json();
    transactions = resource;

    this.setState({ transactions: transactions });
  };
  componentDidMount() {
    this.handlerClick({ target: { value: "2019-01" } });
  }
  valorReceitas = () => {
    const { transactions } = this.state;
    let arrayReceita = [];

    arrayReceita = transactions.filter((data) => {
      return data.type === "+";
    });
    let soma = 0;
    arrayReceita.forEach((number) => {
      soma += number.value;
    });
    console.log(soma);
    return soma;
  };
  valorDespesas = () => {
    const { transactions } = this.state;

    let arrayDespesa = [];
    arrayDespesa = transactions.filter((data) => {
      return data.type === "-";
    });
    let soma = 0;
    arrayDespesa.forEach((number) => {
      soma += number.value;
    });
    return soma;
  };
  render() {
    const { currentPeriods, transactions } = this.state;
    let id = 0;
    return (
      <div>
        <div className="row center-align">
          <Next></Next>
          <div className="col s3 m4">
            <select
              className="browser-default"
              defaultValue={this.state.currentPeriods}
              onChange={this.handlerClick}
              selected
            >
              {Periods.map((period) => {
                return <option key={period}>{period}</option>;
              })}
            </select>
          </div>

          <Next></Next>
        </div>
        <Extratos
          transactions={transactions}
          countReceitas={this.valorReceitas()}
          countDespesas={this.valorDespesas()}
        ></Extratos>
        <Search></Search>
        {transactions.map((data) => {
          return (
            <Card
              key={`next${data._id}`}
              transactions={data}
              countID={(id += 1)}
            ></Card>
          );
        })}
      </div>
    );
  }
}
