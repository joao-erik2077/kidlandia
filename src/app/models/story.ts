import { Page } from "./page";

export interface Story {
  title: string,
  number_of_chapters: number,
  description: string,
  image: string,
  pages: Page[],
}
