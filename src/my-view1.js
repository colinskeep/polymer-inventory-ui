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
import './jQuery.js';
import '../node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '../node_modules/@polymer/iron-ajax/iron-ajax.js';
import './notify.js';


class MyView1 extends PolymerElement {
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
            method="POST"
            url="http://192.168.1.126:3000/inv/"
            headers='{"Access-Control-Allow-Origin": *}'
            content-type="application/json"
            handle-as="json"
            body="{{putBody}}"
            on-response="_handleResponse"
            debounce-duration="300">
      </iron-ajax>
      <iron-ajax
            id="cycle"
            method="POST"
            url="http://192.168.1.126:3000/cycle/"
            headers='{"Access-Control-Allow-Origin": *}'
            content-type="application/json"
            handle-as="json"
            body="{{cycleBody}}"
            on-response="_cycleResponse"
            debounce-duration="300">
      </iron-ajax>

      <paper-icon-button class="button" src="sav.png" on-click="_cycle">Save</paper-icon-button>
      <div class="card">
        <input type="text" class="search" id="search" on-keyup="_search" autofocus>
      </div>
      <template is="dom-repeat" items="{{data}}">
      <div class="card">
        <span class="left">{{item.num}}</span><span class="left">{{item.description}}</span><span class="right" id="upc">{{item.upc}}</span><iron-icon icon="icons:create"></iron-icon><span class="right">{{item.MAIN}}</span><input type="text" class="rightinput" value="{{item.value}}" id="{{item.num}}" on-keyup="_update">
      </div>
      </template>
    `;
    }

    _search(e) {
        var count = 0;
        if (e.keyCode === 13 && e.currentTarget.value.toString().length <= 9 && /^\d+$/.test(e.currentTarget.value) == true) {
            this.putBody = {
                locationid: e.currentTarget.value
            }
            this.$.ajax.generateRequest();
            e.currentTarget.value = "";
        }
        else if (e.keyCode === 13 && e.currentTarget.value.toString().length >= 10 || /^\d+$/.test(e.currentTarget.value) == false && e.keyCode === 13) {
            var i = this.data.map(function (x) { return x.upc; }).indexOf(e.currentTarget.value);
            var n = this.data.map(function (x) { return x.num; }).indexOf(e.currentTarget.value);
            if (n > i) {
                i = n;
            }
            if (i >= 0) {
                this.set(`data.${i}`, {
                    MAIN: this.data[i].MAIN,
                    description: this.data[i].description,
                    id: this.data[i].id,
                    locationID: this.data[i].locationID,
                    num: this.data[i].num,
                    upc: this.data[i].upc,
                    value: +this.data[i].value + 1
                });
                $.notify(this.data[i].num + " matched.", "success");
            }
            else if (i < 0) {
                $.notify(e.currentTarget.value + " was not found!", "error");
                new Audio('./fail.wav').play();
            }     
            e.currentTarget.value = "";
        }
    }
    _handleResponse(e) {
        this.data = e.detail.response;
        
    }
    _cycle() {
        this.cycleBody = this.data
        this.$.cycle.generateRequest();
    }
    _cycleResponse(response) {
        $.notify("Success", "success");
        this.data = "";
        this.$.search.focus();
    }
    _update(e) {
        let i;
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].num == e.path[0].id) {
                this.data[i].value = e.path[0].value
            }
        }
    }
}
window.customElements.define('my-view1', MyView1);
