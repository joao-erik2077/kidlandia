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
  suggestions: Map<string, { word: string; pronunciation: string; partOfSpeech: string }> = new Map();

  constructor(
    private dictionaryService: StarDictParserService,
    private router: Router,
    private wordInfoService: WordInfoService
  ) { }

  async ngOnInit() {
    const dictFileName = 'stardict'; // The base name of your dictionary files (e.g., stardict.ifo, stardict.idx, etc.)

    // Initialize the parser and load the dictionary
    await this.dictionaryService.init(dictFileName);
  }

  onSearchInput(event: any) {
    const input = event.target.value.trim();
    if (input.length > 0) {
      this.updateSuggestions(input);
    } else {
      this.suggestions.clear();
    }
  }

  updateSuggestions(query: string) {
    // Use the service to fetch the top suggestions
    const topSuggestions = this.dictionaryService.getTopMatches(query, 10);
    this.suggestions.clear(); // Clear existing suggestions

    topSuggestions.forEach(suggestion => {
      this.suggestions.set(suggestion.word, suggestion); // Add suggestion with 'word' as the key
    });
  }

  get suggestionsArray() {
    // Convert Map to Array for rendering in template
    return Array.from(this.suggestions.values());
  }

  wordInfo(word: any) {
    this.wordInfoService.setWord(word);
    this.router.navigateByUrl('/word-info');
  }
}
