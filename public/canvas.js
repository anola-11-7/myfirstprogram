let bild = document.getElementById("unikat");
bild.width = bild.scrollWidth;
bild.height = bild.scrollHeight;
let ctx = bild.getContext("2d");
function callbackausführen() {
    if (!schalter) {
        //ctx.fillStyle = "green";
        ctx.strokeStyle = "blue";
        ctx.strokeRect(40, 10, 30, 16);
        schalter = true;
    }
    else {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        schalter = false;
    }
}
;
let schalter = false;
let block_1 = document.getElementById("block");
block_1.addEventListener("click", callbackausführen);
export {};
