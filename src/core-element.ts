/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import "./components/sample"
import "./components/lifecycle-tester"
import { MyElement } from "./components/sample"
import { LifecycleTester } from "./components/lifecycle-tester"

declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement
        "lifecycle-tester": LifecycleTester
    }
}
