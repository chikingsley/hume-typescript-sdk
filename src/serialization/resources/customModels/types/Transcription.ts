/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Bcp47Tag } from "./Bcp47Tag";

export const Transcription: core.serialization.ObjectSchema<
    serializers.customModels.Transcription.Raw,
    Hume.customModels.Transcription
> = core.serialization.object({
    language: Bcp47Tag.optional(),
    identifySpeakers: core.serialization.property("identify_speakers", core.serialization.boolean().optional()),
    confidenceThreshold: core.serialization.property("confidence_threshold", core.serialization.number().optional()),
});

export declare namespace Transcription {
    interface Raw {
        language?: Bcp47Tag.Raw | null;
        identify_speakers?: boolean | null;
        confidence_threshold?: number | null;
    }
}
