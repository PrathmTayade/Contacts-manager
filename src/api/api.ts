import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface CasesData {
  [date: string]: number;
}
interface CovidHistory {
  cases: CasesData;
  deaths: CasesData;
  recovered: CasesData;
}

//cases fluctuations data
export async function fetchCovidHistory(): Promise<CovidHistory> {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
}

//countries data
export async function fetchCovidCountries() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
}

//current world data
export async function fetchWorldWideData() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
  return data;
}

export function useCovidhistory() {
  return useQuery({
    queryKey: ["casesData"],
    queryFn: fetchCovidHistory,
  });
}
