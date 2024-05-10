/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const CustomModelPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.CustomModelPrediction.Raw,
    Hume.expressionMeasurement.CustomModelPrediction
> = core.serialization.object({
    output: core.serialization.record(core.serialization.string(), core.serialization.number()),
    error: core.serialization.string(),
    taskType: core.serialization.property("task_type", core.serialization.string()),
});

export declare namespace CustomModelPrediction {
    interface Raw {
        output: Record<string, number>;
        error: string;
        task_type: string;
    }
}
