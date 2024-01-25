type DeepOmit<O, P extends string> = P extends `${infer K}.${infer Rest}`
  ? {
      [key in keyof O]: key extends K ? DeepOmit<O[key], Rest> : O[key];
    }
  : Omit<O, P>;

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type test1 = DeepOmit<obj, "person">; // {}
type test2 = DeepOmit<obj, "person.name">; // { person: { age: { value: number } } }
type test3 = DeepOmit<obj, "name">; // { person: { name: string; age: { value: number } } }
type test4 = DeepOmit<obj, "person.age.value">; // { person: { name: string; age: {} } }
