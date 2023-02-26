const productsWithErrors =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("errors-products");

const finalGrailed =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("finalGrailed");

const validCategories = [
  "tops.long_sleeve_shirts",
  "tops.polos",
  "tops.button_ups",
  "tops.short_sleeve_shirts",
  "tops.sweaters_knitwear",
  "tops.sweatshirts_hoodies",
  "tops.sleeveless",
  "tops.jerseys",
  "bottoms.casual_pants",
  "bottoms.cropped_pants",
  "bottoms.denim",
  "bottoms.leggings",
  "bottoms.jumpsuits",
  "bottoms.shorts",
  "bottoms.sweatpants_joggers",
  "bottoms.swimwear",
  "outerwear.bombers",
  "outerwear.cloaks_capes",
  "outerwear.denim_jackets",
  "outerwear.heavy_coats",
  "outerwear.leather_jackets",
  "outerwear.light_jackets",
  "outerwear.parkas",
  "outerwear.raincoats",
  "outerwear.vests",
  "footwear.boots",
  "footwear.leather",
  "footwear.formal_shoes",
  "footwear.hitop_sneakers",
  "footwear.lowtop_sneakers",
  "footwear.sandals",
  "footwear.slip_ons",
  "tailoring.blazers",
  "tailoring.formal_shirting",
  "tailoring.formal_trousers",
  "tailoring.suits",
  "tailoring.tuxedos",
  "tailoring.vests",
  "accessories.bags_luggage",
  "accessories.belts",
  "accessories.glasses",
  "accessories.gloves_scarves",
  "accessories.hats",
  "accessories.jewelry_watches",
  "accessories.wallets",
  "accessories.misc",
  "accessories.periodicals",
  "accessories.socks_underwear",
  "accessories.sunglasses",
  "accessories.supreme",
  "accessories.ties_pocketsquares",
  "womens_tops.blouses",
  "womens_tops.bodysuits",
  "womens_tops.button_ups",
  "womens_tops.crop_tops",
  "womens_tops.hoodies",
  "womens_tops.long_sleeve_shirts",
  "womens_tops.polos",
  "womens_tops.short_sleeve_shirts",
  "womens_tops.sweaters",
  "womens_tops.sweatshirts",
  "womens_tops.tank_tops",
  "womens_jewelry.body_jewelry",
  "womens_jewelry.bracelets",
  "womens_jewelry.brooches",
  "womens_jewelry.charms",
  "womens_jewelry.cufflinks",
  "womens_jewelry.earrings",
  "womens_jewelry.necklaces",
  "womens_jewelry.rings",
  "womens_bottoms.jeans",
  "womens_bottoms.joggers",
  "womens_bottoms.jumpsuits",
  "womens_bottoms.leggings",
  "womens_bottoms.maxi_skirts",
  "womens_bottoms.midi_skirts",
  "womens_bottoms.mini_skirts",
  "womens_bottoms.pants",
  "womens_bottoms.shorts",
  "womens_bottoms.sweatpants",
  "womens_outerwear.blazers",
  "womens_outerwear.bombers",
  "womens_outerwear.coats",
  "womens_outerwear.denim_jackets",
  "womens_outerwear.down_jackets",
  "womens_outerwear.fur_faux_fur",
  "womens_outerwear.jackets",
  "womens_outerwear.leather_jackets",
  "womens_outerwear.rain_jackets",
  "womens_outerwear.vests",
  "womens_footwear.boots",
  "womens_footwear.heels",
  "womens_footwear.platforms",
  "womens_footwear.mules",
  "womens_footwear.flats",
  "womens_footwear.hitop_sneakers",
  "womens_footwear.lowtop_sneakers",
  "womens_footwear.sandals",
  "womens_footwear.slip_ons",
  "womens_dresses.mini",
  "womens_dresses.midi",
  "womens_dresses.maxi",
  "womens_dresses.gowns",
  "womens_accessories.belts",
  "womens_accessories.glasses",
  "womens_accessories.gloves",
  "womens_accessories.hair_accessories",
  "womens_accessories.hats",
  "womens_accessories.miscellaneous",
  "womens_accessories.scarves",
  "womens_accessories.socks_intimates",
  "womens_accessories.sunglasses",
  "womens_accessories.wallets",
  "womens_accessories.watches",
  "womens_bags_luggage.backpacks",
  "womens_bags_luggage.belt_bags",
  "womens_bags_luggage.bucket_bags",
  "womens_bags_luggage.clutches",
  "womens_bags_luggage.crossbody_bags",
  "womens_bags_luggage.handle_bags",
  "womens_bags_luggage.hobo_bags",
  "womens_bags_luggage.luggage_travel",
  "womens_bags_luggage.messengers_satchels",
  "womens_bags_luggage.mini_bags",
  "womens_bags_luggage.other",
  "womens_bags_luggage.shoulder_bags",
  "womens_bags_luggage.toiletry_pouches",
  "womens_bags_luggage.tote_bags",
];

const validSizes = {
  tops: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
  outerwear: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
  bottoms: [
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  ],
  footwear: [
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13,
    14, 15,
  ],
  tailoring: [
    "34s",
    "34r",
    "36s",
    "36r",
    "38s",
    "38r",
    "38l",
    "40s",
    "40r",
    "40l",
    "42s",
    "42r",
    "42l",
    "44s",
    "44r",
    "44l",
    "46s",
    "46r",
    "46l",
    "48s",
    "48r",
    "48l",
    "50s",
    "50r",
    "50l",
    "52s",
    "52r",
    "52l",
    "54r",
    "54l",
  ],
  accessories: ["one size", 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  womens_tops: [
    "universal_xxs",
    "universal_xs",
    "universal_s",
    "universal_m",
    "universal_l",
    "universal_xl",
    "universal_xxl",
    "universal_3xl",
    "universal_4xl",
    "universal_os",
    "us_00",
    "us_0",
    "us_2",
    "us_4",
    "us_6",
    "us_8",
    "us_10",
    "us_12",
    "us_14",
    "us_16",
    "us_18",
    "us_20",
    "us_22",
    "us_24",
    "us_26",
    "it_34",
    "it_36",
    "it_38",
    "it_40",
    "it_42",
    "it_44",
    "it_46",
    "it_48",
    "it_50",
    "it_52",
    "it_54",
    "uk_2",
    "uk_4",
    "uk_6",
    "uk_8",
    "uk_10",
    "uk_12",
    "uk_14",
    "uk_16",
    "uk_18",
    "uk_20",
    "uk_22",
    "uk_24",
    "uk_26",
    "uk_28",
    "uk_30",
    "fr_32",
    "fr_34",
    "fr_36",
    "fr_38",
    "fr_40",
    "fr_42",
    "fr_44",
    "fr_46",
    "fr_48",
  ],
  womens_outerwear: [
    "universal_xxs",
    "universal_xs",
    "universal_s",
    "universal_m",
    "universal_l",
    "universal_xl",
    "universal_xxl",
    "universal_3xl",
    "universal_4xl",
    "universal_os",
    "us_00",
    "us_0",
    "us_2",
    "us_4",
    "us_6",
    "us_8",
    "us_10",
    "us_12",
    "us_14",
    "us_16",
    "us_18",
    "us_20",
    "us_22",
    "us_24",
    "us_26",
    "it_34",
    "it_36",
    "it_38",
    "it_40",
    "it_42",
    "it_44",
    "it_46",
    "it_48",
    "it_50",
    "it_52",
    "it_54",
    "uk_2",
    "uk_4",
    "uk_6",
    "uk_8",
    "uk_10",
    "uk_12",
    "uk_14",
    "uk_16",
    "uk_18",
    "uk_20",
    "uk_22",
    "uk_24",
    "uk_26",
    "uk_28",
    "uk_30",
    "fr_32",
    "fr_34",
    "fr_36",
    "fr_38",
    "fr_40",
    "fr_42",
    "fr_44",
    "fr_46",
    "fr_48",
  ],
  womens_dresses: [
    "universal_xxs",
    "universal_xs",
    "universal_s",
    "universal_m",
    "universal_l",
    "universal_xl",
    "universal_xxl",
    "universal_3xl",
    "universal_4xl",
    "universal_os",
    "us_00",
    "us_0",
    "us_2",
    "us_4",
    "us_6",
    "us_8",
    "us_10",
    "us_12",
    "us_14",
    "us_16",
    "us_18",
    "us_20",
    "us_22",
    "us_24",
    "us_26",
    "it_34",
    "it_36",
    "it_38",
    "it_40",
    "it_42",
    "it_44",
    "it_46",
    "it_48",
    "it_50",
    "it_52",
    "it_54",
    "uk_2",
    "uk_4",
    "uk_6",
    "uk_8",
    "uk_10",
    "uk_12",
    "uk_14",
    "uk_16",
    "uk_18",
    "uk_20",
    "uk_22",
    "uk_24",
    "uk_26",
    "uk_28",
    "uk_30",
    "fr_32",
    "fr_34",
    "fr_36",
    "fr_38",
    "fr_40",
    "fr_42",
    "fr_44",
    "fr_46",
    "fr_48",
  ],
  womens_bottoms: [
    "universal_22",
    "universal_23",
    "universal_24",
    "universal_25",
    "universal_26",
    "universal_27",
    "universal_28",
    "universal_29",
    "universal_30",
    "universal_31",
    "universal_32",
    "universal_33",
    "universal_34",
    "universal_35",
    "universal_36",
    "universal_37",
    "universal_38",
    "universal_39",
    "universal_40",
    "universal_41",
    "universal_42",
    "us_00",
    "us_0",
    "us_2",
    "us_4",
    "us_6",
    "us_8",
    "us_10",
    "us_12",
    "us_14",
    "us_16",
    "us_18",
    "us_20",
    "it_34",
    "it_36",
    "it_38",
    "it_40",
    "it_42",
    "it_44",
    "it_46",
    "it_48",
    "it_50",
    "it_52",
    "uk_2",
    "uk_4",
    "uk_6",
    "uk_8",
    "uk_10",
    "uk_12",
    "uk_14",
    "uk_16",
    "uk_18",
    "uk_20",
    "uk_22",
    "uk_24",
    "fr_32",
    "fr_34",
    "fr_36",
    "fr_38",
    "fr_40",
    "fr_42",
    "fr_44",
    "fr_46",
    "fr_48",
    "fr_50",
  ],
  womens_footwear: [
    "us_4",
    "us_4-5",
    "us_5",
    "us_5-5",
    "us_6",
    "us_6-5",
    "us_7",
    "us_7-5",
    "us_8",
    "us_8-5",
    "us_9",
    "us_9-5",
    "us_10",
    "us_10-5",
    "us_11",
    "us_11-5",
    "us_12",
    "it_34",
    "it_34-5",
    "it_35",
    "it_35-5",
    "it_36",
    "it_36-5",
    "it_37",
    "it_37-5",
    "it_38",
    "it_38-5",
    "it_39",
    "it_39-5",
    "it_40",
    "it_40-5",
    "it_41",
    "it_41-5",
    "it_42",
    "uk_1-5",
    "uk_2",
    "uk_2-5",
    "uk_3",
    "uk_3-5",
    "uk_4",
    "uk_4-5",
    "uk_5",
    "uk_5-5",
    "uk_6",
    "uk_6-5",
    "uk_7",
    "uk_7-5",
    "uk_8",
    "uk_8-5",
    "uk_9",
    "uk_9-5",
    "fr_35",
    "fr_35-5",
    "fr_36",
    "fr_36-5",
    "fr_37",
    "fr_37-5",
    "fr_38",
    "fr_38-5",
    "fr_39",
    "fr_39-5",
    "fr_40",
    "fr_40-5",
    "fr_41",
    "fr_41-5",
    "fr_42",
    "fr_42-5",
    "fr_43",
  ],
  womens_accessories: "universal_os",
  womens_bags_luggage: "universal_os",
  womens_jewelry: "universal_os",
};

function populateErrorsSheet() {
  const products = grailed22.getSheetValues(
    2,
    1,
    grailed22.getLastRow(),
    grailed22.getLastColumn()
  );

  const invalidProducts = products.filter((product) => {
    // Check for missing or incorrect categories
    let categoryString = product[4] ? product[4].toLowerCase() : "";
    if (validCategories.includes(categoryString)) {
      return true;
    }
    // Check for missing or incorrect sizes
    let sizeString = product[8] ? product[8] : product[9];
    if (
      !sizeString ||
      sizeString === "noSizeConversion!" ||
      sizeString === "size missing!"
    ) {
      return true;
    }
    let matchingKey = Object.keys(validSizes).find((key) =>
      categoryString.includes(key.toLowerCase())
    );
    let sizeRegex = new RegExp(`^(it_|uk_|fr_)[0-9]+$`);
    if (!matchingKey || !validSizes[matchingKey]) {
      return true;
    }
    if (sizeRegex.test(sizeString)) {
      return false;
    }
    let availableSizes = validSizes[matchingKey];
    let matchFound = Object.values(availableSizes).some((size) => {
      if (typeof size === "string") {
        return (
          size.trim().toLowerCase() ===
            sizeString.toString().trim().toLowerCase() ||
          sizeString
            .toString()
            .trim()
            .toLowerCase()
            .includes(size.trim().toLowerCase())
        );
      } else {
        return size == parseInt(sizeString);
      }
    });
    return !matchFound;
  });

  productsWithErrors.clear();
  productsWithErrors
    .getRange(1, 1, 1, 22)
    .setValues([
      [
        "external_seller_reference",
        "inventory",
        "title",
        "description",
        "category",
        "designer",
        "designer2",
        "designer3",
        "size",
        "exact_size",
        "condition",
        "color",
        "price",
        "tags",
        "photo_urls",
        "shipping_us",
        "shipping_ca",
        "shipping_uk",
        "shipping_eu",
        "shipping_asia",
        "shipping_au",
        "shipping_other",
      ],
    ]);

  productsWithErrors
    .getRange(2, 1, invalidProducts.length, invalidProducts[0].length)
    .setValues(invalidProducts);
}

function populateFinalSheet() {
  const products = grailed22.getSheetValues(
    2,
    1,
    grailed22.getLastRow(),
    grailed22.getLastColumn()
  );

  const validProducts = products.filter((product) => {
    let categoryString = product[4].toLowerCase();
    let matchingKey;
    if (categoryString.includes("womens_bottoms")) {
      matchingKey = "womens_bottoms";
    } else if (categoryString.includes("womens_footwear")) {
      matchingKey = "womens_footwear";
    } else if (categoryString.includes("womens_accessories")) {
      matchingKey = "womens_accessories";
    } else if (categoryString.includes("womens_dresses")) {
      matchingKey = "womens_dresses";
    } else if (categoryString.includes("womens_outerwear")) {
      matchingKey = "womens_outerwear";
    } else {
      matchingKey = Object.keys(validSizes).find((key) =>
        categoryString.includes(key.toLowerCase())
      );
    }

    let sizeString = product[8] ? product[8] : product[9];
    let sizeRegex = new RegExp(`^(it_|uk_|fr_)[0-9]+$`);
    let matchFound = false;

    if (matchingKey) {
      let availableSizes = validSizes[matchingKey];
      matchFound = Object.values(availableSizes).some((size) => {
        if (typeof size === "string") {
          return (
            size.trim().toLowerCase() ===
              sizeString.toString().trim().toLowerCase() ||
            sizeString
              .toString()
              .trim()
              .toLowerCase()
              .includes(size.trim().toLowerCase())
          );
        } else {
          return size === parseInt(sizeString);
        }
      });
    }
    if (sizeRegex.test(sizeString)) matchFound = true;
    return (
      validCategories.includes(categoryString) &&
      matchFound &&
      sizeString &&
      sizeString !== "noSizeConversion!" &&
      sizeString !== "size missing!"
    );
  });

  finalGrailed.clear();
  finalGrailed
    .getRange(1, 1, 1, 22)
    .setValues([
      [
        "external_seller_reference",
        "inventory",
        "title",
        "description",
        "category",
        "designer",
        "designer2",
        "designer3",
        "size",
        "exact_size",
        "condition",
        "color",
        "price",
        "tags",
        "photo_urls",
        "shipping_us",
        "shipping_ca",
        "shipping_uk",
        "shipping_eu",
        "shipping_asia",
        "shipping_au",
        "shipping_other",
      ],
    ]);

  finalGrailed
    .getRange(2, 1, validProducts.length, validProducts[0].length)
    .setValues(validProducts);
}
