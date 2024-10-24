export interface ParsedData {
  pronunciation: string[];
  partOfSpeech: string | undefined;
  definitions: Array<{ definition: string }>;
  translations: string[];
}

export function parseStarDictData(html: string): ParsedData {
  // Remove the root <div> tag
  html = html.replace(/^<div>|<\/div>$/g, '');

  // Remove <br> tags for easier processing
  html = html.replace(/<br\s*\/?>/gi, '\n');

  // Extract pronunciations (inside <font color="gray">), if present
  const pronunciationRegex = /<font color="gray">(.*?)<\/font>/g;
  const pronunciations: string[] = [];
  let match;
  while ((match = pronunciationRegex.exec(html)) !== null) {
    pronunciations.push(match[1]);
  }

  // Extract part of speech (inside <font color="green">), if present
  const partOfSpeechMatch = html.match(/<font color="green">(.*?)<\/font>/);
  const partOfSpeech = partOfSpeechMatch ? partOfSpeechMatch[1] : undefined;

  // Prepare to store the definitions and translations
  const definitions: string[] = [];
  const translations: string[] = [];

  // Helper function to remove HTML tags
  const removeHTMLTags = (text: string): string => text.replace(/<[^>]+>/g, '').trim();

  // Handle multiple definitions inside <li> tags
  const multipleDefinitionsRegex = /<li>(.*?)<\/li>/g;
  let multipleDefinitionMatch;

  while ((multipleDefinitionMatch = multipleDefinitionsRegex.exec(html)) !== null) {
    const listItemContent = multipleDefinitionMatch[1];

    // Remove any <div> (translations) from the list item to get the pure definition
    const cleanedDefinition = removeHTMLTags(listItemContent.replace(/<div>.*?<\/div>/g, '').trim());

    if (cleanedDefinition && !definitions.includes(cleanedDefinition)) {
      definitions.push(cleanedDefinition); // Ensure uniqueness
    }

    // Capture nested translations from <div> inside <li> and <ol> tags
    const nestedTranslationRegex = /<div>(.*?)<\/div>/g;
    let nestedTranslationMatch;
    while ((nestedTranslationMatch = nestedTranslationRegex.exec(listItemContent)) !== null) {
      const translation = removeHTMLTags(nestedTranslationMatch[1]);
      if (translation && !translations.includes(translation)) {
        translations.push(translation); // Add translation
      }
    }
  }

  // Handle definitions that are directly after part of speech, without being in an <li> tag
  const nonNestedDefinitionRegex = /<font color="green">.*?<\/font>\n([^<]+)(?:<div>|<\/div>)/;
  const nonNestedDefinitionMatch = html.match(nonNestedDefinitionRegex);
  if (nonNestedDefinitionMatch) {
    const definitionText = removeHTMLTags(nonNestedDefinitionMatch[1].trim());
    if (definitionText && !definitions.includes(definitionText)) {
      definitions.push(definitionText); // Add the definition
    }
  }

  // Handle root-level translations directly after the definition
  const translationAfterNonNestedDefinitionRegex = /<div>(.*?)<\/div>/g;
  let translationAfterNonNestedDefinitionMatch;
  while ((translationAfterNonNestedDefinitionMatch = translationAfterNonNestedDefinitionRegex.exec(html)) !== null) {
    const translation = removeHTMLTags(translationAfterNonNestedDefinitionMatch[1]);
    if (translation && !translations.includes(translation)) {
      translations.push(translation); // Add the translation
    }
  }

  return {
    pronunciation: pronunciations,
    partOfSpeech: partOfSpeech,
    definitions: definitions.map(def => ({ definition: def })), // Convert to array of objects
    translations
  };
}
