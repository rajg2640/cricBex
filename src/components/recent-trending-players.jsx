"use client";

import CustomSelect from "@/app/shared/CustomSelect";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MATCH_FORMATS, PLAYER_TYPES } from "@/lib/constants";
import { playerRankingsQueryOptions } from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

const MAX_PLAYERS = 3;
const formats = [
  { value: MATCH_FORMATS.ODI, label: MATCH_FORMATS.ODI },
  { value: MATCH_FORMATS.T20, label: MATCH_FORMATS.T20 },
  { value: MATCH_FORMATS.TEST, label: MATCH_FORMATS.TEST },
];

const selectTopThreePlayers = (data) => data?.data?.slice(0, MAX_PLAYERS);

export const RecentTrendingPlayers = () => {
  const [format, setFormat] = useState(MATCH_FORMATS.ODI);

  const { data: topBatters, isLoading: isLoadingTopBatters } = useQuery({
    ...playerRankingsQueryOptions,
    queryKey: ["player-rankings", { format, type: PLAYER_TYPES.BATSMAN }],
    select: selectTopThreePlayers,
  });
  const { data: topBowlers, isLoading: isLoadingTopBowlers } = useQuery({
    ...playerRankingsQueryOptions,
    queryKey: ["player-rankings", { format, type: PLAYER_TYPES.BOWLER }],
    select: selectTopThreePlayers,
  });
  const { data: topAllRounders, isLoading: isLoadingTopAllRounders } = useQuery(
    {
      ...playerRankingsQueryOptions,
      queryKey: ["player-rankings", { format, type: PLAYER_TYPES.ALL_ROUNDER }],
      select: selectTopThreePlayers,
    }
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
      <div className="flex items-center justify-between sm:px-6 px-4 sm:pt-6 pt-4 pb-4 border-b border-black/10">
        <h5 className="text-primary font-bold leading-[21px]">
          Recent Trending Players
        </h5>
        <CustomSelect
          value={format}
          onChange={setFormat}
          options={formats}
          variant="outline"
          className="rounded-full w-fit"
        />
      </div>

      <div>
        <div className="border-b pt-4 sm:px-6 px-4 border-black/10 last-of-type:border-0">
          <p className="text-sm font-medium leading-4 text-dark-gray-100">
            Top Batters
          </p>
          <TrendingPlayers
            players={topBatters}
            isLoading={isLoadingTopBatters}
          />
        </div>

        <div className="border-b pt-4 sm:px-6 px-4 border-black/10 last-of-type:border-0">
          <p className="text-sm font-medium leading-4 text-dark-gray-100">
            Top Bowlers
          </p>
          <TrendingPlayers
            players={topBowlers}
            isLoading={isLoadingTopBowlers}
          />
        </div>

        <div className="border-b pt-4 sm:px-6 px-4 border-black/10 last-of-type:border-0">
          <p className="text-sm font-medium leading-4 text-dark-gray-100">
            Top All-Rounders
          </p>
          <TrendingPlayers
            players={topAllRounders}
            isLoading={isLoadingTopAllRounders}
          />
        </div>
      </div>
    </div>
  );
};

const TrendingPlayers = ({ players, isLoading }) => {
  return (
    <Table>
      <TableBody>
        {isLoading ? (
          <>
            {Array.from({ length: MAX_PLAYERS }).map((_, index) => (
              <PlayerRow key={index} rank={index + 1} isLoading />
            ))}
          </>
        ) : (
          players?.map((player) => <PlayerRow key={player.order} {...player} />)
        )}
      </TableBody>
    </Table>
  );
};

const PlayerRow = ({ name, order, points, isLoading }) => {
  return (
    <TableRow className="border-b! border-light-gray-100 last-of-type:border-0!">
      <TableCell className="font-medium p-0 py-4 w-7">
        <div className="text-dark-gray-100 text-xs leading-3.5 flex items-center">
          #{order}
        </div>
      </TableCell>
      <TableCell className="font-medium p-0 py-4">
        {isLoading ? (
          <Skeleton className="w-28 h-4" />
        ) : (
          <h6 className="text-sm leading-4 font-bold">{name}</h6>
        )}
      </TableCell>
      <TableCell className="font-medium p-0 py-4 text-right">
        {isLoading ? (
          <Skeleton className="w-20 h-4 ms-auto" />
        ) : (
          <h6 className="text-sm leading-4 font-normal">{points} points</h6>
        )}
      </TableCell>
    </TableRow>
  );
};
