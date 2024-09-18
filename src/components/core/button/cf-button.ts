import { html, nothing } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { CFElement } from "../foundation/cf-element"
import { cfButtonStyles } from "./cf-button.styles"
import "../Label/cf-label"
import {
    ButtonType,
    CFButtonElement,
} from "../../../types/components/core/button"
// 어떻게 효과적으로 버튼을 렌더링 시킬까?
// 버튼 타입별로 나누자!
// filled, tonal, outlined, text
@customElement("cf-button")
export class CFButton extends CFElement implements CFButtonElement {
    static override get styles() {
        return [...super.styles, cfButtonStyles]
    }

    @property()
    name = ""

    @property()
    type: ButtonType = "filled"

    @property()
    hasStyle = "true"

    @property({ type: Boolean })
    isDisabled = false

    @state()
    isHover = false

    @state()
    isPressed = false

    @state()
    hasSlotCustomChild = false

    override render() {
        const rootStyles = {
            "--background-color": `${this.isHover ? "#fff" : "#333"}`,
            "--tint-color": `${this.isHover ? "#000" : "#fff"}`,
            "--border-color": `${this.isHover ? "#fff" : "#333"}`,
        }

        return html`
            <button
                class="rootContainer"
                style=${styleMap(rootStyles)}
                ?disabled=${this.isDisabled}
                @click=${this._handleClick}
                @mouseenter=${this._handleMouseOver}
                @mouseleave=${this._handleMouseOver}
                data-has-style=${this.hasStyle}
            >
                <slot
                    name="custom"
                    style=${styleMap(rootStyles)}
                    @slotchange=${this._handleSlotChange}
                ></slot>
                ${this.innerLabelTemplate()}
            </button>
        `
    }

    _handleClick = () => {
        console.log("Inner Click")
    }

    _handleSlotChange = (e: Event) => {
        const target = e.target as HTMLSlotElement
        const childNodes = target.assignedNodes({ flatten: true })
        this.hasSlotCustomChild = childNodes.length !== 0
    }

    _handleMouseOver() {
        console.log("Hover")
        if (this.isPressed) this.isPressed = false
        this.isHover = !this.isHover
    }

    innerLabelTemplate = () => {
        return this.hasSlotCustomChild
            ? nothing
            : html`
                  <cf-label .hasStyle=${"false"}>
                      <slot name="leading"></slot>
                      <slot></slot>
                      <slot name="trailing"></slot>
                  </cf-label>
              `
    }
}
