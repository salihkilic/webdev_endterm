// // //IMMUTABLE LISTS
// // //type List<T> = {kind: "empty"} | { kind: "full", head: T, tail: List<T>}

// type Empty = { kind: "empty" }
// type ListNode<T> = { kind: "full", readonly head: T, readonly tail: List<T> }
// type List<T> = | Empty
//     | ListNode<T>

// const empty_ = (): Empty => {
//     return { kind: "empty" }
// }

// const empty = (): Empty => ({ kind: "empty" })

// const full = <T>(val: T): (tail_: List<T>) => List<T> => tail_ =>
//     ({ kind: "full", head: val, tail: tail_ })


// const list = full(2)(full(4)(full(5)(empty())))

// const list2String = <T>(list: List<T>): string =>
//     list.kind == "empty" ? "EMPTY" :
//         `[${list.head}] -> ` + list2String(list.tail)

// //Reverse
// //acc: empty()
// const reverse_ = <T>(list: List<T>): (acc: List<T>) => List<T> => acc =>
//     list.kind == "empty" ? acc :
//         reverse_(list.tail)(full(list.head)(acc))

// const reverse = <T>(list: List<T>): List<T> => reverse_(list)(empty())

// //Filter, Map, Fold

// //Filter (List<T>): //LINQ -> where
// // inputs: predicate lambda:  (_: T) => boolean, List<T>   output: List<T>

// const filter = <T>(predicate: (_: T) => boolean): (list: List<T>) => List<T> => list =>
//     list.kind == "empty" ? empty() :
//         predicate(list.head) ? full(list.head)(filter(predicate)(list.tail)) : filter(predicate)(list.tail)

// const filter_ = <T>(predicate: (_: T) => boolean): (list: List<T>) => List<T> => list => {
//     if (list.kind == "empty") return empty()
//     if (predicate(list.head)) return full(list.head)(filter_(predicate)(list.tail))
//     return filter_(predicate)(list.tail)
// }

// // Map (List<T>):  //LINQ: select
// // inputs: projection/transform lambda:  (_: T) => R, List<T>   output: List<R>
// const num2Str = (n: number): string => `[${n}]`
// const str2Num = (s: string): number => s.length

// const map = <T, R>(projection: (_: T) => R): (list: List<T>) => List<R> => list =>
//     list.kind == "empty" ? empty() :
//         full(projection(list.head))(map(projection)(list.tail))

// const largerThan3 = filter<number>(_ => _ > 3) // <=
// const filteredList = largerThan3(list)
// const filteredList_ = largerThan3(full(100)(full(2)(list)))

// const mapper = map<number, string>(n => `--${n}--`) // <=
// const mappedList = mapper(list)
// const mappedList_ = map<number, string>(n => `--${n}--`)(list)
// console.log(list2String(list))
// console.log(list2String(filter<number>(_ => _ > 3)(list)))
// console.log(list)
// console.log(mappedList)

// console.log("\n")
// console.log(list2String(list))
// console.log(list2String(mappedList))
// console.log()


// const sum = (a: number, b: number) => a + b

// const sumCurried = (x: number): (y: number) => number => y => x + y

// const reducer2String = (accRes: string): (el: number) => string => el => el + " : " + accRes

// //const reducerFunction : <T, R> (accRes : R) : (el: T) => R
// const sum3 = sumCurried(3)
// console.log()
// //Sum
// // [2, 4, 5] 
// // acc: 0 (begin value)
// // 0 + 2 -> 2.     acc* <- (acc + list[0])
// // 2 + 4 -> 6       acc* <- (acc + list[1])
// // 6 + 5 -> 11      acc* <- (acc + list[2])

// // Fold (List<T>):  
// // inputs: (reducerFunction : <T, R> (accRes : R) : (el: T) => R), list: List<T>, acc: R output: R

// const fold = <T, R>(reducerFunction: (accRes: R) => (el: T) => R): (list: List<T>) => (acc: R) => R =>
//     list => acc =>
//         list.kind == "empty" ? acc :
//             fold<T, R>(reducerFunction)(list.tail)(reducerFunction(acc)(list.head))//a
// //reducerFunction(fold<T, R>(reducerFunction)(list.tail)(acc))(list.head) //b

// const filterFold = <T>(predicate: (_: T) => boolean): (list: List<T>) => List<T> =>
//     list => fold<T, List<T>>(accRes => listEl => predicate(listEl) ? full(listEl)(accRes) : accRes)(reverse(list))(empty())

// const mapFold = <T, R>(projection: (_: T) => R): (list: List<T>) => List<R> =>
//     list => fold<T, List<R>>(accRes => listEl => full(projection(listEl))(accRes))(reverse(list))(empty())

// console.log(list2String(filterFold<number>(_ => _ > 3)(list)))
// console.log(list2String(mapFold<number, string>(_ => "!!!" + _ + "!!!")(list)))

// //Fold (case a, b)
// //case b
// // head: 2
// //head: 4
// //head: 5
// //empty -> acc: 0 -> 0
// // reducerFunction(0)(5) => 0 + 5 => 5
// // reducerFunction(5)(4) => 5 + 4 => 9
// // reducerFunction(9)(2) => 9 + 2 => 11

// //case a: TAIL CALL OPTIMIZATION

// // head: 2
// //acc <- reducerFunction(0)(2) => 0 + 2 => 2
// //head: 4
// //acc <- reducerFunction(2)(4) => 2 + 4 => 6
// //head: 5
// //acc <- reducerFunction(6)(5) => 6 + 5 => 11
// //empty -> acc -> 11

// const reverseFold = <T>(list: List<T>): List<T> =>
//     fold<T, List<T>>(accRes => listEl => full(listEl)(accRes))(list)(empty())