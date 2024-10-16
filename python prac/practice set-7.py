# Q - 1

number = int(input("Enter the number to show table: "))
for i in range(1, 21):
    print(f"{number} * {i} = {number * i}")
    
# Q - 2

l = ["Harry", "Soham", "Sachin", "Rahul"]
for i in l:
    if(i.startswith("S")):
        print(f"Hello {i}")
    else:
        print(i)
        
# Q - 3

n = int(input())
i = 1
while (i < 21):
    print(f"{n} * {i} = {n * i}")
    i += 1

# Q - 4

given_number = int(input())
r = 0
for i in range(1, given_number + 1):
    if(given_number%i == 0):
        r = r + 1
if(r == 2):
    print("prime")
else:
    print("not Prime")

# Q - 5

n = int(input())
start = 1
res = 0
while (start <= n):
    res = res + start
    start += 1
print(res)

# Q - 6

f = int(input())
r = 1
while(f > 0):
    r = r * f
    f -= 1
print(r)

# Q - 7

v = 3
for i in range(1, v + 1):
    print(" " * (v - i) + ("*" * ((i * 2 ) - 1)))

# Q - 8

for i in range(1, v + 1):
    print("*" * i)

# Q - 9

print("* " * v)
for i in range(1, v - 1):
    print("* " + ("  " * (v - 2)) + "* ")
print("* " * v)

# Q - 10

t = int(input())
for i in range(20, 0, -1):
    print(f"{t} * {i} =  {t * i}")