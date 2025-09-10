"use strict";
// Строгий режим обеспечивает корректную работу
// кода на старых версиях JS, не применяя нововведения
// автоматичски. Некоторые ошибки делает более явными.
// При использовании некоторых современных возможностей
// языка, например классов, включается по умолчанию.

/**
 * Функция создает новый объект из двух исходных, обладающий их уникальными свойствами.
 * Уникальные свойства — это те, которые присутствуют в одном объекте, но отсутствуют в другом.
 *
 * @param {Object} object_1 - Объект 1
 * @param {Object} object_2 - Объект 2
 * @returns {Object}
 * @example
 * @throws {TypeError} Если аргументы невалидны
 * // returns { x: 10, z: 30 }
 * findUniqueProperties({ x: 10, y: 20 }, { y: 20, z: 30 });
 */
function findUniqueProperties(object_1, object_2) {
  //Реализовал проверку, что аргументы - это объекты
  if (
    typeof object_1 !== "object" ||
    typeof object_2 !== "object" ||
    object_1 === null ||
    object_2 === null
  ) {
    throw new TypeError("Все аргументы должны быть объектами!");
  }

  const keys_1 = Object.keys(object_1);
  const keys_2 = Object.keys(object_2);

  const result = {};

  for (const key of keys_1) {
    if (!keys_2.includes(key)) {
      result[key] = object_1[key];
    }
  }

  for (const key of keys_2) {
    if (!keys_1.includes(key)) {
      result[key] = object_2[key];
    }
  }

  return result;
}
// У стрелочных функций остуствует собственный контекст (this),
// он берется из внешней обсласти. Не могут использоваться в
// качестве конструктора. Нет объекта arguments.
// Синтаксис короче (не уверен, что это стоит упоминания).
