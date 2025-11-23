import { useState } from "react";

interface UseTextSpeechProps {
  speak: (text: string, language: string) => void;
  isSpeaking: boolean;
  stop: () => void;
}

const getLanguageCode = (language: string): string => {
  const languageMap: Record<string, string> = {
    English: "en-US",
    French: "fr-FR",
    Portuguese: "pt-BR",
  };
  return languageMap[language] || "en-US";
};

export const useTextSpeech = (): UseTextSpeechProps => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text: string, language: string) => {
    if (!text.trim()) return;
    if (!("speechSynthesis" in window)) {
      console.error("Seu navegador não suporta Text-to-Speech");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLanguageCode(language);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    utterance.onerror = (error) => {
      console.error("Erro ao reproduzir áudio:", error);
    };
    window.speechSynthesis.speak(utterance);
  };
  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return { isSpeaking, speak, stop };
};
