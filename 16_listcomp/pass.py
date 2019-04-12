# Kendrick Liang
# SoftDev2 pd6
# K #16: Do You Even List?
# 2019-04-12
lower = 'abcdefghijklmnopqrstuvwxyz'
upper = lower.upper()
digits = '0123456789'
special = '~`!@#$%^&*()+=_-{}[]\|:;"''?/<>,.'
def passCheck(p):
    if (1 in [1 for x in p if x in lower]):
        if (1 in [1 for x in p if x in upper]):
            if (1 in [1 for x in p if x in digits]):
                return True
    return False

print(passCheck('aB1'))
print(passCheck('abc'))
print(passCheck('123'))

def passRank(p):
    if (1 in [1 for x in p if x in lower]):
        if (1 in [1 for x in p if x in upper]):
            if (1 in [1 for x in p if x in digits]):
                if (1 in [1 for x in p if x in special]):
                    if (len(p) >= 10):
                        return "10"
                    return len(p)
    return "1"
print(passRank('aB1'))
print(passRank('abc'))
print(passRank('123'))
print(passRank('AsDf&1234'))
print(passRank('AsDfqwerty&-1234'''))
