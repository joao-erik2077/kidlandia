import { Character } from "./Character";

export interface Story {
  title: string,
  description: string,
  image: string,
  imageIcon: string,
  speechs: Speech[],
}

export interface Speech {
  text: string,
  character: Character,
  question?: Question,
}

export interface Question {
  type: 'multipleChoice' | 'selectText' | 'selectSentence',
  text: string,
  options?: QuestionOption[],
}

export interface QuestionOption {
  text: string,
  valid: boolean,
  onlyText?: boolean,
}
