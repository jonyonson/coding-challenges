def reverseStr(s, k):
    arr = list(s)

    for i in range(0, len(arr), 2*k):
        arr[i:i+k] = reversed(arr[i:i+k])

    return "".join(arr)
