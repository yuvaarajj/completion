# Q - 1

words = {
    "tum": "you",
    "meh": "me",
    "aap": "you/you people",
    "hum": "we/me",
}

# print(words)

# Q - 2

numbers = set()
for i in range(8):
    a = int(input())
    numbers.add(a)
print(numbers, type(numbers))

# Q - 3

can_we = {18, "18"}
print(can_we, type(can_we))

# Q - 4

s = set()
s.add(20)
s.add('20')
s.add(20.0)
print(len(s), s)

# Q - 5

p = {}
print(type(p))

# Q - 6

fav = {}
for j in range(4):
    name = input()
    fav_lang = input()
    fav.update({name: fav_lang})
print(fav)

# Q - 7

