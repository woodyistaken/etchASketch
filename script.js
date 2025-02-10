const container=document.querySelector(".container");
for(let i=0; i<16*16;i++){
    const square=document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover",(e)=>{
        if(e.target.classList.contains("colored")){
            let opacityNum=Number(e.target.style.opacity);
            e.target.style.opacity=0.1+opacityNum;
        }
        else{
            let r=(Math.random()*255)+1;
            let g=(Math.random()*255)+1;
            let b=(Math.random()*255)+1;
            e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
            e.target.style.opacity=0.1;
            e.target.classList.add("colored");
        }
    })
    square.style.minWidth=`${500/16}px`
    container.appendChild(square)
}
const changeButton=document.querySelector("#changeButton");
changeButton.addEventListener("click",(e)=>{
    let count=prompt("Enter a number between 1-100");
    const squares=document.querySelectorAll(".square")
    squares.forEach((e)=>e.remove());
    for(let i=0; i<count*count;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover",(e)=>{
            let r=(Math.random()*256);
        let g=(Math.random()*256);
        let b=(Math.random()*256);
        e.target.style.backgroundColor=`rgb(${r},${g},${b},0.1)`;
        })
        square.style.minWidth=`${500/count}px`
        container.appendChild(square)
    }
})