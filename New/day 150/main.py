def print_array(arr):
    return ",".join(map(str, arr))


def string_clean(s):
    result = ''
    for i in s:
        if not i.isdigit():
            result += i
    return result

def between_extremes(numbers):
    return max(numbers)-min(numbers)