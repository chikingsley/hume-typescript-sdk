/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { CompletedTraining } from "./CompletedTraining";

export const StateTrainingCompletedTraining: core.serialization.ObjectSchema<
    serializers.customModels.StateTrainingCompletedTraining.Raw,
    Hume.customModels.StateTrainingCompletedTraining
> = core.serialization.object({}).extend(CompletedTraining);

export declare namespace StateTrainingCompletedTraining {
    interface Raw extends CompletedTraining.Raw {}
}
