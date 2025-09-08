/**
 * Функция создает новый объект из двух исходных, обладающий их уникальными свойствами.
 * Уникальные свойства — это те, которые присутствуют в одном объекте, но отсутствуют в другом.
 *
 * @param {Object} object_1 - Объект 1
 * @param {Object} object_2 - Объект 2
 * @returns {Object}
 * @example
 * // returns { x: 10, z: 30 }
 * findUniqueProperties({ x: 10, y: 20 }, { y: 20, z: 30 });
 */
function findUniqueProperties(object_1, object_2) {

    const result = {};

    for (const key in object_1) {
      if (
        Object.prototype.hasOwnProperty.call(object_1, key) &&
        !Object.prototype.hasOwnProperty.call(object_2, key)
      ) {
        result[key] = object_1[key];
      }
    }

    for (const key in object_2) {
      if (
        Object.prototype.hasOwnProperty.call(object_2, key) &&
        !Object.prototype.hasOwnProperty.call(object_1, key)
      ) {
        result[key] = object_2[key];
      }
    }

    return result;
}
