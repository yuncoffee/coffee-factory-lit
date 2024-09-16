import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
const sheet = new CSSStyleSheet()

fetch("https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css")
    .then((response) => response.text())
    .then((css) => {
        sheet.replaceSync(css)
    })

@customElement("icon-remix")
export class IconRemix extends LitElement {
    static override styles = sheet

    @property()
    iconName = "ri-admin-line"

    @property()
    scale = "1x"

    override render() {
        return html`<i class="${this.iconName} ri-${this.scale}"></i>`
    }
}
