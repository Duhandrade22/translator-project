import { useState } from "react";

interface UseCopyProps {
  copiedText: string | null;
  copy: (text: string) => Promise<void>;
  isCopied: boolean;
}

export const useCopy = (): UseCopyProps => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    if (!text.trim()) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao copiar texto:", error);
      setIsCopied(false);
    }
  };

  return { copiedText, copy, isCopied };
};
