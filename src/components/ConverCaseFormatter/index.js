import { useState } from "react";
import "./style.css";

function ConverCaseFormatter() {
  const [convertCase, setConvertCase] = useState("");
  const [singleClass, setSingleClass] = useState("");
  const [multipleClass, setMultipleClass] = useState([]);
  const [lettersCount, setLettersCount] = useState(0);

  function countLetters(inputReturn) {
    let total_count = 0;

    function clearDot(phrase) {
      const new_phrase = phrase.split("").map((val) => {
        total_count += 1;
      });
      return phrase;
    }
    function sanitizePhrase(content) {
      return content
        .split(".")
        .map((phrase, index) => clearDot(phrase, index))
        .join(".");
    }
    inputReturn
      .split("\n")
      .map((content) => sanitizePhrase(content))
      .join("\n");

    return total_count;
  }

  function handleChangeOriginalValue(inputReturn) {
    const newValue = inputReturn.target.value;
    setLettersCount(countLetters(inputReturn.target.value));
    setConvertCase(newValue);
  }

  function handleAlternateText() {
    function lowOrUp(letter, index) {
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
    }
    setConvertCase((lastValue) => {
      return lastValue
        .split("")
        .map((letter, index) => lowOrUp(letter, index))
        .join("");
    });
    setSingleClass("alternatetext");
  }

  function handleSetSingleClass(newClass) {
    setConvertCase((lastValue) => lastValue.toLowerCase());
    setSingleClass(newClass);
  }

  function handleMultipleClass(new_class) {
    if (multipleClass.includes(new_class)) {
      setMultipleClass(multipleClass.filter((a) => a !== new_class));
    } else {
      setMultipleClass([...multipleClass, new_class]);
    }
  }
  function handlePhraseStart() {
    function clearDot(phrase, p_index) {
      if (p_index !== 0 && phrase[0] !== " ") {
        phrase = ` ${phrase}`;
      }
      let capitalized = false;
      let last_letter = "";
      const new_phrase = phrase
        .split("")
        .map((val) => {
          let returnVal = val;
          if (capitalized || val === " ") {
            if ([",", ";"].includes(last_letter)) {
              returnVal = ` ${val}`;
            } else {
              returnVal = val;
            }
          } else {
            capitalized = true;
            returnVal = val.toUpperCase();
          }
          last_letter = val;
          console.log(last_letter, returnVal);
          return returnVal;
        })
        .join("");
      console.log(new_phrase);
      return new_phrase;
    }
    function sanitizePhrase(content) {
      return content
        .split(".")
        .map((phrase, index) => clearDot(phrase, index))
        .join(".");
    }
    const newText = convertCase
      .split("\n")
      .map((content) => sanitizePhrase(content))
      .join("\n");
    setConvertCase(newText);
    setLettersCount(countLetters(newText));
    setSingleClass("phraseStart");
  }

  const fontFormatTitles = {
    capitalize: "Primeira Maiúscula",
    uppercase: "Tudo maiúsculo",
    lowercase: "Tudo minúsculo",
    alternatetext: "TeXtO aLtErNaDo",
  };

  return (
    <div class="container">
      <textarea
        className={`textareaInput ${singleClass} ${multipleClass.join(" ")}`}
        value={convertCase}
        onChange={handleChangeOriginalValue}
        placeholder="Digite seu texto aqui"
      />
      <p>{`Caracteres no texto: ${lettersCount}`}</p>
      <p>Formatação</p>
      <div class="btnGroup">
        <button
          onClick={handlePhraseStart}
          className={singleClass === "phraseStart" ? "activeClass" : ""}
        >
          Texto comum.
        </button>
        {["capitalize", "uppercase", "lowercase", "alternatetext"].map(
          (fontFormat) => {
            return (
              <button
                onClick={() =>
                  fontFormat !== "alternatetext"
                    ? handleSetSingleClass(fontFormat)
                    : handleAlternateText()
                }
                className={singleClass === fontFormat ? "activeClass" : ""}
              >
                {fontFormatTitles[fontFormat]}
              </button>
            );
          }
        )}
      </div>
      <div class="btnGroup">
        <button
          onClick={() => handleMultipleClass("underline")}
          className={`underline ${
            multipleClass.includes("underline") ? "activeClass" : ""
          }`}
        >
          sublinar
        </button>
        <button
          onClick={() => handleMultipleClass("overline")}
          className={`overline ${
            multipleClass.includes("overline") ? "activeClass" : ""
          }`}
        >
          sublinar
        </button>

        <button
          onClick={() => handleMultipleClass("line-through")}
          className={`line-through ${
            multipleClass.includes("line-through") ? "activeClass" : ""
          }`}
        >
          sublinar
        </button>
        <button
          onClick={() => handleMultipleClass("italic")}
          className={`italic ${
            multipleClass.includes("italic") ? "activeClass" : ""
          }`}
        >
          Itálico
        </button>

        <button
          onClick={() => handleMultipleClass("bold")}
          className={`bold ${
            multipleClass.includes("bold") ? "activeClass" : ""
          }`}
        >
          Negrito
        </button>
      </div>
    </div>
  );
}

export default ConverCaseFormatter;
