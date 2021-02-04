export interface HistoricalStats {
  cases: HistorcalStat;
  deaths: HistorcalStat;
  recovered: HistorcalStat;
}

export interface HistorcalStat {
  [dateLabel: string]: number;
}
