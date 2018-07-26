/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 12px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: row;
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }
      .seach-box{
        background-color: #dedede;
        margin-right: 11px;
        padding: 0px 18px 0px 18px;
        height: 36px;
        display: block;
      }
        .search {
          border: 0;
          margin-right: 11px;
          padding: 0px 18px 0px 18px;
          height: 36px;
          display: flex;
          flex-flow: row nowrap;
          width: 98%;        
        }
        .left {
          display:flex;
          margin: 12px;
          padding: 5px;
          flex-grow: 1;
          overflow: hidden;
          font-size: smaller;
        }
        .rightinput {
          display:flex;
          margin: 12px;
          padding: 5px;
          align-items: flex-end;
          justify-content: flex-end;
          align-content: flex-end;
          flex-grow: 1;
          max-width: 28px;
          overflow: hidden;
          font-size: smaller;
        }
        .right {
          display:flex;
          margin: 12px;
          padding: 5px;
          align-items: flex-end;
          justify-content: flex-end;
          align-content: flex-end;
          flex-grow: 1;
          max-width: 100px;
          overflow: hidden;
          font-size: smaller;
        }
        .button {
          overflow: hidden;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          position: fixed;
          float: right;
          right: 1em;
          bottom:1em;
          z-index: 200;
        }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
