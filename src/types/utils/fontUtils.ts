import { SystemFontAttr, SystemFontScale } from "../components/core/foundation"

export const getSystemFontAttributes = (
    scale: SystemFontScale,
    attr: SystemFontAttr
) => {
    const attributes: { [key: string]: { [key: string]: number } } = {
        display: {
            fontSize: 3.6,
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        largeTitle: {
            fontSize: 3.2,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        title: {
            fontSize: 2.4,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        title2: {
            fontSize: 2.2,
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        title3: {
            fontSize: 2.0,
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        subTitle: {
            fontSize: 1.8,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        headline: {
            fontSize: 1.6,
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: 0,
        },
        body: {
            fontSize: 1.4,
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: 0,
        },
        caption: {
            fontSize: 1.2,
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: 0,
        },
        caption2: {
            fontSize: 1.0,
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: 0,
        },
    }
    return attributes[scale][attr]
}
