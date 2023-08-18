"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
/**
 * Класс окружности.
 */
var Circle = /** @class */ (function () {
    /**
     *
     * @param r - радиус окружности
     */
    function Circle(r) {
        this.radius = r;
        this.diameter = r * 2;
    }
    /**
     * Метод расчета площади круга
     *
     * @returns Площадь круга
     */
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    /**
     * Метод расчета периметра(длины) окружности
     *
     * @returns Периметр круга(длина окружности)
     */
    Circle.prototype.getPerimeter = function () {
        return Math.PI * this.diameter;
    };
    /**
     * Метод для изменения радиуса окружности
     *
     * @param r - радиус окружности
     * @returns новый радиус окружности
     */
    Circle.prototype.setRadius = function (r) {
        this.radius = r;
        this.diameter = r * 2;
        return this.radius;
    };
    /**
     * Метод для получения диаметра оружности
     *
     * @returns Возвращает диаметр окружности
     */
    Circle.prototype.getDiameter = function () {
        return this.diameter;
    };
    /**
     * Метод отрисовки окружности
     *
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    Circle.prototype.render = function (id, startPositionX, startPositionY) {
        if (startPositionX === void 0) { startPositionX = this.radius; }
        if (startPositionY === void 0) { startPositionY = this.radius; }
        var canvas = document.querySelector("#".concat(id));
        if (canvas === null || canvas === void 0 ? void 0 : canvas.getContext) {
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.moveTo(startPositionX, startPositionY);
                ctx.beginPath();
                ctx.arc(startPositionX, startPositionY, this.radius, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.closePath();
            }
        }
    };
    return Circle;
}());
exports.Circle = Circle;
