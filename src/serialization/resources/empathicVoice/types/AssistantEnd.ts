/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AssistantEnd: core.serialization.ObjectSchema<
    serializers.empathicVoice.AssistantEnd.Raw,
    Hume.empathicVoice.AssistantEnd
> = core.serialization.object({
    type: core.serialization.stringLiteral("assistant_end"),
});

export declare namespace AssistantEnd {
    interface Raw {
        type: "assistant_end";
    }
}
