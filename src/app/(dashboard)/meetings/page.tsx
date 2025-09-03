import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { MeetingsView, MeetingsViewLoading, MeetingViewError } from "@/modules/meetings/ui/views/meetings-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

const Page = () => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.meetings.getMany.queryOptions({})
    )

    return (
        <HydrationBoundary state = {dehydrate(queryClient)}>
            <Suspense fallback={<MeetingsViewLoading/>}>
                <ErrorBoundary fallback={<MeetingViewError/>}>
            <MeetingsView/>
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    )
    }
export default Page;