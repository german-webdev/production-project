type Mods = Record<string, boolean | string>;
type Additional = (string | undefined)[]

export function classNames (cls: string, mods: Mods = {}, additional: Additional = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([classNames]) => classNames)
  ].join(' ');
}
