list=[4, 4, 8 , 9 , 5 , 4 , 9 ]
for i in range(2):
    list.remove(4)
print(list)

######################################            2           ###########################


f_age=[43 , 42, 15]
full_sent="mamachemis asekia {}, dedachemis asakia {}, chemi asakia {}".format(f_age[0],f_age[1],f_age[2])
print(full_sent)
     #updt
f_age=[43+10,42+10,15+10]
full_sent_1="mamachemis asekia {}, dedachemis asakia {}, chemi asakia {}".format(f_age[0],f_age[1],f_age[2])
print(full_sent_1)