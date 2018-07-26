import{PolymerElement,html}from"./my-app.js";class MyView2 extends PolymerElement{static get template(){return html`
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
    `}_handleResponse(e){this.numOrderToday=e.detail.response[0].numOrderToday;console.log(this.numOrderToday)}connectedCallback(){super.connectedCallback();this.$.ajax.generateRequest()}}window.customElements.define("my-view2",MyView2);