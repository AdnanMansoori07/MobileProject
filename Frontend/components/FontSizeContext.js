import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const FontSizeContext = createContext();

const FONT_SIZE_KEY = 'fontSize';
const DEFAULT_SIZE = 16;

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    // Load from storage on app start
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(FONT_SIZE_KEY);
        if (stored) setFontSize(Number(stored));
      } catch (e) {}
    })();
  }, []);

  const updateFontSize = async (size) => {
    setFontSize(size);
    try {
      await AsyncStorage.setItem(FONT_SIZE_KEY, String(size));
    } catch (e) {}
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, updateFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
