import React, { Component } from "react";
import { formatNumber, formatPercent } from "./../helpers/formats";

export default class Extratos extends Component {
  render() {
    let { transactions, countReceitas, countDespesas } = this.props;

    return (
      <fieldset>
        <div className="row">
          <span className="col s3 m3 l3">
            lançamentos:{transactions.length}
          </span>
          <span className="col s3 m3 l3">
            Receitas:{formatNumber(countReceitas)}
          </span>
          <span className="col s3 m3 l3">
            Despesas:{formatNumber(countDespesas)}
          </span>
          <span className="col s3 m3 l3">
            Saldo:{formatNumber(countReceitas - countDespesas)}
          </span>
        </div>
      </fieldset>
    );
  }
}
