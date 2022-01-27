# // --- Directions
# // Write a function that returns the number of vowels
# // used in a string.  Vowels are the characters 'a', 'e'
# // 'i', 'o', and 'u'.
# // --- Examples
# //   vowels('Hi There!') --> 3
# //   vowels('Why do you ask?') --> 4
# //   vowels('Why?') --> 0

def vowels(string):
    vowel_set = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    count = 0
    for char in string:
        if char in vowel_set:
            count += 1

    return count

import re

def vowels2(string):
    return len(re.findall(r"[aeiouAEIOU]", string))

print(vowels2('Why do you ask?'))