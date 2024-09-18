import { BUTTON_TYPES } from "../../../data/types/components/core/button"

export type ButtonType = (typeof BUTTON_TYPES)[number]

export interface CFButtonElement {
    type: ButtonType
}
