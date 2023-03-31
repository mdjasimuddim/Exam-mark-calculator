var bangla = document.getElementById('bangla');
var english = document.getElementById('english');
var math = document.getElementById('math');
var physics = document.getElementById('physics');
var btn = document.getElementById('btn');
var input = document.querySelectorAll('input');

for(var i = 0; i< input.length; i++){
    input[i].addEventListener('input',function(){
        for(var k = 0; k < input.length; k++){
            if(input[k].value > 100){
                input[k].style.background='red';
            }else{
                input[k].style.background='white';
            }
        }
    })
}

btn.addEventListener('click',function(pera){
    pera.preventDefault();
    var newBangla = bangla.value;
    var newEnglish = english.value;
    var newMath = math.value;
    var newPhysics = physics.value;
    if(newBangla == '' || newEnglish == ''|| newMath == ''|| newPhysics == '')
    {
        alert('please fill up the input field');
    } else{
        var total_mark = document.getElementById('total_mark');
        var total_result = parseInt(newBangla) + parseInt(newEnglish) + parseInt(newMath) + parseInt(newPhysics);
        total_mark.innerHTML = total_result;

        var avg = Math.round(total_result / 4);
        var average_mark = document.getElementById('average_mark');
        average_mark.innerHTML = avg;

        var grade = document.getElementById('grade');
        if(avg >= 80 && avg <=100){
            grade.innerHTML = 'A+';
        }
        else if(avg >= 70 && avg <80){
            grade.innerHTML = 'A';
        }
        else if(avg >= 60 && avg < 70){
            grade.innerHTML = 'A-';
        }
        else if(avg >= 50 && average_avgmark < 60){
            grade.innerHTML = 'B';
        }
        else if(avg >= 40 && avg < 50){
            grade.innerHTML = 'C';
        }
        else{
            grade.innerHTML = 'F';
        }

        var pass_fail = document.getElementById('pass_fail');
        if(avg >= 40){
            pass_fail.innerHTML = 'You have passed';
            pass_fail.style.background="blueviolet";
            pass_fail.style.padding="5px 20px";
            pass_fail.style.margin="10px 0";
            pass_fail.style.display="inline-block";
        }else{
            pass_fail.innerHTML = 'You have failed';
            pass_fail.style.background="red";
            pass_fail.style.padding="5px 20px";
            pass_fail.style.margin="10px 0";
            pass_fail.style.display="inline-block";
        }
    }
})