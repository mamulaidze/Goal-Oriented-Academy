#პითონი: უნდა გააკეთოთ ბანკის სისტემა სადაც შეგეძლებათ თანხის შეტანა გამოტანა, აქაუნთის გაკეთება, აგრეთვე უნდა აკონტროლოთ თუ მომხმარებელი იმაზე მეტ თანხას გამოიტანს ვიდრე აქვს მაშინ არ გამოატანიოთ თანხა.

print("Welcome to GOA's Bank!")
print("Create account!")
name = input("Enter your name: ")
surname = input("Enter your surname: ")
email = input("Enter you email: ")
password = input("Enter your password: ")
conf_password = input("Ener your password again: ")
deposit = int(input("Enter amount of deposit: "))
withdraw =int(input("Enter amount of money to withdraw: "))

if password != conf_password:
    print("Wrong password! enter again")

if deposit < withdraw:
    print("There is not that amount of money on your bank account!")
elif deposit >= withdraw:
    print(deposit - withdraw +"$ left on your bank account")