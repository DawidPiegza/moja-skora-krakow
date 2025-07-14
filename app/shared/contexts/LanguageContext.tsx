import React, { createContext, useState, useCallback } from "react";

export interface IWebsiteLanguage {
  webLanguage: "PL" | "ENG";
}

export type WebsiteLanguageContextType = {
  language: IWebsiteLanguage;
  setPL_Language: () => void;
  setENG_Language: () => void;
};

const defaultLanguage: IWebsiteLanguage = { webLanguage: "PL" };

export const WebsiteLanguageContext = createContext<WebsiteLanguageContextType>(
  {
    language: defaultLanguage,
    setPL_Language: () => {},
    setENG_Language: () => {},
  }
);

const WebsiteLanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<IWebsiteLanguage>(defaultLanguage);

  const setPL_Language = useCallback(() => {
    setLanguage(() => ({
      webLanguage: "PL",
    }));
  }, []);

  const setENG_Language = useCallback(() => {
    setLanguage(() => ({
      webLanguage: "ENG",
    }));
  }, []);

  return (
    <WebsiteLanguageContext.Provider
      value={{ language, setPL_Language, setENG_Language }}
    >
      {children}
    </WebsiteLanguageContext.Provider>
  );
};

export default WebsiteLanguageProvider;
