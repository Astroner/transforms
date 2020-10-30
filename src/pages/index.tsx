import { NextPage } from "next";
import Canvas from "@/stuff/Canvas";

import cn from "./index.module.scss"
import { useState } from "react";

const Index: NextPage = () => {

    const [value, setValue] = useState(0);
    return (
        <div className={cn.root}>
            <div className={cn.container}>
                <h1>
                    Простая проекция параллелепипеда на 2d плоскость
                </h1>
                <Canvas 
                    width={400}
                    height={400}
                    progress={value}
                />
                <div>
                    Координата Z
                    <input step={.01} value={value} onChange={e => setValue(+e.target.value)} type="range" min={0} max={1} />
                </div>
            </div>
        </div>
    )
}

export default Index;