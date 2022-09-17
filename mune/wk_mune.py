import csv

with open('C:/Users/ki401/Documents/git/github-io/mune/mune.csv') as f:
    reader = csv.reader(f)
    gs = [row for row in reader]
    print()

games = {}
score = {}
for _g in gs[-1:]:
    # print(_g)
    pt = 0
    if int(_g[4])>0:
        pt+=1
    if int(_g[7])>0:
        pt+=1
    if int(_g[8])>0:
        pt+=1
    if pt==3:
        if int(_g[7])>1:
            pt +=2
        else:
            if int(_g[4])>1:
                pt +=1
            if int(_g[8])>1:
                pt +=1
    games[_g[0]] = pt
    score[_g[0]] = ''+str(_g[4])+' Hits for '+str(_g[3])+' AtBats'+'</br>'+str(_g[7])+' HR, '+str(_g[8])+' RBI'

print(games)
print(score)
