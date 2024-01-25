type GetOptional<T> = {
  [P in keyof T as undefined extends T[P] ? P : never]: T[P];
};

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }

export { GetOptional };
