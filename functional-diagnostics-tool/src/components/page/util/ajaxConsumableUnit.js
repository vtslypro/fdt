import React from 'react';
import { Component } from 'react';
import toastr from 'toastr';

export default class Toastr extends Component {
  static ajaxConsumableUnit(upi1s, upi2s){
    var upi1Arr = [], upi2Arr = [];
    var x, y, temp = [];
    var count = 0;
    for( x in upi1s ){
      if(count < 10){
        temp.push("\"" + upi1s[x] + "\"");
        count++;
      }
      else {
        upi1Arr.push(temp);
        temp = [];
        temp.push("\"" + upi1s[x] + "\"");
        count = 1;
      }
    }
    if(temp.length > 0){
      upi1Arr.push(temp);
      temp = [];
    }

    // upi1Arr.push("\"MAYALT&2016&WIN64&201507192115-965962\"");
    count = 0;
    temp = [];
    for( y in upi2s ){
      if(count < 10){
        temp.push("\"" + upi2s[y] + "\"");
        count++;
      }
      else {
        upi2Arr.push(temp);
        temp = [];
        temp.push("\"" + upi2s[y] + "\"");
        count = 1;
      }
    }
    if(temp.length > 0){
      upi2Arr.push(temp);
      temp = [];
    }
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/consumableUnits/v5",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "authorization": ""
      },
      "processData": false,
      "data": ""
    }

    var result = {
      "upi" : [],
      "upi2" : []
    }

    for(var i=0; i<upi1Arr.length; i++){
      settings.data = "{\"consumableUnitsV5Request\": {\"upi1s\": [" + upi1Arr[i].toString() + "],\"upi2s\": [],\"nonce\": \"asdsad\",\"timestamp\": \"asdasd\",\"lang\": \"en_US\",\"appManagerProfile\": {\"clientVersion\": \"1.0.0.1\",\"clientType\":\"WINGMAN\",\"sdsId\": \"{BF1AED64-C14A-4BB8-8015-739FB936CC00}\"}, \"userProfile\": {    \"lang\": \"en_US\",    \"eidmGuid\": \"\",    \"nativeUserName\": \"ADS\\\\34ad62d1-f72f-11e5-83fb-185e0fa28437\"  }}}";

      var hash = CryptoJS.HmacSHA256(settings["data"], SECRET_KEY);
      var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
      //console.log("hashInBase64: " + hashInBase64);
      settings.headers.authorization = "ADAPPMGR adappmgr_access=\\\"" + ACCESS_KEY + "\", adappmgr_sign=\\\"" + hashInBase64 + "\"";

      var thisFDT = this;

      //this.props.fetchConsumableUnit();

      console.log("finish");
    };
    
    for(var i=0; i<upi2Arr.length; i++){
      settings.data = "{\"consumableUnitsV5Request\": {\"upi1s\": [],\"upi2s\": [" + upi2Arr[i].toString() + "],\"nonce\": \"asdsad\",\"timestamp\": \"asdasd\",\"lang\": \"en_US\",\"appManagerProfile\": {\"clientVersion\": \"1.0.0.1\",\"clientType\":\"WINGMAN\",\"sdsId\": \"{BF1AED64-C14A-4BB8-8015-739FB936CC00}\"}, \"userProfile\": {    \"lang\": \"en_US\",    \"eidmGuid\": \"\",    \"nativeUserName\": \"ADS\\\\34ad62d1-f72f-11e5-83fb-185e0fa28437\"  }}}";

      var hash = CryptoJS.HmacSHA256(settings["data"], SECRET_KEY);
      var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
      //console.log("hashInBase64: " + hashInBase64);
      settings.headers.authorization = "ADAPPMGR adappmgr_access=\\\"" + ACCESS_KEY + "\", adappmgr_sign=\\\"" + hashInBase64 + "\"";

      var thisFDT = this;
      $.ajax(settings).done(function (response) {
        var cu = response.consumableUnitsV5Response.consumableUnits;
        for( var item in cu){
          if(cu[item] != null)
          result.upi2.push(cu[item]);
        };
      });
    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
