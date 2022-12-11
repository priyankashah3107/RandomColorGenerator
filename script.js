const getColor = () => {
    // Hex code
    const randomNumber = Math.floor( Math.random() * 16777215); // we multiply exact this number bcz we want hexa decimal number.
    // floor gives Interger not float number. 

    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16); // # is use for givin randome hexa color code. /* to passing 16 in toString we
     // use 16 bcz its  hexcode.
    //  console.log(randomNumber,randomCode); // This is get randomNumber and randomCode.
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);

}

// Event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// Initial call 
getColor();
