/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatGroupPagedEventsPaginationDirection } from "./ReturnChatGroupPagedEventsPaginationDirection";
import { ReturnChatEvent } from "./ReturnChatEvent";

export const ReturnChatGroupPagedEvents: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatGroupPagedEvents.Raw,
    Hume.empathicVoice.ReturnChatGroupPagedEvents
> = core.serialization.object({
    id: core.serialization.string(),
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    paginationDirection: core.serialization.property(
        "pagination_direction",
        ReturnChatGroupPagedEventsPaginationDirection
    ),
    eventsPage: core.serialization.property("events_page", core.serialization.list(ReturnChatEvent)),
});

export declare namespace ReturnChatGroupPagedEvents {
    interface Raw {
        id: string;
        page_number: number;
        page_size: number;
        total_pages: number;
        pagination_direction: ReturnChatGroupPagedEventsPaginationDirection.Raw;
        events_page: ReturnChatEvent.Raw[];
    }
}
