const mapEncode = {
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  0: "Z",
  "|": "|"
};

const mapDecode = {
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  Z: 0,
  "|": "|"
};

function encode(value) {
  let valueArray = String(value).split("");
  return valueArray.map((val) => mapEncode[val]).join("");
}

function decode(value) {
  let valueArray = String(value).split("");
  return valueArray.map((val) => mapDecode[val.toUpperCase()]).join("");
}