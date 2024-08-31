/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import "./components/sample"
import { MyElement } from "./components/sample"

declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement
    }
}
