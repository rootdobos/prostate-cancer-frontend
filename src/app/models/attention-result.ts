export interface AttentionResult {
  label: number;
  probabilities: number[];
  attention_scores: {
    0: number[];
    1: number[];
    2: number[];
    3: number[];
    4: number[];
    5: number[];
  };
}
