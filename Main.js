const etchBody = document.querySelector('#etch_Body');



function makerows (size) {
    etchBody.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    etchBody.style.gridTemplateRows=`repeat(${size}, 1fr)`;
     
        for(i=0; i < (size * size); i++){    //This part makes the sqr of the container (Legnth * Width)
            let square = document.createElement("div");
             etchBody.appendChild(square).className = "block";
            square.addEventListener("mouseover", () =>{     
                square.style.backgroundColor= 'black';
                //console.log(square);
            })
          

        }




}
makerows(32);