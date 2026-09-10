#!/usr/bin/env node
/**
 * Runs the commercial page gate AND the prose rules the vitest suite runs.
 *
 * Exists so `npm run check:local` covers everything CI covers except the
 * typecheck and the Next build — both of which need node_modules this machine
 * deliberately does not have. Prose should never again be validated only by a
 * remote build.
 */
import { execFileSync } from "node:child_process";
execFileSync("node", ["scripts/validation/check-commercial-pages.mjs"], { stdio: "inherit" });
