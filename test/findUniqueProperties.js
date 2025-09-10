'use strict';

// Строгий режим обеспечивает корректную работу
// кода на старых версиях JS, не применяя нововведения
// автоматичски. Некоторые ошибки делает более явными.
// При использовании некоторых современных возможностей
// языка, например классов, включается по умолчанию.

QUnit.module("Тестируем функцию findUniqueProperties", function() {
    QUnit.test("Работает правильно для объектов с уникальными свойствами", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2, c: 3 },
            { b: 2, c: 4, d: 5 }
        );

        assert.deepEqual(result, { a: 1, d: 5 }, "Должны быть уникальные свойства из обоих объектов.");
    });

    QUnit.test("Работает правильно для объекты с отсутствующими свойствами", function(assert) {
        const result = findUniqueProperties(
            { x: 10, y: 20 },
            { y: 20, z: 30 }
        );

        assert.deepEqual(result, { x: 10, z: 30 }, "Должны быть уникальные свойства x и z.");
    });

    QUnit.test("Работает правильно для идентичных объектов", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: 2 },
            { a: 1, b: 2 }
        );

        assert.deepEqual(result, {}, "Идентичные объекты должны вернуть пустой объект.");
    });
});

QUnit.module("Тестируем ДОПОЛНИТЕЛЬНО функцию findUniqueProperties", function() {
    QUnit.test("Работает правильно для объектов с вложенными структурами", function(assert) {
        const result = findUniqueProperties(
            { a: 1, b: {a: 1}, c: [1, 2] },
            { a: 1, d: {a: 2}, c: [1, 2] }
        );

        assert.deepEqual(result, { b: {a: 1}, d: {a: 2} }, "Должны быть уникальные вложенные объекты.");
    });

    QUnit.test("Работает правильно для пустого объекта", function(assert) {
        const result = findUniqueProperties(
            {},
            { a: 1, b: 2 }
        );

        assert.deepEqual(result, {a: 1, b: 2}, "Непустой объект вернется целиком.");
    });
    QUnit.test("Два пустых объекта", function (assert) {
        const result = findUniqueProperties({}, {});

        assert.deepEqual(
        result,
        {},
        "Должен вернуться пустой объект."
        );
    });
    QUnit.test("Работа с функцими", function (assert) {
      /**
       * Функция для теста работы с функциями. (Даже для нее нужен jsdoc 0_0)
       * @returns {1}
       */
      const func1 = function () {
        return 1;
      };
      const result = findUniqueProperties(
        { a: 1, func: func1 },
        { b: 2, func: func1 }
      );

      assert.deepEqual(
        result,
        { a: 1, b: 2 },
        "Функции с одинаковой ссылкой считаются общими."
      );
    });
});