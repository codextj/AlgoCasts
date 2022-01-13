# --- Directions
# Given a string, return the character that is most
# commonly used in the string.
# --- Examples
# maxChar("abcccccccd") === "c"
# maxChar("apple 1231111") === "1"

from collections import defaultdict

def max_char(string):
    charCountDict = defaultdict(int)
    for char in string:
        charCountDict[char] += 1

    max_char, max_count = "", 0
    for char, count in charCountDict.items():
        if count > max_count:
            max_char, max_count = char, count 
    
    return max_char

print(max_char("apple 1231111"))

from collections import Counter

def max_char2(string):
    charCountDict = Counter(string)
    max_char, max_count = charCountDict.most_common()[0]
    return max_char

print(max_char2("apple 1231111"))