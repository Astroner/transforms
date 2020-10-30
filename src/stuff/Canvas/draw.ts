export const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    progress: number
) => {
    ctx.clearRect(0, 0, width, height)

    const startX = width/2 - 100;
    const startY = height/2 - 100;
    ctx.save()
    


    drawShape(
        ctx,
        "#000",
        ...getLineDots(
            progress,
            [
                [startX, startY, 100], 
                [startX + 100, startY + 100, 0]
            ],
            [
                [startX + 200, startY, 100], 
                [startX + 200 - 50, startY - 50, 50]
            ],
            [
                [startX + 200, startY + 200, 100], 
                [startX + 200 - 50, startY + 200 - 50, 0]
            ],
            [
                [startX, startY + 200, 100], 
                [startX + 20, startY + 200 - 20, 0]
            ]
        )
    )
    
    ctx.restore();
}

const drawShape = (
    ctx: CanvasRenderingContext2D,
    color: string,
    ...dots: number[][]
) => {
    ctx.save()

    ctx.strokeStyle = color;

    ctx.beginPath();
    for (const [index, dot] of dots.entries()) {
        if(index === 0) {
            ctx.moveTo(dot[0], dot[1])
            continue
        }
        ctx.lineTo(dot[0], dot[1]);
    }

    ctx.closePath()
    ctx.stroke();
    
    ctx.restore();
}

const getLineDots = (
    progress: number,
    ...lines: number[][][]
) => {
    const processed = new Array<{
        vec: { i: number, j: number, k: number },
        dot: { x: number, y: number, z: number }
    }>();

    for (const [m1, m2] of lines) {
        processed.push({
            vec: {
                i: m2[0] - m1[0],
                j: m2[1] - m1[1],
                k: m2[2] - m1[2],
            },
            dot: {
                x: m1[0],
                y: m1[1],
                z: m1[2]
            }
        })
    }

    return processed.map(({ vec, dot }) => {

        return [
            dot.x + vec.i * progress,
            dot.y + vec.j * progress
        ]
    })
}