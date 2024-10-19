# class Programmers:
#     def __init__(self, name, age, language, exyears):
#         self.name = name,
#         self.age = age,
#         self.language = language,
#         self.exyears = exyears
    
#     def check_agelang(self):
#         print(self.age, self.language)
    
# hextech = Programmers("yuva", 22, "python", 3)
# hextech.check_agelang()

# Q - 2

# class calci:
#     def __init__(self, a):
#         self.a = a
    
#     def squares(self):
#         print(self.a ** 2)
        
#     @staticmethod
#     def cubes(self):
#         print(self.a ** 3)
        
#     def squareroot(self):
#         print(self.a ** 0.5)
        
# number = calci(3)

# number.squares()
# # number.cubes()
# number.squareroot()

# Q - 3


# Q - 4

class Indian_Railways:
    def __init__(self, name, age):
        self.name = name,
        self.age = age
        self.seats = 0

    def book_tickets(self):
        tickets = {self.name}, {self.age}
        print(tickets, "Booked")
        self.seats += 1

    def available_seats(self):
        print(97 - self.seats)
        
    @staticmethod
    def fare():
        print("fare = 500")
    
yuvaraj = Indian_Railways("yuvaraj", 22)
yuvaraj.book_tickets()
yuvaraj.available_seats()
yuvaraj.fare()
# book_tickets()