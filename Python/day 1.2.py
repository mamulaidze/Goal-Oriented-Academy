a = int(input("enter 1st number: "))
b = int(input("enter 2nd number: "))
print(a / b)
print(a * b)
print(a + b)
print(a - b)

  #2

book_1 , book1_price = "shvarcnegeri" , 30
book_2 , book2_price = "terminatori" , 900

discount_1 = (book1_price * 0.9)
discount_2 = (book2_price * 0.9)
print("buy book for "+ str(discount_1) +" "+str(discount_2)+" instead of " +str(book1_price)+" "+str(book2_price))

 #3

me , mom , dad = 16 , 42 , 43

me , mom , dad = 16 + 25 , 42 + 25 , 43 + 25;
print(me , mom , dad)

 #4

name = input("Enter your name: ")
last_name = input("Enter your last name: ")
age = input("Enter your age: ")

message = "Hello {} {}, your age is {}. You need to be more than 18 to enter!".format(name, last_name, age)
print(message)

 #5
num = int(input("Enter number: "))
if num % 2 == 0:
    print("this is your number: "+str(num)+", "+"this number is even")
else:
    print("this is your number: "+str(num)+", "+"this number is odd")