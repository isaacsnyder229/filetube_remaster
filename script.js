// === Content Data ===
const videos = [
  {
    name: "Scarface (1983) [1080p UHD BluRay x265 HDR DV DD5.1]",
    url: "https://mega.nz/file/n45iFRxL#WaijioqfLZmBD3ED_wPEXbghMwU78RddOB_tzOBYNDw",
    thumbnail: "https://files.catbox.moe/da39d2.webp",
    description: "In the 1980s, a determined criminal-minded Cuban immigrant becomes the biggest drug smuggler in Miami, and is eventually undone by his own drug addiction.",
    tags: ["Crime", "Drama"]
  },
  {
    name: "Iron Man (2008) [1080p x265 10Bit DD+5.1]",
    url: "https://mega.nz/file/rsRHQDxD#AdogN85HXl-4DbE1mxle87nyMSl8i0MuMfIBFZQKxwU",
    thumbnail: "https://files.catbox.moe/xlrtiy.jpg",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    tags: ["Action", "Adventure", "Sci-Fi"]
  },
];

const minecraft = [
  {
    name: "Dragon Ball Z",
    url: "https://mega.nz/file/8U8gwCDD#xO8hyeRHf3AKmDCm-pd0cjZDFPl3ji6p8uiO-IXKMuo",
    thumbnail: "https://files.catbox.moe/ovl05q.png",
    description: "Battle as your favorite Dragon Ball Z character in this explosive DLC! Master iconic moves, battle in legendary arenas from the series, and see who dominates the battlefield.",
    tags: ["Cyclone", "Template", "Anime"]
  },
  {
    name: "Super Cute Fantasy TexturePack",
    url: "https://mega.nz/file/MNN3mbwS#p4ePQ_9ScQ0EKdJ9Lw10yNdBRYlDRxqfjZqvp6ULOdU",
    thumbnail: "https://files.catbox.moe/5ksib0.png",
    description: "This texture pack transforms your Minecraft world into a whimsical fantasy realm filled with vibrant colors and charming details. Perfect for players who love a cute and magical aesthetic.",
    tags: ["Some Game Studio", "Texture", "Fantasy"]
  },
  {
    name: "Egyptian Mythology Mash-up",
    url: "https://mega.nz/file/oM0AWYjT#crxuRpPy_ELj934fw1PHReuE_MFuAUT3fpf5juJRBG0",
    thumbnail: "https://files.catbox.moe/wfgqui.jpg",
    description: "Will you survive the perils of the Pyramids? Journey through the Valley of the Kings, dodge deadly traps and explore the ancient tombs below! The fourth pack in the Mythology series, this Egyptian-themed Mash-up comes with textures fit for a Pharaoh, legendary mobs, a pantheon of skins and an epic soundtrack!",
    tags: ["Minecraft", "Mashup", "Mythology"]
  },
  {
    name: "Greek Mythology Mash-up",
    url: "https://mega.nz/file/9IVylCqb#AiGVBGC3o8UYvE9itlhrFciFdJECJMUv34mR4Z7tr7g",
    thumbnail: "https://files.catbox.moe/c3r02i.jpg",
    description: "Build a pantheon fit for the gods, trap the Minotaur in an elaborate maze, or set sail for adventures across the sea. The world is your square oyster!",
    tags: ["Minecraft", "Mashup", "Mythology"]
  },
  {
    name: "Dragonborn Mash-up",
    url: "https://mega.nz/file/pN1lhT4Y#i6hLgJolgavi9xkMpRt7Ok8oRXYEMZqBp3gJIkddj6M",
    thumbnail: "https://files.catbox.moe/3uebxx.jpg",
    description: "The Dragonborn meets Minecraft in a clash of epic proportions. Build your own worlds in the land of Tamriel and experience adventure with many of its most iconic characters. Fus Ro Dah!",
    tags: ["Minecraft", "Mashup", "Mythology"]
  },
  {
    name: "Cartoon Texture Pack",
    url: "https://mega.nz/file/YU03HRgB#fiCGBFuKDJ-toDDSm1IgaSzk1DGWf4tJtj96zlZr22A",
    thumbnail: "https://files.catbox.moe/nc8nv7.jpg",
    description: "Googly eyes! Goofy grins! Turn your world into a toon with this pack.",
    tags: ["Minecraft", "Texture", "Cartoon"]
  },
  {
    name: "Natural Texture Pack",
    url: "https://mega.nz/file/1E1VkQhb#dTmFs3ptLL3Dsh3FADAMrH_OeH_JeN2m3yNzSjRXCTo",
    thumbnail: "https://files.catbox.moe/igxytr.jpg",
    description: "Designed to give your Minecraft worlds a more natural look.",
    tags: ["Minecraft", "Texture", "Nature"]
  },
  {
    name: "Steampunk Texture Pack",
    url: "https://mega.nz/file/BE0R1QTA#BIYXpXxheNTCYqI6ku68x0Mo13J31F7tP03w747IDQ4",
    thumbnail: "https://files.catbox.moe/bub4o4.jpg",
    description: "Create your own Industrial Revolution with this Victorian inspired Steampunk texture pack!",
    tags: ["Minecraft", "Texture", "Steampunk"]
  },
  {
    name: "Steven Universe Mash-up",
    url: "https://mega.nz/file/9ckV3b5S#ZL1sbCx8phKM3-n42mr64RndgQK9lI8VzZihOHVTzhw",
    thumbnail: "https://files.catbox.moe/y05c2o.jpg",
    description: "Steven enters the Minecraft universe in this Diamond-worthy Mash-up! Contains Steven Universe themed skins, textures, original music from the show, and all your favorite locations, from Beach City to Homeworld. Believe in Steven!",
    tags: ["Minecraft", "Mashup", "Cartoon"]
  },
  {
    name: "Vault-Tec Mash-up",
    url: "https://mega.nz/file/MdsghbTR#Y-mownIaMQhHGVH99ic72ERtmT_D6OQQCKTtFj4Kylo",
    thumbnail: "https://files.catbox.moe/jytu6n.jpg",
    description: "Welcome to the wasteland! Crack open the Vault containing 44 unique skins, custom textures, re-skinned mobs, a special post-apocalyptic map, original soundtrack compilation and a Pip-Boy inspired UI.",
    tags: ["Minecraft", "Mashup", "Post-Apocalyptic"]
  },
  {
    name: "City Texture Pack",
    url: "https://mega.nz/file/4M91AB5C#tCM6RlOamgpP8tUq4Tka4N7LUJ-Ff5DBDJD8TbKPoV4",
    thumbnail: "https://files.catbox.moe/klkpsh.jpg",
    description: "Free your inner architect and shape the world around you.",
    tags: ["Minecraft", "Texture", "City"]
  },
  {
    name: "Halloween Mash-up",
    url: "https://mega.nz/file/FF0RGYrC#Pls598UINsfAEjCbq1qX6kqZ3Y3RiN_Iny7aZ7f8heQ",
    thumbnail: "https://files.catbox.moe/fo7az2.jpg",
    description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
    tags: ["Minecraft", "Mashup", "Halloween"]
  },
  {
    name: "Pattern Texture Pack",
    url: "https://mega.nz/file/hIdkzZqZ#qFZnVO_-nQn-quK1_gDBdSHulsR4BrLcWxGZ3lqndM0",
    thumbnail: "https://files.catbox.moe/gc2n3c.jpg",
    description: "Decorate your world with this bright and colorful texture pack filled with beautiful patterns and knitted animals!",
    tags: ["Minecraft", "Texture", "Pattern"]
  },
  {
    name: "LittleBigPlanet™ Mash-up",
    url: "https://mega.nz/file/NZlAjIyY#cF0ft438YjFvAwBz92--Lx7nOwtPeTIAyC321UYrEPg",
    thumbnail: "https://files.catbox.moe/2bkzuq.jpg",
    description: "Mix the crazy, non-stop creativity of LittleBigPlanet™ into the endless fun and freedom of Minecraft with this special mashup pack.\nSackboy®, Sackgirl®, OddSock, Toggle and Swoop will decorate your Minecraft universe with a whole heap of LBP characters, creatures and stuff.\nOnly available for Minecraft on PlayStation®4.",
    tags: ["Minecraft", "Mashup", "LittleBigPlanet"]
  },
  {
    name: "Toy Story Mash-up",
    url: "https://mega.nz/file/dcFzgbwJ#K_1glGcHau4w4QFfcJScg9cdfaTBwxqrZhI6Y-SHUO4",
    thumbnail: "https://files.catbox.moe/npcdmx.jpg",
    description: "Open up the toy box! Woody, Buzz, Bo Peep and many of your favorite toys come to life in this oversized Mash-up based on all the Toy Story movies! To infinity and beyond!",
    tags: ["Minecraft", "Mashup", "Toy Story"]
  },
  {
    name: "STAR WARS",
    url: "https://mega.nz/file/8d9VWRZa#MYbdL8-Yb4OzqBMZ8RwuaSZSO-JzAa33JRAAA4F06mQ",
    thumbnail: "https://files.catbox.moe/hfik2o.jpg",
    description: "Explore the galaxy in this epic STAR WARS Mash-up, featuring characters and locations from the original trilogy and The Mandalorian series. This is the way!",
    tags: ["Minecraft", "Mashup", "Star Wars"]
  },
  {
    name: "Teenage Mutant Ninja Turtles",
    url: "https://mega.nz/file/hQElFYga#FnaWAJIguJ2gs_BOh1kFb3ZMxPRViD1peJ6OOo0kS_Y",
    thumbnail: "https://files.catbox.moe/jux1jr.jpg",
    description: "Cowabunga! The Teenage Mutant Ninja Turtles have found their way into Minecraft in this radical DLC. Play as any of the four Turtles to take down gnarly enemies, save New York from Shredder and eat all the pizza! ",
    tags: ["Minecraft", "Template", "Teenage Mutant Ninja Turtles"]
  },
  {
    name: "N7 Mash-up",
    url: "https://mega.nz/file/VFkHARqC#_ESoUJ5udxAZjBzJjHD6jr2dHUq1HP_mev65XiLr_f0",
    thumbnail: "https://files.catbox.moe/w41ytj.jpg",
    description: "Shape the fate of your Minecraft galaxy with this amazing Mash-up: includes thirty-six character skins, bespoke game textures, themed menus, a dedicated world filled with iconic locations and original soundtrack compilation to set the mood.",
    tags: ["Minecraft", "Mashup", "Mass Effect"]
  },
  {
    name: "Azure PVP",
    url: "https://mega.nz/file/UNEUSZ5S#95WmId3Fs9GUbsOr_duvQ8EdMzdYuqvhcfhrt4zbEbk",
    thumbnail: "https://files.catbox.moe/44g8u9.jpg",
    description: "A vibrant and dynamic texture pack designed to enhance your PvP experience in Minecraft. With sharp details and bold colors, Azure PVP brings a fresh look to your battles, making every fight more immersive and exciting.",
    tags: ["Waypoint Studios", "Texture", "Combat"]
  },
];

const images = [
  {
    name: "Abstract Art Collection",
    url: "https://example.com/abstract-art.zip",
    thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    description: "A collection of vibrant abstract digital artworks.",
    tags: ["Art", "Abstract", "Digital"]
  },
  {
    name: "Nature Photography Pack",
    url: "https://example.com/nature-photos.zip",
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    description: "Stunning high-resolution nature photographs.",
    tags: ["Nature", "Photography", "Landscape"]
  }
];

const files = [
  {
    name: "Minecraft 1.20.50 64bit",
    url: "https://mega.nz/file/QIsj1KjC#Z7nJ7O8HIRHVJ0ymobDfDpy2sd6cDX6W83pFJYE63L0",
    thumbnail: "https://files.catbox.moe/c5vqr6.png",
    description: "Minecraft is a sandbox adventure game where you build, explore, and survive in randomly generated worlds. It features creative building, crafting, mining, combat, and regular updates that add new blocks, mobs, and gameplay improvements.",
    tags: ["Minecraft", "Android", "APK"]
  },
  {
    name: "ToolMcFRZ v9.9.2[1.20.80]",
    url: "https://mega.nz/file/sNtDWZiZ#2maiLkuDFaMnhE_sM_iLOuLa2czZWE7jtxsR5674g_Y",
    thumbnail: "https://files.catbox.moe/al0aw5.jpg",
    description: "Cheat client for Minecraft PE with various hacks and mods to enhance gameplay.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  },
  {
    name: "Toolbox IT 1.20.81[Fixed]",
    url: "https://mega.nz/file/EJtFBbAZ#Sx8DxK650KvmQQbSDCVwcq0NBR2n4wUCwjpl34eTlrg",
    thumbnail: "https://files.catbox.moe/83sm77.jpg",
    description: "Cheat client for Minecraft PE with various hacks and mods to enhance gameplay.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  },
  {
    name: "Toolbox IT 1.20.80",
    url: "https://mega.nz/file/kI1UjIqI#7XiI7dDNEjNI7N1dWT2jPveR_UIAZHAYRdOARXo1zA8",
    thumbnail: "https://files.catbox.moe/83sm77.jpg",
    description: "Cheat client for Minecraft PE with various hacks and mods to enhance gameplay.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  },
  {
    name: "Toolbox UP (1.20.51 - 64bit only)",
    url: "https://mega.nz/file/dZ9AAJIR#T0J39U7FHNWIv2oxtfWFZ7O0HuF8Jv0x4r_P07-0TB4",
    thumbnail: "https://files.catbox.moe/0kwe5l.png",
    description: "Cheat client for Minecraft PE with various hacks and mods to enhance gameplay.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  },
  {
    name: "Toolbox Zeta (Support 1.20.51)",
    url: "https://mega.nz/file/JYtG3Kwb#e4GIulTQFQfsecFJEh7A02Ihe4-r_7kChw78ObiFT6o",
    thumbnail: "https://files.catbox.moe/83sm77.jpg",
    description: "Cheat client for Minecraft PE with various hacks and mods to enhance gameplay.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  },
  {
    name: "Toolbox UP (5.4.55 - 1.20.32)",
    url: "https://mega.nz/file/8ElVRQ5b#gCyxn9kbueeK2eijBx240t7-vHVza1rUoH4nD1h7LIE",
    thumbnail: "https://files.catbox.moe/0kwe5l.png",
    description: "Cheat client for Minecraft PE with various hacks and mods to enhance gameplay.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  },
  {
    name: "Minecraft installer V2 (1.2.0 - FINAL)",
    url: "https://mega.nz/file/tcl1WLAa#jVOOaJ1ft_Myl-6hw7O8c3_AAkV9msKx_nMAAuQr9CQ",
    thumbnail: "https://files.catbox.moe/c5vqr6.png",
    description: "A minectraft installer that helps you install Minecraft PE on your Android device easily.",
    tags: ["Minecraft", "Android", "APK", "Tool"]
  }
];
//Toolbox IT 1.20.81
// DOM Elements
const container = document.getElementById("contentContainer");
const searchInput = document.getElementById("searchInput");
const movieTab = document.getElementById("movie-tab");
const minecraftTab = document.getElementById("minecraft-tab");
const imageTab = document.getElementById("image-tab");
const fileTab = document.getElementById("file-tab");

let currentTab = "movie";

// Render Functions
function renderContent(data, filter = "") {
  container.innerHTML = "";
  const keyword = filter.toLowerCase().trim();
  const isTagSearch = keyword.startsWith("@");
  const searchTerm = isTagSearch ? keyword.slice(1) : keyword;

  const filtered = data.filter(item => {
    if (isTagSearch) {
      return item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    } else {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );
    }
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state">No content found. Try a different search term.</div>';
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "content-card";

    card.innerHTML = `
      <img loading="lazy" src="${item.thumbnail}" class="content-thumb" alt="Thumbnail for ${item.name}">
      <div class="content-title"><a href="${item.url}" target="_blank">${item.name}</a></div>
      <div class="content-desc">${item.description}</div>
      <div class="tags">
        ${item.tags.map(tag => `<span class="tag" onclick="searchByTag('@${tag}')">${tag}</span>`).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderMovies(filter = "") {
  renderContent(videos, filter);
}

function renderMinecraft(filter = "") {
  renderContent(minecraft, filter);
}

function renderImages(filter = "") {
  renderContent(images, filter);
}

function renderFiles(filter = "") {
  renderContent(files, filter);
}

// Tab Management
function switchTab(tab) {
  // Update tab buttons
  [movieTab, minecraftTab, imageTab, fileTab].forEach(t => t.classList.remove("active"));
  
  // Set active tab and render content
  currentTab = tab;
  document.getElementById(`${tab}-tab`).classList.add("active");
  
  // Render appropriate content
  const searchValue = searchInput.value;
  switch(tab) {
    case "movie":
      renderMovies(searchValue);
      break;
    case "minecraft":
      renderMinecraft(searchValue);
      break;
    case "image":
      renderImages(searchValue);
      break;
    case "file":
      renderFiles(searchValue);
      break;
  }
}

// Search Functions
function searchByTag(tag) {
  searchInput.value = tag;
  handleSearch();
}

function handleSearch() {
  switch(currentTab) {
    case "movie":
      renderMovies(searchInput.value);
      break;
    case "minecraft":
      renderMinecraft(searchInput.value);
      break;
    case "image":
      renderImages(searchInput.value);
      break;
    case "file":
      renderFiles(searchInput.value);
      break;
  }
}

// Debounce helper
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Event Listeners
searchInput.addEventListener("input", debounce(handleSearch, 200));

// Initialize
renderMovies();