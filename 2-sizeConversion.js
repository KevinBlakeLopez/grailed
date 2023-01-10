const ITnumUSre =
  /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITnumUSreType2 =
  /^\s*(IT)\s*(\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const USre = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const numUSType2 = /^\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]XL|XXL)\s*$/i;
const WnumLnum = /^\s*(W)\s*([2-4][0-9])\s*\|?\s*(L\d{2})$/i;
const ITnumUSDEre =
  /^\s*(IT)\s*([3-6][0-9])\s*-\s*(XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-de\s*$/i;
const USnum =
  /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;
const ITnumre = /^\s*(IT)\s*([3-6]\d)\s*$/i;
const Wnum = /^\s*(W)\s*([2-5]\d)\s*$/i;
const WnumITnum = /^\s*(W)\s*([2-4]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i;
const num = /^\s*([2-4]\d)\s*$/i;
const EUnumUSnumre1 =
  /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i;
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
  ITnumUSreType2,
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
  } else if (
    ["xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl", "5xl", "6xl"].includes(
      size
    )
  ) {
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
    } else if (size === "3xl") {
      return 48;
    } else if (size === "4xl") {
      return 53;
    } else if (size === "5xl") {
      return 58;
    } else if (size === "6xl") {
      return 63;
    }
  }
}

function convertSize(
  size,
  category,
  subCategory,
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
    (([
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
      gender === "women") ||
      (["socks_intimates"].includes(gSubCategory) && gender === "women") ||
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
          (gCategory === "tops" ||
            gCategory === "outerwear" ||
            gSubCategory === "socks_underwear" ||
            gSubCategory === "swimwear")
        ) {
          grailedSize = matches[0][3];
        } else if (regexPattern.toString() === ITnumUSreType2.toString()) {
          grailedSize = matches[0][3];
        } else if (
          regexPattern.toString() === numUSType2.toString() &&
          gCategory === "bottoms"
        ) {
          grailedSize = matches[0][1];
        } else if (
          regexPattern.toString() === WnumITnum.toString() &&
          gender === "women"
        ) {
          grailedSize = matches[0][4];
        } else if (
          regexPattern.toString() === EUnumUSnumre1.toString() &&
          gCategory === "footwear"
        ) {
          grailedSize = matches[0][4];
        } else if (REgroups[i] === REgroup1) {
          grailedSize = matches[0][1];
          // console.log("group 1", grailedSize + " " + gender);
        } else if (REgroups[i] === REgroup2) {
          grailedSize = matches[0][2];
          // console.log("group 2", grailedSize + " " + gender);
        } else {
          console.log("no Regexes");
        }
      }
    });
  }

  if (
    (regexPattern.toString().includes("IT") ||
      regexPattern.toString() === USnum.toString()) &&
    gender === "women" &&
    regexPattern.toString() !== ITUSre.toString()
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
    (gCategory === "tops" ||
      gCategory === "outerwear" ||
      gCategory === "dresses") &&
    gender === "women"
  ) {
    return "universal_" + grailedSize;
  } else if (gCategory === "tailoring") {
    return grailedSize + "r";
  } else if (
    regexPattern.toString() === EUnumUSnumre1.toString() &&
    gender === "women"
  ) {
    return "us_" + grailedSize.toString().replace(".", "-");
  } else if (
    "BLC69376243_600BLUE-78030" == SKU ||
    "BIK1502 - IT2" == SKU ||
    "BI1405223-W62" == SKU
  ) {
    console.log(grailedSize + " " + matches + " " + regexPattern);
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
