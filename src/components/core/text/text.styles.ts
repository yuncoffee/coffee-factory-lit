import { css } from "lit"

export const textStyles = css`
    :host {
        display: inline-flex;
        font-size: var(--font-size, 16px);
        font-weight: var(--font-weight, 500);
        line-height: var(--line-height, 1.5em);
        letter-spacing: var(--letter-spacing, 0);
    }

    :host(h2) {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
    }
`
