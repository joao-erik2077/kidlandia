import { Character } from "./Character";

export interface Story {
  title: string,
  description: string,
  image: string,
  speechs: Speech[],
}

export interface Speech {
  text: string,
  character: Character,
  question?: Question,
}

export interface Question {
  type: 'multipleChoice' | 'selectText',
  text: string,
  options?: QuestionOption[],
}

export interface QuestionOption {
  text: string,
  valid: boolean,
}
