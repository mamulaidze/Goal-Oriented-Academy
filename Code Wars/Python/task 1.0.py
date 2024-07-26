def find_short(s):
    words = s.split()
    shortest_length = len(words[0])
    for word in words[1:]:
        length = len(word)
        if length < shortest_length:
            shortest_length = length
    return shortest_length