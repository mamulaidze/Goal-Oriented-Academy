def sort_by_length(arr):
    gela = sorted(arr, key = len)
    return gela


def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    return sum(range(begin_number, end_number + 1, step))

def two_oldest_ages(ages):
    srtd = sorted(ages)
    return [srtd[-2], srtd[-1]]