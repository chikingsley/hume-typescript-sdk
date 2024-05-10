/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { DatasetVersionFeatureTypesValue } from "./DatasetVersionFeatureTypesValue";

export const DatasetVersion: core.serialization.ObjectSchema<
    serializers.customModels.DatasetVersion.Raw,
    Hume.customModels.DatasetVersion
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    labelsFileUri: core.serialization.property("labels_file_uri", core.serialization.string()),
    featureTypes: core.serialization.property(
        "feature_types",
        core.serialization.record(core.serialization.string(), DatasetVersionFeatureTypesValue)
    ),
    datasetId: core.serialization.property("dataset_id", core.serialization.string()),
    datasetVersion: core.serialization.property("dataset_version", core.serialization.number()),
    createdOn: core.serialization.property("created_on", core.serialization.number()),
});

export declare namespace DatasetVersion {
    interface Raw {
        id: string;
        user_id: string;
        labels_file_uri: string;
        feature_types: Record<string, DatasetVersionFeatureTypesValue.Raw>;
        dataset_id: string;
        dataset_version: number;
        created_on: number;
    }
}
