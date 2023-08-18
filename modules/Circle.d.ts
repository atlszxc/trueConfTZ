import { IShape } from "./Shape";
/**
 * Класс окружности.
 */
export declare class Circle implements IShape {
    /**
     *
     * @param r - радиус окружности
     */
    constructor(r: number);
    private radius;
    private diameter;
    /**
     * Метод расчета площади круга
     *
     * @returns Площадь круга
     */
    getArea(): number;
    /**
     * Метод расчета периметра(длины) окружности
     *
     * @returns Периметр круга(длина окружности)
     */
    getPerimeter(): number;
    /**
     * Метод для изменения радиуса окружности
     *
     * @param r - радиус окружности
     * @returns новый радиус окружности
     */
    setRadius(r: number): number;
    /**
     * Метод для получения диаметра оружности
     *
     * @returns Возвращает диаметр окружности
     */
    getDiameter(): number;
    /**
     * Метод отрисовки окружности
     *
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    render(id: string, startPositionX?: number, startPositionY?: number): void;
}
