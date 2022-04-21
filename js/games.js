'use strict';

{
    const answer_key = [];
    while (answer_key.length < 3) {
        const j = Math.floor(Math.random()*10);
        if(!answer_key.includes(j)){
            answer_key.push(j);
        }
    }
    
    const spin = document.getElementById('spin1');
    const hits1 = document.getElementById('hits1');
    const hits2 = document.getElementById('hits2');
    var times = 0;
    const sheets = [];

    num1.focus();

    spin.addEventListener('click', () => {
        times++;

        const answer = [];
        var hits=0;
        var fouls=0;

        for (let i=0; i<3; i++) {
            let k = parseInt(document.getElementById('num'+String(i+1)).value);
            answer.push(k);
            document.getElementById('sheet'+String(times)+String(i+1)).textContent=k;
            document.getElementById('num'+String(i+1)).value="";
        }
        
        let sheet = [-1, -1, -1];

        for (let i=0; i<3; i++) {
            for (let k=0; k<3; k++){
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
        console.log(sheets);

        if (hits==3) {
            hits1.textContent = `${hits} HITS!!!  WIN!!!`;
            document.getElementById('resetbtn').hidden = false;
            document.getElementById('sharebtn').hidden = false;
            let texts = "http://twitter.com/share?url=kg1-thub.github.io/games/&text=3HITS. WIN!!!%0D%0A";
            for (let j=0; j<times; j++) {
                for (let i=0; i<3; i++) {
                    if (sheets[j][i]==1){
                        document.getElementById('sheet'+String(j+1)+String(i+1)).style.backgroundColor = 'yellowgreen';
                        document.getElementById('sheet'+String(j+1)+String(i+1)).style.color = 'midnightblue';
                        texts += '🟩';
                    } else if (sheets[j][i]==0) {
                        document.getElementById('sheet'+String(j+1)+String(i+1)).style.backgroundColor = 'khaki';
                        document.getElementById('sheet'+String(j+1)+String(i+1)).style.color = 'midnightblue';
                        texts += '🟨';
                    } else {
                        texts += '⬜';
                    }
                 }
                 texts += '%0D%0A';
            }
            texts += '&hashtags=3HITS';

            let tweet = document.getElementById('tweetcontents');
            tweet.setAttribute('href',texts);
        } else {
            hits1.textContent = `${hits} HITS, ${fouls} FOULS.`;
            if (times==5) {
                hits2.textContent = `5 attempts. LOSE!!!`;
                for (let i=0; i<3; i++) {
                    document.getElementById('answer'+String(i+1)).textContent=answer_key[i];
                    document.getElementById('answer'+String(i+1)).hidden=false;
                }
                let texts = "http://twitter.com/share?url=kg1-thub.github.io/games/&text=NOT 3HITS. LOSE!%0D%0A";
                for (let j=0; j<5; j++) {
                    for (let i=0; i<3; i++) {
                        if (sheets[j][i]==1){
                            document.getElementById('sheet'+String(j+1)+String(i+1)).style.backgroundColor = 'yellowgreen';
                            document.getElementById('sheet'+String(j+1)+String(i+1)).style.color = 'midnightblue';
                            texts += '🟩';
                        } else if (sheets[j][i]==0) {
                            document.getElementById('sheet'+String(j+1)+String(i+1)).style.backgroundColor = 'khaki';
                            document.getElementById('sheet'+String(j+1)+String(i+1)).style.color = 'midnightblue';
                            texts += '🟨';
                        } else {
                            texts += '⬜';
                        }
                    }
                    texts += '%0D%0A';
                }
                texts += '&hashtags=3HITS';

                console.log(texts);
                let tweet = document.getElementById('tweetcontents');
                tweet.setAttribute('href',texts);

                document.getElementById('answer').hidden = false;
                document.getElementById('greena1').hidden = false;
                document.getElementById('greena2').hidden = false;
                document.getElementById('greena3').hidden = false;
                document.getElementById('resetbtn').hidden = false;
                document.getElementById('sharebtn').hidden = false;
                // resetbtn.hidden = false;
                // sharebtn.hidden = false;
            }
        }

        for (let j=1; j<hits+1; j++){
            document.getElementById('green'+String(times)+String(j)).hidden = false;
        }

        for (let j=1; j<fouls+1; j++){
            document.getElementById('yellow'+String(times)+String(j)).hidden = false;
        }

        document.getElementById('time'+String(times)).hidden = false;
        num1.focus();
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
    
    num3.addEventListener('input', ()=> {
        console.log('num3')
        if (num3.value.length==1) {
            spin.focus();
        }
    });

}
