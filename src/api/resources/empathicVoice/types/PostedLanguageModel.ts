/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A LanguageModel to be posted to the server
 */
export interface PostedLanguageModel {
    /** The provider of this model. Based on the enum modelProvider. */
    modelProvider?: Hume.empathicVoice.PostedLanguageModelModelProvider;
    /** String that specifies the model to use with modelProvider. */
    modelResource?: string;
    /** Model temperature. */
    temperature?: number;
}
