type DeepReadonly<T, K extends keyof T = keyof T> = keyof T extends never
  ? T
  : {
      readonly [P in K]: DeepReadonly<T[P]>;
    };

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

type Hmm<T> = keyof T extends never ? true : false;
type X1 = Hmm<{ a: string }>; // false, "a" is a known key
type X2 = Hmm<{}>; // true, there are no known keys
type X3 = Hmm<object>; // true, there are no known keys
type X4 = Hmm<string>; // false, there are keys like "toUpperCase"
type X5 = Hmm<{ a: string } | { b: string }>; // true, unions with no common keys have no known keys

export { DeepReadonly };
