"use client";

import { MATCH_FORMATS, PLAYER_TYPES } from "@/lib/constants";
import {
  playerRankingsQueryOptions,
  teamRankingsQueryOptions,
} from "@/queries/options";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Skeleton } from "./ui/skeleton";

export const ICCRankings = () => {
  const [selectedFormat, setSelectedFormat] = useState(MATCH_FORMATS.ODI);

  const { data: batsmanRankings, isLoading: isLoadingBatsmanRankings } =
    useQuery({
      ...playerRankingsQueryOptions,
      queryKey: [
        "player-rankings",
        { format: selectedFormat, type: PLAYER_TYPES.BATSMAN },
      ],
    });
  const { data: bowlerRankings, isLoading: isLoadingBowlerRankings } = useQuery(
    {
      ...playerRankingsQueryOptions,
      queryKey: [
        "player-rankings",
        { format: selectedFormat, type: PLAYER_TYPES.BOWLER },
      ],
    }
  );
  const { data: allRounderRankings, isLoading: isLoadingAllRounderRankings } =
    useQuery({
      ...playerRankingsQueryOptions,
      queryKey: [
        "player-rankings",
        { format: selectedFormat, type: PLAYER_TYPES.ALL_ROUNDER },
      ],
    });
  const { data: teamRankings, isLoading: isLoadingTeamRankings } = useQuery({
    ...teamRankingsQueryOptions,
    queryKey: ["team-rankings", { format: selectedFormat }],
  });

  return (
    <div className="rounded-2xl bg-white shadow-sm h-fit w-full">
      <div className="flex items-center justify-between p-6 pb-4 border-b border-black/10">
        <h5 className="text-primary font-bold leading-[21px]">ICC Rankings</h5>
        <Button variant="link" className="text-right">
          Full Rankings
        </Button>
      </div>
      <div className="py-4 px-6">
        <Tabs value={selectedFormat} onValueChange={setSelectedFormat}>
          <TabsList>
            <TabsTrigger value={MATCH_FORMATS.ODI}>odi</TabsTrigger>
            <TabsTrigger value={MATCH_FORMATS.TEST}>Test</TabsTrigger>
            <TabsTrigger value={MATCH_FORMATS.T20}>T20</TabsTrigger>
          </TabsList>
          <div className="mt-3">
            <Table>
              <TableBody>
                <Ranking
                  title="#1 Batter"
                  topRanker={batsmanRankings?.[0]?.name}
                  points={batsmanRankings?.[0]?.points}
                  isLoading={isLoadingBatsmanRankings}
                />
                <Ranking
                  title="#1 Bowler"
                  topRanker={bowlerRankings?.[0]?.name}
                  points={bowlerRankings?.[0]?.points}
                  isLoading={isLoadingBowlerRankings}
                />
                <Ranking
                  title="#1 All Rounder"
                  topRanker={allRounderRankings?.[0]?.name}
                  points={allRounderRankings?.[0]?.points}
                  isLoading={isLoadingAllRounderRankings}
                />
                <Ranking
                  title="#1 Team"
                  topRanker={teamRankings?.[0]?.name}
                  points={teamRankings?.[0]?.points}
                  isLoading={isLoadingTeamRankings}
                />
              </TableBody>
            </Table>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

const Ranking = ({ title, topRanker, points, isLoading }) => {
  return (
    <TableRow className="border-b! border-light-gray-100 last-of-type:border-0!">
      <TableCell className="font-medium p-0 py-4">
        <h6 className="text-sm leading-4 font-bold">{title}</h6>
        {isLoading ? (
          <Skeleton className="w-2/3 h-4 mt-1.5" />
        ) : (
          <p className="mt-1.5 text-sm leading-4 text-dark-gray-500">
            {topRanker}
          </p>
        )}
      </TableCell>
      <TableCell className="p-0 py-4">
        {isLoading ? (
          <Skeleton className="h-4 mt-[22px] w-20 ml-auto" />
        ) : (
          <p className="mt-[22px] text-right text-sm leading-4 text-dark-gray-500">
            {points} points
          </p>
        )}
      </TableCell>
    </TableRow>
  );
};
