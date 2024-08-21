import { Phrase } from "./phrase";

export interface Page {
  index: number,
  description?: string,
  image?: string,
  phrases: Phrase[],
  hasNext: boolean,
  hasPrevious: boolean,
}
