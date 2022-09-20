import csv

with open('C:/Users/ki401/Documents/git/github-io/mune/mune.csv') as f:
    reader = csv.reader(f)
    gs = [row for row in reader]
    print()

_hit, _hr, _rbi = 0, 0, 0
data = {'hits':[0], 'hrs':[0], 'rbis':[0], 'labels':['Start']}
for _g in gs[1:]:
    _hit += int(_g[4])
    _hr += int(_g[7])
    _rbi += int(_g[8])
    data['hits'].append(_hit)
    data['hrs'].append(_hr)
    data['rbis'].append(_rbi)
    data['labels'].append(_g[0])

print(data)
