import { Component, OnInit } from '@angular/core';
import { WordInfoService } from '../services/word-info.service';
import { StarDictParserService } from '../services/star-dict-parser.service';
import { Router } from '@angular/router';
import { parseStarDictData } from '../utils/stardictparser';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.page.html',
  styleUrls: ['./word-info.page.scss'],
})
export class WordInfoPage implements OnInit {
  public word!: { word: string; pronunciation: string; partOfSpeech: string };
  public data: any;
  public translations: Set<string> = new Set<string>([]);
  public definitions: Set<string> = new Set<string>([]);
  definition: any;

  constructor(private wordInfoService: WordInfoService, private router: Router, private dictionaryService: StarDictParserService) { }

  async ngOnInit() {
    this.word = this.wordInfoService.getWord();


    if (!this.word) {
      this.router.navigateByUrl('tabs/tab3')
    }
    console.log(this.word)
    this.data = parseStarDictData(this.dictionaryService.getDefinition(this.word.word));
    this.data.definitions.forEach((definition: any) => {
      if (definition.translations) definition.translations.forEach((t: string) => this.translations.add(t))
    });
    this.data.definitions.forEach((definition: any) => {
      if (definition.definition) this.definitions.add(definition.definition)
    });
    console.log(this.dictionaryService.getDefinition(this.word.word));
    console.log(this.data);
    console.log(this.translations);
  }

}
