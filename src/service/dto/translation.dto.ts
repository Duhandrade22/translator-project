export interface TranslationDto {
  q: string;
  langpair: string;
}

export interface TranslationResponseDto {
  responseData: {
    translatedText: string;
    match: number;
  };
  responseStatus: number;
  responseDetails?: string;
}
