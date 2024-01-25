// type MyAwaited<T> = T extends Promise<infer P> ? P : never;

type MyAwaited<T> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : never
  : never;

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

export { MyAwaited };
