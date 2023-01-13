//men's accessories
// const cmInch = /^\s*(1?\d{2})\s*(cm)\s*\/\s*([2-4]\d)\s*(in|inches)\s*$/i;
// const numUS = /^\s*(1\d,?.?5?)\s*\|\s*(XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;

//men's bags
// const cmInchType2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i;
//OneSize

// //men's jackets and coats
// const ITnumUSre =
//   /^\s*(IT)\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
// const USre = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i;
// const numUSType2 = /^\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]XL|XXL)\s*$/i;

// //men's pants
// //USre
// // ITUSre
// const WnumLnum = /^\s*(W)\s*([2-4][0-9])\s*\|?\s*(L\d{2})$/i;
// const ITnumUSDEre =
//   /^\s*(IT)\s*([3-6][0-9])\s*-\s*(XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-de\s*$/i;

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
// //"XL | 46"
// const USnum =
//   /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i;
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
// const ITnumre = /^\s*(IT)\s*([3-6]\d)\s*$/i;
// // USre
// const Wnum = /^\s*(W)\s*([2-5]\d)\s*$/i;
// const WnumITnum = /^\s*(W)\s*([2-4]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i;
// USnum

//women's shoes
// const num = /^\s*([2-4]\d)\s*$/i;
// const EUnumUSnumre1 =
//   /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i;
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
// const ITUSre = /^\s*(IT)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i;

// const grailedREPatterns = {
//   menswear: {
//     jackets_and_coats: [ITUSre, USre, numUSType2],
//     pants: [USre, ITUSre, WnumLnum, ITUSDEre],
//     shirts: [ITUSre, USre],
//     shoes: [num, OneSize, EUUSre1],
//     shorts: [USre],
//     suits_and_blazers: [USre, ITUSre],
//     sweaters: [USre, ITUSre],
//     swim: [USre],
//     underwear_and_swim: [USre],
//   },
//   womenswear: {
//     dresses: [USre, USnum, ITUSDEre, USre, ITUSre],
//     jackets_and_coats: [USre, ITUSDEre, ITUSre, OneSize],
//     pants_and_jumpsuits: [numUS, ITUSre, ITre, USre, Wnum, WnumITnum, USnum],
//     shoes: [num, EUUSre1, OneSize],
//     shorts: [ITUSre, Wnum, USre, ITUSDEre],
//     skirts: [ITUSre, USre, ITUSDEre, OneSize],
//     sweaters: [ITUSre, ITre, USre, USnum, OneSize],
//     swim: [ITUSre],
//     tops: [ITUSre, ITre, USre, USnum, ITUSDEre, numUSType2],
//   },
// };

// const allCategories = [
//   "luggage and travel",
//   "belts",
//   "cummerbund",
//   "gloves",
//   "boots",
//   "casual",
//   "formal",
//   "loafers",
//   "sandals",
//   "sneakers",
//   "blazers",
//   "jackets",
//   "jackets & coats",
//   "jeans & pants",
//   "pants",
//   "cardigans",
//   "shirts",
//   "t-shirts",
//   "sleepwear",
//   "vests",
//   "shorts",
//   "sweatsuits",
//   "suits",
//   "suits & blazers",
//   "sweaters",
//   "sweaters_knitwear",
//   "swim",
//   "underwear and swim",
//   "dresses",
//   "flat shoes",
//   "platforms & wedges",
//   "pumps",
//   "skirts",
// ];
// const descriptionStr = description.split(" ");

// let cat;

// if (subCategory) {
//   cat = subCategory;
// } else if (!subCategory && category) {
//   cat = category;
// } else {
//   descriptionStr.forEach((description) =>
//     allCategories.includes(description) ? (cat = description) : null
//   );
// }
// if (gender === "men") {
//   if (
//     ["boots", "casual", "formal", "loafers", "sandals", "sneakers"].includes(
//       cat
//     )
//   ) {
//     regexes = grailedREPatterns.menswear.shoes;
//   } else if (["blazers", "jackets", "jackets & coats"].includes(cat)) {
//     regexes = grailedREPatterns.menswear.jackets_and_coats;
//   } else if (["jeans & pants", "pants"].includes(cat)) {
//     regexes = grailedREPatterns.menswear.pants;
//   } else if (
//     ["cardigans", "shirts", "t-shirts", "sleepwear", "vests"].includes(cat)
//   ) {
//     regexes = grailedREPatterns.menswear.shirts;
//   } else if (["shorts", "sweatsuits"].includes(cat)) {
//     regexes = grailedREPatterns.menswear.shorts;
//   } else if (["suits", "suits & blazers"].includes(cat)) {
//     regexes = grailedREPatterns.menswear.suits_and_blazers;
//   } else if (["sweaters", "sweaters_knitwear"].includes(cat)) {
//     regexes = grailedREPatterns.menswear.sweaters;
//   } else if (cat === "swim") {
//     regexes = grailedREPatterns.menswear.swim;
//   } else if (cat === "underwear and swim") {
//     regexes = grailedREPatterns.menswear.underwear_and_swim;
//   } else {
//     regexes = allREs;
//   }
// } else if (gender === "women") {
//   // is this the correct set of grailedREPatterns for blazers?  verify.
//   if (
//     ["blazers", "jackets", "jackets & coats", "suits & blazers"].includes(cat)
//   ) {
//     regexes = grailedREPatterns.womenswear.jackets_and_coats;
//   } else if (cat === "dresses") {
//     regexes = grailedREPatterns.womenswear.dresses;
//   } else if (["jeans & pants", "pants and jumpsuits"].includes(cat)) {
//     regexes = grailedREPatterns.womenswear.pants_and_jumpsuits;
//   }
//   // verify this is the correct pattern for shirts
//   else if (
//     [
//       "clothing",
//       "shirts",
//       "t-shirts",
//       "tops",
//       "cardigans",
//       "tops & t-shirts",
//       "vests",
//     ].includes(cat)
//   ) {
//     regexes = grailedREPatterns.womenswear.tops;
//   } else if (
//     [
//       "boots",
//       "flat shoes",
//       "platforms & wedges",
//       "pumps",
//       "sandals",
//       "sneakers",
//       "shoes",
//     ].includes(cat)
//   ) {
//     regexes = grailedREPatterns.womenswear.shoes;
//   } else if (cat === "shorts") {
//     regexes = grailedREPatterns.womenswear.shorts;
//   } else if (cat === "skirts") {
//     regexes = grailedREPatterns.womenswear.skirts;
//   } else if (["sleepwear", "swim", "tights & socks"].includes(cat)) {
//     regexes = grailedREPatterns.womenswear.swim;
//   } else if (cat === "sweaters") {
//     regexes = grailedREPatterns.womenswear.sweaters;
//   } else {
//     regexes = allREs;
//   }
// } else {
//   regexes = allREs;
// }
