const etchBody = document.querySelector('#etch_Body');



function makerows (rows, columns) {
    etchBody.style.setProperty("--grid-rows", rows);
    etchBody.style.setProperty("--grid-columnns", columns);
        for(i=0; i < (rows * columns); i++){
            let square = document.createElement("div");
           // square.innerText = (i+1); //Labels squares?  Remove at somepoint
            etchBody.appendChild(square).className = "block";
            square.addEventListener("mouseover", () =>{
                square.style.backgroundColor= 'black';
                console.log(square);
            })
        }




}
makerows(16, 16);