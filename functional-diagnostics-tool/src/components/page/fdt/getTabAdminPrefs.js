import React from 'react';
import { Component } from 'react';

export default class getTabAdminPrefs extends Component {
  static getContent(responseData) {
    if (responseData && responseData.appcast && responseData.appcast.statusTrace){
      return (
        <div>
          <section>
            <h3><b> Appcast > statusTrace > entitlements</b></h3>
            {
              (responseData.appcast.statusTrace.entitlements.length > 0
                ? <div className="table-scrollable">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> Type </th>
                      <th> Version Id </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      responseData.appcast.statusTrace.entitlements.map(function(item, i) {
                        return (
                          <tr key={i}>
                            <td> {item.type} </td>
                            <td> {item.versionId} </td>
                          </tr>
                        )})
                      }
                    </tbody>
                  </table>
                </div>
                : <div>The <b>'entitlements'</b> field is empty.</div>
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
