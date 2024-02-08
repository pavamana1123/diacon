var diamap = require("./diamap.js")

var verse = `
Svasti väcana
Auspicious invocation prayers to the Lord and His associates.


Guru püja
Worship of the spiritual master (Acharya), Çrila Prabhupada


Maha Sankalpa
Expressing our desire to offer this Seva to the Lord

Dhyäna
Meditation on the form of Lord


Upacäras
Offerings to the Lord

Äsana
To offer a seat to the Lord

Swägata
Welcoming Lord  

Pädyam
To offer sanctified water to the Lotus feet of the Lord

Arghyam
To offer sanctified water to the Lotus hands of the Lord

Ächamanéyam
To offer sanctified water to the Lotus mouth of the Lord

Madhuparka
Offer a welcome drink of milk, curds and honey to the Lord

Punar-ächamanéyam
Offer sanctified water to the Lotus mouth of the Lord

Snänéyam
Begin the ceremonial Abhisheka by washing the Lotus feet of the Lord

Añöa-dala-deepa
Offering an Ärati of eight lamps

Sandal oil massage
Shuddhodaka snäna
Abhisheka with purified water

Tilodaka Lepana 
 Smearing with sesame paste and massaging

Tilodaka snana 
Abhisheka with purified sesame paste water

Shuddhodaka snäna
Abhisheka with purified water

Pancha-gavya snäna
Abhisheka of Lord with five auspicious products of the cow

Pancha-gavya snäna 
MILK

Pancha-gavya snäna 
CURDS

Pancha-gavya snäna 
GHEE

Pancha-gavya snäna
 GOMŪTRA

Pancha-gavya snäna
GOMAYA 

Kuça Water 
Abhisheka of Lord with Kuça grass water

Panchämrita snäna
Abhisheka of Lord with five auspicious items

Panchämrita snäna
MILK

Panchämrita snäna
CURDS

Panchämrita snäna
GHEE

Shuddhodaka snäna
Abhisheka with purified water

Panchämrita snäna
HONEY

Shuddhodaka snäna
Abhisheka with purified water

Panchämrita snäna
Abhisheka with sweet water

Milk Abhiñeka by Seva kartas
Usëodaka Snäna
Abhisheka with warm water

Sri Gaura Poornima Abhisheka 2022
Sarvauñadhi Snäna
Abhisheka with herbal water

Mahäuñadhi Snäna
Abhisheka with herbal water

Añtagandha Snäna
Abhisheka with herbal water

Béjäñtaka Snäna
Abhisheka with herbal water

Ratnodaka Snäna 
Water with Nine gems

Puñpodaka Snäna
Water with fresh flowers

Sri Gaura Poornima Abhisheka 2022
Phalodaka snäna 
Abhisheka of  Lord with varieties of fruit juices

Phalodaka snäna 
PINK GAUVA

Phalodaka snäna 
PINEAPPLE

Phalodaka snäna 
BUTTERFRUIT

Phalodaka snäna 
BLACK GRAPES

Phalodaka snäna 
APPLE

Phalodaka snäna 
POMEGRANATE

Phalodaka snäna 
GUAVA

Phalodaka snäna 
SAPOTA

Phalodaka snäna 
DRAGON FRUIT

Phalodaka snäna 
ORANGE

Phalodaka snäna 
BANANA

Phalodaka snäna 
MUSAMBI

Phalodaka snäna 
WATER MELON

Phalodaka snäna 
MUSK MELON

Phalodaka snäna 
TENDER COCONUT WATER

Shuddhodaka snäna
Abhisheka with purified water

Sri Gaura Poornima Abhisheka 2022
Sugandha taila snäna
Sandal oil in warm water

Sugandha  Lepana
Smearing with sandal paste and massaging

Candanodaka 
Water with sandal paste

Sahasra-dhära-snäna
A thousand shower receptacle

Sahasra-dhära-snäna
With Sanctified water

Sahasra-dhära-snäna
with Mahäuñadhi (Herbal water)

Sahasra-dhära-snäna
With Gandha 

Sahasra-dhära-snäna
With Añtabéjä (Herbal water)

Sahasra-dhära-snäna
With Fresh Flowers (Pushpodaka)

Sahasra-dhära-snäna
With Fresh Fruits (Phalodaka)

Sahasra-dhära-snäna
With Nine gems (Nava Ratnodaka)

Sri Gaura Poornima Abhisheka 2022
Dhüpa
Frankincense

Dépäs 
Varieties of Lamps are offered to the Lord.

Parimala Dravya snana
Nava kalasha snäna 
Abhisheka with special nine kalashäs

Pushpa-vrishöi
Showering varieties of flowers

Chämara and Vyajana seva
Offering a chämara and peacock fan
`.trim()

Object.keys(diamap).forEach(k=>{
    verse = verse.replaceAll(k, diamap[k])
})

console.log(verse)