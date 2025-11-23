import type { TranslationResponseDto } from "./dto/translation.dto";
import type {
  TranslationRequest,
  TranslationResult,
} from "./types/translation.types";

const API_BASE_URL = "https://api.mymemory.translated.net/get";

export const TranslationService = {
  async translate(request: TranslationRequest): Promise<TranslationResult> {
    try {
      const params = new URLSearchParams({
        q: request.text,
        langpair: `${request.sourceLang}|${request.targetLang}`,
      });

      const response = await fetch(`${API_BASE_URL}?${params.toString()}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      const data: TranslationResponseDto = await response.json();

      if (data.responseStatus !== 200) {
        throw new Error(data.responseDetails || "Erro ao traduzir texto");
      }

      return {
        translatedText: data.responseData.translatedText,
      };
    } catch (error) {
      console.error("Erro no serviço de tradução:", error);
      throw new Error(
        error instanceof Error ? error.message : "Erro desconhecido na tradução"
      );
    }
  },
};
