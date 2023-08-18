import { IShape, getSidesResponse } from "./Shape"

/**
 * Класс для создания треугольника
 */
export class Triangle implements IShape {
    /**
     * 
     * @param base - Длина основания
     * @param a - Длина левой стороны
     * @param b - Длина правой стороны
     * @param alpha - Угол между основание и левой стороной
     * @param beta - Угол между основанием и правой стороной
     * @param gamma - Угол между двумя сторонами
     */
    constructor(base: number, a: number, b: number, alpha=60, beta=60, gamma=60) {
        this.base = base
        this.sideA = a
        this.sideB = b

        this.cornerAlpha = alpha
        this.cornerBeta = beta
        this.cornerGamma = gamma

        this.hight = this.sideA * Math.sin(alpha / 180 * Math.PI)
    }

    private base: number
    private sideA: number
    private sideB: number
    private hight: number

    private cornerAlpha: number
    private cornerBeta: number
    private cornerGamma: number

    /**
     * Метод расчета площади треугольника
     * 
     * @returns Площадь приугольника
     */
    getArea(): number {
        return (this.sideA * this.hight) / 2
    }

    /**
     * Метод расчета периметра тругольника
     * 
     * @returns Периметр треуголька
     */
    getPerimeter(): number {
       return this.sideA + this.sideB + this.base
    }

    /**
     * Метод для изменения параметров треугольника
     * 
     * @param base - Длина основания
     * @param a - Длина левой стороны
     * @param b - Длина правой стороны
     * @param alpha - Угол между основание и левой стороной
     * @param beta - Угол между основанием и правой стороной
     * @param gamma - Угол между двумя сторонами
     */
    setSides(base: number, a: number, b: number, alpha=this.cornerAlpha, beta=this.cornerBeta, gamma=this.cornerGamma) {
        this.sideA = a
        this.sideB = b
        this.base = base

        this.cornerAlpha = alpha
        this.cornerBeta = beta
        this.cornerGamma = gamma

        //Учтен перевод из радиан к занчениям из таблицы Брадиса
        this.hight = this.sideA * Math.sin(alpha / 180 * Math.PI)
    }

    /**
     * Метод получения сторон треугольника
     * 
     * @returns Стороны треугольника
     */
    getSides(): getSidesResponse {
        return {
            sideA: this.sideA,
            sideB: this.sideB,
            sideC: this.base
        }
    }

    /**
     * Метод отрисовки треугольника
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
                ctx.lineTo(startPositionX + this.base, startPositionY)
                ctx.lineTo((startPositionX + this.base) - Math.sqrt(Math.pow(this.sideB, 2) - Math.pow(this.hight, 2)) ,this.hight)
                ctx.lineTo(((startPositionX + this.base) - Math.sqrt(Math.pow(this.sideB, 2) - Math.pow(this.hight, 2))) - Math.sqrt(Math.pow(this.sideA, 2) - Math.pow(this.hight, 2)) , startPositionY)
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}