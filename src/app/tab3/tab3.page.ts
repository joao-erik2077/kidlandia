import { Component, OnInit } from '@angular/core';
import { StarDictParserService } from '../services/star-dict-parser.service';
import { parseStarDictData } from '../utils/stardictparser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private dictionaryService: StarDictParserService) { }

  async ngOnInit() {
    const dictFileName = 'stardict'; // The base name of your dictionary files (e.g., stardict.ifo, stardict.idx, etc.)

    // Initialize the parser and load the dictionary
    await this.dictionaryService.init(dictFileName);

    // Get the definition for a word
    const word = 'build';
    const definition: any = this.dictionaryService.getDefinition(word);
    console.log(`Definition of ${word}: ${definition}`);
    console.log(parseStarDictData(definition))
  }

}
