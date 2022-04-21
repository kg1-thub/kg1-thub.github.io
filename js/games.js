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
        
        for (let i=0; i<3; i++) {
            for (let k=0; k<3; k++){
                if (answer[i]==answer_key[k]){
                    if (i==k) {
                        hits++;
                    } else {
                        fouls++;
                    }
                }
            }
        }

        if (hits==3) {
            hits1.textContent = `${hits} HITS!!!  WIN!!!`;
        } else {
            hits1.textContent = `${hits} HITS, ${fouls} FOULS.`;
            if (times==5) {
                hits2.textContent = `5 attempts. LOSE!!!`;
                for (let i=0; i<3; i++) {
                   document.getElementById('answer'+String(i+1)).textContent=answer_key[i];
                }
                document.getElementById('answer').hidden = false;
                document.getElementById('greena1').hidden = false;
                document.getElementById('greena2').hidden = false;
                document.getElementById('greena3').hidden = false;
            }
        }

        for (let j=1; j<hits+1; j++){
            document.getElementById('green'+String(times)+String(j)).hidden = false;
        }

        for (let j=1; j<fouls+1; j++){
            document.getElementById('yellow'+String(times)+String(j)).hidden = false;
        }

        document.getElementById('time'+String(times)).hidden = false;

    });
}
