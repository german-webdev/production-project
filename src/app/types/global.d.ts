type IClassNames = Record<string, string>;

declare module '*.scss' {
  const scssClassNames: IClassNames;
  export = scssClassNames;
}

declare const styles: {
  [key: string]: string;
};

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import type * as React from 'react';
  const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

declare const __IS_DEV__: boolean;
