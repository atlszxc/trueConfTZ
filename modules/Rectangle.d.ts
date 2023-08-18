import { IShape, getSidesResponse } from "./Shape";
/**
 * Класс прямоугольника.
 */
export declare class Rectangle implements IShape {
    /**
     *
     * @param h - высота прямоугольника
     * @param w - длина прямоугольника
     */
    constructor(h: number, w: number);
    private height;
    private width;
    /**
     * Метод расчета площади прямоугольника
     *
     * @returns Площадь прямоуголька
     */
    getArea(): number;
    /**
     * Метод расчета периметра прямоугольника
     *
     * @returns Периметр прямоуголька
     */
    getPerimeter(): number;
    /**
     * Метод обновления высоты прямоугольника
     *
     * @param h - Высота прямоугольника
     * @returns Обнавленная высота прямоугольника
     */
    setHeight(h: number): number;
    /**
     * Метод обновления длины прямоугольника
     *
     * @param w - Длина прямоугольника
     * @returns Обнавленная длина прямоугольника
     */
    setWidth(w: number): number;
    /**
     * Метод обнавления высоты и длины прямоугольника
     *
     * @param h - Высота прямоугольника
     * @param w - Длина прямоугольника
     */
    setWidthAndHeight(h: number, w: number): void;
    /**
     * Метод получения длин сторон прямоугольника
     *
     * @returns Возвращает длины сторон прямоугольника
     */
    getSides(): getSidesResponse;
    /**
     * Метод отрисовки прямоугольника
     *
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    render(id: string, startPositionX?: number, startPositionY?: number): void;
}
