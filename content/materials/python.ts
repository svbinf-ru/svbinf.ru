import { MaterialsCode } from '../utils'

export const codeExamples: MaterialsCode[] = [
    {
        code: `from itertools import permutations

count = 0

for s in permutations("01234567", r=5):
    n = "".join(s)

    if ("1" not in n) and (n[0] != "0"):
        n = n.replace("6", "0").replace("4", "0").replace("2", "0")
        n = n.replace("7", "1").replace("5", "1").replace("3", "1")

        if ("00" not in n) and ("11" not in n):
            count += 1

print(count)`,
        caption: 'Создание чисел из числа',
        playground: 'https://pythononline.net/#BXIaUr',
    },
    {
        code: `from itertools import product

count = 0

for s in product("ВИШНЯ", repeat=6):
    n = "".join(s)
    if (n.count("В") <= 1) and (n[0] != "Ш") and (n[-1] not in "ИЯ"):
        count += 1

print(count)`,
        caption: 'Создание слов из слова',
        playground: 'https://pythononline.net/#mFvBzo',
    },
    {
        code: `x = 3*16**8 - 4**5 + 3
ans = ""

while x > 0:
    ans = str(x%4) + ans
    x //= 4

print(ans.count("3"))`,
        caption: 'Перевод из десятичной системы счисления',
        playground: 'https://pythononline.net/#vZNhj1',
    },
    {
        code: `alf = sorted("0123456789qwertyuiopasdfghjklzxcvbnm")

for x in alf[:15]:
    r = int(f"123{x}5", 15) + int(f"1{x}233", 15)
    if r % 14 == 0:
        print(r // 14)
        break`,
        caption: 'Кодирование чисел',
        playground: 'https://pythononline.net/#ybiBha',
    },
    {
        code: `from itertools import *

def f(x,y,z,w):
    return ((x <= y) and (y <= w)) or (z == (x or y))

for a1, a2, a3, a4, a5, a6, a7 in product([0,1], repeat=7):
    table = [
        (1, a1, a2, 1),
        (1, a3, a4, a5),
        (a6, 1, a7, 1)
    ]

    if len(table) == len(set(table)):
        for p in permutations("xyzw"):
            if [f(**dict(zip(p,r))) for r in table]==[0,0,0]:
                print(p)`,
        caption: 'Подбор таблицы истинности',
        playground: 'https://pythononline.net/#eDbe2k',
    },
    {
        code: `s = "8" * 70

while ("2222" in s) or ("8888" in s):
    if "2222" in s:
        s = s.replace("2222", "88", 1)
    else:
        s = s.replace("8888", "22", 1)

print(s)`,
        caption: 'Замена символов в строке',
        playground: 'https://pythononline.net/#ACEA68',
    },
    {
        code: `for a in range(1, 10000):
    f = True
    for x in range(1, 10000):
        if (((x % 84 != 0) or (x % 90 != 0)) <= (x % a != 0)) == 0:
            f = False
    if f:
        print(a)
        break`,
        caption: 'Проверка выражения',
        playground: 'https://pythononline.net/#0IM7iL',
    },
    {
        code: `from ipaddress import *

net = ip_network('192.168.32.160/255.255.255.240')
count = 0

for ip in net:
    k=f'{ip:b}'
    if k.count('1') % 2 == 0:
        count += 1

print(count)`,
        caption: 'Работа с IP-адресами',
        playground: 'https://pythononline.net/#8JqfrT',
    },
    {
        code: `for n in range(1, 1000):
    s = bin(n)[2:]
    sums = s.count("1") % 2
    s = s + str(sums)
    sums = s.count("1") % 2
    s = s + str(sums)
    r = int(s, 2)
    if r > 80:
        print(r)
        break`,
        caption: 'Обработка двоичного числа',
        playground: 'https://pythononline.net/#M3O9mA',
    },
    {
        code: `ans = []

for n in range(1000, 10000):
    s = str(n)
    k1 = int(s[0]) + int(s[1])
    k2 = int(s[1]) + int(s[2])
    k3 = int(s[2]) + int(s[3])
    
    maxk = str(max(k1, k2, k3))
    mink = str(min(k1, k2, k3))
    avgk  = str(k1+k2+k3 - max(k1, k2, k3) - min(k1, k2, k3))

    r = avgk + maxk
    if r == "1517":
        ans.append(n)

print(min(ans))`,
        caption: 'Обработка десятичного числа',
        playground: 'https://pythononline.net/#rm6LIH',
    },
]
