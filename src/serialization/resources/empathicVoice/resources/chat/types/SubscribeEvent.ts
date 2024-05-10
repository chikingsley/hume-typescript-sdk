/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AssistantEnd } from "../../../types/AssistantEnd";
import { AssistantMessage } from "../../../types/AssistantMessage";
import { AudioOutput } from "../../../types/AudioOutput";
import { WebSocketError } from "../../../types/WebSocketError";
import { UserInterruption } from "../../../types/UserInterruption";
import { UserMessage } from "../../../types/UserMessage";
import { ToolCallMessage } from "../../../types/ToolCallMessage";
import { ToolResponseMessage } from "../../../types/ToolResponseMessage";
import { ToolErrorMessage } from "../../../types/ToolErrorMessage";

export const SubscribeEvent: core.serialization.Schema<
    serializers.empathicVoice.SubscribeEvent.Raw,
    Hume.empathicVoice.SubscribeEvent
> = core.serialization.undiscriminatedUnion([
    AssistantEnd,
    AssistantMessage,
    AudioOutput,
    WebSocketError,
    UserInterruption,
    UserMessage,
    ToolCallMessage,
    ToolResponseMessage,
    ToolErrorMessage,
]);

export declare namespace SubscribeEvent {
    type Raw =
        | AssistantEnd.Raw
        | AssistantMessage.Raw
        | AudioOutput.Raw
        | WebSocketError.Raw
        | UserInterruption.Raw
        | UserMessage.Raw
        | ToolCallMessage.Raw
        | ToolResponseMessage.Raw
        | ToolErrorMessage.Raw;
}
