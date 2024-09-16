/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import "./components/sample"
import { MyElement } from "./components/sample"

import "./components/core/cf-core"
import { CfButton } from "./components/core/cf-core"

interface CFButtons {
    "cf-button": CfButton
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CFCore extends CFButtons {}

declare global {
    interface HTMLElementTagNameMap extends CFCore {
        "my-element": MyElement
    }
}
