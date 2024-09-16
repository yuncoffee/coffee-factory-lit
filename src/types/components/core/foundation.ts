import {
    COMMON_SIZE_SCALES,
    SYSTEM_FONT_SCALES,
    SYSTEM_FONT_WEIGHTS,
    SYSTEM_FRAME_SCALES,
    SYSTEM_RADIUS_SCALES,
    SYSTEM_SPACING_SCALES,
    SYSTEM_STROKE_SCALES,
} from "../../../data/types/components/core/foundation"

export type SystemFontWeight = (typeof SYSTEM_FONT_WEIGHTS)[number]
export type SystemFontScale = (typeof SYSTEM_FONT_SCALES)[number]
export type SystemFontAttr =
    | "fontSize"
    | "fontWeight"
    | "lineHeight"
    | "letterSpacing"
export interface SystemFont {
    fontScale: SystemFontScale

    getFontAttributes: (attr: SystemFontAttr) => number
}

export type SystemSpacingScale = (typeof SYSTEM_SPACING_SCALES)[number]
export type SystemStrokeScale = (typeof SYSTEM_STROKE_SCALES)[number]
export type SystemFrameScale = (typeof SYSTEM_FRAME_SCALES)[number]
export type SystemRadiusScale = (typeof SYSTEM_RADIUS_SCALES)[number]

export type UIFrameScale = (typeof COMMON_SIZE_SCALES)[number]
