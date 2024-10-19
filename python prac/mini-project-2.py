import random

# ask1 = input("Do you want to choose the numbers from which number to which number:\ntype \"yes\" if you want to choose")
# if()

random_number = random.randint(0, 100)
guess = int(input("?"))

while(guess < random_number):
    print(guess)
    print("you guess low,\nHigher number Please..")
    guess = int(input("?"))

    
while(guess > random_number):
    print("you guess high,\nLower number Please..")
    guess = int(input("?"))
    
while(guess == random_number):
    print(f"Congratulations!! You Guessed {random_number}!!")
    break

while(guess >)
