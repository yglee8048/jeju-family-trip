import { ko } from './ko';
import { ja } from './ja';
import type { Lang } from '../data/personas';

export const i18n = { ko, ja };

export function t(lang: Lang, key: string): string {
  const parts = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let obj: any = i18n[lang];
  for (const part of parts) {
    obj = obj?.[part];
  }
  return typeof obj === 'string' ? obj : key;
}
