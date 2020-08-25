import React, { Component } from "react";
import { formatNumber, formatPercent } from "./../helpers/formats";

export default class Card extends Component {
  render() {
    let data = this.props.transactions;
    let countID = this.props.countID;
    let color = "";
    data.type === "-" ? (color = "red lighten-4") : (color = "teal lighten-2");
    return (
      <div className={`card ${color}`}>
        <div className="row">
          <div className="left">
            <div>{countID}</div>
          </div>

          <div className="col s6 padding-left-s3">
            <div>{data.category}</div>

            <div>{data.description}</div>
          </div>
          <div className="padding-right-s3">{formatNumber(data.value)}</div>
          <div className="row right">modal</div>
        </div>
      </div>
    );
  }
}
