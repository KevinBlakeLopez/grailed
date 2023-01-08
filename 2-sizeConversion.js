//electronics
const OneSize = /^\s*(One Size)\s*$/i;

//men's accessories
const cmInch = /^\s*(1?\d{2})\s*(cm)\s*\/\s*([2-4]\d)\s*(in|inches)\s*$/i;
const numUS = /^\s*(1?\d,?.?5?)\s*\|\s*(XS|S|M|L|[2-6]?XL|XXL)\s*$/i;

//men's bags
const cmInchType2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i;
//OneSize

//men's jackets and coats
const ITUSre = /^\s*(IT)\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const USre = /^\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const numUSType2 = /^\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|L|[2-6]XL|XXL)\s*$/i;

//men's pants
//USre
// ITUSre
const WnumLnum = /^\s*(W)\s*([2-4][0-9])\s*\|?\s*(L\d{2})?$/i;
const ITUSDEre =
  /^\s*IT\s*([3-6][0-9])\s*-\s*(XS|S|M|L|[2-6]?XL|XXL)\s*-de\s*$/i;

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
const cmUS = /^\s*(\d{2,3})\s*(cm)\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
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
const ITre = /^\s*(IT)\s*([3-6]\d)\s*$/i;
// USre
const Wnum = /^\s*(W)\s*([2-4]\d)\s*$/i;
const WnumITnum = /^\s*(W)\s*([2-4]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i;
// USnum

//women's shoes
const num = /^\s*([2-4]\d)\s*$/i;
const EUUSre1 = /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i;
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

const REgroup1 = [USre, numUS];
const REgroup2 = [numUSType2, USnum, ITre, Wnum, WnumITnum, ITUSre, ITUSDEre];
// const REgroup3 = [ITUSre];
// const REgroup4 = [WnumITnum];
const REgroups = [REgroup1, REgroup2];
const allREs = [
  ITre,
  ITUSre,
  ITUSDEre,
  numUS,
  numUSType2,
  USre,
  USnum,
  Wnum,
  WnumITnum,
];

const grailedREPatterns = {
  menswear: {
    jackets_and_coats: [ITUSre, USre, numUSType2],
    pants: [USre, ITUSre, WnumLnum, ITUSDEre],
    shirts: [ITUSre, USre],
    shoes: [num, OneSize, EUUSre1],
    shorts: [USre],
    suits_and_blazers: [USre, ITUSre],
    sweaters: [USre, ITUSre],
    swim: [USre],
    underwear_and_swim: [USre],
  },
  womenswear: {
    dresses: [USre, USnum, ITUSDEre, USre, ITUSre],
    jackets_and_coats: [USre, ITUSDEre, ITUSre, OneSize],
    pants_and_jumpsuits: [numUS, ITUSre, ITre, USre, Wnum, WnumITnum, USnum],
    shoes: [num, EUUSre1, OneSize],
    shorts: [ITUSre, Wnum, USre, ITUSDEre],
    skirts: [ITUSre, USre, ITUSDEre, OneSize],
    sweaters: [ITUSre, ITre, USre, USnum, OneSize],
    swim: [ITUSre],
    tops: [ITUSre, ITre, USre, USnum, ITUSDEre, numUSType2],
  },
};

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
  } else if (["XS", "S", "M", "L", "XL", "XXL"].includes(size)) {
    if (size === "XS") {
      return 27;
    } else if (size === "S") {
      return 30;
    } else if (size === "M") {
      return 33;
    } else if (size === "L") {
      return 36;
    } else if (size === "XL") {
      return 39;
    } else if (size === "XXL") {
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
  gSubCategory
) {
  if (gender === "unisex") {
    return "one size";
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
  const matches = [];
  const allCategories = [
    "luggage and travel",
    "belts",
    "cummerbund",
    "gloves",
    "boots",
    "casual",
    "formal",
    "loafers",
    "sandals",
    "sneakers",
    "blazers",
    "jackets",
    "jackets & coats",
    "jeans & pants",
    "pants",
    "cardigans",
    "shirts",
    "t-shirts",
    "sleepwear",
    "vests",
    "shorts",
    "sweatsuits",
    "suits",
    "suits & blazers",
    "sweaters",
    "sweaters_knitwear",
    "swim",
    "underwear and swim",
    "dresses",
    "flat shoes",
    "platforms & wedges",
    "pumps",
    "skirts",
  ];
  const descriptionStr = description.split(" ");
  let regexes;
  let cat;
  if (subCategory) {
    cat = subCategory;
  } else if (!subCategory && category) {
    cat = category;
  } else {
    descriptionStr.forEach((description) =>
      allCategories.includes(description) ? (cat = description) : null
    );
  }
  if (gender === "men") {
    if (
      ["boots", "casual", "formal", "loafers", "sandals", "sneakers"].includes(
        cat
      )
    ) {
      regexes = grailedREPatterns.menswear.shoes;
    } else if (["blazers", "jackets", "jackets & coats"].includes(cat)) {
      regexes = grailedREPatterns.menswear.jackets_and_coats;
    } else if (["jeans & pants", "pants"].includes(cat)) {
      regexes = grailedREPatterns.menswear.pants;
    } else if (
      ["cardigans", "shirts", "t-shirts", "sleepwear", "vests"].includes(cat)
    ) {
      regexes = grailedREPatterns.menswear.shirts;
    } else if (["shorts", "sweatsuits"].includes(cat)) {
      regexes = grailedREPatterns.menswear.shorts;
    } else if (["suits", "suits & blazers"].includes(cat)) {
      regexes = grailedREPatterns.menswear.suits_and_blazers;
    } else if (["sweaters", "sweaters_knitwear"].includes(cat)) {
      regexes = grailedREPatterns.menswear.sweaters;
    } else if (cat === "swim") {
      regexes = grailedREPatterns.menswear.swim;
    } else if (cat === "underwear and swim") {
      regexes = grailedREPatterns.menswear.underwear_and_swim;
    }
  } else if (gender === "women") {
    // is this the correct set of grailedREPatterns for blazers?  verify.
    if (
      ["blazers", "jackets", "jackets & coats", "suits & blazers"].includes(cat)
    ) {
      regexes = grailedREPatterns.womenswear.jackets_and_coats;
    } else if (cat === "dresses") {
      regexes = grailedREPatterns.womenswear.dresses;
    } else if (["jeans & pants", "pants and jumpsuits"].includes(cat)) {
      regexes = grailedREPatterns.womenswear.pants_and_jumpsuits;
    }
    // verify this is the correct pattern for shirts
    else if (
      [
        "clothing",
        "shirts",
        "t-shirts",
        "tops",
        "cardigans",
        "tops & t-shirts",
        "vests",
      ].includes(cat)
    ) {
      regexes = grailedREPatterns.womenswear.tops;
    } else if (
      [
        "boots",
        "flat shoes",
        "platforms & wedges",
        "pumps",
        "sandals",
        "sneakers",
        "shoes",
      ].includes(cat)
    ) {
      regexes = grailedREPatterns.womenswear.shoes;
    } else if (cat === "shorts") {
      regexes = grailedREPatterns.womenswear.shorts;
    } else if (cat === "skirts") {
      regexes = grailedREPatterns.womenswear.skirts;
    } else if (["sleepwear", "swim", "tights & socks"].includes(cat)) {
      regexes = grailedREPatterns.womenswear.swim;
    } else if (cat === "sweaters") {
      regexes = grailedREPatterns.womenswear.sweaters;
    }
  } else {
    regexes = allREs;
  }
  // console.log("326  " + product.size + " " + category, regexes);

  regexes.forEach((regex) =>
    regex.test(size) ? matches.push(size.match(regex)) : null
  );

  console.log("332  " + category, matches);

  const regexPattern = regexes.filter((regex) => regex.test(size));
  // console.log(`${description}  `, regexPattern);

  // row 45 in spreadsheet is not pulling the right size?
  let grailedSize;
  for (let i = 0; i < REgroups.length; i++) {
    // console.log(320, REgroups[i]);
    REgroups[i].forEach((RE) => {
      if (RE.toString() === regexPattern.toString()) {
        // console.log(323, i, matches[0][i + 1]);
        // if (
        //   regexPattern.toString().includes("IT") &&
        //   gender === "men" &&
        //   REgroups[i] === REgroup2 &&
        //   (gCategory === "tops" || gCategory === "outerwear")
        // ) {
        //   grailedSize = matches[0][2];
        // } else if (
        //   (regexPattern.toString().includes("IT") &&
        //     REgroups[i] === REgroup2) ||
        //   (regexPattern.toString().includes("W") && gender === "men")
        // ) {
        //   grailedSize = matches[0][i + 1];
        // } else if (
        //   regexPattern.toString().includes("W") &&
        //   !regexPattern.toString().includes("IT")
        // ) {
        //   grailedSize = matches[0][i + 1];
        // } else {
        //   grailedSize = matches[0][i + 1];
        // }
        if (REgroups[i] === REgroup1) {
          grailedSize = matches[0][1];
          console.log("group 1", grailedSize + " " + gender);
        } else if (
          REgroups[i] === REgroup2 &&
          (gender === "women" ||
            !regexPattern.toString().includes("IT") ||
            !regexPattern.toString().includes("it"))
        ) {
          grailedSize = matches[0][2];
          console.log("group 2", grailedSize + " " + gender);
        } else if (REgroups[i] === REgroup3) {
          grailedSize = matches[0][3];
          console.log("group 3", grailedSize + " " + gender);
        } else if (REgroups[i] === REgroup4) {
          grailedSize = matches[0][4];
          console.log("group 4", grailedSize + " " + gender);
        } else {
          return size;
        }
      }
    });
  }

  // what you need to know is REgroups[i] in order to know which group to extract from formatted sizes?  but isn't that what is going on in the loop - you are extracting the correct group out of the matches?
  // I need to know what kind of metric is being used in the regexPattern and then determine what to append to the formattedSize
  // if (parseInt(formattedSizes[0])) {
  //   return "it_" + formattedSizes[0];
  // } else {
  //   return formattedSizes[0];
  // }
  console.log(grailedSize);
  if (regexPattern.toString().includes("IT") && gender === "women") {
    return "it_" + grailedSize;
  } else if (
    gender === "men" &&
    (gCategory === "bottoms" || gSubCategory === "socks_underwear")
  ) {
    return convertMensBottoms(grailedSize);
  } else {
    return grailedSize;
  }
}
