import React from 'react';
import { Component } from 'react';

// Library for json object to XML
import js2xmlparser from "js2xmlparser";

import $ from 'jquery';
export default class UtilFunc extends Component {
  static utilIsValidJsonString(jsonString){
    if (/^[\],:{}\s]*$/.test(jsonString.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return true;
    }
    else {
      return false;
    }
  }
  static showXML(jsonObj) {
    var xmlString = js2xmlparser("data", jsonObj);
    xmlString = xmlString.toString();

    // XML does not allow node's name to contain '{' or '}'
    xmlString = xmlString.replace(/<{/g, '<_');
    xmlString = xmlString.replace(/}>/g, '>');
    xmlString = xmlString.replace(/<\/{/g, '</_');

    var myXmlWindow = window.open('data:text/xml,'+encodeURIComponent(xmlString), "data","width=800,height=600,scrollbars=1,resizable=1");
    myXmlWindow.document.close();
    myXmlWindow.focus();

    return false;
  }
  static createNewWindowWithTable(tableContent){
    var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=200, top="+(screen.height-400)+", left="+(screen.width-840));
    win.document.body.innerHTML = "<link href='http://rover.ecs.ads.autodesk.com/assets/fdt/css/json2table.css' rel='stylesheet' /><Table>" + tableContent + "</Table>";
  }
  static blockUI(options) {
      var isInTest = typeof global.it === 'function';
      if(!isInTest) App.blockUI(options);
  }
  static unblockUI(target) {
      var isInTest = typeof global.it === 'function';
      if(!isInTest) App.unblockUI(target);
  }
  static printObj(obj) {
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
      }
    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
