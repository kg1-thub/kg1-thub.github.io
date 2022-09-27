import csv

_hit, _hr, _rbi= 0, 0, 0

with open('C:/Users/ki401/Documents/git/github-io/mune/mune.csv') as f:
    reader = csv.reader(f)
    next(reader)
    for _g in reader:
        _hit += int(_g[4])
        _hr += int(_g[7])
        _rbi += int(_g[8])

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

last_score = pt
last_tooltip = '%s Hits for %s AtBats</br>%s HR, %s RBI' % (_g[4], _g[3], _g[7], _g[8])

print(_hit, _hr, _rbi)
print(last_score)
print(last_tooltip)

MUNEHEATMAP = 'C:/Users/ki401/Documents/git/github-io/mune/mune-heatmap-demo.js'
with open(MUNEHEATMAP,mode='r',encoding='utf-8') as reader:
    content = reader.read()
    content = content.replace(
                "'%s': -1," % (_g[0],), 
                "'%s': %i," % (_g[0], last_score), 
            ).replace(
                '//@@TOOLTIP@@', 
                "'%s': '%s',\n    //@@TOOLTIP@@" % (_g[0], last_tooltip)
            )
with open(MUNEHEATMAP,mode='w',encoding='utf-8') as writer:
    writer.write(content)

MUNEAREA = 'C:/Users/ki401/Documents/git/github-io/mune/mune-area-demo.js'
with open(MUNEAREA,mode='r',encoding='utf-8') as reader:
    content = reader.read()
    content = content.replace(
                '//@@HITS@@', 
                '%s, //@@HITS@@' % (_hit,)
            ).replace(
                '//@@HRS@@', 
                '%s, //@@HRS@@' % (_hr,)
            ).replace(
                '//@@RBIS@@', 
                '%s, //@@RBIS@@' % (_rbi,)
            )
with open(MUNEAREA,mode='w',encoding='utf-8') as writer:
    writer.write(content)

content = ''
MUNEINDEX = 'C:/Users/ki401/Documents/git/github-io/mune/index.html'
with open(MUNEINDEX,mode='r',encoding='utf-8') as f:
    # reader = reader(f)
    for row in f.readlines():
        if '<!-- @@SCORE@@ -->' in row:
            content += '            <div><h4>%s %s HITS, %s HR, %s RBI.</h4></div><!-- @@SCORE@@ -->\n' % (_g[1][1:], _hit, _hr, _rbi)
        else:
            content += row
with open(MUNEINDEX,mode='w',encoding='utf-8') as writer:
    writer.write(content)

print('MUNE-HEATMAP UPDATED.')
