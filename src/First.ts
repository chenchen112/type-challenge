//answer1
type First<T extends any[]> = T extends [] ? never : T[0];

//answer2
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

//answer3
// type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

export { First };
