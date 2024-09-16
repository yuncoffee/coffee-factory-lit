export const FONT_LIST = [
    "1000",
    "900",
    "800",
    "700",
    "600",
    "500",
    "400",
    "300",
    "200",
    "100",
] as const

export type sFont = (typeof FONT_LIST)[number]
