/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is an error message.
 */
export interface Error_ {
    /** Error code. */
    code: string;
    customSessionId?: string;
    /** Error message. */
    message: string;
    /** Error slug. */
    slug: string;
    type: "error";
}
