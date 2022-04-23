'use strict';

{
    let target_hits = 4;

    const answer_key = [];
    while (answer_key.length < target_hits) {
        const j = Math.floor(Math.random()*10);
        if(!answer_key.includes(j)){
            answer_key.push(j);
        }
    }
    const h1hits = document.getElementById('h1hits'+String(target_hits));
    const up = document.getElementById('up');

    h1hits.hidden = false;
    up.textContent = `Up to ${target_hits*2-1} attempts.`

    const spin = document.getElementById('spin1');
    const hits1 = document.getElementById('hits1');
    const hits2 = document.getElementById('hits2');
    var times = 0;
    const sheets = [];
    let marks = [];

    num1.focus();

    spin.addEventListener('click', () => {
        times++;

        const answer = [];
        var hits=0;
        var fouls=0;
        let sheet = [];

        hits1.textContent = 'Go!';
        document.getElementById('time'+String(times)).hidden = false;

        for (let i=0; i<target_hits; i++) {
            let k = parseInt(document.getElementById('num'+String(i+1)).value);
            answer.push(k);
            document.getElementById('sheet'+String(times)+String(i+1)).textContent=k;
            document.getElementById('num'+String(i+1)).value="";
            sheet.push(-1);
        }

        for (let i=0; i<target_hits; i++) {
            for (let k=0; k<target_hits; k++){
                if (answer[i]==answer_key[k]){
                    if (i==k) {
                        hits++;
                        sheet[i] = 1;
                    } else {
                        fouls++;
                        sheet[i] = 0;
                    }
                }
            }
        }
        sheets.push(sheet);

        let k=0;
        let ansnum = 0;
        let answers = [];
        let playinterval1 = null;
        let playinterval2 = null;
        let texts = "http://twitter.com/share?url=https://kg1-thub.github.io/games/&text=";
        let endflg=0;

        let _hits = 0;
        let _fouls = 0;
        playinterval1 = setInterval(() => {
            if (_hits < hits) {
                document.getElementById('green'+String(times)+String(_hits+1)).hidden = false;
                _hits++;
            } else if (_fouls < fouls){
                document.getElementById('yellow'+String(times)+String(_fouls+1)).hidden = false;
                _fouls++;
            } else if(_hits==hits && _fouls==fouls){
                if (hits==target_hits) {
                    hits1.textContent = `${hits}HITS!!!  WIN!!!`;
                    texts += `${hits}HITS. WIN!!!%0D%0A`;
                    endflg = 1;
                    answers = ['resetbtn', 'sharebtn'];
                } else {
                    hits1.textContent = `${hits} HITS, ${fouls} BLOWS.`;
                    if (times==target_hits*2-1) {
                        hits2.textContent = `Done ${times} attempts. LOSE!!!`;
                        for (let i=0; i<target_hits; i++) {
                            document.getElementById('answer'+String(i+1)).textContent=answer_key[i];
                        }
                        texts += `NOT ${target_hits}HITS. LOSE!!!%0D%0A`;
                        console.log(texts);
                        endflg=1;
                        if (target_hits==3){
                            answers = ['answer', 'answer1', 'answer2', 'answer3', 'greena1', 'greena2', 'greena3', 'resetbtn', 'sharebtn'];
                        }
                        if (target_hits==4){
                            answers = ['answer', 'answer1', 'answer2', 'answer3', 'answer4','greena1', 'greena2', 'greena3', 'greena4', 'resetbtn', 'sharebtn'];
                        }
                    }
                }

                if (endflg>0){
                    for (let j=0; j<times; j++) {
                        for (let i=0; i<target_hits; i++) {
                            if (sheets[j][i]==1){
                                texts += '🟩';
                                marks.push([j, i]);
                            } else if (sheets[j][i]==0) {
                                texts += '🟨';
                                marks.push([j, i]);
                            } else {
                                texts += '⬜';
                            }
                        }
                        texts += '%0D%0A';
                    }
                    texts += `&hashtags=${target_hits}HITS`;
        
                    playinterval2 = setInterval(() => {
                        if(k==marks.length){
                            if(ansnum==answers.length-1){
                                clearInterval(playinterval2);
                            }
                            console.log(ansnum);
                            document.getElementById(answers[ansnum]).hidden = false;
                            ansnum++;
                        } else {
                            let _marks = marks[k];
                            let j = _marks[0];
                            let i = _marks[1];
                            if (sheets[j][i]==1){
                                document.getElementById('sheet'+String(j+1)+String(i+1)).style.backgroundColor = 'yellowgreen';
                                document.getElementById('sheet'+String(j+1)+String(i+1)).style.color = 'midnightblue';
                            } else if (sheets[j][i]==0) {
                                document.getElementById('sheet'+String(j+1)+String(i+1)).style.backgroundColor = 'khaki';
                                document.getElementById('sheet'+String(j+1)+String(i+1)).style.color = 'midnightblue';
                            }
                            k++;
                        }
                    }, 150);

                    let tweet = document.getElementById('tweetcontents');
                    tweet.setAttribute('href',texts);
                    resetbtn.focus();
                } else {
                    num1.focus();
                }

                clearInterval(playinterval1);
            }
        }, 500);

    });

    num1.addEventListener('input', ()=> {
        if (num1.value.length==1) {
            num2.focus();
        }
    });

    num2.addEventListener('input', ()=> {
        if (num2.value.length==1) {
            num3.focus();
        }
    });

    if (target_hits==3) {
        num3.addEventListener('input', ()=> {
            if (num3.value.length==1) {
                spin.focus();
            }
        });
    } else if (target_hits==4) {
        num3.addEventListener('input', ()=> {
            if (num3.value.length==1) {
                num4.focus();
            }
        });

        num4.addEventListener('input', ()=> {
            if (num4.value.length==1) {
                spin.focus();
            }
        });
    }
}
