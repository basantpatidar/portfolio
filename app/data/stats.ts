export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const stats: Stat[] = [
  { value: 8,    suffix: '+',   label: 'Years of Experience' },
  { value: 2.5,  suffix: 'M+',  label: 'Daily Payment Requests', decimals: 1 },
  { value: 2500, suffix: '+',   label: 'Hours Saved Per Day' },
  { value: 300,  suffix: '+',   label: 'Mutual Funds Integrated' },
];
