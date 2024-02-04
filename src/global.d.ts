interface IClassNames {
  [className: string]: string
}

declare module '*.scss' {
  const scssClassNames: IClassNames;
  export = scssClassNames;
}

declare module '*.css' {
  const cssClassNames: IClassNames;
  export = cssClassNames;
}