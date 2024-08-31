/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from "rollup-plugin-summary"
import terser from "@rollup/plugin-terser"
import resolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import { minifyTemplateLiterals } from "rollup-plugin-minify-template-literals"

export default {
    input: "dev-build/core-element.js",
    output: {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
    },
    onwarn(warning) {
        if (warning.code !== "THIS_IS_UNDEFINED") {
            console.error(`(!) ${warning.message}`)
        }
    },
    plugins: [
        replace({ preventAssignment: false, "Reflect.decorate": "undefined" }),
        resolve(),
        minifyTemplateLiterals(),
        /**
         * This minification setup serves the static site generation.
         * For bundling and minification, check the README.md file.
         */
        terser({
            ecma: 2021,
            module: true,
            warnings: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            },
            format: { comments: false },
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ["console.log"],
            },
        }),
        summary(),
    ],
}
