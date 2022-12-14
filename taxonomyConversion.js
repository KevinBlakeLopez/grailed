function convertCategories(subcategory, gender) {
  let category;
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
    case "gloves":
      category = "accessories";
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
    case "shorts":
      category = "bottoms";
      break;
    case "skirts":
      category = "bottoms";
      break;
    case "sleepwear":
      category = "accessories?";
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
  return category;
}

function convertSubCategories(subcategory, gender, title, description) {
    let newSubCat;
    let options;
    switch (subcategory) {
      case "blazers":
        newSubCat = "blazers";
        break;
      case "dresses":
        options = ["midi", "mini", "maxi", "gowns"];
        break;
      case "gloves":
        newSubCat = "gloves";
        break;
      case "jackets":
        if (gender === "men") {
          options = ["denim_jackets", "leather_jackets", "light_jackets"];
          break;
        } else if (gender === "women") {
          options = ["denim_jackets", "down_jackets", "jackets", "leather_jackets", "rain_jackets"];
          break;
        }
      case "jackets & coats":
        if (gender === "men") {
          options = ["denim_jackets", "leather_jackets", "light_jackets", "heavy_coats", "raincoats"];
          break;
        } else if (gender === "women") {
          options = ["denim_jackets", "down_jackets", "jackets", "leather_jackets", "rain_jackets", "coats"];
          break;
        }
      case "jeans & pants":
        if (gender === "men") {
          options = ["denim", "casual_pants", "cropped_pants"];
          break;
        } else if (gender === "women") {
          options = ["jeans", "pants"];
          break;
        }
      case "shirts":
        options = ["long_sleeve_shirts", "short_sleeve_shirts"];
        break;
      case "shorts":
        category = "shorts";
        break;
      case "skirts":
        options = ["maxi_skirts", "midi_skirts", "mini_skirts"];
        break;
      case "sleepwear":
        category = "?";
        break;
      case "suits":
        category = "suits";
        break;
      case "suits & blazers":
        options = ["suits", "blazers"];
        break;
      case "sweaters":
        if (gender === "men") {
          newSubCat = "sweaters_knitwear";
          break;
        } else if (gender === "women") {
          newSubCat = "sweaters";
          break;
        }
      case "sweatsuits":
        newSubCat = "?";
        break;
      case "t-shirts":
        options = ["long_sleeve_shirts", "short_sleeve_shirts"];
        break;
      case "tights & socks":
        if (gender === "men") {
          newSubCat = "socks_underwear";
          break;
        } else if (gender === "women") {
          newSubCat = "socks_intimates";
          break;
        }
      case "tops & t-shirts":
        newSubCat = "?";
        break;
      case "underwear":
        if (gender === "men") {
          newSubCat = "socks_underwear";
          break;
        } else if (gender === "women") {
          newSubCat = "socks_intimates";
          break;
        }
      case "vests":
        newSubCat = "vests";
        break;
        
    }
    if (options) options.forEach(option => ((title.includes(option) || title.includes(option.substring(0, option.length - 1))) || description.includes(option)) ? newSubCat = option : false);
    if (newSubCat) return newSubCat;
    if (options) return options;
}