import { Button } from "@/components/ui/button";
import { upcomingMatchesQueryOptions } from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "./ui/spinner";
import { UpcomingMatch } from "./upcoming-match";
import Link from "next/link";

export const UpcomingMatchesCard = () => {
  const { data: upcomingMatches, isLoading } = useQuery(
    upcomingMatchesQueryOptions
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
      <div className="flex items-center justify-between sm:px-6 px-4 sm:pt-6 pt-4 pb-4 border-b border-black/10">
        <h5 className="text-primary font-bold leading-[21px]">
          Upcoming Matches
        </h5>
        <Button variant="link" className="text-right" asChild>
          <Link href="/fixtures-and-results">Full Schedule</Link>
        </Button>
      </div>
      {isLoading ? (
        <div className="w-full h-[268px] rounded-none border-border border-t flex items-center justify-center">
          <Spinner className="size-6" />
        </div>
      ) : upcomingMatches?.length > 0 ? (
        upcomingMatches?.map((match, i) => (
          <UpcomingMatch key={i} match={match} />
        ))
      ) : (
        <p className="text-dark-gray-50/50 text-center py-6">
          No upcoming matches found
        </p>
      )}
    </div>
  );
};
