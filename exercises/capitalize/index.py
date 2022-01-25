#  --- Directions
#  Write a function that accepts a string.  The function should
#  capitalize the first letter of each word in the string then
#  return the capitalized string.
#  --- Examples
#    capitalize('a short sentence') --> 'A Short Sentence'
#    capitalize('a lazy fox') --> 'A Lazy Fox'
#    capitalize('look, it is working!') --> 'Look, It Is Working!'

def capitalize(string):
    return string.title()

def capitalize2(string):
    str_arr = list(string)

    cap = True
    for i, char in enumerate(str_arr):
        if (char == " "):
            cap = True
            continue

        if (cap):
            str_arr[i] = char.upper()
            cap = False

    return "".join(str_arr)



print(capitalize2('a short sentence')) #--> 'A Short Sentence'
print(capitalize2('a lazy fox')) #--> 'A Lazy Fox'
print(capitalize2('look, it is working!')) #--> 'Look, It Is Working!'