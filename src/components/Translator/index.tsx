import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import Copy from "@/assets/icons/Copy.svg";
import ChangeDirection from "@/assets/icons/Horizontal_top_left_main.svg";
import Logo from "@/assets/icons/logo.svg";
import Font from "@/assets/icons/sort_alfa.svg";
import Sound from "@/assets/icons/sound_max_fill.svg";
import { TranslationService } from "@/service/translationService";
import { LANGUAGES } from "@/service/types/translation.types";
import { useEffect, useState } from "react";

// Hooks
import { useCopy } from "@/hooks/useCopy";
import { useTextSpeech } from "@/hooks/useTextSpeech";

const Translator = () => {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("French");
  const [inputText, setInputText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { copy: copyInput, isCopied: isInputCopied } = useCopy();
  const { copy: copyTranslation, isCopied: isTranslationCopied } = useCopy();
  const { isSpeaking, speak } = useTextSpeech();

  const handleSelectSourceLanguage = (language: string) => {
    setSourceLanguage(language);
    setInputText("");
    setTranslatedText("");
    setError("");
  };

  const handleSelectTargetLanguage = (language: string) => {
    setTargetLanguage(language);
    setTranslatedText("");
    setError("");
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError("Digite um texto para traduzir");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await TranslationService.translate({
        text: inputText,
        sourceLang: LANGUAGES[sourceLanguage as keyof typeof LANGUAGES],
        targetLang: LANGUAGES[targetLanguage as keyof typeof LANGUAGES],
      });

      setTranslatedText(result.translatedText);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Erro ao traduzir texto"
      );
      setTranslatedText("");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwapLanguages = () => {
    const tempLanguage = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(tempLanguage);

    const tempText = inputText;
    setInputText(translatedText);
    setTranslatedText(tempText);
  };

  useEffect(() => {
    handleTranslate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={Logo} alt="logo" className="w-48 h-48" />

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Input de texto para tradução */}
        <div className="w-full md:w-[450px] max-w-2xl bg-slate-950 border border-slate-600 rounded-2xl p-4">
          <div className="flex flex-row gap-3 mb-4 items-center">
            <p className="text-xs text-slate-400 font-medium ">
              Detect Language
            </p>
            <button
              className={`text-xs text-slate-400 font-light ${
                sourceLanguage === "English"
                  ? "bg-slate-600 rounded-lg px-2 py-1"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectSourceLanguage("English")}
            >
              English
            </button>
            <button
              className={`text-xs text-slate-400 font-light ${
                sourceLanguage === "French"
                  ? "bg-slate-600 rounded-lg px-2 py-1"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectSourceLanguage("French")}
            >
              French
            </button>
            <button
              className={`text-xs text-slate-400 font-light ${
                sourceLanguage === "Portuguese"
                  ? "bg-slate-600 rounded-lg px-2 py-1"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectSourceLanguage("Portuguese")}
            >
              Portuguese
            </button>
            <img src={ArrowDownIcon} alt="arrow-down" className="w-4 h-4" />
          </div>
          <div className="border-1 border-b border-slate-600 mb-4" />

          <textarea
            className="outline-none w-full h-40 bg-transparent p-2 align-top resize-none text-left text-background-light"
            placeholder="Enter text to translate"
            rows={10}
            maxLength={500}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <p className="text-xs text-slate-400 text-right font-light">
            {inputText.length}/500
          </p>
          <div className="flex justify-between items-center gap-2 mt-4">
            <div className="flex items-center gap-2">
              <button
                className={`w-8 h-8 bg-transparent border-2 border-slate-900 rounded-lg flex items-center justify-center ${
                  isSpeaking ? "bg-slate-800" : "bg-transparent"
                }`}
                onClick={() => speak(inputText, sourceLanguage)}
              >
                <img src={Sound} alt="sound" className="w-4 h-4" />
              </button>
              <button
                className={`w-8 h-8 bg-transparent border-2 border-slate-900 rounded-lg flex items-center justify-center ${
                  isInputCopied ? "bg-slate-800" : "bg-transparent"
                }`}
                onClick={() => copyInput(inputText)}
              >
                <img src={Copy} alt="copy" className="w-4 h-4" />
              </button>
            </div>
            <button
              className="bg-primary border border-primary-light text-white py-2 px-4 rounded-lg hover:bg-primary-light text-xs font-medium flex flex-row items-center gap-1"
              onClick={handleTranslate}
              disabled={isLoading}
            >
              <img src={Font} alt="font" className="w-4 h-4" />
              {isLoading ? "Traslating..." : "Translate"}
            </button>
          </div>
        </div>

        {/* Output de tradução */}
        <div className="w-full md:w-[450px] max-w-2xl bg-background-overlay border border-slate-600 rounded-2xl p-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3 mb-4 items-center">
              <button
                className={`text-xs text-slate-400 font-light ${
                  targetLanguage === "English"
                    ? "bg-slate-600 rounded-lg px-2 py-1"
                    : "bg-transparent"
                }`}
                onClick={() => handleSelectTargetLanguage("English")}
              >
                English
              </button>
              <button
                className={`text-xs text-slate-400 font-light ${
                  targetLanguage === "French"
                    ? "bg-slate-600 rounded-lg px-2 py-1"
                    : "bg-transparent"
                }`}
                onClick={() => handleSelectTargetLanguage("French")}
              >
                French
              </button>
              <button
                className={`text-xs text-slate-400 font-light ${
                  targetLanguage === "Portuguese"
                    ? "bg-slate-600 rounded-lg px-2 py-1"
                    : "bg-transparent"
                }`}
                onClick={() => handleSelectTargetLanguage("Portuguese")}
              >
                Portuguese
              </button>
              <img src={ArrowDownIcon} alt="arrow-down" className="w-4 h-4" />
            </div>
            <button
              className="w-7 h-7 bg-transparent border-2 border-slate-900 rounded-lg flex items-center justify-center"
              onClick={handleSwapLanguages}
            >
              <img
                src={ChangeDirection}
                alt="change-direction"
                className="w-4 h-4"
              />
            </button>
          </div>
          <div className="border-1 border-b border-slate-600 mb-4" />

          <textarea
            className="outline-none w-full h-40 bg-transparent p-2 align-top resize-none text-left text-background-light"
            placeholder="Enter text to translate"
            rows={10}
            maxLength={500}
            value={translatedText}
            readOnly
          />
          <div className="flex items-center gap-2 mt-8">
            <button
              className={`w-8 h-8 bg-transparent border-2 border-slate-900 rounded-lg flex items-center justify-center ${
                isSpeaking ? "bg-slate-800" : "bg-transparent"
              }`}
              onClick={() => speak(translatedText, targetLanguage)}
            >
              <img src={Sound} alt="sound" className="w-4 h-4" />
            </button>
            <button
              className={`w-8 h-8 bg-transparent border-2 border-slate-900 rounded-lg flex items-center justify-center ${
                isTranslationCopied
                  ? "bg-slate-800"
                  : "bg-transparent border-slate-900 hover:bg-slate-800"
              }`}
              onClick={() => copyTranslation(translatedText)}
            >
              <img src={Copy} alt="copy" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
