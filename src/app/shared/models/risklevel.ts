export interface IRiskLevel {
  label: 'Low' | 'Medium' | 'High' | 'Critical';
  value: number;
  color: string;
}
