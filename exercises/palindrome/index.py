# --- Directions
# Given a string, return true if the string is a palindrome
# or false if it is not.  Palindromes are strings that
# form the same word if it is reversed. *Do* include spaces
# and punctuation in determining if the string is a palindrome.
# --- Examples:
#   palindrome("abba") === true
#   palindrome("abcdefg") === false

def palindrome(string):
    return string == "".join(reversed(list(string)))

print(palindrome(" +7.7b"))
print(palindrome("aaa"))
print(palindrome("aaabaaa"))
print(palindrome("a a-aba-a a"))


def palindrome2(string):
    length = len(string)
    for i in range(0, int(length/2)):
        if string[i] != string[length-1 -i] :
            return False
    return True

print(palindrome(" +7.7b"))
print(palindrome2("aaa"))
print(palindrome2("aaabaaa"))
print(palindrome2("a a-aba-a a"))