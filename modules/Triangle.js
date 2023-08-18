"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
/**
 * Класс для создания треугольника
 */
var Triangle = /** @class */ (function () {
    /**
     *
     * @param base - Длина основания
     * @param a - Длина левой стороны
     * @param b - Длина правой стороны
     * @param alpha - Угол между основание и левой стороной
     * @param beta - Угол между основанием и правой стороной
     * @param gamma - Угол между двумя сторонами
     */
    function Triangle(base, a, b, alpha, beta, gamma) {
        if (alpha === void 0) { alpha = 60; }
        if (beta === void 0) { beta = 60; }
        if (gamma === void 0) { gamma = 60; }
        this.base = base;
        this.sideA = a;
        this.sideB = b;
        this.cornerAlpha = alpha;
        this.cornerBeta = beta;
        this.cornerGamma = gamma;
        this.hight = this.sideA * Math.sin(alpha / 180 * Math.PI);
    }
    /**
     * Метод расчета площади треугольника
     *
     * @returns Площадь приугольника
     */
    Triangle.prototype.getArea = function () {
        return (this.sideA * this.hight) / 2;
    };
    /**
     * Метод расчета периметра тругольника
     *
     * @returns Периметр треуголька
     */
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.base;
    };
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
    Triangle.prototype.setSides = function (base, a, b, alpha, beta, gamma) {
        if (alpha === void 0) { alpha = this.cornerAlpha; }
        if (beta === void 0) { beta = this.cornerBeta; }
        if (gamma === void 0) { gamma = this.cornerGamma; }
        this.sideA = a;
        this.sideB = b;
        this.base = base;
        this.cornerAlpha = alpha;
        this.cornerBeta = beta;
        this.cornerGamma = gamma;
        //Учтен перевод из радиан к занчениям из таблицы Брадиса
        this.hight = this.sideA * Math.sin(alpha / 180 * Math.PI);
    };
    /**
     * Метод получения сторон треугольника
     *
     * @returns Стороны треугольника
     */
    Triangle.prototype.getSides = function () {
        return {
            sideA: this.sideA,
            sideB: this.sideB,
            sideC: this.base
        };
    };
    /**
     * Метод отрисовки треугольника
     *
     * @param id - id канвас элемента, в котором будет отрисован прямоугольник
     * @param startPositionX - Стартовая позиция по горизонтали
     * @param startPositionY - Стартова позици по вертикали
     */
    Triangle.prototype.render = function (id, startPositionX, startPositionY) {
        if (startPositionX === void 0) { startPositionX = 0; }
        if (startPositionY === void 0) { startPositionY = 0; }
        var canvas = document.querySelector("#".concat(id));
        if (canvas === null || canvas === void 0 ? void 0 : canvas.getContext) {
            var ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.beginPath();
                ctx.moveTo(startPositionX, startPositionY);
                ctx.lineTo(startPositionX + this.base, startPositionY);
                ctx.lineTo((startPositionX + this.base) - Math.sqrt(Math.pow(this.sideB, 2) - Math.pow(this.hight, 2)), this.hight);
                ctx.lineTo(((startPositionX + this.base) - Math.sqrt(Math.pow(this.sideB, 2) - Math.pow(this.hight, 2))) - Math.sqrt(Math.pow(this.sideA, 2) - Math.pow(this.hight, 2)), startPositionY);
                ctx.stroke();
                ctx.closePath();
            }
        }
    };
    return Triangle;
}());
exports.Triangle = Triangle;
