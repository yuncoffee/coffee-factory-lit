// Typography
// System
export const SYSTEM_FONT_WEIGHTS = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
] as const

export const SYSTEM_FONT_SCALES = [
    "display",
    "largeTitle",
    "title",
    "title2",
    "title3",
    "subTitle",
    "headline",
    "body",
    "caption",
    "caption2",
] as const

// Color

// Layout
export const BASIC_SIZE_SCALES = ["small", "medium", "large"] as const
export const COMMON_SIZE_SCALES = [
    ...BASIC_SIZE_SCALES,
    "xsmall",
    "xlarge",
] as const
export const EXPANDED_SIZE_SCALES = [
    ...COMMON_SIZE_SCALES,
    "xxsmall",
    "xxxsmall",
    "xxlarge",
    "xxxlarge",
] as const
// spacing
export const SYSTEM_SPACING_SCALES = [...EXPANDED_SIZE_SCALES] as const
// frame
export const SYSTEM_FRAME_SCALES = [...EXPANDED_SIZE_SCALES] as const
// stroke
export const SYSTEM_STROKE_SCALES = [...BASIC_SIZE_SCALES, "xsmall"] as const
// radius
export const SYSTEM_RADIUS_SCALES = [
    ...EXPANDED_SIZE_SCALES,
    "square",
    "round",
] as const
