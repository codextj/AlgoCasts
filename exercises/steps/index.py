# // --- Directions
# // Write a function that accepts a positive number N.
# // The function should console log a step shape
# // with N levels using the # character.  Make sure the
# // step has spaces on the right hand side!
# // --- Examples
# //   steps(2)
# //       '# '
# //       '##'
# //   steps(3)
# //       '#  '
# //       '## '
# //       '###'
# //   steps(4)
# //       '#   '
# //       '##  '
# //       '### '
# //       '####'


def steps(n):
    for i in range(1, n+1):
        #print(f"'{'#' * i + ' ' * (n-i)}'")
        print('#' * i + ' ' * (n-i))

def steps2(n):
    for i in range(1, n+1):
        res = ''
        for j in range(1, i+1):
            res += '#'
        for k in range(i+1, n+1):
            res += ' '      
        print(res)

def steps3(n):
    for row in range(1, n+1):
        res = ''
        for col in range(1, n+1):
            if col <= row:
                res += '#'
            else:
                res += ' '
        print(res)

def steps4(n, row=1, string=""):
    if n < row:
        return
    
    if len(string) == n:
        print(string)
        return steps4(n, row + 1, "")

    add = "#" if len(string) < row else " "
    steps4(n, row, string+add)
    
steps4(4)
