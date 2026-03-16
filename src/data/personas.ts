export type Group = 'me_gf' | 'parents' | 'sister_family';
export type Lang = 'ko' | 'ja';

export interface Persona {
  id: string;
  name: { ko: string; ja: string };
  group: Group;
  defaultLang: Lang;
  emoji: string;
}

export const personas: Persona[] = [
  { id: 'younggyu', name: { ko: '이영규', ja: 'イ・ヨンギュ' }, group: 'me_gf', defaultLang: 'ko', emoji: '🙋‍♂️' },
  { id: 'jina', name: { ko: '김진아', ja: 'キム・ジナ' }, group: 'me_gf', defaultLang: 'ko', emoji: '👩' },
  { id: 'jungkwon', name: { ko: '이정권', ja: 'イ・ジョングォン' }, group: 'parents', defaultLang: 'ko', emoji: '👨' },
  { id: 'hyungsoon', name: { ko: '박형순', ja: 'パク・ヒョンスン' }, group: 'parents', defaultLang: 'ko', emoji: '👩‍🦳' },
  { id: 'jungmin', name: { ko: '이정민', ja: 'イ・ジョンミン' }, group: 'sister_family', defaultLang: 'ko', emoji: '👩‍👦' },
  { id: 'kazuma', name: { ko: '코이 카즈마', ja: 'コイ・カズマ' }, group: 'sister_family', defaultLang: 'ja', emoji: '🇯🇵' },
];

export function getPersonaById(id: string): Persona | undefined {
  return personas.find(p => p.id === id);
}
