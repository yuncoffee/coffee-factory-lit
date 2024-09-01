import { LitElement, PropertyValues, html, nothing } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("lifecycle-tester")
export class LifecycleTester extends LitElement {
    constructor() {
        super()
        console.log("--- parrent constructor called ---")
    }

    override connectedCallback() {
        super.connectedCallback()
        console.log("--- parrent connectedCallback called ---")
    }

    override disconnectedCallback() {
        super.disconnectedCallback()
        console.log("--- parrent disconnectedCallback called ---")
    }

    override willUpdate(_changedProperties: PropertyValues) {
        console.log("--- parrent willUpdate called ---")
    }

    @property({ type: Boolean })
    isHide = false

    override render() {
        console.log("--- parrent render called ---")

        return html`
            <div>
                Hello Lit ${this.buttonTemplate()}
                ${this.isHide!
                    ? html`<lifecycle-tester-child
                          .index=${5}
                      ></lifecycle-tester-child>`
                    : nothing}
                ${this.isHide!
                    ? html`<lifecycle-tester-child></lifecycle-tester-child>`
                    : nothing}
                <lifecycle-tester-child
                    ?hidden=${this.isHide}
                ></lifecycle-tester-child>
            </div>
        `
    }

    handleClick = () => {
        this.isHide = !this.isHide
    }

    handleHover = (event: MouseEvent) => {
        console.log(event?.target)
    }

    buttonTemplate = () => {
        return html`<button
            @click=${this.handleClick}
            @mouseenter=${this.handleHover}
            @mouseleave=${this.handleHover}
        >
            Toggle
        </button>`
    }
}

@customElement("lifecycle-tester-child")
export class LifecycleTesterChild extends LitElement {
    @property({ type: Number })
    index = -1

    @property()
    name: string

    constructor() {
        super()
        console.log("--- child constructor called ---")

        this.name = "Hello World"
    }

    override connectedCallback() {
        super.connectedCallback()
        console.log("--- child connectedCallback called ---")
    }

    override shouldUpdate(changedProperties: PropertyValues<this>) {
        // Only update element if prop1 changed.
        console.log("child shouldUpdate", changedProperties)
        if (changedProperties.has("index")) {
            console.log("child shouldUpdate Update index")
        }
        return changedProperties.has("index")
    }

    override willUpdate(changedProperties: PropertyValues<this>) {
        // only need to check changed properties for an expensive computation.
        console.log("child will Update", changedProperties)
        if (changedProperties.has("index")) {
            console.log("child will Update index")
        }
    }

    override disconnectedCallback() {
        super.disconnectedCallback()
        console.log("--- child disconnectedCallback called ---")
    }

    override firstUpdated() {
        console.log("--- child first updated called ---")
    }

    override updated(changedProperties: PropertyValues<this>) {
        console.log("--- child updated", changedProperties)
    }

    override render() {
        console.log("--- child render called ---")

        return html`
            <div>
                My Life Cycle Child
                <span>${this.index}</span>
                <button @click=${this.handleClick}>index++</button>
                <button @click=${this.print}>print</button>
            </div>
        `
    }

    handleClick = () => {
        this.index++
    }

    print = () => {
        console.log(this.name)
    }
}
