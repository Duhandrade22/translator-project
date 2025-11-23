export interface TranslationRequest {
  text: string;
  sourceLang: string;
  targetLang: string;
}

export interface TranslationResult {
  translatedText: string;
}

export const LANGUAGES = {
  English: "en",
  French: "fr",
  Spanish: "es",
  Portuguese: "pt",
  German: "de",
  Italian: "it",
};
