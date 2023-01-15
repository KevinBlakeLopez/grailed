function convertSubCategories(
  subcategory,
  gender,
  title,
  description,
  bgCat,
  SKU
) {
  let newSubCat;
  let options;
  if (["briefcases"].includes(subcategory)) {
    if (gender === "men") {
      newSubCat = "bags_luggage";
    } else if (gender === "women") {
      newSubCat = "handle_bags";
    }
  } else if (subcategory === "cummerbund") {
    newSubCat = "misc";
  } else if (subcategory === "leather accessories") {
    if (
      description.includes("condom") ||
      title.includes("condom") ||
      gender === "men"
    ) {
      newSubCat = "misc";
    } else if (gender === "women") {
      newSubCat = "miscellaneous";
    }
  } else if (
    subcategory === "wallets for women" ||
    subcategory === "wallets" ||
    bgCat === "wallets"
  ) {
    newSubCat = "wallets";
  } else if (bgCat === "accessories" && subcategory === "scarves") {
    if (gender === "men") {
      newSubCat = "gloves_scarves";
    } else if (gender === "women") {
      newSubCat = "scarves";
    }
  } else if (
    bgCat === "bags" &&
    gender === "men" &&
    (subcategory !== "wallets" ||
      !description.includes("wallet") ||
      !title.includes("wallet"))
  ) {
    newSubCat = "bags_luggage";
  } else if (["backpacks"].includes(subcategory) && gender === "women") {
    newSubCat = subcategory;
  } else if (subcategory === "belt bags") {
    newSubCat = "belt_bags";
  } else if (
    subcategory === "clutch bags" ||
    subcategory === "evening bags" ||
    (bgCat === "bags" &&
      (title.includes("clutch") || description.includes("clutch")))
  ) {
    newSubCat = "clutches";
  } else if (subcategory === "crossbody bags") {
    newSubCat = "crossbody_bags";
  } else if (
    [
      "belts",
      "blazers",
      "boots",
      "earrings",
      "hats",
      "sandals",
      "shorts",
      "suits",
      "vests",
    ].includes(subcategory)
  ) {
    newSubCat = subcategory;
  } else if (subcategory === "bracelets") {
    if (gender === "women") {
      newSubCat = "bracelets";
    } else if (gender === "men") {
      newSubCat = "jewelry_watches";
    }
  } else if (subcategory === "brooches") {
    if (gender === "women") {
      newSubCat = "brooches";
    }
  } else if (subcategory === "cufflinks") {
    if (gender === "women") {
      newSubCat = "cufflinks";
    } else if (gender === "men") {
      newSubCat = "misc";
    }
  } else if (subcategory === "earrings") {
    if (gender === "women") {
      newSubCat = "earrings";
    }
  } else if (["sweatsuits"].includes(subcategory)) {
    if (
      title.includes("pants") ||
      description.includes("pants") ||
      title.includes("jog") ||
      description.includes("jog")
    ) {
      newSubCat = "sweatpants_joggers";
    } else if (
      title.includes("sweatsuit") ||
      description.includes("sweatsuits") ||
      title.includes("jumpsuit") ||
      description.includes("jumpsuit")
    ) {
      newSubCat = "jumpsuits";
    }
  } else if (["sneakers"].includes(subcategory)) {
    if (title.includes("hitop") || description.includes("hitop")) {
      newSubCat = "hitop_sneakers";
    } else {
      newSubCat = "lowtop_sneakers";
    }
  } else if (["luggage and travel"].includes(subcategory)) {
    if (gender === "men") {
      newSubCat = "bags_luggage";
    }
  } else if (gender === "women" && ["dresses"].includes(subcategory)) {
    if (title.includes("jumpsuit") || description.includes("jumpsuit")) {
      newSubCat = "jumpsuits";
    } else if (
      description.includes("mini") ||
      description.includes("above-knee") ||
      description.includes("above knee") ||
      description.includes("short dress") ||
      description.includes("short sleeveless") ||
      title.includes("mini") ||
      title.includes("above knee") ||
      title.includes("above-knee") ||
      title.includes("short dress")
    ) {
      newSubCat = "mini";
    } else if (
      description.includes("midi") ||
      description.includes("knee length") ||
      description.includes("knee-length") ||
      description.includes("knee long") ||
      description.includes("knee-long") ||
      description.includes("over knee") ||
      title.includes("midi") ||
      title.includes("knee length") ||
      title.includes("knee-length") ||
      title.includes("knee long") ||
      title.includes("knee-long") ||
      title.includes("over knee")
    ) {
      newSubCat = "midi";
    } else if (
      description.includes("maxi") ||
      description.includes("floor length") ||
      description.includes("floor-length") ||
      description.includes("full length") ||
      description.includes("full-length") ||
      description.includes("long dress") ||
      description.includes("long sleeveless") ||
      title.includes("maxi") ||
      title.includes("full length") ||
      title.includes("floor length") ||
      title.includes("long dress")
    ) {
      newSubCat = "maxi";
    } else if (description.includes("gown") || title.includes("gown")) {
      newSubCat = "gowns";
    } else {
      newSubCat = "midi";
    }
  } else if (
    [
      "frames",
      "frames for men",
      "frames for women",
      "glasses",
      "unisex frames",
    ].includes(subcategory) ||
    [
      "frames",
      "frames for men",
      "frames for women",
      "glasses",
      "unisex frames",
    ].includes(bgCat)
  ) {
    newSubCat = "glasses";
  } else if (bgCat === "shoes") {
    if (subcategory === "formal") {
      newSubCat = "formal_shoes";
    } else if (
      subcategory === "pumps" ||
      description.includes("pumps") ||
      title.includes("pumps")
    ) {
      newSubCat = "heels";
    } else if (subcategory === "flat shoes") {
      newSubCat = "flats";
    } else if (
      description.includes("slip") ||
      title.includes("slip") ||
      description.includes("moccasin") ||
      title.includes("moccasin")
    ) {
      newSubCat = "slip_ons";
    } else if (
      (description.includes("leather") || title.includes("leather")) &&
      gender === "men"
    ) {
      newSubCat = "leather";
    }
  } else if (bgCat === "accessories" && subcategory === "gloves") {
    if (gender === "men") {
      newSubCat = "gloves_scarves";
    } else if (gender === "women") {
      newSubCat = "gloves";
    }
  } else if (subcategory === "handbags" || subcategory === "shoulder bags") {
    newSubCat = "shoulder_bags";
  } else if (subcategory === "handkerchief") {
    newSubCat = "ties_pocketsquares";
  } else if (bgCat === "accessories" && subcategory === "hat") {
    newSubCat = "hats";
  } else if (gender === "women" && ["headbands"].includes(subcategory)) {
    newSubCat = "hair_accessories";
  } else if (
    (!title.includes("sweater") || !description.includes("sweater")) &&
    (subcategory === "jackets" || subcategory === "jackets & coats")
  ) {
    if (gender === "men") {
      if (
        description.includes("rain") ||
        title.includes("rain") ||
        description.includes("trench") ||
        title.includes("trench") ||
        description.includes("waterproof") ||
        title.includes("waterproof")
      ) {
        newSubCat = "raincoats";
      } else if (description.includes("denim") || title.includes("denim")) {
        newSubCat = "denim_jackets";
      } else if (description.includes("leather") || title.includes("leather")) {
        newSubCat = "leather_jackets";
      } else if (description.includes("bomber") || title.includes("bomber")) {
        newSubCat = "bombers";
      } else if (
        description.includes("light") ||
        title.includes("light") ||
        description.includes("windbreaker") ||
        title.includes("windbreaker")
      ) {
        newSubCat = "light_jackets";
      } else if (
        description.includes("heavy") ||
        title.includes("heavy") ||
        description.includes("coat") ||
        title.includes("coat") ||
        description.includes("down") ||
        title.includes("down") ||
        description.includes("bubble") ||
        title.includes("bubble")
      ) {
        newSubCat = "heavy_coats";
      } else if (
        description.includes("parka") ||
        title.includes("parka") ||
        description.includes("long jacket") ||
        title.includes("long jacket")
      ) {
        newSubCat = "parkas";
      } else {
        newSubCat = "light_jackets";
      }
    } else if (gender === "women") {
      if (
        description.includes("rain") ||
        title.includes("rain") ||
        description.includes("trench") ||
        title.includes("trench") ||
        description.includes("waterproof") ||
        title.includes("waterproof")
      ) {
        newSubCat = "rain_jackets";
      } else if (description.includes("denim") || title.includes("denim")) {
        newSubCat = "denim_jackets";
      } else if (
        !title.includes("jumpsuit") &&
        (description.includes("leather") || title.includes("leather"))
      ) {
        newSubCat = "leather_jackets";
      } else if (description.includes("bomber") || title.includes("bomber")) {
        newSubCat = "bombers";
      } else if (description.includes("blazer") || title.includes("blazer")) {
        newSubCat = "blazers";
      } else if (description.includes("fur") || title.includes("fur")) {
        newSubCat = "fur_faux_fur";
      } else if (
        description.includes("down") ||
        title.includes("down") ||
        description.includes("feather") ||
        title.includes("feather")
      ) {
        newSubCat = "down_jackets";
      } else if (
        description.includes("coat") ||
        title.includes("coat") ||
        description.includes("bubble") ||
        title.includes("bubble")
      ) {
        newSubCat = "coats";
      } else if (!title.includes("jumpsuit")) {
        newSubCat = "jackets";
      }
    }
  } else if (subcategory === "jeans & pants") {
    if (gender === "men") {
      if (
        !title.includes("jeans") &&
        !description.includes("jeans") &&
        !title.includes("casual") &&
        !description.includes("casual") &&
        !title.includes("cropped") &&
        !description.includes("cropped") &&
        (title.includes("dress") ||
          title.includes("formal") ||
          description.includes("dress") ||
          description.includes("formal"))
      ) {
        newSubCat = "formal_trousers";
      } else if (title.includes("cropped") || description.includes("cropped")) {
        newSubCat = "cropped_pants";
      } else if (title.includes("legging") || description.includes("legging")) {
        newSubCat = "leggings";
      } else if (
        description.includes("jog") ||
        title.includes("jog") ||
        description.includes("sport") ||
        title.includes("sport") ||
        description.includes("gym") ||
        title.includes("gym")
      ) {
        newSubCat = "sweatpants_joggers";
      } else if (
        title.includes("comfort") ||
        description.includes("comfort") ||
        title.includes("lounge") ||
        description.includes("lounge") ||
        title.includes("chinos") ||
        description.includes("chinos") ||
        description.includes("khakis") ||
        title.includes("khakis") ||
        description.includes("corduroy") ||
        title.includes("corduroy") ||
        description.includes("cargo") ||
        title.includes("cargo") ||
        description.includes("stretch") ||
        title.includes("stretch") ||
        description.includes("baggy") ||
        title.includes("baggy") ||
        description.includes("capri") ||
        title.includes("capri")
      ) {
        newSubCat = "casual_pants";
      } else if (title.includes("jeans") || description.includes("jeans")) {
        newSubCat = "denim";
      } else {
        options = [
          "casual_pants",
          "cropped_pants",
          "denim",
          "leggings",
          "shorts",
          "sweatpants_joggers",
        ];
      }
    } else if (gender === "women") {
      if (title.includes("shorts") || description.includes("shorts")) {
        newSubCat = "shorts";
      } else if (
        description.includes("jumpsuits") ||
        title.includes("jumpsuits")
      ) {
        newSubCat = "jumpsuits";
      } else if (title.includes("legging") || description.includes("legging")) {
        newSubCat = "leggings";
      } else if (description.includes("jog") || title.includes("jog")) {
        newSubCat = "joggers";
      } else if (title.includes("jeans") || description.includes("jeans")) {
        newSubCat = "jeans";
      } else {
        newSubCat = "pants";
      }
    }
  } else if (
    gender === "women" &&
    bgCat === "jewelry" &&
    ["other", "others"].includes(subcategory)
  ) {
    return "charms";
  } else if (
    [
      "keychains",
      "money clips",
      "snow goggles",
      "unisex snow goggles",
    ].includes(subcategory)
  ) {
    if (gender === "men" || gender === "unisex") {
      newSubCat = "misc";
    } else if (gender === "women") {
      newSubCat = "miscellaneous";
    }
  } else if (subcategory === "loafers") {
    newSubCat = "slip_ons";
  } else if (subcategory === "luggage and travel") {
    newSubCat = "luggage_travel";
  } else if (
    [
      "necklaces",
      "jewellery sets for women",
      "necklaces for men",
      "necklaces for women",
    ].includes(subcategory) ||
    (["jewelry", "jewellery sets"].includes(bgCat) &&
      description.includes("necklace")) ||
    title.includes("necklace")
  ) {
    if (gender === "women" && bgCat !== "clothing" && bgCat !== "accessories") {
      newSubCat = "necklaces";
    } else if (gender === "men") {
      newSubCat = "jewelry_watches";
    }
  } else if (
    subcategory === "option" ||
    subcategory === "options" ||
    subcategory === "other" ||
    subcategory === "unisex snow goggles" ||
    bgCat === "snow goggles" ||
    title.includes("snow goggles") ||
    description.includes("snow goggles")
  ) {
    if (gender === "men" || gender === "unisex") {
      newSubCat = "misc";
    } else if (gender === "women") {
      newSubCat = "miscellaneous";
    }
  } else if (subcategory === "platforms & wedges") {
    newSubCat = "platforms";
  } else if (subcategory === "polo shirts" || subcategory === "polo shirt") {
    newSubCat = "polos";
  } else if (
    subcategory === "ponchos" &&
    (!title.includes("sweater") || !description.includes("sweater"))
  ) {
    if (gender === "men") {
      newSubCat = "light_jackets";
    } else if (gender === "women") {
      newSubCat = "coats";
    }
  } else if (subcategory === "rings" || subcategory === "rings for men") {
    if (gender === "women") {
      newSubCat = "rings";
    } else if (gender === "men") {
      newSubCat = "jewelry_watches";
    }
  } else if (
    subcategory === "satchel bags" ||
    subcategory === "messenger bags"
  ) {
    newSubCat = "messengers_satchels";
  } else if (subcategory === "shirts") {
    if (gender === "men") {
      if (
        !(
          title.includes("formal") ||
          title.includes("dress") ||
          description.includes("formal") ||
          description.includes("dress")
        ) &&
        (title.includes("button up") || description.includes("button up"))
      ) {
        newSubCat = "button_ups";
      } else if (
        title.includes("formal") ||
        title.includes("dress") ||
        description.includes("formal") ||
        description.includes("dress") ||
        title.includes("button up") ||
        description.includes("button up")
      ) {
        newSubCat = "formal_shirting";
      } else if (
        !title.includes("t-shirt") &&
        !title.includes("short sleeve") &&
        !description.includes("t-shirt") &&
        !description.includes("short sleeve") &&
        (title.includes("jersey") || description.includes("jersey"))
      ) {
        newSubCat = "jerseys";
      } else if (
        title.includes("long sleeve") ||
        description.includes("long sleeve")
      ) {
        newSubCat = "long_sleeve_shirts";
      } else if (
        title.includes("short sleeve") ||
        description.includes("short sleeve") ||
        title.includes("t-shirt") ||
        description.includes("t-shirt")
      ) {
        newSubCat = "short_sleeve_shirts";
      } else if (
        title.includes("sleeveless") ||
        description.includes("sleeveless")
      ) {
        newSubCat = "sleeveless";
      } else if (
        title.includes("sweater") ||
        description.includes("sweater") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck") ||
        title.includes("pullover") ||
        description.includes("pullover")
      ) {
        newSubCat = "sweaters_knitwear";
      } else if (
        title.includes("sweatshirt") ||
        description.includes("sweatshirt") ||
        title.includes("hoodie") ||
        description.includes("hoodie")
      ) {
        newSubCat = "sweatshirts_hoodies";
      } else if (title.includes("tank") || description.includes("tank")) {
        newSubCat = "tank_tops";
      } else {
        newSubCat = "short_sleeve_shirts";
      }
    } else if (gender === "women") {
      if (
        title.includes("corset") ||
        description.includes("corset") ||
        title.includes("strapless") ||
        description.includes("strapless")
      ) {
        newSubCat = "blouses";
      } else if (
        title.includes("bodysuit") ||
        description.includes("bodysuit")
      ) {
        newSubCat = "bodysuits";
      } else if (
        title.includes("button up") ||
        description.includes("button up")
      ) {
        newSubCat = "button_ups";
      } else if (title.includes("crop") || description.includes("crop")) {
        newSubCat = "crop_tops";
      } else if (title.includes("hoodie") || description.includes("hoodie")) {
        newSubCat = "hoodies";
      } else if (
        title.includes("long sleeve") ||
        description.includes("long sleeve")
      ) {
        newSubCat = "long_sleeve_shirts";
      } else if (
        title.includes("short sleeve") ||
        description.includes("short sleeve") ||
        title.includes("t-shirt") ||
        description.includes("t-shirt")
      ) {
        newSubCat = "short_sleeve_shirts";
      } else if (
        title.includes("sweater") ||
        description.includes("sweater") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck") ||
        title.includes("pullover") ||
        description.includes("pullover")
      ) {
        newSubCat = "sweaters";
      } else if (
        title.includes("sweatshirt") ||
        description.includes("sweatshirt")
      ) {
        newSubCat = "sweatshirts";
      } else if (title.includes("tank") || description.includes("tank")) {
        newSubCat = "tank_tops";
      } else {
        newSubCat = "blouses";
      }
    }
  } else if (subcategory === "skirts") {
    if (
      description.includes("mini") ||
      description.includes("above-knee") ||
      description.includes("above knee") ||
      title.includes("above knee") ||
      title.includes("high waist") ||
      title.includes("mini") ||
      description.includes("high waist") ||
      description.includes("short skirt")
    ) {
      newSubCat = "mini_skirts";
    } else if (
      description.includes("midi") ||
      description.includes("knee length") ||
      description.includes("knee-length") ||
      description.includes("knee long") ||
      title.includes("midi") ||
      title.includes("knee length") ||
      title.includes("knee long")
    ) {
      newSubCat = "midi_skirts";
    } else if (
      description.includes("maxi") ||
      description.includes("floor length") ||
      description.includes("floor-length") ||
      title.includes("floor length") ||
      description.includes("below knee") ||
      title.includes("below knee") ||
      description.includes("long skirt") ||
      title.includes("maxi")
    ) {
      newSubCat = "maxi_skirts";
    } else {
      newSubCat = "midi_skirts";
    }
  } else if (subcategory === "sleepwear") {
    if (gender === "men") {
      newSubCat = "socks_underwear";
    } else if (gender === "women") {
      newSubCat = "socks_intimates";
    }
  } else if (subcategory === "sweaters" || subcategory === "cardigans") {
    if (gender === "men") {
      newSubCat = "sweaters_knitwear";
    } else if (gender === "women") {
      newSubCat = "sweaters";
    }
  } else if (
    bgCat === "sunglasses" ||
    [
      "sunglasses for men",
      "sunglasses for women",
      "unisex sunglasses",
    ].includes(subcategory)
  ) {
    newSubCat = "sunglasses";
  } else if (subcategory === "sweatsuits") {
    newSubCat = "unknown";
  } else if (subcategory === "swimwear") {
    if (gender === "men") {
      newSubCat = subcategory;
    } else if (gender === "women") {
      newSubCat = "bodysuits";
    }
  } else if (subcategory === "t-shirts") {
    if (gender === "men") {
      if (
        !(
          title.includes("formal") ||
          title.includes("dress") ||
          description.includes("formal") ||
          description.includes("dress")
        ) &&
        (title.includes("button up") || description.includes("button up"))
      ) {
        newSubCat = "button_ups";
      } else if (
        title.includes("formal") ||
        title.includes("dress") ||
        description.includes("formal") ||
        description.includes("dress")
      ) {
        newSubCat = "formal_shirting";
      } else if (
        !title.includes("t-shirt") &&
        !title.includes("short sleeve") &&
        !description.includes("t-shirt") &&
        !description.includes("short sleeve") &&
        (title.includes("jersey") || description.includes("jersey"))
      ) {
        newSubCat = "jerseys";
      } else if (
        title.includes("long sleeve") ||
        description.includes("long sleeve")
      ) {
        newSubCat = "long_sleeve_shirts";
      } else if (
        title.includes("short sleeve") ||
        description.includes("short sleeve") ||
        title.includes("t-shirt") ||
        description.includes("t-shirt")
      ) {
        newSubCat = "short_sleeve_shirts";
      } else if (
        title.includes("sleeveless") ||
        description.includes("sleeveless")
      ) {
        newSubCat = "sleeveless";
      } else if (
        title.includes("sweater") ||
        description.includes("sweater") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck")
      ) {
        newSubCat = "sweaters_knitwear";
      } else if (
        title.includes("sweatshirt") ||
        description.includes("sweatshirt") ||
        title.includes("hoodie") ||
        description.includes("hoodie") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck")
      ) {
        newSubCat = "sweatshirts_hoodies";
      } else if (title.includes("tank") || description.includes("tank")) {
        newSubCat = "tank_tops";
      } else {
        options = [
          "button_ups",
          "jerseys",
          "long_sleeve_shirts",
          "polos",
          "short_sleeve_shirts",
          "sleeveless",
          "sweaters_knitwear",
          "sweatshirts_hoodies",
          "tank_tops",
        ];
      }
    } else if (gender === "women") {
      if (
        title.includes("corset") ||
        description.includes("corset") ||
        title.includes("strapless") ||
        description.includes("strapless")
      ) {
        newSubCat = "blouses";
      } else if (
        title.includes("bodysuit") ||
        description.includes("bodysuit")
      ) {
        newSubCat = "bodysuit";
      } else if (
        title.includes("button up") ||
        description.includes("button up")
      ) {
        newSubCat = "button_ups";
      } else if (title.includes("crop") || description.includes("crop")) {
        newSubCat = "crop_tops";
      } else if (title.includes("hoodie") || description.includes("hoodie")) {
        newSubCat = "hoodies";
      } else if (
        title.includes("long sleeve") ||
        description.includes("long sleeve")
      ) {
        newSubCat = "long_sleeve_shirts";
      } else if (
        title.includes("short sleeve") ||
        description.includes("short sleeve") ||
        title.includes("t-shirt") ||
        description.includes("t-shirt")
      ) {
        newSubCat = "short_sleeve_shirts";
      } else if (title.includes("sweater") || description.includes("sweater")) {
        newSubCat = "sweaters";
      } else if (
        title.includes("sweatshirt") ||
        description.includes("sweatshirt") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck")
      ) {
        newSubCat = "sweatshirts";
      } else if (title.includes("tank") || description.includes("tank")) {
        newSubCat = "tank_tops";
      } else {
        newSubCat = "blouses";
      }
    }
  } else if (gender === "men" && subcategory === "ties & bowties") {
    newSubCat = "ties_pocketsquares";
  } else if (subcategory === "tights & socks") {
    if (gender === "men") {
      newSubCat = "socks_underwear";
    } else if (gender === "women") {
      newSubCat = "socks_intimates";
    }
  } else if (subcategory === "tops & t-shirts") {
    if (gender === "men") {
      if (
        !(
          title.includes("formal") ||
          title.includes("dress") ||
          description.includes("formal") ||
          description.includes("dress")
        ) &&
        (title.includes("button up") || description.includes("button up"))
      ) {
        newSubCat = "button_ups";
      } else if (
        title.includes("formal") ||
        title.includes("dress") ||
        description.includes("formal") ||
        description.includes("dress")
      ) {
        newSubCat = "formal_shirting";
      } else if (
        !title.includes("t-shirt") &&
        !title.includes("short sleeve") &&
        !description.includes("t-shirt") &&
        !description.includes("short sleeve") &&
        (title.includes("jersey") || description.includes("jersey"))
      ) {
        newSubCat = "jerseys";
      } else if (
        title.includes("long sleeve") ||
        description.includes("long sleeve")
      ) {
        newSubCat = "long_sleeve_shirts";
      } else if (
        title.includes("short sleeve") ||
        description.includes("short sleeve") ||
        title.includes("t-shirt") ||
        description.includes("t-shirt")
      ) {
        newSubCat = "short_sleeve_shirts";
      } else if (
        title.includes("sleeveless") ||
        description.includes("sleeveless")
      ) {
        newSubCat = "sleeveless";
      } else if (title.includes("sweater") || description.includes("sweater")) {
        newSubCat = "sweaters_knitwear";
      } else if (
        title.includes("sweatshirt") ||
        description.includes("sweatshirt") ||
        title.includes("hoodie") ||
        description.includes("hoodie") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck")
      ) {
        newSubCat = "sweatshirts_hoodies";
      } else if (title.includes("tank") || description.includes("tank")) {
        newSubCat = "tank_tops";
      } else {
        options = [
          "button_ups",
          "jerseys",
          "long_sleeve_shirts",
          "polos",
          "short_sleeve_shirts",
          "sleeveless",
          "sweaters_knitwear",
          "sweatshirts_hoodies",
          "tank_tops",
        ];
      }
    } else if (gender === "women") {
      if (
        title.includes("corset") ||
        description.includes("corset") ||
        title.includes("strapless") ||
        description.includes("strapless")
      ) {
        newSubCat = "blouses";
      } else if (
        title.includes("bodysuit") ||
        description.includes("bodysuit")
      ) {
        newSubCat = "bodysuit";
      } else if (
        title.includes("button up") ||
        description.includes("button up")
      ) {
        newSubCat = "button_ups";
      } else if (title.includes("crop") || description.includes("crop")) {
        newSubCat = "crop_tops";
      } else if (title.includes("hoodie") || description.includes("hoodie")) {
        newSubCat = "hoodies";
      } else if (
        title.includes("long sleeve") ||
        description.includes("long sleeve")
      ) {
        newSubCat = "long_sleeve_shirts";
      } else if (
        title.includes("short sleeve") ||
        description.includes("short sleeve") ||
        title.includes("t-shirt") ||
        description.includes("t-shirt")
      ) {
        newSubCat = "short_sleeve_shirts";
      } else if (title.includes("sweater") || description.includes("sweater")) {
        newSubCat = "sweaters";
      } else if (
        title.includes("sweatshirt") ||
        description.includes("sweatshirt") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck")
      ) {
        newSubCat = "sweatshirts";
      } else if (title.includes("tank") || description.includes("tank")) {
        newSubCat = "tank_tops";
      } else {
        newSubCat = "blouses";
      }
    }
  } else if (subcategory === "tote bags") {
    newSubCat = "tote_bags";
  } else if (subcategory === "underwear") {
    if (gender === "men") {
      newSubCat = "socks_underwear";
    } else if (gender === "women") {
      newSubCat = "socks_intimates";
    }
  } else if (title.includes("vest") || description.includes("vest")) {
    newSubCat = "vests";
  } else if (
    bgCat === "watches" ||
    /^\s*(unisex)?\s*watches\s*(for)?\s*(men|women)?\s*$/i.test(subcategory)
  ) {
    if (
      gender === "men" ||
      gender === "unisex" ||
      /^\s*(unisex)?\s*watches\s*(for)?\s*(men)?\s*$/i.test(subcategory)
    ) {
      newSubCat = "jewelry_watches";
    } else if (
      gender === "women" ||
      gender === "Women" ||
      /^\s*watches\s*for\s*women\s*$/i.test(subcategory)
    ) {
      newSubCat = "watches";
    }
  } else if (
    bgCat === "shoes" &&
    (description.includes("sandal") ||
      title.includes("sandal") ||
      description.includes("flip") ||
      title.includes("flip") ||
      title.includes("flop") ||
      description.includes("flop"))
  ) {
    newSubCat = "sandals";
  } else if (
    bgCat === "shoes" &&
    (description.includes("boot") || title.includes("boot"))
  ) {
    newSubCat = "boots";
  } else if (
    bgCat === "shoes" &&
    (description.includes("flat") || title.includes("flat"))
  ) {
    newSubCat = "flats";
  } else if (
    bgCat === "shoes" &&
    (description.includes("loafer") || title.includes("loafer"))
  ) {
    newSubCat = "slip_ons";
  } else if (
    bgCat === "shoes" &&
    (subcategory === "casual" ||
      description.includes("casual") ||
      title.includes("casual"))
  ) {
    newSubCat = "lowtop_sneakers";
  } else if (
    gender === "women" &&
    bgCat === "shoes" &&
    (description.includes("broque") || title.includes("broque"))
  ) {
    newSubCat = "flats";
  } else if (title.includes("blouse") || description.includes("blouse")) {
    newSubCat = "blouses";
  } else if (
    (title.includes("dress") && title.includes("sleeveless")) ||
    (description.includes("dress") && description.includes("sleeveless"))
  ) {
    newSubCat = "midi";
  } else if (subcategory === "suits & blazers") {
    if (gender === "women") newSubCat = "blazers";
    options = ["suits", "blazers"];
  } else if (
    gender === "men" &&
    (title.includes("suit") || description.includes("suit"))
  ) {
    newSubCat = "suits";
  } else if (
    description.includes("document") ||
    title.includes("document") ||
    description.includes("messenger") ||
    title.includes("messenger")
  ) {
    if (gender === "men") {
      newSubCat = "bags_luggage";
    } else if (gender === "women") {
      newSubCat = "messengers_satchels";
    }
  } else if (title.includes("briefcase") || description.includes("briefcase")) {
    if (gender === "men") {
      newSubCat = "bags_luggage";
    } else if (gender === "women") {
      newSubCat = "handle_bags";
    }
  } else if (
    description.includes("sunglasses") ||
    title.includes("sunglasses")
  ) {
    newSubCat = "sunglasses";
  } else if (
    title.includes("cummerbund") ||
    description.includes("cummerbund")
  ) {
    newSubCat = "misc";
  } else if (description.includes("toiletry") || title.includes("toiletry")) {
    if (gender === "women") {
      newSubCat = "toiletry_pouches";
    } else if (gender === "men") {
      newSubCat = "misc";
    }
  } else if (
    (!title.includes("skirt") || !description.includes("skirt")) &&
    (description.includes("wallet") || title.includes("wallet"))
  ) {
    newSubCat = "wallets";
  } else if (
    description.includes("scarf") ||
    title.includes("scarf") ||
    description.includes("scarves") ||
    title.includes("scarves")
  ) {
    if (gender === "men") {
      newSubCat = "gloves_scarves";
    } else if (gender === "women") {
      newSubCat = "scarves";
    }
  } else if (title.includes("dresses") || description.includes("dresses")) {
    if (title.includes("jumpsuit") || description.includes("jumpsuit")) {
      newSubCat = "jumpsuits";
    } else if (
      description.includes("mini") ||
      description.includes("above-knee") ||
      description.includes("above knee") ||
      description.includes("short dress") ||
      description.includes("short sleeveless") ||
      title.includes("mini") ||
      title.includes("above knee") ||
      title.includes("above-knee") ||
      title.includes("short dress")
    ) {
      newSubCat = "mini";
    } else if (
      description.includes("midi") ||
      description.includes("knee length") ||
      description.includes("knee-length") ||
      description.includes("knee long") ||
      description.includes("knee-long") ||
      description.includes("over knee") ||
      title.includes("midi") ||
      title.includes("knee length") ||
      title.includes("knee-length") ||
      title.includes("knee long") ||
      title.includes("knee-long") ||
      title.includes("over knee")
    ) {
      newSubCat = "midi";
    } else if (
      description.includes("maxi") ||
      description.includes("floor length") ||
      description.includes("floor-length") ||
      description.includes("full length") ||
      description.includes("full-length") ||
      description.includes("long dress") ||
      description.includes("long sleeveless") ||
      title.includes("maxi") ||
      title.includes("full length") ||
      title.includes("floor length") ||
      title.includes("long dress")
    ) {
      newSubCat = "maxi";
    } else if (description.includes("gown") || title.includes("gown")) {
      newSubCat = "gowns";
    } else {
      newSubCat = "midi";
    }
  } else if (
    description.includes("hat") ||
    title.includes("hat") ||
    description.includes("cap") ||
    title.includes("cap")
  ) {
    newSubCat = "hats";
  } else if (description.includes("gloves") || title.includes("gloves")) {
    if (gender === "men") {
      newSubCat = "gloves_scarves";
    } else if (gender === "women") {
      newSubCat = "gloves";
    }
  } else if (description.includes("bikini")) {
    newSubCat = "bodysuits";
  } else if (title.includes("headband") || description.includes("headband")) {
    if (gender === "women") {
      newSubCat = "hair_accessories";
    } else if (gender === "men") {
      newSubCat = "hats";
    }
  } else if (title.includes("loafer") || description.includes("loafer")) {
    newSubCat = "slip_ons";
  } else if (
    title.includes("platforms") ||
    description.includes("platforms") ||
    title.includes("wedge") ||
    description.includes("wedge")
  ) {
    newSubCat = "platforms";
  } else if (title.includes("polos") || description.includes("polos")) {
    newSubCat = "polos";
  } else if (
    description.includes("rings") ||
    title.includes("rings") ||
    subcategory === "rings for men"
  ) {
    if (gender === "women") {
      newSubCat = "rings";
    } else if (gender === "men") {
      newSubCat = "jewelry_watches";
    }
  } else if (title.includes("ties") || description.includes("ties")) {
    newSubCat = "ties_pocketsquares";
  } else if (description.includes("underwear") || title.includes("underwear")) {
    if (gender === "men") {
      newSubCat = "socks_underwear";
    } else if (gender === "women") {
      newSubCat = "socks_intimates";
    }
  } else if (
    description.includes("watch") ||
    title.includes("watch") ||
    description.includes("watches") ||
    title.includes("watches") ||
    /^\s*watches\s*$/.test(title)
  ) {
    if (gender === "men" || gender === "unisex") {
      newSubCat = "jewelry_watches";
    } else if (gender === "women" || gender === "Women") {
      newSubCat = "watches";
    }
  } else if (bgCat === "accessories") {
    if (gender === "men" || gender === "unisex") {
      newSubCat = "misc";
    } else if (gender === "women") {
      newSubCat = "miscellaneous";
    }
  }

  if (!newSubCat) {
    newSubCat = "noSubCat";
  }

  const newOptions = [];
  if (options) {
    options.forEach((option) => {
      if (option.includes("_")) {
        let ind = option.indexOf("_");
        if (option.includes("_", ind)) {
          let idx = option.indexOf("_", ind);
          newOptions.push(
            option.substring(0, ind) + " " + option.substring(ind, idx)
          );
        } else {
          newOptions.push(
            option.substring(0, ind) + " " + option.substring(ind)
          );
        }
      } else {
        newOptions.push(option);
      }
    });
  }
  newOptions.forEach((option) => {
    if (
      title.includes(option) ||
      title.includes(option.substring(0, option.length - 1)) ||
      description.includes(option) ||
      description.includes(option.substring(0, option.length - 1))
    ) {
      let ind = newOptions.indexOf(option);
      newSubCat = options[ind];
    }
  });

  if (newSubCat) {
    options = null;
    return newSubCat;
  } else if (options) return options;
  // else
  //   console.log(
  //     "no Taxonomy Conversion " +
  //       " " +
  //       SKU +
  //       " " +
  //       title +
  //       " " +
  //       gender +
  //       " " +
  //       bgCat +
  //       " " +
  //       subcategory
  //   );
}

function inferCatFromSub(subcategory) {
  if (["ties_pocketsquares", "wallets"].includes(subcategory)) {
    return "accessories";
  }
}

function convertCategories(subcategory, gender, bgCat, title, description) {
  let category;
  if (bgCat !== "clothing") {
    switch (bgCat) {
      case "accessories":
        category = "accessories";
        break;
      case "bags":
        if (
          gender === "men" ||
          subcategory === "wallets" ||
          title.includes("laptop") ||
          description.includes("cardholder")
        ) {
          category = "accessories";
          break;
        } else if (
          gender === "women" ||
          title.includes("bag") ||
          description.includes("bag")
        ) {
          category = "bags_luggage";
          break;
        } else if (
          title.includes("wallet") ||
          description.includes("wallet") ||
          title.includes("accessory") ||
          description.includes("accessory")
        ) {
          category = "accessories";
          break;
        }
      case "earrings":
        category = "jewelry";
        break;
      case "frames":
        category = "accessories";
        break;
      case "frames for men":
        category = "accessories";
        break;
      case "frames for women":
        category = "accessories";
        break;
      case "jewellery sets":
        category = "jewelry";
        break;
      case "jewelry":
        if (gender === "women") {
          category = "jewelry";
          break;
        } else if (gender === "men") {
          category = "accessories";
          break;
        }
      case "necklaces":
        if (gender === "men") {
          category = "accessories";
          break;
        } else if (gender === "women") {
          category = "jewelry";
          break;
        }
      case "rings":
        if (gender === "men") {
          category = "accessories";
          break;
        } else if (gender === "women") {
          category = "jewelry";
          break;
        }
      case "shoes":
        category = "footwear";
        break;
      case "snow goggles":
        category = "accessories";
        break;
      case "sunglasses":
        category = "accessories";
        break;
      case "technology":
        category = "accessories";
        break;
      case "wallets":
        category = "accessories";
        break;
      case "watches":
        category = "accessories";
        break;
    }
    // for clothing
  } else if (bgCat === "clothing") {
    switch (subcategory) {
      case "blazers":
        if (gender === "men") {
          category = "tailoring";
          break;
        } else if (gender === "women") {
          category = "outerwear";
          break;
        }
      case "cardigans":
        category = "tops";
        break;
      case "dresses":
        if (title.includes("jumpsuit") || description.includes("jumpsuit")) {
          category = "bottoms";
          break;
        } else {
          category = "dresses";
          break;
        }
      case "jackets":
        if (
          !(
            description.includes("windbreaker") || title.includes("windbreaker")
          ) &&
          (description.includes("sweater") || title.includes("sweater"))
        ) {
          category = "tops";
          break;
        } else if (
          title.includes("jumpsuit") ||
          description.includes("jumpsuit")
        ) {
          category = "bottoms";
          break;
        } else {
          category = "outerwear";
          break;
        }
      case "jackets & coats":
        if (title.includes("jumpsuit") || description.includes("jumpsuit")) {
          category = "bottoms";
          break;
        } else if (!title.includes("blouse")) {
          category = "outerwear";
          break;
        }
      case "jeans & pants":
        if (
          gender === "men" &&
          !title.includes("jeans") &&
          !description.includes("jeans") &&
          !title.includes("casual") &&
          !description.includes("casual") &&
          !title.includes("cropped") &&
          !description.includes("cropped") &&
          (title.includes("dress") ||
            description.includes("dress") ||
            title.includes("formal") ||
            description.includes("formal"))
        ) {
          category = "tailoring";
          break;
        } else {
          category = "bottoms";
          break;
        }
      case "polo shirt":
        category = "tops";
        break;
      case "polo shirts":
        category = "tops";
        break;
      case "ponchos":
        category = "outerwear";
        break;
      case "shirts":
        if (
          gender === "men" &&
          (title.includes("formal") ||
            title.includes("dress") ||
            description.includes("formal") ||
            description.includes("dress"))
        ) {
          category = "tailoring";
          break;
        } else {
          category = "tops";
          break;
        }
      case "shorts":
        category = "bottoms";
        break;
      case "skirts":
        category = "bottoms";
        break;
      case "sleepwear":
        category = "accessories";
        break;
      case "snow googles":
        category = "accessories";
        break;
      case "suits":
        category = "tailoring";
        break;
      case "suits & blazers":
        if (gender === "men") {
          category = "tailoring";
          break;
        } else if (gender === "women" && !title.includes("blouse")) {
          category = "outerwear";
          break;
        }
      case "sweaters":
        category = "tops";
        break;
      case "sweatsuits":
        category = "bottoms";
        break;
      case "swimwear":
        if (gender === "men") {
          category = "bottoms";
          break;
        } else if (gender === "women") {
          category = "tops";
          break;
        }
      case "t-shirts":
        if (
          gender === "men" &&
          (title.includes("formal") ||
            title.includes("dress") ||
            description.includes("formal") ||
            description.includes("dress"))
        ) {
          category = "tailoring";
          break;
        } else {
          category = "tops";
          break;
        }
      case "ties & bowties":
        category = "accessories";
        break;
      case "tights & socks":
        category = "accessories";
        break;
      case "tops & t-shirts":
        if (
          gender === "men" &&
          (title.includes("formal") ||
            title.includes("dress") ||
            description.includes("formal") ||
            description.includes("dress"))
        ) {
          category = "tailoring";
          break;
        } else {
          category = "tops";
          break;
        }
      case "underwear":
        category = "accessories";
        break;
      case "vests":
        if (gender === "men" && title.includes("formal")) {
          category = "tailoring";
          break;
        } else {
          category = "outerwear";
          break;
        }
    }
  } else if (gender === "women") {
    if (
      (title.includes("dress") || description.includes("dress")) &&
      (title.includes("a-line") || description.includes("a-line"))
    ) {
      category = "dresses";
    }
  } else if (gender === "men") {
    if (title.includes("suit")) {
      category = "tailoring";
    }
  } else if (title.includes("wallet")) {
    category = "accessories";
  } else if (
    title.includes("jeans") ||
    title.includes("pants") ||
    description.includes("jeans") ||
    description.includes("pants")
  ) {
    category = "bottoms";
  }

  if (!category) {
    category = "noCategory";
  }

  // if (!category) console.log(bgCat + "  " + subcategory);
  return category;
}

function inferSubCategories() {
  // description.includes("wallet") ||
  // title.includes("wallet")
}

function createOptionsArray(category) {
  if (category.includes(",")) {
    let ind = category.indexOf(".");
    let newGeneral = category.slice(0, ind + 1);
    let subCatOptions = category.slice(ind + 1);
    const newOptions = subCatOptions.split(",");
    return JSON.stringify(newOptions.map((option) => newGeneral + option));
  } else {
    return category;
  }
}
