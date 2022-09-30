const etchBody = document.querySelector('#etch_Body');  //Container for the Grid
const sizeValue = document.querySelector('#size_Value');


function makerows (size) {
    etchBody.style.gridTemplateColumns = `repeat(${size}, 1fr)`;  //These two set the css styles to fit block inside grid
    etchBody.style.gridTemplateRows=`repeat(${size}, 1fr)`;
     
        for(i=0; i < (size * size); i++){    //This part makes the sqr of the container (Legnth * Width (duh))
            let square = document.createElement("div");
             etchBody.appendChild(square).className = "block";
            square.addEventListener("mouseover", () =>{     
                square.style.backgroundColor= 'black';
               })
          console.log('test');

        }




}

//BELOW IS THE CODE FOR THE BUTTONS IN THE SETTINGS

const smallButton = document.querySelector('#small');
smallButton.addEventListener('click', () => {
    makerows(16);
});

const medButton = document.querySelector('#med');
medButton.addEventListener('click', () => {
    makerows(32);
});

const largeButton = document.querySelector('#large');
largeButton.addEventListener('click', () =>{
    makerows(64);
})

const stupidButton = document.querySelector('#stupid');     //This is the don't click me button lol
stupidButton.addEventListener('click', () =>{
    makerows(128);
})