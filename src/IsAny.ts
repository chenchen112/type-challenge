type IsAny<T> = 0 extends 1 & T ? true : false;

type S = IsAny<1>;

type X = IsAny<0>;

type K = IsAny<string>;

type P = IsAny<any>;

export { IsAny };
