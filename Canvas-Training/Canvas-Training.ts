const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.arc(500, 100, 40, 0, Math.PI * 2, false);
ctx.fillStyle = "#ffad61";
ctx.fill();

let neck: Path2D = new Path2D();
neck.rect(490, 139, 20, 20);
ctx.fill(neck);

let body: Path2D = new Path2D();
ctx.fillStyle = "#008f32";
body.rect(430, 159, 140, 240);
ctx.fill(body);

let shoulder1: Path2D = new Path2D();
shoulder1.arc(440, 178, 20, 0, Math.PI * 2, false);
ctx.fill(shoulder1);