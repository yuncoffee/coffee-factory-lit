import { html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { CFElement } from "../foundation/cf-element"
import {
    SystemFont,
    SystemFontAttr,
    SystemFontScale,
} from "../../../types/components/core/foundation"
import { textStyles } from "./text.styles"
import { getSystemFontAttributes } from "../../../types/utils/fontUtils"

@customElement("text-system")
export class TextSystem extends CFElement implements SystemFont {
    static override get styles() {
        return [...super.styles, textStyles]
    }

    @property()
    fontScale: SystemFontScale = "body"

    @property()
    fontSize?: string

    @property()
    fontWeight?: string

    @property()
    lineHeight?: string

    @property()
    letterSpacing?: string

    override render() {
        const styles = {
            fontSize: `${
                this.fontSize ?? `${this.getFontAttributes("fontSize")}rem`
            }`,
            fontWeight: `${
                this.fontWeight ?? `${this.getFontAttributes("fontWeight")}`
            }`,
            lineHeight: `${
                this.lineHeight ?? `${this.getFontAttributes("lineHeight")}em`
            }`,
            letterSpacing: `${
                this.letterSpacing ??
                `${this.getFontAttributes("letterSpacing")}em`
            }`,
        }

        return html`<slot style="${styleMap(styles)}"></slot>`
    }

    getFontAttributes(attr: SystemFontAttr): number {
        return getSystemFontAttributes(this.fontScale, attr)
    }
}
