/**
 * Тип возвращаемых данных метода getSides.
 */
export type getSidesResponse = {
    [key: string]: number;
};
/**
 * Базовый интерфейс фигур, содержит в себе общие методы приминимые для всех или большенства фигур(Для всех фигур: расчет периметра и площади, для большенства: получение сторон фигуры(например окружность сторон не имеет))
 */
export interface IShape {
    getArea(): number;
    getPerimeter(): number;
    getSides?(): getSidesResponse;
    render(id: string, startPositionX: number, startPositionY: number): void;
}
