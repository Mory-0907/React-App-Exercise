import { Hello } from "./Hello";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <div className="p-4">
          <label className="mr-2">Select Language:</label>
          <select
            id="lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>

          <Hello />
        </div>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
