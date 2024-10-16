import random
player_input = input()
a = "gun"
b = "water"
c = "snake"
random_number = random.randint(1, 3)

if (random_number == 1):
    if(player_input == "water"):
        print("player win as Computer choose \"gun\"")
    elif(player_input == "snake"):
        print("computer win as Computer choose \"gun\"")
    elif(player_input == "gun"):
        print("draw as Computer also choose \"gun\"")
elif (random_number == 2):
    if(player_input == "water"):
        print("draw as Computer also choose \"water\"")
    elif(player_input == "snake"):
        print("computer win as Computer choose \"gun\"")
    elif(player_input == "gun"):
        print("player win as Computer choose \"gun\"")
