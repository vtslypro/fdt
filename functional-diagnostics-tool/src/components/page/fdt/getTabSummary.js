import React from 'react';
import { Component } from 'react';

export default class getTabSummary extends Component {
  static getContent(state, responseData) {
      if (state.lastClientState && responseData && responseData.appcast){
        var clientState = JSON.parse(state.lastClientState);
        var appcast = responseData.appcast;
        return (
          <div className="row">

            <div className="col-md-6">
              {/* BEGIN SAMPLE TABLE PORTLET*/}
              <div className="portlet box blue-hoki">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="fa fa-user"></i>Client Info </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"> </a>
                    </div>
                  </div>
                  <div className="portlet-body" style={{padding: 0 + 'px'}}>
                    <div className="table-scrollable">
                      <table className="table table-striped table-bordered table-advance table-hover">
                        <thead>
                          <tr>
                            <th><i className="fa fa-briefcase"></i> Field </th>
                            <th><i className="fa fa-user"></i> Value </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="highlight">
                              Client Version
                            </td>
                            <td> {state.clientVersion} </td>
                          </tr>
                          <tr>
                            <td className="highlight">
                              Client Type
                            </td>
                            <td> {clientState.appManagerProfile.clientType} </td>
                          </tr>
                          <tr>
                            <td className="highlight">
                              sdsId
                            </td>
                            <td> {clientState.appManagerProfile.sdsId} </td>
                          </tr>
                          <tr>
                            <td className="highlight">
                              nonce
                            </td>
                            <td> {clientState.nonce} </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* END SAMPLE TABLE PORTLET*/}
              </div>
              <div className="col-md-6">
                {/* BEGIN SAMPLE TABLE PORTLET */}
                <div className="portlet box green-haze">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-comments"></i>Appcast Response </div>
                      <div className="tools">
                        <a href="javascript:;" className="collapse"> </a>
                      </div>
                    </div>
                    <div className="portlet-body" style={{padding: 0 + 'px'}}>
                      <div className="table-scrollable">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th> Field </th>
                              <th> Value </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> nativeUserName </td>
                              <td> {appcast.nativeUserName} </td>
                            </tr>
                            <tr>
                              <td> id </td>
                              <td> {appcast.id} </td>
                            </tr>
                            <tr>
                              <td> adUserId </td>
                              <td> {appcast.adUserId} </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* END SAMPLE TABLE PORTLET */}
                </div>

                  </div>
                );
              }
              else
              return '';
            }
  render() {
    return (
      <div>
        {this.getContent(this.props.state, this.props.responseData)}
      </div>
    );
  }
}
