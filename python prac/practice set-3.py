# Q - 1

name = input()
print('Good Afternoon ' + name)

# Q - 2

letter = '''Dear <|Name|>, 
You are selected! 
<|Date|> '''

new = (letter.replace("<|Name|>", "yuva"))
new = (new.replace("<|Date|>", "15-10-2024"))
print(new)

# Q - 3

string = "str  ing"
print(("  ") in string)

# Q - 4

print(string.replace("  ", " "))

# Q - 5

sentence = "Dear Harry, \nthis\t python\t course is nice. \nThanks!"
print(sentence)