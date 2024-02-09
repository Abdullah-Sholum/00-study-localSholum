def adalah_prima(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

bilangan = 2  # Mulai dari 2 karena 2 adalah bilangan prima pertama

while True:
    if adalah_prima(bilangan):
        print(bilangan)
    bilangan += 1