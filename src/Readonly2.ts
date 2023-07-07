type MyExclude<T, K> = T extends K ? never : T;

type MyReadonly<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & { [R in MyExclude<keyof T, K>]: T[R] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

type MyReadonly2<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
