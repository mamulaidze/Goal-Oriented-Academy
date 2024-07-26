def all_nines(k):
    if k % 2 == 0 or k % 5 == 0:
        return -1
    n = 9
    while n % k != 0:
        n = n * 10 + 9
    return n // k
