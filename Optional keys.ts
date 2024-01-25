type OptionalKeys<T, K = keyof T> = K extends keyof T
  ? T extends Required<Pick<T, K>>
    ? never
    : K
  : never;

type Result = OptionalKeys<{ foo: number; bar?: string }>;
// expected to be bar

export { OptionalKeys };
