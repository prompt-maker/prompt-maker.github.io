
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.toast');
    bootstrap.Toast.Default.delay = 1500;
    elems.forEach((item)=>{
        new bootstrap.Toast(item);
    });



    
    
    let imageDiv = document.getElementById("picture");
    let textInput = document.getElementById("prompt-text");
    let textOutput = document.getElementById("prompt-output");
    let submitBtn = document.getElementById("submit-btn");
    let widthInput = document.getElementById("width-input");
    let widthSlider = document.getElementById("width-slider");
    let heightInput = document.getElementById("height-input");
    let heightSlider = document.getElementById("height-slider");
    let cfgInput = document.getElementById("cfg-input");
    let cfgSlider = document.getElementById("cfg-slider");
    let stepsInput = document.getElementById("steps-input");
    let stepsSlider = document.getElementById("steps-slider");
    let imagesInput = document.getElementById("images-input");
    let imagesSlider = document.getElementById("images-slider");
    let seedInput = document.getElementById("seed-input");
    let toastMessage = document.getElementById("toast-body");
    let randomBtn = document.getElementById("randomize-btn");

    widthSlider.oninput = function(e) {
        widthInput.value = e.target.value;
        imageDiv.style.width = e.target.value/2 +"px";
    }

    widthInput.onchange = function(e) {
        widthSlider.value = e.target.value;
        if ((e.target.value < 256 || e.target.value > 1024) && e.target.value > 0){
            e.target.value = Math.round(e.target.value/64)*64;
            if (e.target.value <= 0){
                e.target.value = 64;
            }
            imageDiv.style.width = e.target.value/2 +"px";
        }
        else{
            e.target.value = widthSlider.value;
            imageDiv.style.width = e.target.value/2 +"px";
        }
    }

    heightSlider.oninput = function(e) {
        heightInput.value = e.target.value;
        imageDiv.style.height = e.target.value/2 +"px";
    }

    heightInput.onchange = function(e) {
        heightSlider.value = e.target.value;
        if ((e.target.value < 256 || e.target.value > 1024) && e.target.value > 0){
            e.target.value = Math.round(e.target.value/64)*64;
            if (e.target.value <= 0){
                e.target.value = 64;
            }
            imageDiv.style.height = e.target.value/2 +"px";
        }
        else{
            e.target.value = heightSlider.value;
            imageDiv.style.height = e.target.value/2 +"px";
        }
    }


    cfgSlider.oninput = function(e) {
        cfgInput.value = e.target.value;
    }

    cfgInput.onchange = function(e) {
        cfgSlider.value = e.target.value;
        if (e.target.value > 0 && e.target.value <= 20){
            e.target.value = parseFloat(e.target.value);
        }
        else{
            e.target.value = cfgSlider.value;
        }
    }

    stepsSlider.oninput = function(e) {
        stepsInput.value = e.target.value;
    }

    stepsInput.onchange = function(e) {
        stepsSlider.value = e.target.value;
        e.target.value = stepsSlider.value;
    }

    imagesSlider.oninput = function(e) {
        imagesInput.value = e.target.value;
    }

    imagesInput.onchange = function(e) {
        imagesSlider.value = e.target.value;
        e.target.value = parseInt(e.target.value);
        if (e.target.value <= 0){
            e.target.value = 1;
        }
    }

    seedInput.onchange = function(e) {
        e.target.value = parseInt(e.target.value);
        if (e.target.value == "NaN"){
            e.target.value = "";
        }
    }

    submitBtn.onclick = function(){
        let myToastEl = document.getElementById('liveToast');
        let myToast = bootstrap.Toast.getInstance(myToastEl);
        toastMessage.innerHTML = "Copied Text Prompt";
        myToast.show();
        let textOutputData = `\"${textInput.value}\" -s${stepsInput.value} -W${widthInput.value} -H${heightInput.value} -C${cfgInput.value} -n${imagesInput.value}`;
        if (seedInput.value){
            textOutputData+= ` -S${seedInput.value}`;
        }
        textOutput.value = textOutputData;
        textOutput.select();
        textOutput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(textOutput.value);
    }

    randomBtn.onclick = function(){
        alert("test")
        seedInput.value = getRndInteger(1,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString() + getRndInteger(0,9).toString();
        alert("ff")
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }


});





