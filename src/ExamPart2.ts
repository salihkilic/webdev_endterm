type Empty = { kind: "empty" };
type Full<T> = { kind: "node"; value: T; next: List<T> }

type List<T> =
    | Full<T>
    | Empty

// Question 5
