import { IShape } from "./Shape"

/**
 * Класс окружности.
 */
export class Circle implements IShape {
    /**
     * 
     * @param r - радиус окружности
     */
    constructor(r: number) {
        this.radius = r
        this.diameter = r * 2
    }

    private radius: number
    private diameter: number

    /**
     * Метод расчета площади круга
     * 
     * @returns Площадь круга
     */
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }

    /**
     * Метод расчета периметра(длины) окружности
     * 
     * @returns Периметр круга(длина окружности)
     */
    getPerimeter(): number {
        return Math.PI * this.diameter
    }

    /**
     * Метод для изменения радиуса окружности
     * 
     * @param r - радиус окружности
     * @returns новый радиус окружности
     */
    setRadius(r: number): number {
        this.radius = r
        this.diameter = r * 2
        return this.radius
    }

    /**
     * Метод для получения диаметра оружности
     * 
     * @returns Возвращает диаметр окружности
     */
    getDiameter(): number {
        return this.diameter
    }


    /**
     * Метод отрисовки окружности
     * 
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    render(id: string, startPositionX=this.radius, startPositionY=this.radius): void {
        const canvas = document.querySelector<HTMLCanvasElement>(`#${id}`)
        if(canvas?.getContext) {
            const ctx = canvas.getContext("2d")
            if(ctx) {
                ctx.moveTo(startPositionX, startPositionY)
                ctx.beginPath()
                ctx.arc(startPositionX, startPositionY, this.radius, 0, Math.PI * 2, true)
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}