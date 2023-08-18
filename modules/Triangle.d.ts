import { IShape, getSidesResponse } from "./Shape";
/**
 * Класс для создания треугольника
 */
export declare class Triangle implements IShape {
    /**
     *
     * @param base - Длина основания
     * @param a - Длина левой стороны
     * @param b - Длина правой стороны
     * @param alpha - Угол между основание и левой стороной
     * @param beta - Угол между основанием и правой стороной
     * @param gamma - Угол между двумя сторонами
     */
    constructor(base: number, a: number, b: number, alpha?: number, beta?: number, gamma?: number);
    private base;
    private sideA;
    private sideB;
    private hight;
    private cornerAlpha;
    private cornerBeta;
    private cornerGamma;
    /**
     * Метод расчета площади треугольника
     *
     * @returns Площадь приугольника
     */
    getArea(): number;
    /**
     * Метод расчета периметра тругольника
     *
     * @returns Периметр треуголька
     */
    getPerimeter(): number;
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
    setSides(base: number, a: number, b: number, alpha?: number, beta?: number, gamma?: number): void;
    /**
     * Метод получения сторон треугольника
     *
     * @returns Стороны треугольника
     */
    getSides(): getSidesResponse;
    /**
     * Метод отрисовки треугольника
     *
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    render(id: string, startPositionX?: number, startPositionY?: number): void;
}
