module.exports = function longestConsecutiveLength(array) {
  // your solution here
  // Создадим структуру, в которой будет указано число из массива и к какой группе чисел он будет относиться. Каждая группа обозначает количество чисел в последовательности
  var map = {};
  var count = 1;
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    var elem = array[i];
    // проверяем, есть ли в структуре выбранный элемент из массива, а также его ближайшие соседи. если данный элемент есть в структуре то, переходим к следующему, иначе заносим его в структуру и относим к первой группе
    if (map.hasOwnProperty(elem)) {
      continue;
    }
    map[elem] = 1;
    // если соседи элемента есть в структуре, то сливаем эти элементы в одну последовательность
    if (map.hasOwnProperty(elem - 1)) {
      count = Math.max(count, merge(map, elem - 1, elem));
    }
    if (map.hasOwnProperty(elem + 1)) {
      count = Math.max(count, merge(map, elem, elem + 1));
    }
  }
  if (!arrayLength) count = 0;
  return count;
}
function merge(map, left, right) {
  //функция слияния в последовательность берем левый и правый элемент, и определяем границы последовательности, т.е. минимальный элемент и максимальный, для подсчета количества элемента в последовательности
  var upper = right + map[right] - 1;
  var lower = left - map[left] + 1;
  var len = upper - lower + 1;
  map[upper] = len;
  map[lower] = len;
  return len;
}
