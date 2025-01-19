type ImmList<T> = { 
    kind: "empty" 
  }
  | { 
    kind: "immlist",
    head: T,
    tail: ImmList<T>
}

const ImmList = <T>(array : T[]) : ImmList<T> => {
    let x : ImmList<T> = { kind : "empty" }
    for (let i = array.length - 1; i >= 0; i--) {
        x = {
            kind: "immlist",
            head: array[i],
            tail: x
        }
    }
    return x
}

// Example
const immList1 = ImmList([1, 2, 3, 4, 5])
const immList2 = ImmList(["a", "b", "c", "d", "e"])

// Last element (recursive)
const last = <T>(list: ImmList<T>): T | undefined => {
    if (list.kind === "empty") {
        return undefined
    } else if (list.tail.kind === "empty") {
        return list.head
    } else {
        return last(list.tail)
    }
}

// Reverse List (recursive)
const reverse = <T>(list: ImmList<T>): ImmList<T> => {
    const reverseHelper = (list: ImmList<T>, acc: ImmList<T>): ImmList<T> => {
        if (list.kind === "empty") {
            return acc
        } else {
            return reverseHelper(list.tail, { kind: "immlist", head: list.head, tail: acc })
        }
    }
    return reverseHelper(list, { kind: "empty" })
}

// Append List (recursive)
const append = <T>(list1: ImmList<T>, list2: ImmList<T>): ImmList<T> => {
    if (list1.kind === "empty") {
        return list2
    } else {
        return { kind: "immlist", head: list1.head, tail: append(list1.tail, list2) }
    }
}

// nth element (recursive)
const nth = <T>(list: ImmList<T>, n: number): T | undefined => {
    if (list.kind === "empty") {
        return undefined
    } else if (n === 0) {
        return list.head
    } else {
        return nth(list.tail, n - 1)
    }
}

// is palindrome (recursive)
const isPalindrome = <T>(list: ImmList<T>): boolean => {
    const isPalindromeHelper = (list: ImmList<T>, reversed: ImmList<T>): boolean => {
        if (list.kind === "empty") {
            return true
        } else if (list.kind === "immlist" && reversed.kind === "immlist" && list.head === reversed.head) {
            return isPalindromeHelper(list.tail, reversed.tail)
        } else {
            return false
        }
    }
    return isPalindromeHelper(list, reverse(list))
}

// Compress List (recursive)
const compress = <T>(list: ImmList<T>): ImmList<T> => {
    const compressHelper = (list: ImmList<T>, last: T): ImmList<T> => {
        if (list.kind === "empty") {
            return { kind: "immlist", head: last, tail: { kind: "empty" } }
        } else if (list.head === last) {
            return compressHelper(list.tail, last)
        } else {
            return { kind: "immlist", head: last, tail: compressHelper(list.tail, list.head) }
        }
    }
    if (list.kind === "empty") {
        return { kind: "empty" }
    } else {
        return compressHelper(list.tail, list.head)
    }
}
