/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hume from "../../../../api";
import * as core from "../../../../core";

export const PostedTool: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTool.Raw,
    Hume.empathicVoice.PostedTool
> = core.serialization.object({
    name: core.serialization.string(),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    parameters: core.serialization.string(),
});

export declare namespace PostedTool {
    interface Raw {
        name: string;
        version_description?: string | null;
        description?: string | null;
        parameters: string;
    }
}
