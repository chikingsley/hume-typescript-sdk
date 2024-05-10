/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A configuration of a built-in tool to be posted to the server
 */
export interface PostedBuiltinTool {
    /** Name applied to all versions of a particular Tool. */
    name: string;
    /** Text to use if the tool fails to generate content. */
    fallbackContent?: string;
}
