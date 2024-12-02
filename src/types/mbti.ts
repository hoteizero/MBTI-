export type MBTIQuestion = {
  id: number;
  text: string;
  options: [string, string];
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
};

export type MBTIResult = {
  type: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  relationships: string;
  career: string;
};