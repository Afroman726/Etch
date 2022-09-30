const etchBody = document.querySelector('#etch_Body');



function makerows (size) {
    
        for(i=0; i < (size * size); i++){    //This part makes the sqr of the container (Legnth * Width)
            let square = document.createElement("div");
             etchBody.appendChild(square).className = "block";
            square.addEventListener("mouseover", () =>{     
                square.style.backgroundColor= 'black';
                //console.log(square);
            })
          // etchBody.style.gridTemplateColumns='1fr';
           //etchBody.style.gridTemplateRows='1fr';
           console.log('test');

        }




}
makerows(16);