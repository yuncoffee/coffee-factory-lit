import { css } from "lit"

export const cfLabelStyles = css`
    :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .rootContainer {
        border: inherit;
        color: inherit;
        background: inherit;
    }

    .rootContainer:not([data-has-style="false"]) {
        --border-color: transparent;
        --background-color: blue;

        padding: 2px 4px;
        gap: 4px;
        transition: 0.4s;

        &:hover {
            background: var(--background-color);
        }
    }
`
