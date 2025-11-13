"use client";

import { RankingsTable } from "@/components/rankings-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../shared/Container";
import CustomBreadcrumb from "../shared/CustomBreadcrumb";
import { MATCH_FORMATS, PLAYER_TYPES } from "@/lib/constants";
import { Suspense, useState } from "react";
import { useQueryState } from "nuqs";

const formats = [
  { value: MATCH_FORMATS.TEST, label: "Test" },
  { value: MATCH_FORMATS.ODI, label: "ODI" },
  { value: MATCH_FORMATS.T20, label: "T20" },
];
const categories = [
  { value: PLAYER_TYPES.BATSMAN, label: "Batsmen" },
  { value: PLAYER_TYPES.BOWLER, label: "Bowlers" },
  { value: PLAYER_TYPES.ALL_ROUNDER, label: "All Rounders" },
  { value: "team", label: "Teams" },
];
const categoryLabels = {
  [PLAYER_TYPES.BATSMAN]: "Batsman",
  [PLAYER_TYPES.BOWLER]: "Bowler",
  [PLAYER_TYPES.ALL_ROUNDER]: "All Rounder",
  team: "Team",
};
const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Rankings" }];

const RankingsPage = () => {
  return (
    <div>
      <Container>
        <div className="py-4">
          <CustomBreadcrumb items={breadcrumbItems} />
          <h2 className="text-[32px] font-medium text-dark-gray">Rankings</h2>
        </div>
      </Container>

      <Suspense fallback={<div className="h-screen w-full" />}>
        <Rankings />
      </Suspense>
    </div>
  );
};

const Rankings = () => {
  const [selectedFormat, setSelectedFormat] = useQueryState("format", {
    defaultValue: MATCH_FORMATS.TEST,
  });
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);

  const selectedFormatLabel = formats.find(
    (format) => format.value === selectedFormat
  )?.label;

  return (
    <Tabs
      value={selectedFormat}
      onValueChange={setSelectedFormat}
      className="gap-6 mb-10"
    >
      <div className="border-t border-b border-black/25">
        <Container>
          <div className="flex items-center">
            <TabsList className="border-0 justify-start p-0">
              {formats.map((format) => (
                <TabsTrigger
                  key={format.value}
                  className="w-fit flex-none py-3 px-6 text-dark-gray-300 capitalize font-normal text-base leading-[19px] shadow-none! bg-transparent! border-0 rounded-none hover:text-primary border-b-[3px] data-[state=active]:text-primary! data-[state=active]:border-primary"
                  value={format.value}
                >
                  {format.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]  shadow-none text-black/60 py-1 px-2 h-auto! rounded-sm">
                <SelectValue placeholder="Select Ranking" />
              </SelectTrigger>
              <SelectContent className="border-0">
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </Container>
      </div>
      <Container>
        <div className="rounded-lg shadow-lg overflow-auto border border-black/10">
          <h2 className="text-xl text-black-100 font-bold p-4">
            {selectedFormatLabel} {categoryLabels[selectedCategory]} Rankings
          </h2>
          <RankingsTable format={selectedFormat} category={selectedCategory} />
        </div>
      </Container>
    </Tabs>
  );
};

export default RankingsPage;
