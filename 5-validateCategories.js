const productsWithErrors =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("errors-products");

const finalGrailed =
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("finalGrailed");

function formatErrorsHeader() {
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
}

function formatFinalHeader() {
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
}

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

function validateCategories() {
  const products = grailed22.getSheetValues(
    2,
    1,
    grailed22.getLastRow(),
    grailed22.getLastColumn()
  );
  const invalidProducts = products.filter(
    (row) =>
      !validCategories.includes(
        row[4] ||
          !row[4] ||
          row[8] === "noSizeConversion!" ||
          row[9] === "noSizeConversion!" ||
          (!row[8] && !row[9])
      )
  );
  const validatedProducts = products.filter(
    (row) =>
      (row[8] || row[9]) &&
      row[8] !== "noSizeConversion!" &&
      row[9] !== "noSizeConversion" &&
      validCategories.includes(row[4])
  );

  productsWithErrors
    .getRange(2, 1, invalidProducts.length, invalidProducts[0].length)
    .setValues(invalidProducts);

  finalGrailed
    .getRange(2, 1, validatedProducts.length, validatedProducts[0].length)
    .setValues(validatedProducts);
}

function clearErrorsSheet() {
  productsWithErrors.clearContents();
}

function clearFinalSheet() {
  finalGrailed.clearContents();
}

function onEdit(e) {
  // let activeSheet = e.source.getActiveSheet();
  // if (activeSheet.getName() == "errors-products") {
  if (e.range.columnStart == 5 && e.range.rowStart != 1) {
    e.range.offset(1, 0).setValue("working");
  }
}
// }
