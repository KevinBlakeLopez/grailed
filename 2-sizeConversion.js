const ITnumUSre =
  /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITnumUSreType2 =
  /^\s*(IT)\s*(\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITnumUSDEre =
  /^\s*(IT)\s*([3-6][0-9])\s*-\s*(XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-de\s*$/i;
const ITnumre = /^\s*(IT)\s*([3-6]\d)\s*$/i;
const ITUSre = /^\s*(IT)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
const USre = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const numUSType2 = /^\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]XL|XXL)\s*$/i;
const WnumLnum = /^\s*(W)\s*([2-6]\d)\s*\|?\s*(L\d{2})$/i;

const USnum =
  /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;

const Wnum = /^\s*(W)\s*([2-6]\d)\s*$/i;
const WnumITnum = /^\s*(W)\s*([2-6]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i;
const numRE = /^\s*([2-4]\d)\s*$/i;
const EUnumUSnumre1 =
  /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i;

const REgroup1 = [USre, numRE];
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
  numRE,
  numUSType2,
  USre,
  USnum,
  Wnum,
  WnumITnum,
  WnumLnum,
];

function convertMensBottoms(size) {
  if (/^\s*([3-6]\d)\s*$/i.test(size)) {
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
  } else if (USre.test(size)) {
    if (size === "xs") {
      return "28";
    } else if (size === "s") {
      return "30";
    } else if (size === "m") {
      return "32";
    } else if (size === "l") {
      return "36";
    } else if (size === "xl") {
      return "38";
    } else if (size === "xxl") {
      return "42";
    } else if (size === "3xl") {
      return "48";
    } else if (size === "4xl") {
      return "52";
    } else if (size === "5xl") {
      return "58";
    } else if (size === "6xl") {
      return "62";
    }
  }
}

function convertShoes(size, gender) {
  if (/^\s*([3-4]\d.?5?)\s*$/i.test(size)) {
    if (gender === "men") {
      if (size === "38") {
        return "5";
      } else if (size === "38.5") {
        return "5.5";
      } else if (size === "39") {
        return "6";
      } else if (size === "39.5") {
        return "6.5";
      } else if (size === "40") {
        return "7";
      } else if (size === "40.5") {
        return "7.5";
      } else if (size === "41") {
        return "8";
      } else if (size === "41.5") {
        return "8.5";
      } else if (size === "42") {
        return "9";
      } else if (size === "43") {
        return "10";
      } else if (size === "44") {
        return "11";
      } else if (size === "45") {
        return "12";
      } else if (size === "46") {
        return "13";
      } else if (size === "47") {
        return "14";
      } else if (size === "48") {
        return "15";
      } else if (size === "49") {
        return "16";
      }
    }
  } else {
    return size;
  }
}

function convertMensShirts(gSize, RE) {
  //italian sizes
  if (/^\s*([4-6]\d)\s*$/i.test(gSize) && RE.toString().includes("IT")) {
    if ("46" >= gSize) {
      return "xs";
    } else if (gSize == "48") {
      return "s";
    } else if (gSize == "50") {
      return "m";
    } else if (gSize == "52") {
      return "l";
    } else if (gSize == "54") {
      return "xl";
    } else if (gSize == "56") {
      return "xxl";
    }
  }
  //us gSizes
  else if (/^\s*([3-4]\d)\s*$/i.test(gSize)) {
    if (gSize <= "36") {
      return "xs";
    } else if (gSize == "38") {
      return "s";
    } else if (["39", "40"].includes(gSize)) {
      return "m";
    } else if (["41", "42"].includes(gSize)) {
      return "l";
    } else if (gSize == "44") {
      return "xl";
    }
  } else {
    return gSize;
  }
}

function convertWomensBottoms(size) {
  if (USre.test(size)) {
    if (size === "xxs") {
      return "us_00";
    } else if (size === "xs") {
      return "us_0";
    } else if (size === "s") {
      return "us_4";
    } else if (size === "m") {
      return "us_12";
    } else if (size === "l") {
      return "us_16";
    } else if (size === "xl") {
      return "us_18";
    } else if (size === "xxl") {
      return "us_20";
    } else {
      return size;
    }
  }
  if (/^\s*([3-6]\d)\s*$/i.test(size)) {
    if (parseInt(size) % 2 != 0) {
      return (parseInt(size) - 1).toString();
    } else if (parseInt(size) < 34) {
      return "34";
    } else if (parseInt(size) > 52) {
      return "52";
    } else {
      return size;
    }
  }
}

function convertTailoring(size) {
  if (/^\s*([3-6]\d)\s*$/i.test(size)) {
    if (size == "37") {
      return "38";
    } else if (size == "39") {
      return "40";
    } else if (size == "41") {
      return "42";
    } else if (size == "43") {
      return "44";
    } else if (parseInt(size) > 54) {
      return "54";
    } else if (parseInt(size) < 34) {
      return "34";
    } else {
      return size;
    }
  } else if (USre.test(size)) {
    if (size === "xxs") {
      return "40";
    } else if (size === "xs") {
      return "42";
    } else if (size === "s") {
      return "44";
    } else if (size === "m") {
      return "48";
    } else if (size === "l") {
      return "52";
    } else if (size === "xl") {
      return "54";
    } else if (size === "xxl") {
      return "54";
    } else if (size === "3xl" || size === "xxxl") {
      return "54";
    } else {
      return size;
    }
  } else {
    return size;
  }
}

function removeUnusedGrailedSizes(
  grailedSize,
  originalSize,
  gender,
  gCategory
) {
  if (
    /^\s*([3-6]xl)\s*$/i.test(grailedSize) &&
    gender === "men" &&
    ["tops", "outerwear", "bottoms"].includes(gCategory)
  ) {
    return "xxl";
  } else if (grailedSize == "m-l") {
    return "m";
  } else if (
    /^\s*([5-6]xl)\s*$/i.test(grailedSize) &&
    gender === "women" &&
    ["tops", "outerwear"].includes(gCategory)
  ) {
    return "xxl";
  } else if (
    parseInt(grailedSize) > 15 &&
    gCategory === "footwear" &&
    gender === "men"
  ) {
    return "15";
  } else if (
    26 > parseInt(grailedSize) &&
    gCategory === "bottoms" &&
    gender === "men" &&
    /^\s*W\s*([1-2]\d)\s*\|?\s*(IT|L)?\s*(\d\d)?\s*$/i.test(originalSize)
  ) {
    return "26";
  } else if (
    parseInt(grailedSize) > 44 &&
    gCategory === "bottoms" &&
    gender === "men" &&
    /^\s*W\s*([4-6]\d)\s*\|?\s*(IT|L)?\s*(\d\d)?\s*$/i.test(originalSize)
  ) {
    return "44";
  } else {
    return grailedSize;
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
      ].includes(subCategory)) &&
    gender === "men"
  ) {
    return "one size";
  } else if (
    gCategory === "bottoms" &&
    size === "one size" &&
    gender === "women"
  ) {
    return "universal_32";
  } else if (
    (gCategory === "tops" || gCategory === "outerwear") &&
    size === "one size" &&
    gender === "men"
  ) {
    return "m";
  } else if (
    gCategory === "bottoms" &&
    size === "one size" &&
    gender === "men"
  ) {
    return "35";
  }

  regexes.forEach((regex) =>
    regex.test(size) ? matches.push(size.match(regex)) : null
  );

  if (!matches) console.log("no matches  " + subCategory + " " + size);

  const regexPattern = regexes.filter((regex) => regex.test(size));
  if (!regexPattern) console.log("no regexPattern" + subCategory + " " + size);

  let grailedSize;
  if (ITnumUSreType2.test(size)) {
    grailedSize = matches[0][3];
  } else if (numUSType2.test(size)) {
    if (["tops", "outerwear", "tailoring"].includes(gCategory)) {
      grailedSize = matches[0][2];
    } else if (gCategory === "bottoms") {
      grailedSize = matches[0][1];
    }
  } else if (
    (ITnumUSre.test(size) || ITnumUSDEre.test(size)) &&
    gender === "men" &&
    (gCategory === "tops" ||
      gCategory === "outerwear" ||
      gSubCategory === "socks_underwear" ||
      gSubCategory === "swimwear")
  ) {
    grailedSize = matches[0][3];
  } else if (WnumITnum.test(size) && gender === "women") {
    grailedSize = matches[0][4];
  } else if (EUnumUSnumre1.test(size) && gCategory === "footwear") {
    if (gender === "men") {
      grailedSize = matches[0][4];
    } else if (gender === "women") {
      grailedSize = matches[0][2];
    }
  } else {
    for (let i = 0; i < REgroups.length; i++) {
      REgroups[i].forEach((RE) => {
        if (RE.toString() === regexPattern.toString()) {
          if (REgroups[i] === REgroup1) {
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
  }

  grailedSize = removeUnusedGrailedSizes(grailedSize, size, gender, gCategory);

  if (
    USre.test(grailedSize) &&
    gender === "women" &&
    ["tops", "dresses", "outerwear"].includes(gCategory)
  ) {
    return "universal_" + grailedSize;
  } else if (
    gender === "women" &&
    (regexPattern.toString() === ITnumUSDEre.toString() ||
      regexPattern.toString() === ITnumUSre.toString() ||
      regexPattern.toString() === USnum.toString() ||
      regexPattern.toString() === ITnumre.toString())
  ) {
    return "it_" + grailedSize;
  } else if (
    gender === "women" &&
    (Wnum.test(size) ||
      WnumLnum.test(size) ||
      (numUSType2.test(size) && gCategory.includes("tops")))
  ) {
    return "universal_" + grailedSize;
  } else if (
    gender === "men" &&
    (gCategory === "bottoms" || gSubCategory === "socks_underwear") &&
    !Wnum.test(size)
  ) {
    return convertMensBottoms(grailedSize);
  } else if (gCategory === "tailoring") {
    return convertTailoring(grailedSize) + "r";
  } else if (
    (regexPattern.toString() === EUnumUSnumre1.toString() ||
      regexPattern.toString() === numRE.toString() ||
      regexPattern.toString() === ITnumUSre.toString()) &&
    (gCategory.includes("footwear") || category === "shoes")
  ) {
    if (gender === "women") {
      return "it_" + grailedSize.toString().replace(".", "-");
    } else if (gender === "men") {
      return convertShoes(grailedSize, gender);
    }
  } else if (gCategory === "tops" && gender === "men") {
    return convertMensShirts(grailedSize, regexPattern);
  } else if (
    (gCategory.includes("bottoms") ||
      ["jeans & pants", "skirts", "shorts"].includes(subCategory)) &&
    gender === "women"
  ) {
    if (
      regexPattern.toString() === numUSType2.toString() ||
      regexPattern.toString() === WnumITnum.toString()
    ) {
      return "it_" + convertWomensBottoms(grailedSize);
    }
    return convertWomensBottoms(grailedSize);
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
    return "noSizeConversion!";
  }
}
