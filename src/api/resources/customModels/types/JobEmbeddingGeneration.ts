/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface JobEmbeddingGeneration {
    /** The ID associated with this job. */
    jobId: string;
    userId: string;
    request: Hume.customModels.EmbeddingGenerationBaseRequest;
    state: Hume.customModels.StateEmbeddingGeneration;
}
