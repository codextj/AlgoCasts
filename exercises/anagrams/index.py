# --- Directions
# Check to see if two provided strings are anagrams of eachother.
# One string is an anagram of another if it uses the same characters
# in the same quantity. Only consider characters, not spaces
# or punctuation.  Consider capital letters to be the same as lower case
# --- Examples
#   anagrams('rail safety', 'fairy tales') --> True
#   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
#   anagrams('Hi there', 'Bye there') --> False

from collections import Counter
import re

def to_alphanum_lower_case_str(string):
    return re.sub(r"[^\w]", "", string).lower()

def anagrams(string_a, string_b):
    string_a, string_b = map(to_alphanum_lower_case_str, (string_a, string_b))

    if len(string_a) != len(string_b):
        return False

    return Counter(string_a) == Counter(string_b)

def anagrams2(string_a, string_b):
    string_a, string_b = map(to_alphanum_lower_case_str, (string_a, string_b))

    if len(string_a) != len(string_b):
        return False
    
    return sorted(string_a) == sorted(string_b)

print(anagrams('rail safety', 'fairy tales'))
print(anagrams('RAIL! SAFETY!', 'fairy tales'))
print(anagrams('Hi there', 'Bye there'))
print(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'))

print(anagrams2('rail safety', 'fairy tales'))
print(anagrams2('RAIL! SAFETY!', 'fairy tales'))
print(anagrams2('Hi there', 'Bye there'))
print(anagrams2('A tree, a life, a bench', 'A tree, a fence, a yard'))