#ბილეთი ღირს 25 ლარი,
# მაგრამ ბავშვებისთვის უფასოა,
# გვყავს 13 ადამიანი, აქედან 10 დიდი და 3 ბავშვი, 
# გამოთვალეთ ჯამში რამდენი ლარი დასჭირდებათ 

child=0
adult=25
child_1=float(input("number of children: "))
adult_1=float(input("number of adult: " ))
tprice = (adult_1*adult)-(child*child_1) 
print("total price is: "+ str(tprice))
