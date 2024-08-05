def convert_to_binary(number):
    return bin(number)[2:]

def convert_to_octal(number):
    return oct(number)[2:]

binary_number = '011101010100100'
decimal_from_binary = int(binary_number, 2)
print(f"Binary {binary_number} to Decimal: {decimal_from_binary}")

decimal_number = 10
print(f"Decimal {decimal_number} to Octal: {convert_to_octal(decimal_number)}")
