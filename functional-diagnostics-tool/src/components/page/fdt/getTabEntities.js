import React from 'react';
import { Component } from 'react';

export default class getTabEntities extends Component {
  static getContent(responseData) {
    if (responseData && responseData.appcast && responseData.appcast.entities){
      return (
        <div>
          <section>
            <h3><b> Appcast > entities > consumableUnits</b></h3>
            {
              (responseData.appcast.entities.consumableUnits && responseData.appcast.entities.consumableUnits.length > 0
                ? <div className="table-scrollable">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> id </th>
                      <th> prodLineCode </th>
                      <th> prodVersion </th>
                      <th> prodMasterId </th>
                      <th> prodBuild </th>

                      <th> upi </th>
                      <th> upi2 </th>
                      <th> name </th>
                      <th> displayName </th>
                      <th> severity </th>
                      <th> type </th>

                      <th> unitType </th>
                      <th> releaseDate </th>
                      <th> state </th>
                      <th> publisher </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      responseData.appcast.entities.consumableUnits.map(function(item, i) {
                        if (item == null) {
                          return;
                        }
                        return (
                          <tr key={i}>
                            <td style={{fontSize: 10 + 'px'}}> {item.id} </td>
                            <td> {item.prodLineCode} </td>
                            <td> {item.prodVersion} </td>
                            <td> {item.prodMasterId} </td>
                            <td> {item.prodBuild} </td>

                            <td style={{fontSize: 10 + 'px'}}> {item.upi} </td>
                            <td style={{fontSize: 10 + 'px'}}> {item.upi2} </td>
                            <td> {item.name} </td>
                            <td> {item.displayName} </td>
                            <td> {item.severity} </td>
                            <td> {item.type} </td>

                            <td> {item.unitType} </td>
                            <td> {item.releaseDate} </td>
                            <td> {item.state} </td>
                            <td> {item.publisher} </td>

                          </tr>
                        )})
                      }
                    </tbody>
                  </table>
                </div>
                : <div>The <b>'consumableUnits'</b> field is empty.</div>
            )}
          </section>
        </div>
      );
    }
    else
    return <div>Cannot find status trace. Please make sure the log file is valid.</div>;
  }
  render() {
    return (
      <div>
        {this.getContent(this.props.responseData)}
      </div>
    );
  }
}
