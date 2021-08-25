const start = () => {

    const shakeball = () => {
        const button = document.querySelector('section button');
        const snowball = document.querySelector('.snowball');
        const snowman = document.querySelector('.snowman');
        const text = document.querySelector('.text');
        const set1 = document.querySelector('.set1');
        const set2 = document.querySelector('.set2');
        const set3 = document.querySelector('.set3');
        const set4 = document.querySelector('.set4');
        const set5 = document.querySelector('.set5');
        const set6 = document.querySelector('.set6');
        const set7 = document.querySelector('.set7');
        const set8 = document.querySelector('.set8');
        const set9 = document.querySelector('.set9');
        const set10 = document.querySelector('.set10');
        const set11 = document.querySelector('.set11');
        const set12 = document.querySelector('.set12');
        const set13 = document.querySelector('.set13');
        const set14 = document.querySelector('.set14');
        const set15 = document.querySelector('.set15');
        const set16 = document.querySelector('.set16');

        const setAll = document.querySelectorAll('.set div');


        const spot1 = document.querySelector('.s1');
        const spot2 = document.querySelector('.s2');
        const spot3 = document.querySelector('.s3');
        const spot4 = document.querySelector('.s4');
        const spot5 = document.querySelector('.s5');
        const spot6 = document.querySelector('.s6');
        const spot7 = document.querySelector('.s7');
        const spot8 = document.querySelector('.s8');
        const spot9 = document.querySelector('.s9');
        const spot10 = document.querySelector('.s10');
        const spot11 = document.querySelector('.s11');
        const spot12= document.querySelector('.s12');
        const spot13= document.querySelector('.s13');
        const spot14= document.querySelector('.s14');
        const spot15= document.querySelector('.s15');
        const spot16= document.querySelector('.s16');

        const setB =document.querySelector('.setB');
        const setBAll =document.querySelectorAll('.setB div');

        const setC = document.querySelector('.setC');

        const setCAll = document.querySelectorAll('.setC div');

        const t1 = document.querySelector('.t1');
        const t2 = document.querySelector('.t2');
        const t3 = document.querySelector('.t3');
        const t4 = document.querySelector('.t4');
        const t5 = document.querySelector('.t5');
        const t6 = document.querySelector('.t6');
        const t7 = document.querySelector('.t7');
        const t8 = document.querySelector('.t8');

        snowball.addEventListener("animationend", function(){
            this.style.animation = "";
            snowman.style.animation = "";
        });
        set15.addEventListener("animationend", function(){
            setAll.forEach(set => {
                set.style.animation = "";
            });
            setBAll.forEach(setb => {
                setb.style.animation = "";
            });
            setCAll.forEach(setc => {
                setc.style.animation = "";
            });
        });

        button.addEventListener('click',function(){
            snowball.style.animation = "shake 2s ease";
            snowman.style.animation = "shake 2s ease";
            snowman.classList.add('fadein');
            text.classList.add('fadein');

            setTimeout(() => {

                set1.style.left = '10%';
                set1.style.animation ='animate 3s linear -7s 5';
                set2.style.left = '15%';
                set2.style.animation ='animate 4s linear -10s 5';
                set3.style.left = '20%';
                set3.style.animation ='animate 2s linear -5s 5';
                set4.style.left = '25%';
                set4.style.animation ='animate 4s linear -7s 5';
                set5.style.left = '30%';
                set5.style.animation ='animate 6s linear -9s 5';
                set6.style.left = '35%';
                set6.style.animation ='animate 8s linear -12s 5';
                set7.style.left = '40%';
                set7.style.animation ='animate 9s linear -14s 5';
                set8.style.left = '55%';
                set8.style.animation ='animate 3s linear -7s 5';
                set9.style.left = '50%';
                set9.style.animation ='animate 2s linear -6s 5';
                set10.style.left = '55%';
                set10.style.animation ='animate 7s linear -9s 5';
                set11.style.left = '60%';
                set11.style.animation ='animate 4s linear -8s 5';
                set12.style.left = '65%';
                set12.style.animation ='animate 7s linear -13s 5';
                set13.style.left = '70%';
                set13.style.animation ='animate 6s linear -9s 5';
                set14.style.left = '75%';
                set14.style.animation ='animate 2s linear -7s 5';
                set15.style.left = '80%';
                set15.style.animation ='animate 5s linear  5';
                set16.style.left = '85%';
                set16.style.animation ='animate 9s linear -10s 5';


                setB.style.transform = 'scale(0.8) rotateX(180deg)';
                setB.style.filter ='blur(4px)';

                spot1.style.left = '10%';
                spot1.style.animation ='animate 3s linear -7s 5';
                spot2.style.left = '15%';
                spot2.style.animation ='animate 4s linear -10s 5';
                spot3.style.left = '20%';
                spot3.style.animation ='animate 2s linear -5s 5';
                spot4.style.left = '25%';
                spot4.style.animation ='animate 4s linear -7s 5';
                spot5.style.left = '30%';
                spot5.style.animation ='animate 6s linear -9s 5';
                spot6.style.left = '35%';
                spot6.style.animation ='animate 8s linear -12s 5';
                spot7.style.left = '40%';
                spot7.style.animation ='animate 9s linear -14s 5';
                spot8.style.left = '55%';
                spot8.style.animation ='animate 3s linear -7s 5';
                spot9.style.left = '50%';
                spot9.style.animation ='animate 2s linear -6s 5';
                spot10.style.left = '55%';
                spot10.style.animation ='animate 7s linear -9s 5';
                spot11.style.left = '60%';
                spot11.style.animation ='animate 4s linear -8s 5';
                spot12.style.left = '65%';
                spot12.style.animation ='animate 7s linear -13s 5';
                spot13.style.left = '70%';
                spot13.style.animation ='animate 6s linear -9s 5';
                spot14.style.left = '75%';
                spot14.style.animation ='animate 2s linear -7s 5';
                spot15.style.left = '80%';
                spot15.style.animation ='animate 5s linear -8s 5';
                spot16.style.left = '85%';
                spot16.style.animation ='animate 9s linear -10s 5';

                setC.style.transform = 'scale(4)';
                setC.style.filter ='blur(2px)';

                t1.style.left = '65%';
                t1.style.animation ='animate 4s linear -7s 5';
                t2.style.left = '30%';
                t2.style.animation ='animate 6s linear -9s 5';
                t3.style.left = '35%';
                t3.style.animation ='animate 8s linear -12s 5';
                t4.style.left = '40%';
                t4.style.animation ='animate 9s linear -14s 5';
                t5.style.left = '55%';
                t5.style.animation ='animate 3s linear -7s 5';
                t6.style.left = '50%';
                t6.style.animation ='animate 2s linear -6s 5';
                t7.style.left = '55%';
                t7.style.animation ='animate 7s linear -9s 5';
                t8.style.left = '60%';
                t8.style.animation ='animate 4s linear -8s 5';
            }, 2000);
        })
    }

    shakeball();

}

start();