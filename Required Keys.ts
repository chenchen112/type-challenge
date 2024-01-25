type RequiredKeys<T, K = keyof T> = K extends keyof T
  ? T extends Required<Pick<T, K>>
    ? K
    : never
  : never;

type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”

export { RequiredKeys };
