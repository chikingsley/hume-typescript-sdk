/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedCustomVoiceBaseVoice } from "./PostedCustomVoiceBaseVoice";
import { PostedCustomVoiceParameters } from "./PostedCustomVoiceParameters";

export const PostedCustomVoice: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedCustomVoice.Raw,
    Hume.empathicVoice.PostedCustomVoice
> = core.serialization.object({
    name: core.serialization.string(),
    baseVoice: core.serialization.property("base_voice", PostedCustomVoiceBaseVoice),
    parameterModel: core.serialization.property(
        "parameter_model",
        core.serialization.stringLiteral("20241004-11parameter")
    ),
    parameters: PostedCustomVoiceParameters.optional(),
});

export declare namespace PostedCustomVoice {
    interface Raw {
        name: string;
        base_voice: PostedCustomVoiceBaseVoice.Raw;
        parameter_model: "20241004-11parameter";
        parameters?: PostedCustomVoiceParameters.Raw | null;
    }
}
