//men's accessories
// const cmInch = /^\s*(1?\d{2})\s*(cm)\s*\/\s*([2-4]\d)\s*(in|inches)\s*$/i;
// const numUS = /^\s*(1\d,?.?5?)\s*\|\s*(XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;

//men's bags
// const cmInchType2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i;
//OneSize

//men's jackets and coats
const ITnumUSre =
  /^\s*(IT)\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const USre = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const numUSType2 = /^\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]XL|XXL)\s*$/i;

//men's pants
//USre
// ITUSre
const WnumLnum = /^\s*(W)\s*([2-4][0-9])\s*\|?\s*(L\d{2})$/i;
const ITnumUSDEre =
  /^\s*(IT)\s*([3-6][0-9])\s*-\s*(XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-de\s*$/i;

//men's shirts
// ITUSre
// USre

//men's shoes
// OneSize

//men's shorts
// USre

//men's suits and blazers
//USre

//men's sweaters
//USre

//men's swim
//USre

//men's underwear & socks
//USre

//women's accessories
// numUS
// cmInch
// const cmUS = /^\s*(\d{2,3})\s*(cm)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
// ITUSre
// USre
// ITUSDEre

//women's bags
//One Size
// USre

//women's dresses
//"US size"
// USre
//"XL | 46"
const USnum =
  /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;
// it52-xl-de
// ITUSDEre
//US size
// USre

//women's jackets and coats
//US size
// USre
//it40-s-de
// ITUSDEre

//women's jewelry
//US size
// USre

//women's pants and jumpsuits
// 42 | S
// numUS
// ITUSre
const ITnumre = /^\s*(IT)\s*([3-6]\d)\s*$/i;
// USre
const Wnum = /^\s*(W)\s*([2-5]\d)\s*$/i;
const WnumITnum = /^\s*(W)\s*([2-4]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i;
// USnum

//women's shoes
const num = /^\s*([2-4]\d)\s*$/i;
const EUnumUSnumre1 =
  /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i;
// OneSize

//women's shorts
// ITUSre
// Wnum
// USre
// ITUSDEre

//women's skirts
// ITUSre
// USre
// ITUSDEre

//women's sweaters
// ITUSre
// ITre
// USre
// USnum

//women's swim
// ITUSre

//women's tops
// ITUSre
// ITre
// USre
// USnum
// ITUSDEre

//women's underwear
const ITUSre = /^\s*(IT)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;

const REgroup1 = [USre, num];
const REgroup2 = [
  numUSType2,
  USnum,
  ITnumre,
  Wnum,
  WnumITnum,
  WnumLnum,
  ITnumUSre,
  ITnumUSDEre,
  EUnumUSnumre1,
  ITUSre,
];

const REgroups = [REgroup1, REgroup2];
const allREs = [
  EUnumUSnumre1,
  ITnumre,
  ITnumUSre,
  ITnumUSDEre,
  ITUSre,
  num,
  numUSType2,
  USre,
  USnum,
  Wnum,
  WnumITnum,
  WnumLnum,
];

function convertMensBottoms(size) {
  if (
    [
      "44",
      "46",
      "48",
      "50",
      "52",
      "54",
      "56",
      "58",
      44,
      46,
      48,
      50,
      52,
      54,
      56,
      58,
    ].includes(size)
  ) {
    if (size == 44) {
      return 29;
    } else if (size == 46) {
      return 31;
    } else if (size == 48) {
      return 33;
    } else if (size == 50) {
      return 35;
    } else if (size == 52) {
      return 37;
    } else if (size == 54) {
      return 39;
    } else if (size == 56) {
      return 40;
    } else if (size == 58) {
      return 42;
    }
  } else if (["xs", "s", "m", "l", "xl", "xxl"].includes(size)) {
    if (size === "xs") {
      return 27;
    } else if (size === "s") {
      return 30;
    } else if (size === "m") {
      return 33;
    } else if (size === "l") {
      return 36;
    } else if (size === "xl") {
      return 39;
    } else if (size === "xxl") {
      return 42;
    }
  }
}

function convertSize(
  size,
  category,
  subCategory,
  description,
  gender,
  gCategory,
  gSubCategory,
  SKU,
  title
) {
  const matches = [];
  const regexes = allREs;

  if (!size || size === " ") {
    return "size missing!";
  } else if (gender === "unisex") {
    return "one size";
  } else if (
    ([
      "accessories",
      "bags",
      "frames",
      "frames for men",
      "jewellery sets",
      "jewelry",
      "necklaces",
      "rings",
      "sunglasses",
      "technology",
      "wallets",
      "watches",
    ].includes(category) ||
      (size === "one size" &&
        ["tops", "outerwear", "dresses"].includes(gCategory))) &&
    gender === "women"
  ) {
    return "universal_os";
  } else if (
    [
      "accessories",
      "bags",
      "frames",
      "frames for men",
      "jewellery sets",
      "jewelry",
      "necklaces",
      "rings",
      "sunglasses",
      "technology",
      "wallets",
      "watches",
    ].includes(category) &&
    gender === "men"
  ) {
    return "one size";
  }

  regexes.forEach((regex) =>
    regex.test(size) ? matches.push(size.match(regex)) : null
  );

  if (!matches) console.log("no matches  " + subCategory + " " + size);

  const regexPattern = regexes.filter((regex) => regex.test(size));
  if (!regexPattern) console.log("no regexPattern" + subCategory + " " + size);

  let grailedSize;
  for (let i = 0; i < REgroups.length; i++) {
    REgroups[i].forEach((RE) => {
      if (RE.toString() === regexPattern.toString()) {
        if (
          (regexPattern.toString() === ITnumUSre.toString() ||
            regexPattern.toString() === ITnumUSDEre.toString()) &&
          gender === "men" &&
          (gCategory === "tops" || gCategory === "outerwear")
        ) {
          grailedSize = matches[0][3];
        } else if (
          regexPattern.toString() === WnumITnum &&
          gender === "women"
        ) {
          grailedSize = matches[0][4];
        } else if (REgroups[i] === REgroup1) {
          grailedSize = matches[0][1];
          // console.log("group 1", grailedSize + " " + gender);
        } else if (REgroups[i] === REgroup2) {
          grailedSize = matches[0][2];
          // console.log("group 2", grailedSize + " " + gender);
        } else if (REgroups[i] === REgroup3) {
          grailedSize = matches[0][3];
          // console.log("group 3", grailedSize + " " + gender);
        } else if (REgroups[i] === REgroup4) {
          grailedSize = matches[0][4];
          // console.log("group 4", grailedSize + " " + gender);
        } else {
          console.log("no Regexes");
        }
      }
    });
  }

  if (
    (regexPattern.toString().includes("IT") ||
      regexPattern.toString() === USnum) &&
    gender === "women" &&
    regexPattern.toString() !== ITUSre
  ) {
    return "it_" + grailedSize;
  } else if (
    gender === "men" &&
    (gCategory === "bottoms" || gSubCategory === "socks_underwear") &&
    !Wnum.test(size)
  ) {
    return convertMensBottoms(grailedSize);
  } else if (
    ["xxs", "xs", "s", "m", "m-l", "l", "xl", "xxl", "3xl", "4xl"].includes(
      grailedSize
    ) &&
    gender === "women" &&
    ["womens_tops", "womens_dresses", "womens_outerwear"].includes(gCategory)
  ) {
    return "universal_" + grailedSize;
  } else if (grailedSize) {
    return grailedSize;
  } else if (!grailedSize) {
    console.log(
      "no size conversion " +
        SKU +
        " " +
        title +
        "size: " +
        size +
        "matches: " +
        matches +
        "regexPattern: " +
        regexPattern
    );
  }
}
