function convertCategories(subcategory, gender, bgCat) {
  let category;
  if (bgCat !== "clothing") {
    switch (bgCat) {
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
      case "gloves":
        category = "accessories";
        break;
      case "jewellery sets":
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
      }
  } else {
    switch (subcategory) {
      case "bags":
        if (gender === "men") {
          category = "accessories";
          break;
        } else if (gender === "women") {
          category = "bags_luggage"
          break;
        }
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
        console.log("77 ", "I'm here")
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
    } else if (["backpacks"].includes(subcategory)) {
      if (gender === "men") {
        newSubCat = "bags_luggage";
      } else if (gender === "women") {
        newSubCat = "backpacks";
      }  
    } else if (["blazers"].includes(subcategory)) {
      newSubCat = "blazers";
    } else if (["dresses"].includes(subcategory)) {
      options = ["midi", "mini", "maxi", "gowns"];
    } else if (["gloves"].includes(subcategory)) {
        newSubCat = "gloves";
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
        options = ["denim", "casual_pants", "cropped_pants"];
      } else if (gender === "women") {
        options = ["jeans", "pants"];
      }
    } else if (subcategory === "shirts") {
      options = ["long_sleeve_shirts", "short_sleeve_shirts"];
    } else if (subcategory === "shorts") {
      newSubCat = "shorts";
    } else if (subcategory === "skirts") {
      options = ["maxi_skirts", "midi_skirts", "mini_skirts"];
    } else if (subcategory === "sleepwear") {
      newSubCat = "?";
    } else if (subcategory === "suits") {
      newSubCat = "suits";
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
    } else if (subcategory === "tights & socks") {
      if (gender === "men") {
        newSubCat = "socks_underwear";   
      } else if (gender === "women") {
        newSubCat = "socks_intimates";
      }
    } else if (subcategory === "tops & t-shirts") {
      newSubCat = "?";
    } else if (subcategory === "underwear") {
      if (gender === "men") {
        newSubCat = "socks_underwear";
      } else if (gender === "women") {
        newSubCat = "socks_intimates";
      }
    } else if (subcategory === "vests") {
      newSubCat = "vests";
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
      if ((title.includes(option) || title.includes(option.substring(0, option.length - 1))) || description.includes(option)) {
      let ind = newOptions.indexOf(option);
      newSubCat = options[ind];
    }});

    if (newSubCat) return newSubCat;
    if (options) return options; 
    }
    
