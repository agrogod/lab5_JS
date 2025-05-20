let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

const firstElement = styles.shift();
console.log("Видалений елемент:", firstElement);

styles.unshift("Rap", "Reggae");

console.log("Кінцевий масив:", styles);