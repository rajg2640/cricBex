import { Button } from "@/components/ui/button";
import { UpcomingMatch } from "@/components/upcoming-match";
import { upcomingSeriesQueryOptions } from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "./ui/spinner";

export const UpcomingSeries = () => {
  const { data: upcomingSeries, isLoading } = useQuery(
    upcomingSeriesQueryOptions
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
      <div className="flex items-center justify-between sm:px-6 px-4 sm:pt-6 pt-4 pb-4 border-b border-black/10">
        <h5 className="text-primary font-bold leading-[21px]">
          Upcoming Series
        </h5>
        <Button variant="link" className="text-right">
          Full Schedule
        </Button>
      </div>

      {isLoading ? (
        <div className="w-full h-[268px] rounded-none border-border border-t flex items-center justify-center">
          <Spinner className="size-6" />
        </div>
      ) : (
        upcomingSeries?.map((series, i) => (
          <UpcomingMatch
            key={i}
            match={{
              ...series.firstMatch,
              startDate: series.startDate,
            }}
            datePrefix="Starts from"
          />
        ))
      )}
    </div>
  );
};
