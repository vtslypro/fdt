import React from 'react';
import { Component } from 'react';

export default class getServerList extends Component {
  static getContent(customEndpoint, preview) {
    return (
      <select className="form-control" id="serverDropdownList" style={{height: 34 + 'px', marginTop: -5 + 'px', marginLeft: 22 + 'px'}} disabled={customEndpoint}>
        <option value="">https://update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v4</option>
        <option value="">https://update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v5</option>
        <option value="">https://update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v6</option>
        <option value="">https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v4</option>
        <option value="">https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v5</option>
        <option value="">https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v6</option>
        <option value="">https://stg02-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v4</option>
        <option value="">https://stg02-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v5</option>
        <option value="">https://stg02-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v6</option>
        <option value="">https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v4</option>
        <option value="">https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v5</option>
        <option value="">https://qa01-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v6</option>
        <option value="">https://int-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v4</option>
        <option value="">https://int-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v5</option>
        <option value="">https://int-update.delivery.autodesk.com/appcast/services/appcastService/{(preview ? 'preview/' : '')}sam/v6</option>
      </select>
    );
  }
  render() {
    return (
      <div>
        {this.getContent(this.props.customEndpoint, this.props.preview)}
      </div>
    );
  }
}
