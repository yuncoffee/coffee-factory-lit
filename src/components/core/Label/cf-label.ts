import { html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { CFElement } from "../foundation/cf-element"
import "../text/text-system"
import { SystemFontScale } from "../../../types/components/core/foundation"
import { cfLabelStyles } from "./cf-label.style"

@customElement("cf-label")
export class CFLabel extends CFElement {
    static override get styles() {
        return [...super.styles, cfLabelStyles]
    }

    @property()
    fontScale: SystemFontScale = "body"

    @property()
    hasStyle = "true"

    override render() {
        return html`
            <text-system
                data-has-style=${this.hasStyle}
                .fontScale=${this.fontScale}
                class="rootContainer"
            >
                <slot name="leading"></slot>
                <slot></slot>
                <slot name="trailing"></slot>
            </text-system>
        `
    }
}
