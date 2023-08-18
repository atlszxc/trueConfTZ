"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
/**
 * Класс прямоугольника.
 */
var Rectangle = /** @class */ (function () {
    /**
     *
     * @param h - высота прямоугольника
     * @param w - длина прямоугольника
     */
    function Rectangle(h, w) {
        this.hight = h,
            this.width = w;
    }
    /**
     * Метод расчета площади прямоугольника
     *
     * @returns Площадь прямоуголька
     */
    Rectangle.prototype.getArea = function () {
        return this.hight * this.width;
    };
    /**
     * Метод расчета периметра прямоугольника
     *
     * @returns Периметр прямоуголька
     */
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.hight + this.width);
    };
    /**
     * Метод обновления высоты прямоугольника
     *
     * @param h - Высота прямоугольника
     * @returns Обнавленная высота прямоугольника
     */
    Rectangle.prototype.setHeight = function (h) {
        this.hight = h;
        return this.hight;
    };
    /**
     * Метод обновления длины прямоугольника
     *
     * @param w - Длина прямоугольника
     * @returns Обнавленная длина прямоугольника
     */
    Rectangle.prototype.setWidth = function (w) {
        this.width = w;
        return w;
    };
    /**
     * Метод обнавления высоты и длины прямоугольника
     *
     * @param h - Высота прямоугольника
     * @param w - Длина прямоугольника
     */
    Rectangle.prototype.setWidthAndHeight = function (h, w) {
        this.width = w;
        this.hight = h;
    };
    /**
     * Метод получения длин сторон прямоугольника
     *
     * @returns Возвращает длины сторон прямоугольника
     */
    Rectangle.prototype.getSides = function () {
        return {
            sideA: this.width,
            sideB: this.hight,
            sideC: this.width,
            sideD: this.hight,
        };
    };
    /**
     * Метод отрисовки прямоугольника
     *
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    Rectangle.prototype.render = function (id, startPositionX, startPositionY) {
        if (startPositionX === void 0) { startPositionX = 0; }
        if (startPositionY === void 0) { startPositionY = 0; }
        var canvas = document.querySelector("#".concat(id));
        if (canvas === null || canvas === void 0 ? void 0 : canvas.getContext) {
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.beginPath();
                ctx.moveTo(startPositionX, startPositionY);
                ctx.lineTo(startPositionX + this.width, startPositionY);
                ctx.lineTo(startPositionX + this.width, startPositionY + this.hight);
                ctx.lineTo(startPositionX, startPositionY + this.hight);
                ctx.lineTo(startPositionX, startPositionY);
                ctx.stroke();
                ctx.closePath();
            }
        }
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
