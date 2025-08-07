/*creature JavaScript */

document.addEventListener('DOMContentLoaded', () => {
  const creatureName = document.querySelector('.name-text')?.textContent?.trim();
  const titleEl = document.querySelector('h1.heading_font');

  if (creatureName && titleEl && !titleEl.textContent.includes(creatureName)) {
    titleEl.textContent += ` · ${creatureName}`;
  }
});


/* Sitewide JavaScript follows below */

/* ADDED BY CRYSTAL FROM RAVENSPACE */

/* Delete select sections from native Scalar header */

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> desktopTitleWrapper, #desktopTitleWrapper').remove();
  });
});

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> indexLink, #indexLink').remove();
  });
});

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> ScalarHeaderHelp, #ScalarHeaderHelp').remove();
  });
});

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> lenses_menu, #lenses_menu').remove();
  });
});

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> vis_menu, #vis_menu').remove();
  });
});

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> scalar_menu, #scalar_menu').remove();
  });
});

	$(document).ready(function() {
  	$('body').on('pageLoadComplete',function() {
  	$('body').find('> userMenu, #userMenu').remove();
  	});
});

/* Delete select sections from native Scalar footer including comments section */

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> comment_control, #comment_control').remove();
  });
});

$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> incoming_comments, #incoming_comments').remove();
  });
});
$(document).ready(function() {
  $('body').on('pageLoadComplete',function() {
  $('body').find('> scalar-credits, #scalar-credit').remove();
  });
});

function toggleHotspot(id) {
  const allPopups = document.querySelectorAll('.hotspot-popup');
  allPopups.forEach(popup => {
    popup.style.display = popup.id === id && popup.style.display !== 'block' ? 'block' : 'none';
  });
}

function closeHotspot(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

function truncateText(text, maxLength) {
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.hotspot-image-wrapper'); // ✅ this wraps the image
  if (!wrapper) {
    console.error('Hotspot image wrapper not found!');
    return;
  }

  const defaultImg = 'https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world-templates/media/forrest-dweller.png';

  const hotspots = [
 // === Sky Creatures (Top 10-20%) ===
  {
    id: 'owl-long-eared',
    titleEn: 'digalisquali',
    titleCherokee: 'ᏗᎦᎵᏍᏆᎵ',
    description: 'Long-Eared Owl is one of the Birds. Its name means: having long ears',
    imgSrc:'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11701/Teuton_407_long-eared-owl_img_W.jpeg',
    top: '12%',
    left: '38%',
    link: 'owl-long-eared'
  },
  {
    id: 'buzzard-or-vulture',
    titleEn: 'Suli',
    titleCherokee: 'ᏑᎵ',
    description: 'Buzzard, or Vulture, is one of the Birds. It’s associated with nvwoti and eats things others cannot.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11685/Teuton_316_buzzard_img_W.jpeg',
    top: '12%',
    left: '60%',
    link: 'buzzard-or-vulture'
  },
  {
    id: 'crow',
    titleEn: 'Koga',
    titleCherokee: 'ᎪᎦ',
    description: 'Crow is one of the Birds. It’s named for the sound the crow makes.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11654/Teuton_335_crow_img_W.jpeg',
    top: '18%',
    left: '77%',
    link: 'crow'
  },
  {
    id: 'bee-honey',
    titleEn: 'Wadulisi aninvsgi',
    titleCherokee: 'ᏩᏚᎵᏏ ᎠᏂᏅᏍᎦ',
    description: 'Honey bee',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12699/Teuton_1745_honey-bee_img_W.jpeg',
    top: '59%',
    left: '46%',
    link: 'bee-honey'
  },
 
  // === Tall Plants/Trees (Midground 20-40%) ===
  {
    id: 'hickory',
    titleEn: 'Wane',
    titleCherokee: 'ᏩᏁ',
    description: 'Hickory is one of the Trees. A drink called kanutchie is made from the nut of this tree.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11600/Teuton_639_hickory-tree_img_W.jpeg',
    top: '10%',
    left: '15%',
    link: 'hickory'
  },
  {
    id: 'river-cane',
    titleEn: 'Ahii',
    titleCherokee: 'ᎠᎯᎢ',
    description: 'River cane is one of the Plants. It’s used in many traditional arts.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11864/Teuton_726_river-cane_img_W.jpeg',
    top: '29%',
    left: '69%',
    link: 'river-cane'
  },
 
  // === Three Sisters (Grouped, Center 50-65%) ===
  {
    id: 'corn-or-maize',
    titleEn: 'Selu',
    titleCherokee: 'ᏎᎷ',
    description: 'Corn, or maize, is one of the Edible Plants. It’s a gift from the Creator, something that will take care of the Cherokees if they take care of it.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12025/Teuton_1038_corn_img_W.jpeg',
    top: '23%',
    left: '90%',
    link: 'corn-or-maize'
  },
  {
    id: 'beans',
    titleEn: 'Tuya',
    titleCherokee: 'ᏚᏯ',
    description: 'Beans are one of the Edible Plants.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12011/Teuton_1052_beans_img_W.jpeg',
    top: '27%',
    left: '86%',
    link: 'beans'
  },
  {
    id: 'squash',
    titleEn: 'Wagugi',
    titleCherokee: 'ᏩᎫᎩ',
    description: 'Squash is one of the Edible Plants.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12010/Teuton_1053_squash_img_W.jpeg',
    top: '35%',
    left: '82%',
    link: 'squash'
  },
 
  // === Ground Plants (60-80%) ===
  {
    id: 'new-jersey-tea',
    titleEn: 'Tsiyugali',
    titleCherokee: 'ᏥᏳᎦᎵ',
    description: 'New Jersey Tea is one of the Plants. It’s also known as alisgali, snakeroot, or redroot.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11820/Teuton_770_New-Jersey-tea-snakeroot-redroot_img_W.jpeg',
    top: '68%',
    left: '12%',
    link: 'new-jersey-tea'
  },
  {
    id: 'tobacco',
    titleEn: 'Tsola',
    titleCherokee: 'ᏦᎳ',
    description: 'Tobacco is one of the Plants.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11798/Teuton_792_tobacco_img_W.jpeg',
    top: '59%',
    left: '39%',
    link: 'tobacco'
  },
  {
    id: 'bloodroot',
    titleEn: 'Gitli uwatali',
    titleCherokee: 'ᎩᏟ ᎤᏩᏔᎵ',
    description: 'Bloodroot is one of the Plants. Its name means: dog’s privates. Only a small amount is needed for red dye.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11871/Teuton_719_bloodroot_img_W.jpeg',
    top: '38%',
    left: '69%',
    link: 'bloodroot'
  },
  {
    id: 'onion-wild',
    titleEn: 'Svgi inage ehi ',
    titleCherokee: 'ᏒᎩ ᎢᎾᎨ ᎡᎯ',
    description: 'Wild Onions are one of the Edible Plants. Its name means: onion that lives in the wild.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11975/Teuton_1088_wild-onion_img_W.jpeg',
    top: '92%',
    left: '87%',
    link: 'onion-wild'
  },
 
  // === Land Animals (30-70%) ===
  {
    id: 'black-bear',
    titleEn: 'Yona gvnage',
    titleCherokee: 'ᏲᎾ ᎬᎾᎨ',
    description: 'Black Bear is one of the Forest Dwellers.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11910/Teuton_1299_black-bear_img_W.jpeg',
    top: '40%',
    left: '86%',
    link: 'bear-black'
  },
  {
    id: 'deer-white',
    titleEn: 'Awi unega',
    titleCherokee: 'ᎠᏫ ᎤᏁᎦ',
    description: 'White Deer is one of the Forest Dwellers.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11905/Teuton_1304_white-deer_img_W.jpeg',
    top: '56%',
    left: '89%',
    link: 'deer-white'
  },
  {
    id: 'raccoon',
    titleEn: 'Kvtli',
    titleCherokee: 'ᎬᏟ',
    description: 'Raccoon is one of the Forest Dwellers. Its name means: has a mask on.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11916/Teuton_1293_raccoon_img_W.jpeg',
    top: '50%',
    left: '75%',
    link: 'raccoon'
  },
  {
    id: 'wolf',
    titleEn: 'Waya',
    titleCherokee: 'ᏩᏯ',
    description: 'Wolf is one of the Forest Dwellers. In Cherokee tradition, waya symbolizes guardianship.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11956/Teuton_1253_wolf-description_img_W.jpeg',
    top: '56%',
    left: '73%',
    link: 'wolf'
  },
  {
    id: 'beaver',
    titleEn: 'Doya',
    titleCherokee: 'ᏙᏯ',
    description: 'Beaver is one of the Forest Dwellers. In Cherokee tradition, doya symbolizes resourcefulness.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11933/Teuton_1276_beaver_img_W.jpeg',
    top: '65%',
    left: '83%',
    link: 'beaver'
  },
  {
    id: 'panther-or-moutain-lion',
    titleEn: 'Tlvdatsi',
    titleCherokee: 'ᏢᏓᏥ',
    description: 'Panther is one of the Forest Dwellers. In Cherokee tradition, tlvdatsi symbolizes strength.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11951/Teuton_1258_panther-mountain-lion_img_W.jpeg',
    top: '67%',
    left: '71%',
    link: 'panther-or-moutain-lion'
  },
  {
    id: 'possum',
    titleEn: 'Siqua utseisdi',
    titleCherokee: 'ᏏᏆ ᎤᏤᎢᏍᏗ',
    description: 'Possum is one of the Forest Dwellers. Its name means: grinning hog.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/13300/Teuton_Possum.jpg',
    top: '68%',
    left: '65%',
    link: 'possum'
  },
  {
    id: 'squirrel',
    titleEn: 'Salola',
    titleCherokee: 'ᏌᎶᎳ',
    description: 'Squirrel is one of the Forest Dwellers. It’s a catchall name for squirrel.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11946/Teuton_1263_squirrel_img_W.jpeg',
    top: '77%',
    left: '64%',
    link: 'squirrel'
  },
  {
    id: 'rabbit',
    titleEn: 'Tsisdu',
    titleCherokee: 'ᏥᏍᏚ',
    description: 'Rabbit is one of the Forest Dwellers.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11943/Teuton_1266_rabbit_img_W.jpeg',
    top: '53%',
    left: '80%',
    link: 'rabbit'
  },
 {
 id: 'blacksnake-or-rat-snake',
    titleEn: 'Galegi',
    titleCherokee: 'ᎦᎴᎩ',
    description: 'Blacksnake, or Rat Snake, is one of the Reptiles and Amphibians. Its name means: the climber.',
    imgSrc:'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12625/Teuton_1563_black-snake_img_W.jpeg',
    top: '74%',
    left: '59%',
    link: 'blacksnake-or-rat-snake'
  },
  {
    id: 'mouse',
    titleEn: 'Tsisdeti',
    titleCherokee: 'ᏥᏍᏕᏥ',
    description: 'Mouse is one of the Forest Dwellers.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/11925/Teuton_1284_mouse_img_W.jpeg',
    top: '36%',
    left: '85%',
    link: 'mouse'
  },
  {
    id: 'dirt-dauber',
    titleEn: 'digulidisgi',
    titleCherokee: 'ᏗᎫᎵᏗᏍᎩ',
    description: 'Dirt Dauber is one of the Insects. This is the insect that taught us how to build our homes using mud.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12679/Teuton_1725_dirt-dauber_img_W.jpeg',
    top: '88%',
    left: '53%',
    link: 'dirt-dauber'
  },
 
  // === Water Creatures (75-90%) ===
  {
    id: 'bass-largemouth-or-black-bass',
    titleEn: 'Unoga tsuloisdi',
    titleCherokee: 'ᎤᏃᎦ ᏧᎶᎢᏍᏗ',
    description: 'Large Mouth Bass, or Black Bass, is one of the Fish. Its name means: bass with a stripe.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12582/Teuton_1444_largemouth-bass_img_W.jpeg',
    top: '26%',
    left: '64%',
    link: 'bass-largemouth-or-black-bass'
  },
  {
    id: 'gar-alligator',
    titleEn: 'Danuga',
    titleCherokee: 'ᏓᏄᎦ',
    description: 'Alligator Gar is one of the Fish. The town of Gore, Oklahoma, has this name also.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12611/Teuton_1473_alligator-gar_img_W.jpeg',
    top: '33%',
    left: '39%',
    link: 'gar-alligator'
  },
  {
    id: 'fishing-spider',
    titleEn: 'Kananesgi',
    titleCherokee: 'ᎧᎾᏁᏍᎩ',
    description: 'Spider is one of the Insects. It was one of the spider’s kind that got us the fire and showed us how to do pottery and fire it.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12691/Teuton_1737_spider_img_W.jpeg',
    top: '45%',
    left: '52%',
    link: 'spider'

  },
  {
    id: 'red-eared-slider',
    titleEn: 'Digasvgir',
    titleCherokee: 'ᏗᎦᏒᎩ',
    description: 'Painted Turtle is one of the Reptiles and Amphibians. He complained about not having any color on his house. So the Creator gave him one that had some color.',
    imgSrc: 'https://media.ravenspacepublishing.org/bitstream/handle/20.500.13017/12654/Teuton_1592_painted-turtle_img_W.jpeg',
    top: '72%',
    left: '55%',
    link: 'turtle-painted'
  }
];



  hotspots.forEach(h => {
    const marker = document.createElement('div');
    marker.className = 'hotspot-marker';
    marker.style.top = h.top;
    marker.style.left = h.left;
    marker.title = h.titleEn;
    marker.onclick = () => toggleHotspot(`popup-${h.id}`);
    wrapper.appendChild(marker);

    const popup = document.createElement('div');
    popup.id = `popup-${h.id}`;
    popup.className = 'hotspot-popup';
    popup.style.top = `calc(${h.top} + 5%)`;
    popup.style.left = h.left;
    popup.innerHTML = `
      <span class="popup-close" onclick="closeHotspot('popup-${h.id}')">×</span>
      <img alt="${h.titleEn}" class="popup-image" src="${h.imgSrc}" />
      <h3 class="popup-title-cherokee">${h.titleCherokee}</h3>
      <h4 class="popup-title-en">${h.titleEn}</h4>
      <p class="popup-description">${truncateText(h.description, 160)}</p>
      <a class="popup-button" href="${h.link}">
        Explore
        <img src="https://developmentserver.ravenspacepublishing.org/the-cherokee-natural-world-templates/media/arrow-right-to-arc.png" alt="arrow icon" style="width:16px; height:16px; margin-left:0.5rem; vertical-align:middle;" />
      </a>
    `;
    wrapper.appendChild(popup);
  });
});