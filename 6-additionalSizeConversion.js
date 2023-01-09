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
