file = open('gg.txt', 'r')
lines = file.readlines()
file.close()

pos = open('positive_numbers.asm', 'w')
neg = open('negative_numbers.asm', 'w')

for line in lines:
    parts = line.strip().split()
    for p in parts:
        if p.lstrip('-').isdigit():
            n = int(p)
            if n >= 0:
                pos.write(str(n) + '\n')
            else:
                neg.write(str(n) + '\n')

pos.close()
neg.close()
