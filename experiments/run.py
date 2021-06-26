# Please Make a software for a mobile service center in there is two option one for
# customer and another for customer service officer. Whenever a customer enter his
# details like name, device name and issue with mobile than his token no. is
# generated automatically without invoking any method explicitly and if the system
# already generated III token then that display a message about “sorry already III
# persons in queue” and also a customer service officer choose a option query is
# processed after passing its credentials then next customer will capable for token
# generation.
from os import name
import random

print("************* Welcome to Mobile Service Center *************")
print()
altoken = []
q=2
name = []
devname = []
isu = []


def customer():
    if(len(altoken) > 3):
        print("Sorry already III persons in queue. Please contact Customer service officer")
        return
    print(" Enter Details : ")
    name.append(input("Enter your name : "))
    devname.append(input("Enter the device name : "))
    isu.append(input("Enter the issue with device : "))
    token = random.randint(1000, 10000)
    print("Your token generated is :", str(token))
    altoken.append(token)
    print(altoken)

def cso():
    csotoken = input("Enter the token of the person : ")
    if(int(csotoken) not in altoken):
        print("Invalid Token Please Check again")
        return
    i = altoken.index(int(csotoken))
    print("Name:",name[i])
    print("Device Name:",devname[i])
    print("Issue:",isu[i])
    op = input("Do you want to remove the above patient : (y/n)")
    if(op.upper() == 'Y'):
        altoken.remove(int(csotoken))
    else:
        return

while(q>1):
    option = input("Enter your option:\n1. Customer\n2. Customer Service Officer\n3.Exit\n")
    if(option == '1'):
        customer()
    if(option == '2'):
        cso()
    if(option == '3'):
        break
