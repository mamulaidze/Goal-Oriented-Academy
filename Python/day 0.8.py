                                        #1
def find_needle(haystack):
    for index in range(len(haystack)):
        if haystack[index] == "needle":
            return "found the needle at position {}".format(index)
    return "there is not needle"

                     #2
def make_upper_case(s):
    return s.upper()

                     #3
def sum_array(a):
    return sum(a)

                           #4
def areYouPlayingBanjo(name):
    if name[0].lower() == 'r':
        return name + ' plays banjo'
    else:
        return name + ' does not play banjo'
    
                  #5
    def invert(lst):
        invert_arr = []
        for num in lst:
            invert_arr.append(num * (-1))
        return invert_arr
 
                   #6