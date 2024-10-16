# Q - 1
numbers = []
for i in range(4):
    no = int(input())
    numbers.append(no)
numbers.sort()
G = numbers[-1]
print(f"the gratest number among the list is: {G}")

# Q - 2
marks = []
for j in range(3):
    sub = int(input())
    marks.append(sub)

if(marks[0] >= 33):
    if(marks[1] >= 33):
        if(marks[2] >= 33):
            print("you are pass")
        else:
            print("you are fail")
    else:
        print("you are fail")
else:
    print("you are fail")
        
# Q - 3

comment = input()
if((comment == "Make a lot of money") or (comment == "buy now") or (comment == "subscribe this") or (comment == "click this")):
    print("Spam Comment Detected")
else:
    print("No Spam Comment Detected")

# Q - 4

username = input()
if(len(username) < 10):
    print("Containes valid number of characters")
else:
    print("more than 10 characters detected")

# Q - 5

bikes_brands = ["ktm", "yamaha", "honda", "hd", "hero"]

your_bike_brand = input()
if(your_bike_brand in bikes_brands):
    print("Bike available")
else:
    print("Not Available")

# Q - 6

subject_marks = int(input())

if((subject_marks >= 90) and (subject_marks <= 100)):
    print("Grade Ex")
elif((subject_marks >= 80) and (subject_marks <= 90)):
    print("Grade A")
elif((subject_marks >= 70) and (subject_marks <= 80)):
    print("Grade B")
elif((subject_marks >= 60) and (subject_marks <= 70)):
    print("Grade C")
elif((subject_marks >= 50) and (subject_marks <= 60)):
    print("Grade D")
elif(subject_marks < 50):
    print("Grade F")
else:
    print("Enter valid marks")

# Q - 7

post = input()

if("Harry" in post):
    print("Yes")
else:
    print("No")