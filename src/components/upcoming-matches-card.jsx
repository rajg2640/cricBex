import Australia from "@/app/assets/image/png/australia.png";
import England from "@/app/assets/image/png/england.png";
import India from "@/app/assets/image/png/india.png";
import Pakistan from "@/app/assets/image/png/pakistan.png";
import { Button } from "@/components/ui/button";
import { upcomingMatchesQueryOptions } from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { UpcomingMatch } from "./upcoming-match";
import { Spinner } from "./ui/spinner";

export const UpcomingMatchesCard = () => {
  const { data: upcomingMatches, isLoading } = useQuery(
    upcomingMatchesQueryOptions
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
      <div className="flex items-center justify-between p-6 pb-4 border-b border-black/10">
        <h5 className="text-primary font-bold leading-[21px]">
          Upcoming Matches
        </h5>
        <Button variant="link" className="text-right">
          Full Schedule
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
