# Q - 1

def greatest_of_3_nos(a, b, c):
   if((a > b) and (a > c)): 
       print(f"{a} is the greatest number.")
   elif((b > a) and (b > c)):
       print(f"{b} is the greatest number.")
   else:
       print(f"{c} is the greatest number.")
       
greatest_of_3_nos(20, 45, 6)

# Q - 2

#formula - F = (9/5) C + 32

def celsius_to_fahrenheit(d):
    f = ((9/5) * d + 32)
    print(f)
    
degree = int(input("Enter the degree to convert C-T: "))
celsius_to_fahrenheit(degree)

# Q - 3

for i in range(10):
    print(i, end = " ")

# Q - 4

# def nn(n):
    
    
# Q - 5

n = int(input())

for i in range(n, 0, -1):
    print("*" * i)

# Q - 6
# formula = i * 2.54

i = float(input())
print(i * 2.54)

# Q - 7

listt = ["ktm adventure 390", "himalayan 450", "nx500", "bmw 310 gs"]

update = input()
listt.remove(update)
print(listt)

# Q - 8

def multiplication_table(n):
    for i in range(1, 11):
        print(f"{n} * {i} = {n * i}")
        
n = int(input())
multiplication_table(n)
