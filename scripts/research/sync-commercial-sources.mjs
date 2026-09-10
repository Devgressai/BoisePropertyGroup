#!/usr/bin/env node
/**
 * DEPRECATED SHIM. Superseded by sync-sources.mjs, which covers BOTH registries.
 *
 * This one covered only the commercial half, and the residential registry
 * drifted the first time claims were added to it. Kept so existing invocations
 * keep working; it simply delegates.
 */
import "./sync-sources.mjs";
