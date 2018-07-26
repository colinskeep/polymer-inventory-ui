/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import './shared-styles.js';


class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <iron-ajax
            id="ajax"
            method="GET"
            url="http://192.168.1.126:3000/dash/"
            headers='{"Access-Control-Allow-Origin": *}'
            content-type="application/json"
            handle-as="json"
            body="{{putBody}}"
            on-response="_handleResponse"
            debounce-duration="300">
      </iron-ajax>

      <div class="card">
      <div class="circle" value="{{numOrderToday}}"></div>
      <div class="circle">206</div>
      <div class="circle">557</div>
      <div class="circle">008</div>
      <div class="circle">119</div>
      </div>
    `;
  }
  _handleResponse(e) {
      this.numOrderToday = e.detail.response[0].numOrderToday;
      console.log(this.numOrderToday);
  }
  connectedCallback() {
      super.connectedCallback();
      this.$.ajax.generateRequest();
  }
}
window.customElements.define('my-view2', MyView2);

