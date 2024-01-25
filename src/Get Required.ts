// type GetRequired<T> = {
//   [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
// };

type GetRequired<T> = {
  [P in keyof T as undefined extends T[P] ? never : P]: T[P];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }

export { GetRequired };
