import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-restore`
 * Generates a file upload for the user to restore an acocunt
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxRestore extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        label.myLabel input[type="file"] {
          position:absolute;
          top: -1000px;
        }
        .myLabel {
          width: 100%;
          outline: none;
          height: 40px;
          background: #F0F1F3;
          border: 1px solid #C9CCD0;
          text-align: center;
          font-size: 15px;
          background-image: linear-gradient(-180deg, #FEFFFF 0%, #F3F4F5 100%);
          border: 1px solid #D2D3D5;
          border-radius: 4px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 13px;
          line-height: 40px;
          font-weight:600;
          display: inline-block;
        }
        .myLabel:hover {
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
        }
        .myLabel :invalid + span {
          color: #585D6B;
        }
        .myLabel :valid + span {
          color: #585D6B;
        }
      </style>
      <label class="myLabel">
        <input on-change="_restore" id="file" type="file" class="none" accept="[[accept]]" required/>
        <span>[[buttonText]]</span>
      </label>
    `;
  }
  static get properties() {
    return {
      accept: {
        type: String,
        value: '.csv',
      },
      restoreData: {
        type: String,
        reflectToAttribute: true,
        notify: true,
      },
      error: {
        type: String,
        reflectToAttribute: true,
        notify: true,
      },
      buttonText: {
        type: String,
        value: 'Restore Account',
      },
    };
  }

  _restore(event) {
    event.stopPropagation();
    event.preventDefault();
    this.filename = event.target.files[0].name;
    this.fileExtension = '.'+this.filename.split(".").slice(-1)[0] 
    if(this.fileExtension != this.accept) {
      return false
    }
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        this.restoreData = reader.result;
    };
    reader.onerror = (error) => {
        this.error = error;
    };
}

} window.customElements.define('blox-restore', BloxRestore);
