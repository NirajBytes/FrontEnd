let arr = [];
function addFeedback() {
    const feedback = document.getElementById("text-input").value;
    
    feedback === "" ? document.getElementById("result").innerHTML = "<h2>" + "Feedback Details Error " + "</h2>" + "Please Enter Feedback Details!" :
    document.getElementById("result").innerHTML = "<h2>" + "Feedback Details " + "</h2>" + "Successfully Added Feedback Details!" +arr.push(feedback);
    document.getElementById("text-input").value = "";
}

let displayFeedback = () => {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = "<h2>" + "Feedback Details " + "</h2>";
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("result").innerHTML += "Feedback " + (i + 1) + "<br>"
            + arr[i] + "<br>";
    }
    arr = [];
}