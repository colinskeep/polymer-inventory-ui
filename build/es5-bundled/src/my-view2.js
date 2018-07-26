define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_64a92a907a5f11e88fdea5bcb908e691(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n      <iron-ajax\n            id=\"ajax\"\n            method=\"GET\"\n            url=\"http://192.168.1.126:3000/dash/\"\n            headers='{\"Access-Control-Allow-Origin\": *}'\n            content-type=\"application/json\"\n            handle-as=\"json\"\n            body=\"{{putBody}}\"\n            on-response=\"_handleResponse\"\n            debounce-duration=\"300\">\n      </iron-ajax>\n\n      <div class=\"card\">\n      <div class=\"circle\" value=\"{{numOrderToday}}\"></div>\n      <div class=\"circle\">206</div>\n      <div class=\"circle\">557</div>\n      <div class=\"circle\">008</div>\n      <div class=\"circle\">119</div>\n      </div>\n    "]);_templateObject_64a92a907a5f11e88fdea5bcb908e691=function(){return data};return data}var MyView2=function(_PolymerElement){babelHelpers.inherits(MyView2,_PolymerElement);function MyView2(){babelHelpers.classCallCheck(this,MyView2);return babelHelpers.possibleConstructorReturn(this,(MyView2.__proto__||Object.getPrototypeOf(MyView2)).apply(this,arguments))}babelHelpers.createClass(MyView2,[{key:"_handleResponse",value:function _handleResponse(e){this.numOrderToday=e.detail.response[0].numOrderToday;console.log(this.numOrderToday)}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(MyView2.prototype.__proto__||Object.getPrototypeOf(MyView2.prototype),"connectedCallback",this).call(this);this.$.ajax.generateRequest()}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_64a92a907a5f11e88fdea5bcb908e691())}}]);return MyView2}(_myApp.PolymerElement);window.customElements.define("my-view2",MyView2)});