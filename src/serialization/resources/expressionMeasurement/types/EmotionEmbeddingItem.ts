/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const EmotionEmbeddingItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.EmotionEmbeddingItem.Raw,
    Hume.expressionMeasurement.EmotionEmbeddingItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    score: core.serialization.number().optional(),
});

export declare namespace EmotionEmbeddingItem {
    interface Raw {
        name?: string | null;
        score?: number | null;
    }
}
