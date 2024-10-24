export interface ParsedData {
  pronunciation: string[];
  partOfSpeech: string;
  definitions: Array<{ definition: string, translation?: string, subDefinitions?: string[] }>;
}

export function parseStarDictData(html: string): ParsedData {
  // Remove <br> tags for easier processing
  html = html.replace(/<br\s*\/?>/gi, '\n');

  // Extract pronunciations (inside <font color="gray">)
  const pronunciationRegex = /<font color="gray">(.*?)<\/font>/g;
  const pronunciations: string[] = [];
  let match;
  while ((match = pronunciationRegex.exec(html)) !== null) {
    pronunciations.push(match[1]);
  }

  // Extract part of speech (inside <font color="green">)
  const partOfSpeechMatch = html.match(/<font color="green">(.*?)<\/font>/);
  const partOfSpeech = partOfSpeechMatch ? partOfSpeechMatch[1] : '';

  // Prepare to store the definitions
  const definitions: Array<{ definition: string, translation?: string, subDefinitions?: string[] }> = [];

  // Handle multiple definitions wrapped in <ol><li> or single definitions
  const listDefinitionRegex = /<li>(.*?)<\/li>/g;
  const singleDefinitionRegex = /<font color="green">.*?<\/font>(.*?)<div>(.*?)<\/div>/;

  // Check if we have definitions inside <ol><li>
  let hasMultipleDefinitions = false;
  while ((match = listDefinitionRegex.exec(html)) !== null) {
    hasMultipleDefinitions = true;
    let definitionText = match[1];

    // Extract sub-definitions if any
    const subDefinitions: string[] = [];
    const subDefinitionRegex = /<ol><li>(.*?)<\/li><\/ol>/g;
    let subMatch;
    while ((subMatch = subDefinitionRegex.exec(definitionText)) !== null) {
      subDefinitions.push(subMatch[1].replace(/<div>(.*?)<\/div>/g, '$1'));
    }

    // Extract translation if present in a <div>
    const translationMatch = definitionText.match(/<div>(.*?)<\/div>/);
    const translation = translationMatch ? translationMatch[1] : undefined;

    // Remove HTML tags from the definition text
    definitionText = definitionText.replace(/<[^>]+>/g, '').trim();

    definitions.push({
      definition: definitionText,
      translation: translation,
      subDefinitions: subDefinitions.length ? subDefinitions : undefined,
    });
  }

  // If no multiple definitions, handle single definition case
  if (!hasMultipleDefinitions) {
    const singleDefinitionMatch = html.match(singleDefinitionRegex);
    if (singleDefinitionMatch) {
      const definitionText = singleDefinitionMatch[1].replace(/<[^>]+>/g, '').trim();
      const translation = singleDefinitionMatch[2].trim();

      definitions.push({
        definition: definitionText,
        translation: translation
      });
    }
  }

  return {
    pronunciation: pronunciations,
    partOfSpeech: partOfSpeech,
    definitions: definitions,
  };
}
