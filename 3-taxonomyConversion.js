function convertCategories(subcategory, gender, bgCat) {
  let category;
  if (bgCat !== "clothing") {
    switch (bgCat) {
      case "accessories":
        category = "accessories";
        break;
      case "bags":
        if (gender === "men") {
          category = "accessories";
          break;
        } else if (gender === "women") {
          category = "bags_luggage"
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
          category = "jewelry"
          break;
        }
      case "rings":
        if (gender === "men") {
          category = "accessories";
          break;
        } else if (gender === "women") {
          category = "jewelry"
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
        category = "technology???"
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
          category = "outerwear"
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
        category = "outerwear"
        break;
      case "jeans & pants":
        category = "bottoms";
        break;
      case "polo shirts":
        category = "tops";
        break;
      case "shirts":
        category = "tops";
        break;
      case "shoes":
        category = "footwear";
        break;
      case "shorts":
        category = "bottoms";
        break;
      case "skirts":
        category = "bottoms";
        break;
      case "sleepwear":
        category = "accessories?";
        break;
      case "snow googles":
        category = "?";
        break;
      case "suits":
        category = "tailoring";
        break;
      case "suits & blazers":
        category = "tailoring";
        break;
      case "sweaters":
        category = "tops";
        break;
      case "sweatsuits":
        category = "?";
        break;
      case "swimwear":
        if (gender === "men") {
          category = "bottoms";
          break;
        }
      case "t-shirts":
        category = "tops";
        break;
      case "tights & socks":
        category = "accessories";
        break;
      case "tops & t-shirts":
        category = "tops";
        break;
      case "underwear":
        category = "accessories";
        break;
      case "vests":
        category = "outerwear";
        break;
    }
  }
  // if (!category) console.log(bgCat + "  " + subcategory);
  return category;
}

function convertSubCategories(subcategory, gender, title, description, bgCat) {
  let newSubCat;
  let options;
    if (["briefcases"].includes(subcategory)) {
      if (gender === "men") {
        newSubCat = "bags_luggage";
      } else if (gender === "women") {
        newSubCat = "messengers_satchels";
      }
    } else if (bgCat === "bags" && (subcategory === "wallets" || description.includes("wallet") || title.includes("wallet")) && (!description.includes("bag") || !title.includes("bag"))) {
      if (description.includes("document") || title.includes("document") || description.includes("messenger") || title.includes("messenger")) {
        if (gender === "men") {
          newSubCat = "bags_luggage";
        }
      }
      newSubCat = "wallets";
    } else if (subcategory === "leather accessories") {
      if (description.includes("condom") || title.includes("condom") || description.includes("toiletry") || title.includes("toiletry")) {
        newSubCat = "misc";
      } else if (description.includes("sunglasses") || title.includes("sunglasses")) {
        newSubCat = "sunglasses";
      } else {
        newSubCat = "wallets";
      }
    } else if (bgCat === "accessories" && (description.includes("scarf") || title.includes("scarf"))) {
      if (gender === "men") {
        newSubCat = "gloves_scarves";
      } else if (gender === "women") {
        newSubCat = "scarves";
      }
    } else if (bgCat === "bags" && gender === "men" && (subcategory !== "wallets" || !description.includes("wallet") || !title.includes("wallet"))) {
      newSubCat = "bags_luggage";
    } else if (["backpacks", "clutches"].includes(subcategory) && gender === "women") {
      newSubCat = subcategory;  
    } else if (["belts", "blazers", "boots", "bracelets", "brooches", "charms", "cufflinks", "earrings", "flats", "gloves", "hats", "heels", "mules", "platforms", "necklaces", "rings", "sandals", "scarves", "shorts", "suits", "sunglasses", "vests"].includes(subcategory)) {
      newSubCat = subcategory;
    } else if (["cummerbund", "handkerchief", "hand bag", "sleepwear", "sweatsuits"].includes(subcategory)) {
      newSubCat = "unknown???";
    } else if (["hitop sneakers", "lowtop sneakers", "sneakers", "slip ons"].includes(subcategory)) {
      options = ["hitop_sneakers", "lowtop_sneakers", "sneakers", "slip_ons"];
    } else if (["belt bags", "bucket bags", "clutch bags", "crossbody bags", "handle bags", "hobo bags", "luggage travel", "messengers satchels", "mini bags", "other", "shoulder bags", "toiletry pouches", "tote bags"].includes(subcategory)) {
      options = ["belt_bags", "bucket_bags", "clutches", "crossbody_bags", "handle_bags", "hobo_bags", "luggage_travel", "messengers_satchels", "mini_bags", "other", "shoulder_bags", "toiletry_pouches", "tote_bags"];
    } else if (["dresses"].includes(subcategory)) {
      if (description.includes("above-knee") || description.includes("above knee") || title.includes("above knee")) {
        newSubCat = "mini";
      } else if (description.includes("knee length") || description.includes("knee-length") || description.includes("knee long") || title.includes("knee length")) {
        newSubCat = "midi";
      } else if (description.includes("floor length") || description.includes("floor-length")) {
        newSubCat = "maxi";
      } else {
        options = ["midi", "mini", "maxi", "gowns"];
      }
    } else if (["frames", "frames for men", "frames for women", "glasses"].includes(subcategory) || description.includes("frames") || title.includes("frames")) {
      newSubCat = "glasses";
    } else if (bgCat === "shoes") {
        if (subcategory === "formal") {
        newSubCat = "formal_shoes";
      } else if (subcategory === "pumps" || description.includes("pumps") || title.includes("pumps")) {
        newSubCat = "heels"
      } else if (description.includes("slip") || title.includes("slip")) {
        newSubCat = "slip_ons"
      } else if ((description.includes("leather") || title.includes("leather")) && gender === "men") {
        newSubCat = "leather";
      }
    } else if (bgCat === "accessories" && (subcategory === "gloves" || description.includes("gloves") || title.includes("gloves"))) {
      if (gender === "men") {
        newSubCat = "gloves_scarves";
      } else if (gender === "women") {
        newSubCat = "gloves";
      }
    } else if (bgCat === "accessories" && (description.includes("hat") || title.includes("hat") || description.includes("cap") || title.includes("cap"))) {
      newSubCat = "hats";
    } else if (["headbands"].includes(subcategory)) {
      newSubCat = "hair_accessories";
    } else if (subcategory === "jackets") {
      if (gender === "men") {
        options = ["bombers", "denim_jackets", "heavy_coats", "leather_jackets", "light_jackets", "parkas", "raincoats"];
      } else if (gender === "women") {
        options = ["blazers", "bombers", "coats", "denim_jackets", "down_jackets", "fur_faux_fur", "jackets", "leather_jackets", "rain_jackets"];
      }
    } else if (subcategory === "jackets & coats") {
      if (gender === "men") {
        options = ["bombers", "denim_jackets", "leather_jackets", "light_jackets", "heavy_coats", "parkas", "raincoats"];
      } else if (gender === "women") {
        options = ["blazers", "bombers", "coats", "denim_jackets", "down_jackets", "fur_faux_fur", "jackets", "leather_jackets", "rain_jackets"];
      }
    } else if (subcategory === "jeans & pants") {
      if (gender === "men") {
        if (title.includes("jeans") || description.includes("jeans")) {
          newSubCat = "denim";
        } else {
          options = ["denim", "casual_pants", "cropped_pants"];
        }
      } else if (gender === "women") {
        options = ["jeans", "pants"];
      }
    } else if (["keychains", "money clips"].includes(subcategory)) {
      if (gender === "men") {
        newSubCat = "misc";
      } else if (gender === "women") {
        newSubCat = "miscellaneous";
      }
    } else if (description.includes("necklace") || title.includes("necklace")) {
      newSubCat = "necklaces";
    } else if (subcategory === "polo shirts") {
      newSubCat = "polos";
    } else if (description.includes("rings") || title.includes("rings")) {
      newSubCat = "rings";
    } else if (subcategory === "shirts") {
      if (title.includes("t-shirt") || description.includes("t-shirt")) {
        newSubCat = "short_sleeve_shirts";
      } else {
        options = ["blouses", "button_ups", "jerseys", "long_sleeve_shirts", "polos", "short_sleeve_shirts", "sleeveless"];
      }
    } else if (subcategory === "skirts") {
      if (description.includes("above-knee") || description.includes("above knee") || title.includes("above knee")) {
        newSubCat = "mini_skirts";
      } else if (description.includes("knee length") || description.includes("knee-length") || description.includes("knee long") || title.includes("knee length")) {
        newSubCat = "midi_skirts";
      } else if (description.includes("floor length") || description.includes("floor-length") ) {
        newSubCat = "maxi_skirts";
      } else {
        options = ["maxi_skirts", "midi_skirts", "mini_skirts"];
      }
    } else if (subcategory === "sleepwear") {
      newSubCat = "???";
    } else if (subcategory === "suits & blazers") {
      options = ["suits", "blazers"];
    } else if (subcategory === "sweaters" || subcategory === "cardigans") {
      if (gender === "men") {
        newSubCat = "sweaters_knitwear";
      } else if (gender === "women") {
        newSubCat = "sweaters";
      }
    } else if (bgCat === "sunglasses" && (description.includes("sunglasses") || title.includes("sunglasses"))) {
      newSubCat = "sunglasses"
    } else if (subcategory === "sweatsuits") {
      newSubCat = "unknown";
    } else if (subcategory === "swimwear") {
      if (gender === "men") {
        newSubCat = subcategory;
      }
    } else if (subcategory === "t-shirts") {
      if (title.includes("t-shirt") || description.includes("t-shirt")) {
        newSubCat = "short_sleeve_shirts";
      } else {
        options = ["blouses", "button_ups", "jerseys", "long_sleeve_shirts", "polos", "short_sleeve_shirts", "sleeveless"];
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
      if (title.includes("t-shirt") || description.includes("t-shirt")) {
        newSubCat = "short_sleeve_shirts";
      } else {
        options = ["blouses", "button_ups", "jerseys", "long_sleeve_shirts", "polos", "short_sleeve_shirts", "sleeveless"];
      }
    } else if (subcategory === "underwear" || description.includes("underwear") || title.includes("underwear")) {
      if (gender === "men") {
        newSubCat = "socks_underwear";
      } else if (gender === "women") {
        newSubCat = "socks_intimates";
      }
    } else if (bgCat === "watches" && (["watches", "watches for women", "watches for men"].includes(subcategory) || description.includes("watch") || title.includes("watch"))) {
      if (gender === "men") {
        newSubCat = "jewelry_watches";
      } else if (gender === "women") {
        newSubCat = "watches";
      }
    }
    const newOptions = [];
    if (options) {
      options.forEach(option =>  {
      if (option.includes("_")) {
        let ind = option.indexOf("_");
        if (option.includes("_", ind)) {
          let idx = option.indexOf("_", ind);
          newOptions.push(option.substring(0, ind) + " " + option.substring(ind, idx));
        } else {
          newOptions.push(option.substring(0, ind) + " " + option.substring(ind));
        }
      } else {
        newOptions.push(option);
      }
    })
  }
    newOptions.forEach(option => {
      if (title.includes(option) || title.includes(option.substring(0, option.length - 1)) || description.includes(option) || description.includes(option.substring(0, option.length - 1))) {
      let ind = newOptions.indexOf(option);
      newSubCat = options[ind];
    }});

    if (newSubCat) {
      options = null;
      return newSubCat;
    } else if (options) return options; 
    }

    function createOptionsArray(category) {
      if (category.includes(",")) {
          let ind = category.indexOf(".");
          let newGeneral = category.slice(0, ind + 1);
          let subCatOptions = category.slice(ind + 1);
          const newOptions = subCatOptions.split(",");
          return JSON.stringify(newOptions.map(option => newGeneral + option));
      } else {
          return category
      }
  }
    