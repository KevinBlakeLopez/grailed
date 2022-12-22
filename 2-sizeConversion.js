//electronics
const OneSize = /^\s*(One Size)\s*$/i;

//men's accessories
const cmInch = /^\s*(1?\d{2})\s*(cm)\s*\/\s*([2-4]\d)\s*(in|inches)\s*$/i;
const numUS = /^\s*(1?\d,?.?5?)\s*\|\s*(XS|S|M|L|[2-6]?XL|XXL)\s*$/i;

//men's bags
const cmInchType2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i;
const OneSize1 = /^\s*(One Size)\s*$/i;

//men's jackets and coats
const ITUSre = /^\s*(IT)\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const USre = /^\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const numUSType2 = /^\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|L|[2-6]XL|XXL)\s*$/i;

//men's pants
const USre2 = /^\s*(XXS|XS|S|M|L|[2-6]*XL|XXL)\s*$/i;
const ITUSre2 = /^\s*(IT)\s*([3-6][0-9])\s*\|\s*(XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const WnumLnum = /^\s*(W)\s*([2-4][0-9])\s*\|?\s*(L\d{2})?$/i;
const ITUSDEre2 =
  /^\s*IT\s*([3-6][0-9])\s*-\s*(XS|S|M|L|[2-6]?XL|XXL)\s*-de\s*$/i;

//men's shirts
const ITUSre3 =
  /^\s*(IT)\s*([3-6]\d)\s*\|?-?\s*(XXS|XS|S|M|L|[2-6]*XL|XXL)\s*$/i;
const USre3 = /^\s*(XXS|XS|S|M|L|[2-6]*XL|XXL)\s*$/i;

//men's shoes
const OneSize2 = /^\s*(One Size)\s*$/i;

//men's shorts
const USre4 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i;

//men's suits and blazers
const USre5 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;

//men's sweaters
const USre6 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;

//men's swim
const USre7 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;

//men's underwear & socks
const USre8 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i;

//women's accessories
const numUS2 = /^\s*(\d{1,2}\.?5?)\s*\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const cmInch2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i;
const cmUS = /^\s*(\d{2,3})\s*(cm)\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const ITUSre4 =
  /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const USre9 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
const ITUSDEre3 =
  /^\s*(IT)\s*([3-6]\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?\s*(de)\s*$/i;

//women's bags
//"One Size" -
const USre10 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;

//women's dresses
//"US size"
const USre11 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
//"XL | 46"
const USnum =
  /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;
// it52-xl-de
const ITUSDEre4 =
  /^\s*(IT)\s*([3-6]\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?\s*(de)\s*$/i;
//US size
const USre12 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;

//women's jackets and coats
//US size
const USre13 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
//it40-s-de
const ITUSDEre5 =
  /^\s*(IT)\s*([3-6]\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?(de)\s*$/i;

//women's jewelry
//US size
const USre14 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i;

//women's pants and jumpsuits
// 42 | S
const numUS1 = /^\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITUSre5 =
  /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITre = /^\s*(IT)\s*([3-6]\d)\s*$/i;
const USre15 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const Wnum = /^\s*(W)\s*([2-4]\d)\s*$/i;
const WnumITnum = /^\s*(W)\s*([2-4]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i;
const USnum1 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*\|\s*([3-6]\d)\s*$/i;

//women's shoes
const num = /^\s*([2-4]\d)\s*$/i;
const EUUSre1 = /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i;
const OneSize3 = /^\s*(One Size)\s*$/i;

//women's shorts
const ITUSre6 =
  /^\s*(IT)\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const Wnum1 = /^\s*(W)\s*([2-]?\d)\s*$/i;
const USre16 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITUSDEre6 =
  /^\s*(IT)\s*([3-6]?\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?(de)\s*$/i;

//women's skirts
const ITUSre7 =
  /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const USre17 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
const ITUSDEre7 =
  /^\s*(IT)\s*([3-6]?\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?(de)\s*$/i;

//women's sweaters
const ITUSre8 =
  /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
const ITre1 = /^\s*(IT)\s*([3-6]\d)\s*$/i;
const USre18 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
const USnum2 =
  /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;

//women's swim
const ITUSre9 =
  /^\s*(IT)\s*([3-5]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;

//women's tops
const ITUSre10 =
  /^\s*(IT)\s*([3-5]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i;
const ITre2 = /^\s*(IT)\s*([3-5]\d)\s*$/i;
const USre19 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;
const USnum3 =
  /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;
const ITUSDEre8 =
  /^\s*(IT)\s*([3-5]?\d)\s*-\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*-(de)-$/i;

const REgroup1 = [
  USre,
  USre2,
  USre3,
  USre4,
  USre5,
  USre6,
  USre7,
  USre8,
  USre9,
  USre10,
  USre11,
  USre12,
  USre13,
  USre14,
  USre15,
  USre16,
  USre17,
  USre18,
  USre19,
  numUS1,
];
const REgroup2 = [
  numUSType2,
  USnum,
  ITre,
  ITre2,
  Wnum,
  WnumITnum,
  USnum1,
  USnum3,
  ITUSre6,
  ITUSre7,
  ITUSre9,
  ITUSre10,
  ITUSDEre6,
  ITUSDEre7,
  ITUSre8,
];
const REgroup3 = [ITUSre, ITUSre2, ITUSre3, ITUSre4, ITUSre5];
const REgroup4 = [WnumITnum];
const REgroups = [REgroup1, REgroup2, REgroup3, REgroup4];

const regexPatterns = {
  menswear: {
    accessories: [cmInch, cmInchType2, numUS, OneSize, ITUSre, Wnum],
    bags: [cmInchType2, OneSize1],
    frames: [OneSize],
    jackets_and_coats: [ITUSre, USre, numUSType2],
    hats: [cmUS, OneSize],
    pants: [USre2, ITUSre2, WnumLnum, ITUSDEre2],
    shirts: [ITUSre3, USre3],
    shoes: [num, OneSize2, EUUSre1],
    shorts: [USre4],
    suits_and_blazers: [USre5, ITUSre],
    sweaters: [USre6, ITUSre],
    swim: [USre7],
    underwear_and_swim: [USre8],
  },
  womenswear: {
    accessories: [numUS2, cmInch2, cmUS, ITUSre4, USre9, ITUSDEre3, OneSize],
    bags: [USre10],
    dresses: [USre11, USnum, ITUSDEre4, USre12, ITUSre4],
    frames: [OneSize],
    hats: [cmUS, OneSize],
    jackets_and_coats: [USre13, ITUSDEre5, ITUSre, OneSize],
    jewelry: [USre14],
    pants_and_jumpsuits: [
      numUS1,
      ITUSre5,
      ITre,
      USre15,
      Wnum,
      WnumITnum,
      USnum1,
    ],
    shoes: [num, EUUSre1, OneSize3],
    shorts: [ITUSre6, Wnum1, USre16, ITUSDEre6],
    skirts: [ITUSre7, USre17, ITUSDEre7, OneSize],
    sweaters: [ITUSre8, ITre1, USre18, USnum2, OneSize],
    swim: [ITUSre9],
    tops: [ITUSre10, ITre2, USre19, USnum3, ITUSDEre8, numUSType2],
  },
  electronics: {
    OneSize: [OneSize],
  },
};

function findMatches(product) {
  const matches = [];
  const allCategories = ["backpacks", "bags", "briefcases", "clutch bags", "frames for men", "leather accessories", "luggage and travel", "messenger bags", "shoulder bags", "tote bags", "wallets", "accessories", "belts", "bracelets", "cufflinks", "cummerbund", "gloves", "handkerchief", "hats", "hats & caps", "keychains", "money clips", "necklaces for men", "other", "rings", "rings for men", "scarves", "ties & bowties", "tie clips", "watches for men", "boots", "casual", "formal", "loafers", "sandals", "sneakers", "blazers", "jackets", "jackets & coats", "frames for men", "sunglasses for men", "hats", "hat", "jeans & pants", "pants", "cardigans", "shirts", "t-shirts", "sleepwear", "vests", "shorts", "sweatsuits", "suits", "suits & blazers", "sweaters", "sweaters_knitwear", "swim", "underwear and swim", "watches for women", "backpacks", "bags", "belt bags", "clutch bags", "crossbody bags", "evening bags", "handbags", "leather accessories", "luggage and travel", "satchel bags", "shoulder bags", "tote bags", "wallets", "bracelets", "brooches", "earrings", "earrings for women", "jewelry", "jewellery sets for women", "necklaces", "necklaces for women", "other", "others", "rings", "wallets for women", "dresses", "flat shoes", "platforms & wedges", "pumps", "skirts"];
  const descriptionStr = product.description.split(" ");
  let regexes;
  let category;
  if (product.subCategory) {
    category = product.subCategory;
  } else if (!product.subCategory && product.category) {
    category = product.category
  } else {
    descriptionStr.forEach(description => allCategories.includes(description) ? category = description : null)
  }
  if (product.gender === "men") {
      if (["backpacks", "bags", "briefcases", "clutch bags", "frames for men", "leather accessories", "luggage and travel", "messenger bags", "shoulder bags", "tote bags", "wallets"].includes(category)) {
        regexes = regexPatterns.menswear.bags;
      }
      else if (["accessories", "belts", "bracelets", "cufflinks", "cummerbund", "gloves", "handkerchief", "hats", "hats & caps", "keychains", "money clips", "necklaces for men", "other", "rings", "rings for men", "scarves", "ties & bowties", "tie clips", "watches for men"].includes(category)) {
        regexes = regexPatterns.menswear.accessories;
      }
      else if (["boots", "casual", "formal", "loafers", "sandals", "sneakers"].includes(category)) {
        regexes = regexPatterns.menswear.shoes;
      }
      else if (["blazers", "jackets", "jackets & coats"].includes(category)) {
        regexes = regexPatterns.menswear.jackets_and_coats;
      }
      else if (["frames for men", "sunglasses for men"].includes(category)) {
        regexes = regexPatterns.menswear.frames;
      }
      else if (["hats", "hat"].includes(category)) {
        regexes = regexPatterns.menswear.hats;
      } 
      else if (["jeans & pants", "pants"].includes(category)) {
        regexes = regexPatterns.menswear.pants;
      }
      else if (["cardigans", "shirts", "t-shirts", "sleepwear", "vests"].includes(category)) {
        regexes = regexPatterns.menswear.shirts;
      }
      else if (["shorts", "sweatsuits"].includes(category)) {
        regexes = regexPatterns.menswear.shorts;
      }
      else if (["suits", "suits & blazers"].includes(category)) {
        regexes = regexPatterns.menswear.suits_and_blazers;
      }
      else if (["sweaters", "sweaters_knitwear"].includes(category)) {
        regexes = regexPatterns.menswear.sweaters;
      }
      else if (category === "swim") {
        regexes = regexPatterns.menswear.swim;
      }
      else if (category === "underwear and swim") {
        regexes = regexPatterns.menswear.underwear_and_swim;
      }
  } else if (product.gender === "women") {
      if (["accessories", "belts", "gloves", "hat", "headbands", "keychains", "other", "scarves", "watches for women"].includes(category)) {
        regexes = regexPatterns.womenswear.accessories;
      }
      else if (["backpacks", "bags", "belt bags", "clutch bags", "crossbody bags", "evening bags", "handbags", "leather accessories", "luggage and travel", "satchel bags", "shoulder bags", "tote bags", "wallets"].includes(category)) {
        regexes = regexPatterns.womenswear.bags;
      }
      // is this the correct set of regexPatterns for blazers?  verify.
      else if (["blazers", "jackets", "jackets & coats", "suits & blazers"].includes(category)) {
        regexes = regexPatterns.womenswear.jackets_and_coats;
      }
      else if (["bracelets", "brooches", "earrings", "earrings for women", "jewelry", "jewellery sets for women", "necklaces", "necklaces for women", "other", "others", "rings", "wallets for women"].includes(category)) {
        regexes = regexPatterns.womenswear.jewelry;
      }
      else if (category === "dresses") {
        regexes = regexPatterns.womenswear.dresses;
      }
      else if (["frames for women", "sunglasses for women"].includes(category)) {
        regexes = regexPatterns.womenswear.frames;
      }
      else if (["hats", "hat"].includes(category)) {
        regexes = regexPatterns.womenswear.hats;
      } 
      else if (["jeans & pants", "pants and jumpsuits"].includes(category)) {
        regexes = regexPatterns.womenswear.pants_and_jumpsuits;
      }
      // verify this is the correct pattern for shirts
      else if (["clothing", "shirts", "t-shirts", "tops", "cardigans", "tops & t-shirts", "vests"].includes(category)) {
        regexes = regexPatterns.womenswear.tops;
      }
      else if (["boots", "flat shoes", "platforms & wedges", "pumps", "sandals", "sneakers", "shoes"].includes(category)) {
        regexes = regexPatterns.womenswear.shoes;
      }
      else if (category === "shorts") {
        regexes = regexPatterns.womenswear.shorts;
      }
      else if (category === "skirts") {
        regexes = regexPatterns.womenswear.skirts;
      }
      else if (["sleepwear", "swim", "tights & socks"].includes(category)) {
        regexes = regexPatterns.womenswear.swim;
      }
      else if (category === "sweaters") {
        regexes = regexPatterns.womenswear.sweaters;
      }
  } else if (product.gender === "electronics") {
    regexes = regexPatterns.electronics.OneSize;
  }
  // console.log("326  " + product.size + " " + category, regexes);

  regexes.forEach((regex) =>
    regex.test(product.size) ? matches.push(product.size.match(regex)) : null
  );

  // console.log("332  " + category, matches);

  const regexPattern = regexes.filter((regex) => regex.test(product.size));
  // console.log("335", regexPattern);


// row 45 in spreadsheet is not pulling the right size?
  const formattedSizes = [];
  for (let i = 0; i < REgroups.length; i++) {
    // console.log(320, REgroups[i]);
    REgroups[i].forEach((pattern) => {
      if (pattern.toString() === regexPattern.toString()) {
        // console.log(323, i, matches[0][i + 1]);
        formattedSizes.push(matches[0][i + 1]);
      }
    });
  }
  // if (parseInt(formattedSizes[0])) {
  //   return "it_" + formattedSizes[0];
  // } else {
  //   return formattedSizes[0];
  // }
  return "it_" + formattedSizes[0];
}
