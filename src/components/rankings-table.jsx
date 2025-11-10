"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FirstRank,
  RankArrowDown,
  RankArrowUp,
  SecondRank,
  ThirdRank,
} from "@/app/shared/Icon";
import { useQuery } from "@tanstack/react-query";
import {
  playerRankingsQueryOptions,
  teamRankingsQueryOptions,
} from "@/queries/options";
import { Spinner } from "./ui/spinner";

const MAX_RANKINGS = 10;

export const RankingsTable = ({ format, category }) => {
  const { data: playerRankings, isLoading: isLoadingPlayerRankings } = useQuery(
    {
      ...playerRankingsQueryOptions,
      queryKey: ["player-rankings", { format, type: category }],
      enabled: category !== "team",
    }
  );
  const { data: teamRankings, isLoading: isLoadingTeamRankings } = useQuery({
    ...teamRankingsQueryOptions,
    queryKey: ["team-rankings", { format }],
    enabled: category === "team",
  });

  const rankings = (category === "team" ? teamRankings : playerRankings)?.slice(
    0,
    MAX_RANKINGS
  );
  const isLoading =
    category === "team" ? isLoadingTeamRankings : isLoadingPlayerRankings;

  if (isLoading) {
    return (
      <div className="w-full h-[520px] rounded-none border-border border-t flex items-center justify-center">
        <Spinner className="size-10" />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-0!">
          <TableCell className="border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200">
            Rank
          </TableCell>
          <TableCell className="border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200">
            Team
          </TableCell>
          <TableCell className="border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200">
            Matches
          </TableCell>
          <TableCell className="border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200">
            Rating
          </TableCell>
          <TableCell className="border-t border-light-gray-400 bg-light-gray-500 p-3 text-black-200">
            Change
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className="[&_td]:p-3 [&_tr]:border-0 text-sm leading-4">
        <Rankings rankings={rankings} />
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell
            colSpan={5}
            className="bg-light-gray-500 p-4 text-black-300 text-sm"
          >
            Rankings updated as of 05/11/2025. Changes reflect movement from
            previous week.
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

const Rankings = ({ rankings }) => {
  return rankings.map(({ order, name, points, change }) => (
    <TableRow key={order} className="border-b last:border-0">
      <TableCell className="border-b border-light-gray-400 p-4 font-medium text-gray-700">
        {order <= 3 ? (
          <span className="w-5 flex justify-center">
            {order === 1 ? (
              <FirstRank />
            ) : order === 2 ? (
              <SecondRank />
            ) : (
              <ThirdRank />
            )}
          </span>
        ) : (
          <span className="w-5 text-center block">{order}</span>
        )}
      </TableCell>
      <TableCell className="border-b border-light-gray-400 p-4 text-gray-800">
        {name}
      </TableCell>
      <TableCell className="border-b border-light-gray-400 p-4 text-gray-600">
        -
      </TableCell>
      <TableCell className="border-b border-light-gray-400 p-4 font-semibold text-gray-900">
        {points}
      </TableCell>
      <TableCell className="border-b border-light-gray-400 p-4">
        {change > 0 ? (
          <span className="text-green-500 flex items-center gap-1">
            <RankArrowUp /> {change}
          </span>
        ) : change < 0 ? (
          <span className="text-primary-900 flex items-center gap-1">
            <RankArrowDown /> {Math.abs(change)}
          </span>
        ) : (
          <span className="text-gray-400 flex items-center">-</span>
        )}
      </TableCell>
    </TableRow>
  ));
};
