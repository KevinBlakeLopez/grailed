function convertCategories(subcategory, gender, bgCat, title, description) {
  let category;
  if (bgCat !== "clothing") {
    switch (bgCat) {
      case "accessories":
        category = "accessories";
        break;
      case "bags":
        if (gender === "men" || subcategory === "wallets") {
          category = "accessories";
          break;
        } else if (gender === "women") {
          category = "bags_luggage";
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
        category = "jewelry";
        break;
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
        category = "snow goggles???";
        break;
      case "sunglasses":
        category = "accessories";
        break;
      case "technology":
        category = "technology???";
        break;
      case "wallets":
        category = "accessories";
        break;
      case "watches":
        category = "accessories";
        break;
    }
    // for clothing
  } else {
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
        category = "dresses";
        break;
      case "jackets":
        category = "outerwear";
        break;
      case "jackets & coats":
        category = "outerwear";
        break;
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
      case "shirts":
        if (
          gender === "men" &&
          (title.includes("formal") ||
            title.includes("dress") ||
            description.includes("formal") ||
            description.includes("formal"))
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
        category = "?";
        break;
      case "suits":
        category = "tailoring";
        break;
      case "suits & blazers":
        if (gender === "men") {
          category = "tailoring";
          break;
        } else if (gender === "women") {
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
            description.includes("formal"))
        ) {
          category = "tailoring";
          break;
        } else {
          category = "tops";
          break;
        }
      case "tights & socks":
        category = "accessories";
        break;
      case "tops & t-shirts":
        if (
          gender === "men" &&
          (title.includes("formal") ||
            title.includes("dress") ||
            description.includes("formal") ||
            description.includes("formal"))
        ) {
          category = "tailoring";
          break;
        } else if (title.includes("vest") || description.includes("vest")) {
          category = "outerwear";
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
  }
  // if (!category) console.log(bgCat + "  " + subcategory);
  return category;
}

function convertSubCategories(
  subcategory,
  gender,
  title,
  description,
  bgCat,
  gCat
) {
  let newSubCat;
  let options;
  if (["briefcases"].includes(subcategory)) {
    if (gender === "men") {
      newSubCat = "bags_luggage";
    } else if (gender === "women") {
      newSubCat = "messengers_satchels";
    }
  } else if (subcategory === "cummerbund") {
    newSubCat = "misc";
  } else if (
    subcategory === "wallets" &&
    (!description.includes("bag") || !title.includes("bag"))
  ) {
    if (
      description.includes("document") ||
      title.includes("document") ||
      description.includes("messenger") ||
      title.includes("messenger")
    ) {
      if (gender === "men") {
        newSubCat = "bags_luggage";
      }
    } else {
      newSubCat = "wallets";
    }
  } else if (
    subcategory === "leather accessories" ||
    description.includes("condom") ||
    title.includes("condom")
  ) {
    newSubCat = "misc";
  } else if (description.includes("toiletry") || title.includes("toiletry")) {
    if (gender === "women") {
      newSubCat = "toiletry_pouches";
    } else if (gender === "men") {
      newSubCat = "misc";
    } else if (
      description.includes("sunglasses") ||
      title.includes("sunglasses")
    ) {
      newSubCat = "sunglasses";
    } else if (description.includes("wallets") || title.includes("wallets")) {
      newSubCat = "wallets";
    }
  } else if (
    bgCat === "accessories" &&
    (description.includes("scarf") || title.includes("scarf"))
  ) {
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
  } else if (subcategory === "clutch bags" || subcategory === "evening bags") {
    newSubCat = "clutches";
  } else if (subcategory === "crossbody bags") {
    newSubCat = "crossbody_bags";
  } else if (
    [
      "belts",
      "blazers",
      "boots",
      "bracelets",
      "brooches",
      "charms",
      "cufflinks",
      "earrings",
      "gloves",
      "hats",
      "heels",
      "mules",
      "platforms",
      "necklaces",
      "rings",
      "sandals",
      "scarves",
      "shorts",
      "suits",
      "sunglasses",
      "vests",
    ].includes(subcategory)
  ) {
    newSubCat = subcategory;
  } else if (["sweatsuits"].includes(subcategory)) {
    if (title.includes("pants")) {
      newSubCat = "sweatpants_joggers";
    } else if (title.includes("sweatsuit")) {
      newSubCat = "jumpsuits_unknown?";
    }
  } else if (
    ["hitop sneakers", "lowtop sneakers", "sneakers", "slip ons"].includes(
      subcategory
    )
  ) {
    options = ["hitop_sneakers", "lowtop_sneakers", "sneakers", "slip_ons"];
  } else if (
    [
      "bucket bags",
      "handle bags",
      "hobo bags",
      "luggage travel",
      "mini bags",
    ].includes(subcategory)
  ) {
    options = [
      "belt_bags",
      "bucket_bags",
      "clutches",
      "crossbody_bags",
      "handle_bags",
      "hobo_bags",
      "luggage_travel",
      "mini_bags",
      "other",
      "shoulder_bags",
      "tote_bags",
    ];
  } else if (["dresses"].includes(subcategory)) {
    if (
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
    ["frames", "frames for men", "frames for women", "glasses"].includes(
      subcategory
    ) ||
    description.includes("frames") ||
    title.includes("frames") ||
    description.includes("glasses") ||
    title.includes("glasses")
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
    } else if (description.includes("slip") || title.includes("slip")) {
      newSubCat = "slip_ons";
    } else if (
      (description.includes("leather") || title.includes("leather")) &&
      gender === "men"
    ) {
      newSubCat = "leather";
    }
  } else if (
    bgCat === "accessories" &&
    (subcategory === "gloves" ||
      description.includes("gloves") ||
      title.includes("gloves"))
  ) {
    if (gender === "men") {
      newSubCat = "gloves_scarves";
    } else if (gender === "women") {
      newSubCat = "gloves";
    }
  } else if (subcategory === "handbags" || subcategory === "shoulder bags") {
    newSubCat = "shoulder_bags";
  } else if (subcategory === "handkerchief") {
    newSubCat = "ties_pocketsquares";
  } else if (
    bgCat === "accessories" &&
    (description.includes("hat") ||
      title.includes("hat") ||
      description.includes("cap") ||
      title.includes("cap"))
  ) {
    newSubCat = "hats";
  } else if (["headbands"].includes(subcategory)) {
    newSubCat = "hair_accessories";
  } else if (subcategory === "jackets") {
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
      } else if (description.includes("light") || title.includes("light")) {
        newSubCat = "light_jackets";
      } else if (
        description.includes("heavy") ||
        title.includes("heavy") ||
        description.includes("coat") ||
        title.includes("coat")
      ) {
        newSubCat = "heavy_coats";
      } else if (description.includes("parka") || title.includes("parka")) {
        newSubCat = "parkas";
      } else {
        options = [
          "bombers",
          "denim_jackets",
          "leather_jackets",
          "light_jackets",
          "heavy_coats",
          "parkas",
          "raincoats",
        ];
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
      } else if (description.includes("leather") || title.includes("leather")) {
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
      } else if (description.includes("coat") || title.includes("coat")) {
        newSubCat = "coats";
      } else {
        options = [
          "blazers",
          "bombers",
          "coats",
          "denim_jackets",
          "down_jackets",
          "fur_faux_fur",
          "jackets",
          "leather_jackets",
          "rain_jackets",
        ];
      }
    }
  } else if (subcategory === "jackets & coats") {
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
      } else if (description.includes("light") || title.includes("light")) {
        newSubCat = "light_jackets";
      } else if (
        description.includes("heavy") ||
        title.includes("heavy") ||
        description.includes("coat") ||
        title.includes("coat")
      ) {
        newSubCat = "heavy_coats";
      } else if (description.includes("parka") || title.includes("parka")) {
        newSubCat = "parkas";
      } else {
        options = [
          "bombers",
          "denim_jackets",
          "leather_jackets",
          "light_jackets",
          "heavy_coats",
          "parkas",
          "raincoats",
        ];
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
      } else if (description.includes("leather") || title.includes("leather")) {
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
      } else if (description.includes("coat") || title.includes("coat")) {
        newSubCat = "coats";
      } else {
        options = [
          "blazers",
          "bombers",
          "coats",
          "denim_jackets",
          "down_jackets",
          "fur_faux_fur",
          "jackets",
          "leather_jackets",
          "rain_jackets",
        ];
      }
    }
  } else if (subcategory === "jeans & pants") {
    if (gender === "men") {
      if (title.includes("jeans") || description.includes("jeans")) {
        newSubCat = "denim";
      } else if (
        title.includes("dress") ||
        title.includes("formal") ||
        description.includes("dress") ||
        description.includes("formal")
      ) {
        newSubCat = "formal_trousers";
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
        title.includes("baggy")
      ) {
        newSubCat = "casual_pants";
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
      } else if (description.includes("jog") || title.includes("jog")) {
        newSubCat = "joggers";
      } else {
        options = ["jeans", "joggers", "leggings", "pants", "shorts"];
      }
    }
  } else if (["keychains", "money clips"].includes(subcategory)) {
    if (gender === "men") {
      newSubCat = "misc";
    } else if (gender === "women") {
      newSubCat = "miscellaneous";
    }
  } else if (subcategory === "loafers") {
    newSubCat = "slip_ons";
  } else if (subcategory === "luggage and travel") {
    newSubCat = "luggage_travel";
  } else if (description.includes("necklace") || title.includes("necklace")) {
    newSubCat = "necklaces";
  } else if (subcategory === "option" || subcategory === "options") {
    if (gender === "men") {
      newSubCat = "misc";
    } else if (gender === "women") {
      newSubCat = "miscellaneous";
    }
  } else if (
    subcategory === "polo shirts" ||
    subcategory === "polo shirt" ||
    title.includes("polo") ||
    description.includes("polo")
  ) {
    newSubCat = "polos";
  } else if (description.includes("rings") || title.includes("rings")) {
    newSubCat = "rings";
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
          description.includes("formal")
        ) &&
        (title.includes("button up") || description.includes("button up"))
      ) {
        newSubCat = "button_ups";
      } else if (
        title.includes("formal") ||
        title.includes("dress") ||
        description.includes("formal") ||
        description.includes("formal")
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
        description.includes("hoodie")
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
        title.includes("sweater") ||
        description.includes("sweater") ||
        title.includes("turtleneck") ||
        description.includes("turtleneck")
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
  } else if (subcategory === "suits & blazers") {
    options = ["suits", "blazers"];
  } else if (subcategory === "sweaters" || subcategory === "cardigans") {
    if (gender === "men") {
      newSubCat = "sweaters_knitwear";
    } else if (gender === "women") {
      newSubCat = "sweaters";
    }
  } else if (
    bgCat === "sunglasses" &&
    (description.includes("sunglasses") || title.includes("sunglasses"))
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
  } else if (description.includes("bikini")) {
    newSubCat = "bodysuits";
  } else if (subcategory === "t-shirts") {
    if (gender === "men") {
      if (
        !(
          title.includes("formal") ||
          title.includes("dress") ||
          description.includes("formal") ||
          description.includes("formal")
        ) &&
        (title.includes("button up") || description.includes("button up"))
      ) {
        newSubCat = "button_ups";
      } else if (
        title.includes("formal") ||
        title.includes("dress") ||
        description.includes("formal") ||
        description.includes("formal")
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
  } else if (subcategory === "ties & bowties") {
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
          description.includes("formal")
        ) &&
        (title.includes("button up") || description.includes("button up"))
      ) {
        newSubCat = "button_ups";
      } else if (
        title.includes("formal") ||
        title.includes("dress") ||
        description.includes("formal") ||
        description.includes("formal")
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
  } else if (
    subcategory === "underwear" ||
    description.includes("underwear") ||
    title.includes("underwear")
  ) {
    if (gender === "men") {
      newSubCat = "socks_underwear";
    } else if (gender === "women") {
      newSubCat = "socks_intimates";
    }
  } else if (
    bgCat === "watches" &&
    (["watches", "watches for women", "watches for men"].includes(
      subcategory
    ) ||
      description.includes("watch") ||
      title.includes("watch"))
  ) {
    if (gender === "men") {
      newSubCat = "jewelry_watches";
    } else if (gender === "women") {
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
    console.log(gender + " " + newSubCat + " " + subcategory);
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
    gender === "women" &&
    bgCat === "shoes" &&
    (description.includes("broque") || title.includes("broque"))
  ) {
    newSubCat = "flats";
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
  if (!newSubCat && !options)
    console.log(
      gender + " " + bgCat + " " + subcategory + " " + gCat + " " + newSubCat
    );
  if (newSubCat) {
    options = null;
    return newSubCat;
  } else if (options) return options;
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
