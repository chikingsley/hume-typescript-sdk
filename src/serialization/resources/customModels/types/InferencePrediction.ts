/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ModelsPredictions } from "./ModelsPredictions";

export const InferencePrediction: core.serialization.ObjectSchema<
    serializers.customModels.InferencePrediction.Raw,
    Hume.customModels.InferencePrediction
> = core.serialization.object({
    file: core.serialization.string(),
    models: ModelsPredictions,
});

export declare namespace InferencePrediction {
    interface Raw {
        file: string;
        models: ModelsPredictions.Raw;
    }
}
