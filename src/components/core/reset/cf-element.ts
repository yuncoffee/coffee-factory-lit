import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { meyerResetStyles, selfResetStyles } from "./cf-element.styles"

@customElement("reset-style")
export class StyleResetable extends LitElement {
    static override styles = [meyerResetStyles, selfResetStyles]
}

@customElement("cf-element")
export class CfElement extends StyleResetable {
    override render() {
        return html`<slot></slot>`
    }
}
