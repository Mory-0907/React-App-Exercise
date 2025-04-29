import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Hello() {
  const language = useContext(LanguageContext);
  return (
    <>
      <h2 className="m-4">
        {language === "en" ? "Hello, World!" : "Ciao, Mondo!"}
      </h2>
    </>
  );
}
