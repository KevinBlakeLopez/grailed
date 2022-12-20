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
        category = "shoes";
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
        category = "";
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

function convertSubCategories(subcategory, gender, title, description) {
  let newSubCat;
  let options;
    if (["bags", "briefcases"].includes(subcategory)) {
      if (gender === "men") {
        newSubCat = "bags_luggage";
      } else if (gender === "women") {
        newSubCat = "other";
      }  
    } else if (["backpacks", "clutches"].includes(subcategory)) {
      if (gender === "men") {
        newSubCat = "bags_luggage";
      } else if (gender === "women") {
        newSubCat = subcategory;
      }  
    } else if (["belts", "blazers", "boots", "bracelets", "brooches", "charms", "cufflinks", "earrings", "flats", "gloves", "heels", "leather", "mules", "platforms", "necklaces", "rings", "sandals", "scarves", "shorts", "suits", "vests"].includes(subcategory)) {
      newSubCat = subcategory;
    } else if (["cummerbund", "handkerchief", "hand bag", "headbands", "pumps"].includes(subcategory)) {
      newSubCat = "unknown???";
    } else if (["hitop sneakers", "lowtop sneakers", "sneakers", "slip ons"].includes(subcategory)) {
      options = ["hitop_sneakers", "lowtop_sneakers", "sneakers", "slip_ons"];
    } else if (["belt bags", "bucket bags", "clutch bags", "crossbody bags", "handle bags", "hobo bags", "luggage travel", "messengers satchels", "mini bags", "other", "shoulder bags", "toiletry pouches", "tote bags"].includes(subcategory)) {
      options = ["belt_bags", "bucket_bags", "clutch_bags", "crossbody_bags", "handle_bags", "hobo_bags", "luggage_travel", "messengers_satchels", "mini_bags", "other", "shoulder_bags", "toiletry_pouches", "tote_bags"];
    } else if (["dresses"].includes(subcategory)) {
      if (description.includes("above-knee")) {
        newSubCat = "mini";
      } else {
        options = ["midi", "mini", "maxi", "gowns"];
      }
    } else if (subcategory === "formal") {
      newSubCat = "formal_shoes";
    } else if (subcategory === "jackets") {
      if (gender === "men") {
        options = ["denim_jackets", "leather_jackets", "light_jackets"];
      } else if (gender === "women") {
        options = ["denim_jackets", "down_jackets", "jackets", "leather_jackets", "rain_jackets"];
      }
    } else if (subcategory === "jackets & coats") {
      if (gender === "men") {
        options = ["denim_jackets", "leather_jackets", "light_jackets", "heavy_coats", "raincoats"];
      } else if (gender === "women") {
        options = ["denim_jackets", "down_jackets", "jackets", "leather_jackets", "rain_jackets", "coats"];
      }
    } else if (subcategory === "jeans & pants") {
      if (gender === "men") {
        if (title.includes("jeans") || description.includes("jeans")) {
          newSubCat = "denim???";
        } else {
          options = ["denim", "casual_pants", "cropped_pants"];
        }
      } else if (gender === "women") {
        options = ["jeans", "pants"];
      }
    } else if (subcategory === "shirts") {
      options = ["long_sleeve_shirts", "short_sleeve_shirts"];
    } else if (subcategory === "skirts") {
      if (description.includes("above-knee")) {
        newSubCat = "mini_skirts";
      } else {
        options = ["maxi_skirts", "midi_skirts", "mini_skirts"];
      }
    } else if (subcategory === "sleepwear") {
      newSubCat = "???";
    } else if (subcategory === "suits & blazers") {
      options = ["suits", "blazers"];
    } else if (subcategory === "sweaters") {
      if (gender === "men") {
        newSubCat = "sweaters_knitwear";
      } else if (gender === "women") {
        newSubCat = "sweaters";
      }
    } else if (subcategory === "sweatsuits") {
      newSubCat = "?";
    } else if (subcategory === "t-shirts") {
      options = ["long_sleeve_shirts", "short_sleeve_shirts"];
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
        newSubCat = "short_sleeve_shirts???";
      } else {
        options = ["blouses", "long_sleeve_shirts", "short_sleeve_shirts"];
      }
    } else if (subcategory === "underwear") {
      if (gender === "men") {
        newSubCat = "socks_underwear";
      } else if (gender === "women") {
        newSubCat = "socks_intimates";
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

    if (newSubCat) return newSubCat;
    if (options) return options; 
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
    
