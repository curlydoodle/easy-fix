import { ObjectValues } from './ObjectValues';

export const languages = {
  Javascript: 'javascript',
  Css: 'css',
  Html: 'html',
  Typescript: 'typescript',
  Python: 'python',
  Java: 'java',
  Go:'go',
  Rust:'rust',
  Scala:'scala',
  Haskell: 'haskell',
  R: 'r',
  Shell: 'shell',
  Dart: 'dart',
  Ruby:'ruby',
  All: 'all',
} as const;

export type Language = ObjectValues<typeof languages>;

export const sortedLanguages = Object.values(languages).sort((a, b) => {
  return a.localeCompare(b);
});
