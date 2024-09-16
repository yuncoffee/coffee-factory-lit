import { html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { CFElement } from "../foundation/cf-element"
import { cfButtonStyles } from "./cf-button.styles"

// 어떻게 효과적으로 버튼을 렌더링 시킬까?
// 버튼 타입별로 나누자!
// filled, tonal, outlined, text
@customElement("cf-button")
export class CFButton extends CFElement {
    static override get styles() {
        return [...super.styles, cfButtonStyles]
    }

    @property()
    name = ""

    @property()
    type = ""

    @property({ type: Boolean })
    isDisabled = false

    @state()
    isHover = false

    @state()
    isPressed = false

    // @property()
    // configure

    override render() {
        return html`
            <button
                class="rootContainer"
                ?disabled=${this.isDisabled}
                @click=${this.handleClick}
            >
                <slot></slot>
            </button>
        `
    }

    handleClick = () => {
        console.log("Inner Click")
    }
}
