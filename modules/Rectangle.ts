import { IShape, getSidesResponse } from "./Shape"


/**
 * Класс прямоугольника. 
 */
export class Rectangle implements IShape {
    /**
     * 
     * @param h - высота прямоугольника
     * @param w - длина прямоугольника
     */
    constructor(h: number, w: number) {
        this.height = h,
        this.width = w
    }

    private height: number
    private width: number

    /**
     * Метод расчета площади прямоугольника
     * 
     * @returns Площадь прямоуголька
     */
    getArea(): number {
        return this.height * this.width
    }


    /**
     * Метод расчета периметра прямоугольника
     * 
     * @returns Периметр прямоуголька
     */
    getPerimeter(): number {
        return 2 * (this.height + this.width)
    }

    /**
     * Метод обновления высоты прямоугольника
     * 
     * @param h - Высота прямоугольника
     * @returns Обнавленная высота прямоугольника
     */
    setHeight(h: number): number {
        this.height = h
        return this.height
    }

    /**
     * Метод обновления длины прямоугольника
     * 
     * @param w - Длина прямоугольника
     * @returns Обнавленная длина прямоугольника
     */
    setWidth(w: number) {
        this.width = w
        return w
    }

    /**
     * Метод обнавления высоты и длины прямоугольника
     * 
     * @param h - Высота прямоугольника
     * @param w - Длина прямоугольника
     */
    setWidthAndHeight(h: number, w: number): void {
        this.width = w
        this.height = h
    }

    /**
     * Метод получения длин сторон прямоугольника
     * 
     * @returns Возвращает длины сторон прямоугольника
     */
    getSides(): getSidesResponse {
        return {
            sideA: this.width,
            sideB: this.height,
            sideC: this.width,
            sideD: this.height,
        }
    }

    /**
     * Метод отрисовки прямоугольника
     * 
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    render(id: string, startPositionX=0, startPositionY=0) {
        const canvas = document.querySelector<HTMLCanvasElement>(`#${id}`)
        if(canvas?.getContext) {
            const ctx = canvas.getContext("2d")
            if(ctx) {
                ctx.beginPath()
                ctx.moveTo(startPositionX, startPositionY)
                ctx.lineTo(startPositionX + this.width, startPositionY)
                ctx.lineTo(startPositionX + this.width, startPositionY + this.height)
                ctx.lineTo(startPositionX, startPositionY + this.height)
                ctx.lineTo(startPositionX, startPositionY)
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}