'use strict';

function clickSpin(times, target_hits, answer_key){
    console.log('clickspin!');
    console.log(times, target_hits, answer_key);
    const hits1 = document.getElementById('hits1');
    const hits2 = document.getElementById('hits2');

    const answer = [];
    var hits=0;
    var fouls=0;
    let sheet = [];

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

    let answers = [];
    let texts = "http://twitter.com/share?text=";
    let endflg=0;

    for (let j=1; j<hits+1; j++){
        document.getElementById('green'+String(times)+String(j)).hidden = false;
    }

    for (let j=1; j<fouls+1; j++){
        document.getElementById('yellow'+String(times)+String(j)).hidden = false;
    }

    document.getElementById('time'+String(times)).hidden = false;

    if (hits==target_hits) {
        hits1.textContent = `${hits}HITS!!!  WIN!!!`;
        texts += `${hits}HITS. WIN!!!%0D%0A`;
        endflg = 1;
        answers = ['hits3btn', 'hits4btn', 'sharebtn'];
    } else {
        hits1.textContent = `${hits} HITS, ${fouls} BLOWS.`;
        if (times==target_hits*2-1) {
            hits2.textContent = `Done ${times} attempts. LOSE!!!`;
            for (let i=0; i<target_hits; i++) {
                document.getElementById('answer'+String(i+1)).textContent=answer_key[i];
            }
            texts += `NOT ${target_hits}HITS. LOSE!!!%0D%0A`;
            endflg=1;
            if (target_hits==3){
                answers = ['answer', 'answer1', 'answer2', 'answer3', 'hits3btn', 'hits4btn', 'sharebtn'];
            }
            if (target_hits==4){
                answers = ['answer', 'answer1', 'answer2', 'answer3', 'answer4', 'hits3btn', 'hits4btn', 'sharebtn'];
            }
        }
    }
    return [endflg, sheet, texts, answers];
}

function reloadHits(target_hits){
    const answer_key = [];
    while (answer_key.length < target_hits) {
        const j = Math.floor(Math.random()*10);
        if(!answer_key.includes(j)){
            answer_key.push(j);
        }
    }

    document.getElementById('hits4btn').hidden = true;
    document.getElementById('hits3btn').hidden = true;
    document.getElementById('sharebtn').hidden = true;

    document.getElementById('hits1').textContent = 'HIT AND BLOW.';
    document.getElementById('hits2').textContent = '';

    const divtimes = document.getElementById('divtimes');
    document.getElementById('divrows').remove();
    const divrows = document.createElement("div");
    divrows.setAttribute('id', 'divrows');
    divtimes.appendChild(divrows);
    let _times = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];

    for (let i=0; i<target_hits*2-1; i++){
        let divrow = document.createElement('div');
        divrow.setAttribute('id', 'divrow'+String(i+1));
        divrow.classList.add('row');
        divrow.classList.add('mx-auto');
        divrow.classList.add('my-auto');
        divrows.appendChild(divrow);

        let time = document.createElement('div');
        time.setAttribute('id', 'time'+String(i+1));
        time.classList.add('btn-sm');
        time.style.color = 'aliceblue';
        time.style.width = '50px';
        time.textContent = _times[i];
        time.hidden = true;
        divrow.appendChild(time);

        for (let j=0; j<target_hits; j++){
            const sheet = document.createElement('div');
            sheet.setAttribute('id', 'sheet'+String(i+1)+String(j+1));
            sheet.classList.add('btn-sm');
            sheet.classList.add('mb-1');
            if (j<target_hits-1){
                sheet.classList.add('mr-1');
            }else{
                sheet.classList.add('mr-3');
            }
            sheet.style.color = 'aliceblue';
            divrow.appendChild(sheet);
        }

        for (let j=0; j<target_hits; j++){
            const green = document.createElement('div');
            green.setAttribute('id', 'green'+String(i+1)+String(j+1));
            green.classList.add('btn-sm');
            green.classList.add('rounded-circle');
            green.classList.add('my-auto');
            green.classList.add('mr-1');
            green.style.height = '15px';
            green.style.background = 'yellowgreen';
            green.hidden = true;
            divrow.appendChild(green);
        }

        for (let j=0; j<target_hits; j++){
            const yellow = document.createElement('div');
            yellow.setAttribute('id', 'yellow'+String(i+1)+String(j+1));
            yellow.classList.add('btn-sm');
            yellow.classList.add('rounded-circle');
            yellow.classList.add('my-auto');
            yellow.classList.add('mr-1');
            yellow.style.height = '15px';
            yellow.style.background = 'khaki';
            yellow.hidden = true;
            divrow.appendChild(yellow);
        }
    }

    let divrow = document.createElement('div');
    divrow.setAttribute('id', 'divrowa');
    divrow.classList.add('row');
    divrow.classList.add('mx-auto');
    divrow.classList.add('my-auto');
    divrows.appendChild(divrow);

    let time = document.createElement('div');
    time.setAttribute('id', 'answer');
    time.classList.add('btn-sm');
    time.style.color = 'aliceblue';
    time.style.width = '50px';
    time.textContent = 'ans.';
    time.hidden = true;
    divrow.appendChild(time);

    for (let j=0; j<target_hits; j++){
        const green = document.createElement('div');
        green.setAttribute('id', 'answer'+String(j+1));
        green.classList.add('btn-sm');
        green.classList.add('mb-1');
        green.classList.add('mr-1');
        green.style.background = 'yellowgreen';
        green.style.color = 'midnightblue';
        green.hidden = true;
        divrow.appendChild(green);
    }

    document.getElementById('h1hits3').hidden = true;
    document.getElementById('h1hits4').hidden = true;

    const h1hits = document.getElementById('h1hits'+String(target_hits));
    h1hits.hidden = false;

    const up = document.getElementById('up');
    up.textContent = `Up to ${target_hits*2-1} attempts.`

    document.getElementById('spin3').hidden = true;
    document.getElementById('spin4').hidden = true;
    const spin = document.getElementById('spin'+String(target_hits));
    spin.hidden = false;

    num1.focus();

    num1.addEventListener('input', ()=> {
        if (num1.value.length==1) {
            num2.focus();
        }
    });

    if (num2.value.length==0) {
        num2.addEventListener('keydown', event=>{
            if (event.keyCode==8){
                num1.focus();
            }
        })
    }

    num2.addEventListener('input', ()=> {
        if (num2.value.length==1) {
            num3.focus();
        }
    });

    if (num3.value.length==0) {
        num3.addEventListener('keydown', event=>{
            if (event.keyCode==8){
                num2.focus();
            }
        })
    }

    if (target_hits==3) {
        document.getElementById('num4').hidden=true;

        num3.addEventListener('input', ()=> {
            if (num3.value.length==1) {
                spin.focus();
            }
        });
    } else if (target_hits==4) {
        document.getElementById('num4').hidden=false;

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

        if (num4.value.length==0) {
            num4.addEventListener('keydown', event=>{
                if (event.keyCode==8){
                    num3.focus();
                }
            })
        }
    }
    return answer_key;
}

{
    let target_hits = 4;
    let answer_key = reloadHits(target_hits);

    var times = 0;
    let sheets = [];
    let marks = [];

    hits3btn.addEventListener('click', () => {
        times = 0;
        sheets = [];
        marks = [];
        answer_key = reloadHits(3);
    });

    spin4.addEventListener('click', () => {
        let k=0;
        let ansnum = 0;
        let playinterval = null;

        times++;
        let result = clickSpin(times, 4, answer_key);
        let endflg = result[0];
        let sheet = result[1];
        let texts = result[2];
        let answers = result[3];
        sheets.push(sheet);

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
            texts += `%23${target_hits}HITS%0D%0Akg1-thub.github.io/games/`;

            playinterval = setInterval(() => {
                if(k==marks.length){
                    if(ansnum==answers.length-1){
                        clearInterval(playinterval);
                    }
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
            hits4btn.blur();
        } else {
            num1.focus();
        }
    });

    spin3.addEventListener('click', () => {
        let k=0;
        let ansnum = 0;
        let playinterval = null;

        times++;
        let result = clickSpin(times, 3, answer_key);
        let endflg = result[0];
        let sheet = result[1];
        let texts = result[2];
        let answers = result[3];
        sheets.push(sheet);

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

            playinterval = setInterval(() => {
                if(k==marks.length){
                    if(ansnum==answers.length-1){
                        clearInterval(playinterval);
                    }
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
            hits4btn.blur();
        } else {
            num1.focus();
        }
    });
}
