import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'c',
  'e',
  'f',
  'h',
  'i',
  'j',
  'l',
  'm',
  'n',
  'o',
  'ö',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'x',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
