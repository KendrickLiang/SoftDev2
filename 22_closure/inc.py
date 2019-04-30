def repeat(s):
    def num(x):
        retStr = ''
        for n in range(x):
            retStr += s
        return retStr
    return num
r1 = repeat("hello")
r2 = repeat("goodbye")
print(r1(2))
print(r2(2))
print(repeat('cool')(3))
def outer():
    x = 'foo'
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x
print(outer())
def make_counter():
    count = 0
    def inc():
        nonlocal count
        print("Current: " + str(count))
        count += 1
        return count
    return inc
c1 = make_counter()
c2 = make_counter()

print(c1())
print(c1())
print(c2())
print(c1())
print(c2())
