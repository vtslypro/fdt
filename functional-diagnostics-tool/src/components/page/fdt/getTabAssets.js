import React from 'react';
import { Component } from 'react';

export default class getTabAssets extends Component {
  static getContent(appcast, upiData) {
    if (appcast && upiData){
      return (
        <div>
          <section>
            <h3><b> Product Updates - UPI</b></h3>
            <h4> appcast > updates > productUpdates</h4>
            {
              ( appcast.updates.productUpdates && appcast.updates.productUpdates.length > 0
                ? <div className="table-scrollable">
                <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th> UPI </th>
                    <th> Product </th>
                  </tr>
                </thead>
                  <tbody>
                  {
                    appcast.updates.productUpdates.map(function(update, i) {
                      return (
                        <tr key={i}>
                          <td> {update.upi} </td>
                          <td> N/A </td>
                        </tr>
                      )})
                    }
                    </tbody>
                  </table>
                </div>
                : <div>The <b>'ppcast.updates.productUpdates'</b> field is empty.</div>
                )}
            </section>
              <section>
                <h3><b> Product Updates - UPI2</b></h3>
                <h4> appcast > updates > productUpdates</h4>
                {
                  (appcast.updates.productUpdates2 && appcast.updates.productUpdates2.length > 0
                    ? <div className="table-scrollable">
                    <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th> UPI2 </th>
                        <th> Product </th>
                      </tr>
                    </thead>
                      <tbody>
                      {
                        appcast.updates.productUpdates2.map(function(update, i) {
                          return (
                            <tr key={i}>
                              <td> {update.upi2} </td>
                              <td> N/A </td>
                            </tr>
                          )})
                        }
                        </tbody>
                      </table>
                    </div>
                    : <div>The <b>'ppcast.updates.productUpdates2'</b> field is empty.</div>
                    )}
                </section>
            </div>
          );
        }
        else
        return '';
      }
  render() {
    return (
      <div>
        {this.getContent(this.props.appcast, this.props.upiData)}
      </div>
    );
  }
}
