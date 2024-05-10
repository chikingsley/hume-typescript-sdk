/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { InferencePrediction } from "./InferencePrediction";
import { Error_ } from "./Error_";

export const InferenceResults: core.serialization.ObjectSchema<
    serializers.customModels.InferenceResults.Raw,
    Hume.customModels.InferenceResults
> = core.serialization.object({
    predictions: core.serialization.list(InferencePrediction),
    errors: core.serialization.list(Error_),
});

export declare namespace InferenceResults {
    interface Raw {
        predictions: InferencePrediction.Raw[];
        errors: Error_.Raw[];
    }
}
