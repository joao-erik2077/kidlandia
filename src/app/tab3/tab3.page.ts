import { Component, OnInit } from '@angular/core';
import { StarDictParserService } from '../services/star-dict-parser.service';
import { Router } from '@angular/router';
import { WordInfoService } from '../services/word-info.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  query: string = '';
  suggestions: Array<{ word: string; pronunciation: string; partOfSpeech: string }> = [];

  constructor(private dictionaryService: StarDictParserService, private router: Router, private wordInfoService: WordInfoService) { }

  async ngOnInit() {
    const dictFileName = 'stardict'; // The base name of your dictionary files (e.g., stardict.ifo, stardict.idx, etc.)

    // Initialize the parser and load the dictionary
    await this.dictionaryService.init(dictFileName);

    // Get the definition for a word
    // const word = 'build';
    // const definition: any = this.dictionaryService.getDefinition(word);
    // console.log(`Definition of ${word}: ${definition}`);
    // console.log(parseStarDictData(definition))
  }

  onSearchInput(event: any) {
    const input = event.target.value.trim();
    if (input.length > 0) {
      this.suggestions = this.getTopSuggestions(input);
    } else {
      this.suggestions = [];
    }
  }

  getTopSuggestions(query: string): Array<{ word: string; pronunciation: string; partOfSpeech: string }> {
    // Use the service to fetch the top 5 suggestions
    return this.dictionaryService.getTopMatches(query, 10);
  }

  wordInfo(word: any) {
    this.wordInfoService.setWord(word);
    this.router.navigateByUrl('/word-info')
  }
}
