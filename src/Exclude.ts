type MyExclude<T, P> = T extends P ? T : never;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

export { MyExclude };
