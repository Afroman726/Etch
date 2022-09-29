const etchBody = document.querySelector('#etch_Body');



function makerows (rows, columns) {
    
        for(i=0; i < (rows * columns); i++){
            let square = document.createElement("div");
             etchBody.appendChild(square).className = "block";
            square.addEventListener("mouseover", () =>{
                square.style.backgroundColor= 'black';
                console.log(square);
            })
        }




}
makerows(16,16);