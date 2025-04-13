

let score = 0; 

function Button(){
    document.getElementById("Donate").innerHTML = "Thanks For Your Donation!!";
}

function seescore(){
    document.getElementById("seescore").innerHTML = score; 
}



function question1(){
    const answer = document.getElementById("input1").value
    const result = document.getElementById("result");
    if (answer === "Iron Man"){
        result.textContent ="CORRECT!";
        score++;

    } else {
        result.textContent ="WRONG! TRY AGAIN";
    }
}

function question2(){
    const answer = document.getElementById("input2").value
    const result = document.getElementById("result2");
    if (answer === "Captain America"){
        result.textContent ="CORRECT!";
        score++;
    } else {
        result.textContent ="WRONG! TRY AGAIN";
    }
}

function question3(){
    const answer = document.getElementById("input3").value
    const result = document.getElementById("result3");
    if (answer === "Wanda Maximoff"){
        result.textContent ="CORRECT!";
        score++;
    } else {
        result.textContent ="WRONG! TRY AGAIN";
    }
}

function question4(){
    const answer = document.getElementById("input4").value
    const result = document.getElementById("result4");
    if (answer === "Hawkeye"){
        result.textContent ="CORRECT!";
        score++;
    } else {
        result.textContent ="WRONG! TRY AGAIN";
    }
}

function question5(){
    const answer = document.getElementById("input5").value
    const result = document.getElementById("result5");
    if (answer === "Gamora"){
        result.textContent ="CORRECT!";
        score++;
    } else {
        result.textContent ="WRONG! TRY AGAIN";
    }
}

