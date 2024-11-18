import random

print("You have to guess between 1 to 100 numbers")
random_number = random.randint(1, 100)
tries = 0

guess = int(input("Start your guessing: "))
while((guess > random_number) or (guess < random_number)):
    if(guess > random_number):
        print("Your guess is high \nlow number please..")
        guess = int(input("Try again "))
        tries += 1
        continue
    if(guess < random_number):
        print("Your guess is low \nhigh number please..")
        guess = int(input("Try again "))
        tries += 1
    
if(guess == random_number):
    if(tries == 0):
        print(f"Congratulations!! you guessed right number: << {random_number} >> in first attempt")
    else:
        print(f"Congratulations!! you guessed right number: << {random_number} >> in {tries} tries")