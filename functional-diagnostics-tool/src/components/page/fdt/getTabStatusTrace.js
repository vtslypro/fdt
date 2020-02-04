import React from 'react';
import { Component } from 'react';
import StringProps from '../util/StringProps';

export default class getTabStatusTrace extends Component {
  static getContent(responseData) {
    if (responseData && responseData.appcast && responseData.appcast.statusTrace){
        var csrMap = new Map();
        if (responseData.appcast.statusTrace.contracts && responseData.appcast.statusTrace.contracts.length > 0) {
            responseData.appcast.statusTrace.contracts.map(function(item, i) {
              if (item.contract.featureType == "CSR" && item.contract.featureName == "Desktop Access") {
                var plcSet = new Set();
                if (csrMap.has(item.contract.contractNumber)) {
                  plcSet= csrMap.get(item.contract.contractNumber);
                }
                plcSet.add(item.contract.productLineCode);
                csrMap.set(item.contract.contractNumber, plcSet);
              }
          });

          // sort by value
          responseData.appcast.statusTrace.contracts.sort(function (a, b) {
            if (a.contract.contractNumber > b.contract.contractNumber) {
              return 1;
            }
            if (a.contract.contractNumber < b.contract.contractNumber) {
              return -1;
            }
            return 0;
          });
        }
        csrMap.forEach(function(value, key) {
          console.log(key + " = " + value);
        });
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

          <section>
            <h3><b> Appcast > statusTrace > productUpdates</b></h3>
            {
              (responseData.appcast.statusTrace.productUpdates.length > 0
                ? <div className="table-scrollable">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> Release Id </th>
                      <th> Available Updates </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      responseData.appcast.statusTrace.productUpdates.map(function(item, i) {
                        return (
                          <tr key={i}>
 < td style = {              {
                fontSize: 10 + 'px'
              }
            } > {
              item.releaseId
            } < /td>
                            <td>
                              <ul style={{paddingLeft: 0 + 'px'}}>
                                <table className="table table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th> UpdateId </th>
                                      <th> Name </th>
                                      <th> Description </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {

                                      item.availableUpdates.map(function(item, i) {
                                        return (

                                          <tr key={i}>
                                            <td>{item.updateId}</td>
                                            <td>{item.name}</td>
                                            {(item.description == 'visible'
                                              ? <td className="bg-green-turquoise bg-font-green-turquoise">{(StringProps.localizedStrings[item.description]?StringProps.localizedStrings[item.description]:item.description)}</td>
                                            : <td className="bg-red bg-font-red">{(StringProps.localizedStrings[item.description]?StringProps.localizedStrings[item.description]:item.description)}</td>
                                        )}
                                      </tr>

                                    )})
                                  }
                                </tbody>
                              </table>
                            </ul>
                          </td>
                        </tr>
                      )})
                    }
                  </tbody>
                </table>
              </div>
              : <div>The <b>'productUpdates'</b> field is empty.</div>
          )}
        </section>


        <section>
            <h3><b> Appcast > statusTrace > contracts</b></h3>
            {
              (responseData.appcast.statusTrace.contracts && responseData.appcast.statusTrace.contracts.length > 0
                ? <div className="table-scrollable">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> Type </th>
                      <th> featureType </th>
                      <th> contractNumber </th>
                      <th> Has CSR </th>
                      <th> FeatureId </th>
                      <th> featureName </th>
                      <th> licensingModel </th>
                      <th> productKey </th>
                      <th> productLineCode </th>
                      <th> productLineName </th>
                      <th> accountNumber </th>
                      <th> assetNumber </th>
                      <th> active </th>
                      <th> assetStatus  </th>
                      <th> behavior </th>
                      <th> billingBehavior </th>
                      <th> contractStartDate </th>
                      <th> contractEndDate </th>
                      <th> deployment </th>
                      <th> entitlementId </th>
                      <th> entitlementStartDate </th>
                      <th> entitlementEndDate </th>
                      <th> entitlementType </th>
                      <th> licenseType </th>
                      <th> recurringTerm </th>
                      <th> serialNumber </th>
                      <th> subscriptionId </th>
                      <th> source </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      responseData.appcast.statusTrace.contracts.map(function(item, i) {
                        return (
                          <tr key={i}>
                            {(item.type == "CONTRACT_VALID" ? <td className="bg-green-turquoise bg-font-green-turquoise">{item.type}</td>
                                           : <td className="bg-red bg-font-red">{item.type}</td>
                            )}
                            <td> {item.contract.featureType} </td>

                            <td> {item.contract.contractNumber} </td>
                            {(item.contract.featureType == "CPR" && item.contract.licensingModel == "TERM" 
                                && csrMap.has(item.contract.contractNumber) && csrMap.get(item.contract.contractNumber).has(item.contract.productLineCode) ?
                                             <td className="bg-green-turquoise bg-font-green-turquoise">Yes</td>
                                           : (item.contract.featureType == "CSR" ? <td>N/A</td> : 
                                              item.contract.licensingModel == null ? <td>No</td> : <td className="bg-red bg-font-red">No</td>
                                             )
                            )}
                            <td> {item.contract.featureId} </td>
                            {(item.contract.featureName == "Desktop Access" ? <td className="bg-blue bg-font-blue">{item.contract.featureName}</td>
                                           : <td>{item.contract.featureName}</td>
                            )}
                            {(item.contract.licensingModel == "TERM" ? <td className="bg-yellow-gold bg-font-yellow-gold">{item.contract.licensingModel}</td>
                                           : <td>{item.contract.licensingModel}</td>
                            )}
                            <td> {item.contract.productKey} </td>
                            <td> {item.contract.productLineCode} </td>
                            <td> {item.contract.productLineName} </td>
                            <td> {item.contract.accountNumber} </td>
                            <td> {item.contract.assetNumber} </td>
                            <td> {item.contract.active} </td>
                            <td> {item.contract.assetStatus} </td>
                            <td> {item.contract.behavior} </td>
                            <td> {item.contract.billingBehavior} </td>
                            <td> {item.contract.contractStartDate} </td>
                            <td> {item.contract.contractEndDate} </td>
                            <td> {item.contract.deployment} </td>
                            <td> {item.contract.entitlementId} </td>
                            <td> {item.contract.entitlementStartDate} </td>
                            <td> {item.contract.entitlementEndDate} </td>
                            <td> {item.contract.entitlementType} </td>
                            <td> {item.contract.licenseType} </td>
                            <td> {item.contract.recurringTerm} </td>
                            <td> {item.contract.serialNumber} </td>
                            <td> {item.contract.subscriptionId} </td>
                            <td> {item.contract.source} </td>
                          </tr>
                        )})
                    }
                  </tbody>
                </table>
              </div>
              : <div>The <b>'contracts'</b> field is empty.</div>
          )}
        </section>


        <section>
          <h3><b> Appcast > statusTrace > processorData</b></h3>
          {
            (responseData.appcast.statusTrace.processorData.length > 0
              ? <div className="table-scrollable">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th> processorId </th>
                    <th> data </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    responseData.appcast.statusTrace.processorData.map(function(item, i) {
                      //console.log(item);
                      var upiTargetingUpdates_Keys = [];
                      for(var key in item.data.upiTargetingUpdates){
                        upiTargetingUpdates_Keys.push(key);
                      }
                      var upi2TargetingUpdates_Keys = [];
                      for(var key in item.data.upi2TargetingUpdates){
                        upi2TargetingUpdates_Keys.push(key);
                      }
                      var getClicEntitlementsSnProxyData = function(data) {
                        var rows = [];
                        Object.keys(data).forEach(function (key) {
                          var thisItem = data[key];
                          rows.push(<li> {key} </li>);
                          var curRow = [];
                          if (key.startsWith("request")) {
                            var items = thisItem.split(",");
                            // console.log("items: ");
                            // console.log(items);
                            for (var i in items) {
                              curRow.push(<li> {items[i]} </li>);
                            }
                            //items.push(<li>{key} > {thisItem} </>);
                          } else if (key.startsWith("response")) {
                            //rows.push(<h4>{key} > {thisItem} </h4>);
                          }
                          rows.push(<ul> {curRow} </ul>);
                        })
                        return <div><ul> {rows} </ul></div>;
                      }
                      var getAdminProxyData = function(data) {
                        var rows = [];
                        Object.keys(data).forEach(function (key) {
                          var thisItem = data[key];
                          rows.push(<li> {key} </li>);
                          if (key.startsWith("request") && thisItem.serialNumbers) {
                            var serialNumbers = [];
                            for (var i = 0; i < thisItem.serialNumbers.length; i++) {
                                serialNumbers.push(<li> {thisItem.serialNumbers[i]} </li>);
                                
                            }
                            rows.push(<ul> {serialNumbers} </ul>);
                          } else if (key.startsWith("response") && thisItem.adminIdsList) {
                            var adminIdsList = [];
                            for (var i = 0; i < thisItem.adminIdsList.length; i++) {
                                adminIdsList.push(<li> serialNumber: {thisItem.adminIdsList[i].serialNumber} </li>);
                                adminIdsList.push(<li> adminIds: </li>);
                                var tempAdminIds = [];
                                for (var j = 0; j < thisItem.adminIdsList[i].adminIds.length; j++) {
                                  tempAdminIds.push(<li> {thisItem.adminIdsList[i].adminIds[j]} </li>);
                                }
                                adminIdsList.push(<ul> {tempAdminIds} </ul>);
                            }
                            rows.push(<ul> {adminIdsList} </ul>);
                          }
                        })
                        return <div><ul> {rows} </ul></div>;
                      }
                      return (
                        <tr key={i}>
                          <td> {item.processorId} </td>

                          {(item.processorId == 'Product' ?
                            <td>
                              {/* Begin inner table for updateEntities*/}
                              <h4> updateEntities </h4>
                              {(item.data.updateEntities && item.data.updateEntities.length > 0
                                ?

                                <ul style={{paddingLeft: 0 + 'px'}}>
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th> UpdateId </th>
                                        <th> Name </th>
                                        <th> Description </th>
                                        <th> UPI2 </th>
                                        <th> State </th>
                                        <th> Visible </th>
                                      </tr>
                                    </thead>
                                    <tbody>

                                      { item.data.updateEntities.map(function(item, i) {
                                        return (

                                          <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.displayName}</td>
                                            <td>{item.upi2}</td>
                                            <td>{item.state}</td>
                                            {(item.visible
                                              ? <td className="bg-green-turquoise bg-font-green-turquoise">True</td>
                                            : <td className="bg-red bg-font-red">False</td>
                                        )}
                                      </tr>

                                    )})
                                  }
                                </tbody>
                              </table>
                            </ul>

                            : <p> N/A </p>
                        )}
                        {/* End inner table for updateEntities*/}
                        {/* Begin inner table for upiTargetingUpdates*/}
                        <h4> upiTargetingUpdates </h4>
                        {(item.data.upiTargetingUpdates && upiTargetingUpdates_Keys.length > 0
                          ?
                          upiTargetingUpdates_Keys.map(function(upiKeys, i) {
                            return (
                              <ul key={i} style={{paddingLeft: 0 + 'px'}}>
                                <table className="table table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th> UPI </th>
                                      <th> ID </th>
                                      <th> Key </th>
                                    </tr>
                                  </thead>
                                  <tbody>

                                    {
                                      item.data.upiTargetingUpdates[upiKeys].map(function(item, i) {
                                        return (

                                          <tr key={i}>
                                            <td>{upiKeys}</td>
                                            <td>{item.cuId}</td>
                                            <td>{item.key}</td>
                                          </tr>

                                        )})
                                      }
                                    </tbody>
                                  </table>
                                </ul>

                              )})

                              : <p> N/A </p>
                          )}
                          {/* End inner table for upiTargetingUpdates*/}
                          {/* Begin inner table for upi2TargetingUpdates*/}
                          <h4> upi2TargetingUpdates </h4>
                          {(item.data.upi2TargetingUpdates && upi2TargetingUpdates_Keys.length > 0
                            ?
                            upi2TargetingUpdates_Keys.map(function(upi2Keys, i) {
                              return (
                                <ul key={i} style={{paddingLeft: 0 + 'px'}}>
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th> UPI2 </th>
                                        <th> ID </th>
                                        <th> Key </th>
                                      </tr>
                                    </thead>
                                    <tbody>

                                      {
                                        item.data.upi2TargetingUpdates[upi2Keys].map(function(item, j) {
                                          return (

                                            <tr key={j}>
                                              <td>{upi2Keys}</td>
                                              <td>{item.cuId}</td>
                                              <td>{item.key}</td>
                                            </tr>

                                          )})
                                        }
                                      </tbody>
                                    </table>
                                  </ul>

                                )})

                                : <p> N/A </p>
                            )}
                            {/* End inner table for upi2TargetingUpdates*/}
                          </td>
                          : <td style={{display: 'none'}}></td>
                      )}

                      {(item.processorId == 'GASEntitlementsProxy' ?
                        <td>
                          {/* Begin inner table for agreementBySerialNumberRequest*/}
                          <h4> request > agreementBySerialNumberRequest </h4>
                          {(item.data.request && item.data.request.agreementBySerialNumberRequest
                            ?

                            <ul style={{paddingLeft: 0 + 'px'}}>
                              <table className="table table-striped table-hover">
                                <thead>
                                  <tr>
                                    <th> serialNumber </th>
                                    <th> productLineCode </th>
                                    <th> release </th>
                                  </tr>
                                </thead>
                                <tbody>

                                  { item.data.request.agreementBySerialNumberRequest.map(function(item, i) {
                                    return (

                                      <tr key={i}>
                                        <td>{item.serialNumber}</td>
                                        <td>{item.productLineCode}</td>
                                        <td>{item.release}</td>
                                      </tr>

                                    )})
                                  }
                                </tbody>
                              </table>
                            </ul>

                            : <p> N/A </p>
                        )}
                        {/* End inner table for agreementBySerialNumberRequest*/}

                        {/* Begin inner table for agreementBySerialNumberResponse*/}
                        <h4> response > agreementBySerialNumberResponse > serialNumberDetails </h4>
                        {(item.data.response && item.data.response.agreementBySerialNumberResponse
                          ?

                          <ul style={{paddingLeft: 0 + 'px'}}>
                            <table className="table table-striped table-hover">
                              <thead>
                                <tr>
                                  <th> serialNumber </th>
                                  <th> productLineCode </th>
                                  <th> release </th>
                                </tr>
                              </thead>
                              <tbody>

                                { item.data.response.agreementBySerialNumberResponse.serialNumberDetails.map(function(item, i) {
                                  return (

                                    <tr key={i}>
                                      <td>{item.serialNumber}</td>
                                      <td>{item.productLineCode}</td>
                                      <td>{item.release}</td>
                                    </tr>

                                  )})
                                }
                              </tbody>
                            </table>
                          </ul>

                          : <p> N/A </p>
                      )}
                      {/* End inner table for agreementBySerialNumberResponse*/}
                    </td>
                    : <td style={{display: 'none'}}></td>
                )}

                {(item.processorId == 'AdminProxy' ?
                  <td>
                  {(
                    getAdminProxyData(item.data)
                  )}
                  </td>
                  : <td style={{display: 'none'}}></td>
                )}
                {(item.processorId == 'ClicEntitlementsSnProxy' ?
                  <td>
                  {(
                    getClicEntitlementsSnProxyData(item.data)
                  )}
                  </td>
                  : <td style={{display: 'none'}}></td>
                )}

          {(item.processorId == 'DynamoAdminDao' ?
            <td>
              {/* Begin inner table for adminIds*/}
              <h4> adminIds </h4>
              {(item.data.adminIds.length > 0
                ?

                <ul style={{paddingLeft: 0 + 'px'}}>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th> adminIds </th>
                      </tr>
                    </thead>
                    <tbody>

                      { item.data.adminIds.map(function(item, i) {
                        return (
                          <tr key={i}>
                            <td>{item}</td>
                          </tr>
                        )})
                      }
                    </tbody>
                  </table>
                </ul>

                : <p> N/A </p>
            )}
            {/* End inner table for adminIds*/}

            {/* Begin inner table for request.serialNumbers*/}
            <h4> sdsList </h4>

            {
              (item.data['deviceTable'+item.data.adminIds[0]] && item.data['deviceTable'+item.data.adminIds[0]].sdsList.length > 0
              ?

              <ul style={{paddingLeft: 0 + 'px'}}>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> sds </th>
                    </tr>
                  </thead>
                  <tbody>

                    { item.data['deviceTable'+item.data.adminIds[0]].sdsList.map(function(item, i) {
                      return (
                        <tr key={i}>
                          <td>{item}</td>
                        </tr>
                      )})
                    }
                  </tbody>
                </table>
              </ul>

              : <p> N/A </p>
          )}
          {/* End inner table for request.serialNumbers*/}

        </td>
        : <td style={{display: 'none'}}></td>
    )}

  </tr>
)})
}
</tbody>
</table>
</div>

: <div>The <b>'processorData'</b> field is empty.</div>
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
        {this.getContent(responseData)}
      </div>
    );
  }
}
