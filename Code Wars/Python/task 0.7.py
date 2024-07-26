def difference_in_ages(ages):
    max_age = ages[0]
    for num in ages:
        if max_age < num:
            max_age = num
    min_age = ages[0]
    for i in ages:
        if i < min_age:
            min_age =i
    return  min_age, max_age , (max_age-min_age)