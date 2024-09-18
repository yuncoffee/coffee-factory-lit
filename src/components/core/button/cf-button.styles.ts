import { css } from "lit"

export const cfButtonStyles = css`
    :host {
        display: inline-flex;

        --background-color: #000;
        --tint-color: #fff;
        --border-color: #000;
        --border-weight: 1px;
    }

    .rootContainer {
        cursor: pointer;
        background: var(--background-color);
        color: var(--tint-color);
        border: var(--border-weight) solid var(--border-color);
    }
`
