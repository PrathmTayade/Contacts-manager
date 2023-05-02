import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useWorldData() {
  return useQuery({
    queryKey: ["worldData"],
    queryFn: async () => {
      const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
      return data;
    },
  });
}
export interface CasesData {
  [date: string]: number;
}
interface CovidHistory {
  cases: CasesData;
  deaths: CasesData;
  recovered: CasesData;
}
export async function fetchCovidHistory(): Promise<CovidHistory> {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
}

export async function fetchCovidCountries() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
}

export async function fetchWorldWideData() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
  return data;
}

export function useCovidhistory() {
  return useQuery<CovidHistory>({
    queryKey: ["casesData"],
    queryFn: fetchCovidHistory,
  });
}
