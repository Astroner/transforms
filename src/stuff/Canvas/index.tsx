import { GetStaticProps } from 'next';
import React, { FC, memo, useEffect, useRef } from 'react';
import { draw } from './draw';

export interface ICanvas {
    width: number
    height: number,
    progress: number
}

const Canvas: FC<ICanvas> = props => {

    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(!ref.current) return
        const ctx = ref.current.getContext("2d");
        if(!ctx) return;
        draw(
            ctx,
            props.width,
            props.height,
            props.progress
        )
    }, [props.width, props.height, props.progress])

    return (
        <canvas width={props.width} height={props.height} ref={ref} />
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}
    }
}

export default memo(Canvas)