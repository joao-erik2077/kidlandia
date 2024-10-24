export interface ParsedData {
  pronunciation: string[];
  partOfSpeech: string;
  definitions: Array<{ definition: string, translations?: string[], subDefinitions?: string[] }>;
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
  const definitions: Array<{ definition: string, translations?: string[], subDefinitions?: string[] }> = [];

  // Handle multiple definitions wrapped in <ol><li>
  const listDefinitionRegex = /<li>(.*?)<\/li>/g;
  const translationRegex = /<div>(.*?)<\/div>/g;

  // Find all definitions inside <ol><li> tags
  const olMatch = html.match(/<ol>(.*?)<\/ol>/);
  if (olMatch) {
    const olContent = olMatch[1]; // Get content inside the <ol>
    let liMatch;
    while ((liMatch = listDefinitionRegex.exec(olContent)) !== null) {
      let definitionText = liMatch[1];

      // Extract and remove translations directly from <div> inside <li>
      const translationsSet: Set<string> = new Set();
      let translationMatch;
      while ((translationMatch = translationRegex.exec(definitionText)) !== null) {
        translationsSet.add(translationMatch[1].trim());
      }

      // Remove the <div> translations from the definition text
      definitionText = definitionText.replace(translationRegex, '').trim();

      // Remove any nested <ol><li> from the definition (to handle sub-definitions)
      definitionText = definitionText.replace(/<ol>.*?<\/ol>/g, '').trim();

      // Clean any remaining HTML tags
      definitionText = definitionText.replace(/<[^>]+>/g, '').trim();

      // Only add a definition if the definitionText is not empty
      if (definitionText || translationsSet.size > 0) {
        definitions.push({
          definition: definitionText ? definitionText : "", // Handle potential empty definitions
          translations: translationsSet.size ? Array.from(translationsSet) : undefined,
        });
      }
    }
  }

  // Handle single <div> wrapped definitions (like chocolate bar)
  const divDefinitionRegex = /<font color="green">.*?<\/font>\n(.*?)<div>(.*?)<\/div>/;
  const divMatch = divDefinitionRegex.exec(html);

  if (divMatch) {
    let definitionText = divMatch[1].replace(/<[^>]+>/g, '').trim(); // Extract and clean the definition text
    const translation = divMatch[2].trim(); // Extract the translation from the nested <div>

    // Remove the translation if it appears at the end of the definition
    definitionText = removeTranslationFromDefinition(definitionText, translation);

    definitions.push({
      definition: definitionText,
      translations: [translation],
    });
  }

  // Reorder definitions to move the ones with tags to the end
  const reorderedDefinitions = reorderDefinitions(definitions);

  return {
    pronunciation: pronunciations,
    partOfSpeech: partOfSpeech,
    definitions: reorderedDefinitions,
  };
}

// Helper function to remove the translation from the definition if it appears at the end
function removeTranslationFromDefinition(definition: string, translation?: string): string {
  if (translation && definition.endsWith(translation)) {
    return definition.slice(0, -translation.length).trim();  // Remove the translation from the end
  }
  return definition;
}

// Helper function to reorder definitions (those with tags to the end)
function reorderDefinitions(definitions: Array<{ definition: string, translations?: string[], subDefinitions?: string[] }>): Array<{ definition: string, translations?: string[], subDefinitions?: string[] }> {
  const noTagDefinitions: { definition: string; translations?: string[] | undefined; subDefinitions?: string[] | undefined; }[] = [];
  const taggedDefinitions: { definition: string; translations?: string[] | undefined; subDefinitions?: string[] | undefined; }[] = [];

  definitions.forEach(def => {
    if (def.definition.startsWith('(')) {
      // This definition starts with a tag (parentheses)
      taggedDefinitions.push(def);
    } else {
      noTagDefinitions.push(def);
    }
  });

  // Return no-tag definitions first, followed by tagged definitions
  return [...noTagDefinitions, ...taggedDefinitions];
}
