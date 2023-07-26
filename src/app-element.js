import { LitElement, css, html } from "lit";

export class AppElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: black solid 2px;
      }
      p {
        color: var(--color-poc, white);
      }
      ::slotted(p) {
        color: red;
      }
    `;
  }

  static get properties() {
    return {
      hello: { type: String },
      pepito: { type: String },
      disabled: { type: Boolean },
      val: { type: Object },
      tags: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.pepito = "Pepito";
    this.disabled = true;
    this.val = "Valor";
    this.tags = ["tag 1", "tag 2"];
  }

  render() {
    return html`
      ${this.disabled
        ? html`<input type="text" .value="${this.val}" />
            <input type="text" ?disabled="${this.disabled}" />
            <slot></slot>
            <p part="hello">${this.hello} - ${this.pepito}</p>
            <button @click="${this.clickMe}">Click</button>
            <ul>
              ${this.tags.map((tag) => html`<li>${tag}</li>`)}
            </ul> `
        : html`<p>Acuerdate de poner disabled a true</p>`}
    `;
  }

  createRenderRoot() {
    return this;
  }

  clickMe(e) {
    e.preventDefault();
    this.pepito = "Fulanito";
    console.log(e);
    const message = new CustomEvent("poc:message", {
      bubbles: true,
      composed: true,
      detail: {
        msg: "hola desde el componente",
      },
    });
    this.dispatchEvent(message);
  }
}

customElements.define("app-element", AppElement);
