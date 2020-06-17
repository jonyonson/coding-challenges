def sum_zero(n):
    result = []

    i = 1
    while (i <= n // 2):
        result.append(i)
        result.append(-i)
        i += 1

    if n % 2 == 1:
        result.append(0)

    return result
