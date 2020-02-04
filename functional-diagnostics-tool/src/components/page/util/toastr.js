import React from 'react';
import { Component } from 'react';
import toastr from 'toastr';

export default class Toastr extends Component {
  static generateNotification(title, content, position, status) {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": position,
      "onclick": null,
      "showDuration": "1000",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "slideDown",
      "hideMethod": "fadeOut",
      "progressBar" : true
    };

    if(status == "info")
      toastr.info(content, title);
    else if(status == "success")
      toastr.success(content, title);
    else if(status == "warning")
      toastr.warning(content, title);
    else
      toastr.error(content, title);
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
