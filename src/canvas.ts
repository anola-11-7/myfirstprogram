export { };
let bild = document.getElementById("unikat") as HTMLCanvasElement;
bild.width = bild.scrollWidth;
bild.height = bild.scrollHeight;

let ctx = bild.getContext("2d")!;

function callbackausführen(): void {
    if (!schalter) {
        //ctx.fillStyle = "green";
        ctx.strokeStyle = "blue";
        ctx.strokeRect(40, 10, 30, 16);
        schalter = true;
    }
    else {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        schalter = false

    }

};

let schalter: boolean = false;

let block_1 = document.getElementById("block") as HTMLButtonElement;
block_1.addEventListener("click", callbackausführen);
