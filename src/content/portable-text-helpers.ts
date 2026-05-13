import type { PortableTextBlock } from "@portabletext/types";

/** Eén normale alinea voor Portable Text (o.a. FAQ-antwoorden, rich text). */
export function ptNormal(key: string, text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${key}-s`, text, marks: [] }],
  };
}

export function ptParagraphs(prefix: string, lines: string[]): PortableTextBlock[] {
  return lines.map((line, i) => ptNormal(`${prefix}-${i}`, line));
}

export function ptH2(key: string, text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "h2",
    markDefs: [],
    children: [{ _type: "span", _key: `${key}-s`, text, marks: [] }],
  };
}

/** Opeenvolgende items worden als één bulletlijst gerenderd. */
export function ptBulletList(prefix: string, items: string[]): PortableTextBlock[] {
  return items.map((text, i) => ({
    _type: "block",
    _key: `${prefix}-li-${i}`,
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [{ _type: "span", _key: `${prefix}-li-${i}-s`, text, marks: [] }],
  })) as PortableTextBlock[];
}
