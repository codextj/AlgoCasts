# --- Directions
# Given a string, return a new string with the reversed
# order of characters
# --- Examples
#   reverse('apple') === 'leppa'
#   reverse('hello') === 'olleh'
#   reverse('Greetings!') === '!sgniteerG'

def rev_str(string):
    return "".join(reversed(list(string)))

print(rev_str("abcd"))


def rev_str2(string):
    return string[::-1]

print(rev_str2("1234"))


def rev_str3(string):
    rev = ""
    for i in range(len(string)-1, -1, -1) :
        rev += string[i]
    return rev

print(rev_str3("lmno"))
