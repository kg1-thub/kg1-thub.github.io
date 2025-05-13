import csv

_hit, _hr, _rbi, _sb, _avg= 0, 0, 0, 0, 0

with open('C:/Users/ki401/Documents/git/github-io/sho/sho25.csv') as f:
    reader = csv.reader(f)
    next(reader)
    for _g in reader:
        _hit += int(_g[5])
        _hr += int(_g[9])
        _rbi += int(_g[10])
        _sb += int(_g[14])
        _avg = str(_g[16])

        pt = 0
        if int(_g[5])>0:
            pt+=1
        if int(_g[9])>0:
            pt+=2
        elif int(_g[10])>0:
            pt+=1
        if int(_g[14])>0:
            pt+=2
        # if pt==3:
        #     if int(_g[9])>1:
        #         pt +=2
        #     elif int(_g[9])>0:
        #         pt +=1

        last_score = pt
        last_tooltip = '(Regular Season)</br><span><strong>%s HR / %s SB</strong></span></br>%s Hits / %s RBI / AVG %s' % (_g[9], _g[14], _g[5], _g[10], _avg)
        # print(f"'{_g[0]}': '{last_tooltip}',")
        print(f"'{_g[0]}':{last_score},")


    # print(f'{_sb},')
    # print(_hit, _hr, _sb, _rbi)
    # print(f"'{_g[0]}':{last_score},")
    # print(f"'{_g[0]}': '{last_tooltip}',")
    # print(f'{_hr} HR / {_sb} SB')
    # print(f'AVG {_avg} / {_hit} HITS / {_rbi} RBI')

shoHEATMAP = 'C:/Users/ki401/Documents/git/github-io/sho/sho-heatmap-demo.js'
with open(shoHEATMAP,mode='r',encoding='utf-8') as reader:
    content = reader.read()
    content = content.replace(
                # "'%s': -1," % (_g[0],), 
                '//@@TOOLTIP_DATE@@',
                "'%s': %i,\n//@@TOOLTIP_DATE@@" % (_g[0], last_score), 
            ).replace(
                '//@@TOOLTIP@@', 
                "'%s': '%s',\n    //@@TOOLTIP@@" % (_g[0], last_tooltip)
            )
with open(shoHEATMAP,mode='w',encoding='utf-8') as writer:
    writer.write(content)

shoAREA = 'C:/Users/ki401/Documents/git/github-io/sho/sho-area-demo.js'
with open(shoAREA,mode='r',encoding='utf-8') as reader:
    content = reader.read()
    content = content.replace(
                '//@@HITS@@', 
                '%s,\n//@@HITS@@' % (_hit,)
            ).replace(
                '//@@SBS@@', 
                '%s,\n//@@SBS@@' % (_sb,)
            ).replace(
                '//@@HRS@@', 
                '%s,\n//@@HRS@@' % (_hr,)
            ).replace(
                '//@@RBIS@@', 
                '%s,\n//@@RBIS@@' % (_rbi,)
            ).replace(
                '//@@TODAY@@', 
                "'%s',\n//@@TODAY@@" % (_g[0])
            )
with open(shoAREA,mode='w',encoding='utf-8') as writer:
    writer.write(content)

content = ''
shoINDEX = 'C:/Users/ki401/Documents/git/github-io/sho/index.html'
with open(shoINDEX,mode='r',encoding='utf-8') as f:
    # reader = reader(f)
    for row in f.readlines():
        if '<!-- @@SCORE1@@ -->' in row:
            content += '            <div class="display-4"> %s HR / %s SB / AVG %s / %s HITS / %s RBI</div><!-- @@SCORE1@@ -->\n' % (_hr, _sb, _avg, _hit, _rbi)
        elif '<!-- @@SCORE2@@ -->' in row:
            content += '\t'*9 + '<caption id="dt25gamescaption">%s HR / %s SB / %s HITS / %s RBI </caption><!-- @@SCORE2@@ -->\n' % (_g[9], _g[14], _g[5], _g[10])
        elif '<!-- @@HR10@@ -->' in row:
            content += '                        %s<!-- @@HR10@@ -->\n' % (_hr // 10)
        elif '<!-- @@HR01@@ -->' in row:
            content += '                        %s<!-- @@HR10@@ -->\n' % (_hr % 10)
        elif '<!-- @@SB10@@ -->' in row:
            content += '                        %s<!-- @@SB10@@ -->\n' % (_sb // 10)
        elif '<!-- @@SB01@@ -->' in row:
            content += '                        %s<!-- @@SB01@@ -->\n' % (_sb % 10)
        else:
            content += row
with open(shoINDEX,mode='w',encoding='utf-8') as writer:
    writer.write(content)
print('sho-HEATMAP UPDATED.')

# DATATABLESDEMO SEARCH KEYWORD UPDATE
DATATABLESDEMO = f'./sho/sho-datatables.js'
print(DATATABLESDEMO)
with open(DATATABLESDEMO,mode='r',encoding='utf-8') as reader:
    lines = reader.readlines()
    content = ''
    for line in lines:
        if '@@KEYWORD@@' in line:
            content += f"        '{_g[0]}' // @@KEYWORD@@\n"
        else:
            content += line
with open(DATATABLESDEMO,mode='w',encoding='utf-8') as writer:
    writer.write(content)
print('DATATABLES-DEMO SEARCH KEYWORD UPDATED.')
