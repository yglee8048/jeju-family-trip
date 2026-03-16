export type Group = 'me_gf' | 'parents' | 'sister_family';
export type Lang = 'ko' | 'ja';

export interface Persona {
  id: string;
  name: { ko: string; ja: string };
  group: Group;
  defaultLang: Lang;
}

export const personas: Persona[] = [
  { id: 'younggyu', name: { ko: '영규', ja: 'ヨンギュ' }, group: 'me_gf', defaultLang: 'ko' },
  { id: 'jina', name: { ko: '진아', ja: 'ジナ' }, group: 'me_gf', defaultLang: 'ko' },
  { id: 'jungkwon', name: { ko: '정권', ja: 'ジョングォン' }, group: 'parents', defaultLang: 'ko' },
  { id: 'hyungsoon', name: { ko: '형순', ja: 'ヒョンスン' }, group: 'parents', defaultLang: 'ko' },
  { id: 'jungmin', name: { ko: '정민', ja: 'ジョンミン' }, group: 'sister_family', defaultLang: 'ko' },
  { id: 'kazuma', name: { ko: '카즈', ja: 'カズマ' }, group: 'sister_family', defaultLang: 'ja' },
];

export function getPersonaById(id: string): Persona | undefined {
  return personas.find(p => p.id === id);
}
