import { css } from "lit"

export const cfLabelStyles = css`
    :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        --background-color: #000;
        --tint-color: #000;
        --border-color: #000;
        --border-weight: 1px;
    }

    .rootContainer {
        border: var(--border-weight) solid var(--tint-color);
        color: var(--tint-color);
        background: var(--background-color);
    }

    .rootContainer:not([data-has-style="false"]) {
        padding: 2px 4px;
        gap: 4px;
        transition: 0.4s;

        &:hover {
            background: blue;
        }
    }
`
