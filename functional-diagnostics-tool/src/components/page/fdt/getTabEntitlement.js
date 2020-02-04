import React from 'react';
import { Component } from 'react';

export default class getTabEntitlement extends Component {
  static getContent(responseData) {
    if (responseData && responseData.appcast && responseData.appcast.entitlements){
      return (
        <div>
          <section>
            <h3><b> Appcast > entitlements > products > installed > products1</b></h3>
            {
              (responseData.appcast.entitlements.products.installed.products1
                ? <div className="table-scrollable">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> UPI </th>
                      <th> Product </th>
                      <th> cuId </th>
                      <th> isContract </th>
                      <th> isInGracePeriod </th>
                      <th> gracePeriodEndDate </th>
                      <th> contracts </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      responseData.appcast.entitlements.products.installed.products1.map(function(item, i) {
                        return (
                          <tr key={i}>
                            <td> {item.upi} </td>
                            <td> N/A </td>
                            <td> {item.cuId} </td>
                            <td> {item.isContract} </td>
                            <td> {item.isInGracePeriod} </td>
                            <td> {item.gracePeriodEndDate} </td>
                            <td>
                              <ul>
                                {
                                  item.contracts.map(function(contract, j) {
                                    return (
                                      <li key={j}>{contract.contractNumber} </li>
                                    )})
                                  }
                                </ul>
                              </td>
                            </tr>
                          )})
                        }
                      </tbody>
                    </table>
                  </div>
                  : <div>The <b>'products1'</b> field does not exist.</div>
              )}
            </section>

            <section>
              <h3><b> Appcast > entitlements > products > installed > products2</b></h3>
              {
                (responseData.appcast.entitlements.products.installed.products2.length > 0
                  ?  <div className="table-scrollable">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th> UPI2 </th>
                        <th> Product </th>
                        <th> Product Line </th>
                        <th> Product Ver </th>
                        <th> isContract </th>
                        <th> isInGracePeriod </th>
                        <th> gracePeriodEndDate </th>
                        <th> contracts </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        responseData.appcast.entitlements.products.installed.products2.map(function(item, i) {
                          return (
                            <tr key={i}>
                              <td> {item.upi2} </td>
                              <td> N/A </td>
                              <td> {item.prodLine} </td>
                              <td> {item.prodVer} </td>
                              <td> {item.isContract} </td>
                              <td> {item.isInGracePeriod} </td>
                              <td> {item.gracePeriodEndDate} </td>
                              <td>
                                <ul>
                                  {
                                    item.contracts.map(function(contract, j) {
                                      return (
                                        <li key={j}>{contract.contractNumber} </li>
                                      )})
                                    }
                                  </ul>
                                </td>
                              </tr>
                            )})
                          }
                        </tbody>
                      </table>
                    </div>
                    : <div>The <b>'products2'</b> field is empty.</div>
                )}
              </section>

              <section>
                <h3><b> Appcast > entitlements > products > available </b></h3>
                {
                  (responseData.appcast.entitlements.products.available.length > 0
                    ?   <div className="table-scrollable">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th> Product Line </th>
                          <th> Product Ver </th>
                          <th> isContract </th>
                          <th> errorCode </th>
                          <th> isInGracePeriod </th>
                          <th> gracePeriodEndDate </th>
                          <th> Contracts </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          responseData.appcast.entitlements.products.available.map(function(item, i) {
                            return (
                              <tr key={i}>
                                <td> {item.prodLine} </td>
                                <td> {item.prodVer} </td>
                                <td> {item.isContract} </td>
                                <td> {item.errorCode} </td>
                                <td> {item.isInGracePeriod} </td>
                                <td> {item.gracePeriodEndDate} </td>
                                <td>
                                  <ul>
                                    {
                                      item.contracts.map(function(contract, j) {
                                        return (
                                          <table key={j} className="table table-striped table-hover">
                                            <thead>
                                              <tr>
                                                <th> Contract Number </th>
                                                <th> sn </th>
                                                <th> prodKey </th>
                                                <th> type </th>
                                                <th> deployment </th>
                                                <th> startDate </th>
                                                <th> endDate </th>
                                                <th> isActive </th>
                                                <th> isInGracePeriod </th>
                                                <th> gracePeriodEndDate </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>{contract.contractNumber}</td>
                                                <td>{contract.sn}</td>
                                                <td>{contract.prodKey}</td>
                                                <td>{contract.type}</td>
                                                <td>{contract.deployment}</td>
                                                <td>{contract.startDate}</td>
                                                <td>{contract.endDate}</td>
                                                <td>{contract.isActive}</td>
                                                <td>{contract.isInGracePeriod}</td>
                                                <td>{contract.gracePeriodEndDate}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        )})
                                      }
                                    </ul>
                                  </td>
                                </tr>
                              )})
                            }
                          </tbody>
                        </table>
                      </div>
                      : <div>The <b>'available'</b> field is empty.</div>
                  )}
                </section>
              </div>
            );
          }
          else
          return <div>Cannot find any entitlement. Appcast['entitlements'] is empty.</div>;
  }
  render() {
    return (
      <div>
        {this.getContent(this.props.responseData)}
      </div>
    );
  }
}
