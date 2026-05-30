import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { MenuItem } from '../src/types/common.types'

const I = '/images/manqalDonerImages'
const NO_IMG = '/images/notfound/imgnotadd.jpeg'

export const menu: MenuItem[] = [
  { id: 2, restaurantId: 2, name: "Classic Cheeseburger", price: 15.99, category: "Burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800", isFeatured: true, showInPremiumMenu: true },
  { id: 3, restaurantId: 3, name: "Dragon Roll", price: 22.99, category: "Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800", isFeatured: true, showInPremiumMenu: true },
  { id: 5, restaurantId: 2, name: "Chocolate Cake", price: 9.99, category: "Desserts", image: "https://i.postimg.cc/wM8Q3Vby/burger-chocko.jpg" },

  // Döner
  { id: 6,  restaurantId: 1, name: "Manqal Döner Toyuq Çörək(80 gr)",         price: 3.8,  category: "Döner", image: NO_IMG },
  { id: 7,  restaurantId: 1, name: "Manqal Döner Toyuq Çörək(150 gr)",        price: 6.0,  category: "Döner", image: NO_IMG },
  { id: 8,  restaurantId: 1, name: "Manqal Döner Toyuq Türk Çörək(80 gr)",    price: 3.8,  category: "Döner", image: NO_IMG },
  { id: 9,  restaurantId: 1, name: "Manqal Döner Toyuq Türk Çörək(150 gr)",   price: 6.0,  category: "Döner", image: NO_IMG },
  { id: 10, restaurantId: 1, name: "Manqal Döner Toyuq Lavaş(80 gr)",         price: 3.8,  category: "Döner", image: NO_IMG },
  { id: 11, restaurantId: 1, name: "Manqal Döner Toyuq Lavaş(150 gr)",        price: 6.0,  category: "Döner", image: NO_IMG },
  { id: 12, restaurantId: 1, name: "Manqal Döner Ət Çörək(80 gr)",            price: 4.9,  category: "Döner", image: `${I}/IMG_9649.JPG.jpeg`, isFeatured: true, showInPremiumMenu: true },
  { id: 13, restaurantId: 1, name: "Manqal Döner Ət Çörək(150 gr)",           price: 7.0,  category: "Döner", image: `${I}/IMG_9649.JPG.jpeg` },
  { id: 14, restaurantId: 1, name: "Manqal Döner Ət Türk Çörək(80 gr)",       price: 4.9,  category: "Döner", image: `${I}/IMG_9649.JPG.jpeg` },
  { id: 15, restaurantId: 1, name: "Manqal Döner Ət Türk Çörək(150 gr)",      price: 7.0,  category: "Döner", image: `${I}/IMG_9649.JPG.jpeg`, isFeatured: true, showInPremiumMenu: true },
  { id: 16, restaurantId: 1, name: "Manqal Döner Ət Lavaş(80 gr)",            price: 4.9,  category: "Döner", image: NO_IMG },
  { id: 17, restaurantId: 1, name: "Manqal Döner Ət Lavaş(150 gr)",           price: 7.0,  category: "Döner", image: NO_IMG },
  { id: 18, restaurantId: 1, name: "Hatay Toyuq",                              price: 5.0,  category: "Döner", image: NO_IMG },
  { id: 19, restaurantId: 1, name: "Hatay Ət",                                 price: 6.0,  category: "Döner", image: NO_IMG },
  { id: 20, restaurantId: 1, name: "Zurna Toyuq",                              price: 5.5,  category: "Döner", image: NO_IMG },
  { id: 21, restaurantId: 1, name: "Zurna Ət",                                 price: 6.5,  category: "Döner", image: NO_IMG },
  { id: 22, restaurantId: 1, name: "Buket Döner Toyuq",                        price: 5.5,  category: "Döner", image: NO_IMG },
  { id: 23, restaurantId: 1, name: "Buket Döner Ət",                           price: 6.5,  category: "Döner", image: NO_IMG },
  { id: 24, restaurantId: 1, name: "Porsion Döner Toyuq",                      price: 10.0, category: "Döner", image: NO_IMG },
  { id: 25, restaurantId: 1, name: "Porsion Döner Ət",                         price: 10.5, category: "Döner", image: NO_IMG },
  { id: 26, restaurantId: 1, name: "Plovustu Döner Toyuq",                     price: 11.0, category: "Döner", image: NO_IMG },
  { id: 27, restaurantId: 1, name: "Plovustu Döner Ət",                        price: 11.5, category: "Döner", image: NO_IMG },
  { id: 28, restaurantId: 1, name: "Plovustu Döner Toyuq + Fri",               price: 12.0, category: "Döner", image: NO_IMG },
  { id: 29, restaurantId: 1, name: "Plovustu Döner Ət + Fri",                  price: 12.5, category: "Döner", image: NO_IMG },
  { id: 30, restaurantId: 1, name: "Zəhər Tuluğu Döner Toyuq",                price: 5.0,  category: "Döner", image: NO_IMG },
  { id: 31, restaurantId: 1, name: "Zəhər Tuluğu Döner Ət",                   price: 5.5,  category: "Döner", image: NO_IMG },
  { id: 32, restaurantId: 1, name: "Manqal Dürüm Toyuq",                       price: 9.0,  category: "Döner", image: NO_IMG },
  { id: 33, restaurantId: 1, name: "Manqal Dürüm Ət",                          price: 10.0, category: "Döner", image: NO_IMG },
  { id: 34, restaurantId: 1, name: "Manqal Dönər İskəndər Ət",                price: 15.0, category: "Döner", image: NO_IMG },
  { id: 35, restaurantId: 1, name: "Manqal Dönər Şaurma Toyuq(Orta)",         price: 4.5,  category: "Döner", image: NO_IMG },
  { id: 36, restaurantId: 1, name: "Manqal Dönər Şaurma Ət(Orta)",            price: 5.5,  category: "Döner", image: NO_IMG },
  { id: 37, restaurantId: 1, name: "Manqal Dönər Şaurma Toyuq(Böyük)",        price: 6.0,  category: "Döner", image: NO_IMG },
  { id: 38, restaurantId: 1, name: "Manqal Dönər Şaurma Ət(Böyük)",           price: 7.5,  category: "Döner", image: NO_IMG },
  { id: 39, restaurantId: 1, name: "Livan Şaurma(Toyuq Lavaş)",               price: 5.5,  category: "Döner", image: NO_IMG },
  { id: 40, restaurantId: 1, name: "Livan Şaurma(Ət Lavaş)",                  price: 6.5,  category: "Döner", image: NO_IMG },
  { id: 41, restaurantId: 1, name: "Alman Doner(Toyuq Çörək)",                price: 5.5,  category: "Döner", image: "https://i.postimg.cc/RZVNwGcs/IMG-0312.avif", isFeatured: true, showInPremiumMenu: true },
  { id: 42, restaurantId: 1, name: "Alman Doner(Ət Çörək)",                   price: 6.5,  category: "Döner", image: NO_IMG },
  { id: 43, restaurantId: 1, name: "TONTON Doner(Toyuq Çörək)",               price: 4.3,  category: "Döner", image: NO_IMG },
  { id: 44, restaurantId: 1, name: "TONTON Doner(Ət Çörək)",                  price: 5.4,  category: "Döner", image: NO_IMG },
  { id: 45, restaurantId: 1, name: "Dədəbaba Döner(Toyuq Orta)",              price: 5.0,  category: "Döner", image: NO_IMG },
  { id: 46, restaurantId: 1, name: "Dədəbaba Döner(Ət Orta)",                 price: 6.0,  category: "Döner", image: NO_IMG },
  { id: 47, restaurantId: 1, name: "Dədəbaba Döner(Toyuq Böyük)",             price: 7.0,  category: "Döner", image: NO_IMG },
  { id: 48, restaurantId: 1, name: "Dədəbaba Döner(Ət Böyük)",                price: 8.0,  category: "Döner", image: NO_IMG },
  { id: 49, restaurantId: 1, name: "Manqal Sendvic",                          price: 6.4,  category: "Döner", image: NO_IMG },
  { id: 50, restaurantId: 1, name: "Manqal Hotdoq",                           price: 7.6,  category: "Döner", image: NO_IMG },
  { id: 51, restaurantId: 1, name: "Manqal Dönər sacda Toyuq(300 gr)",        price: 16.0, category: "Döner", image: NO_IMG },
  { id: 52, restaurantId: 1, name: "Manqal Dönər sacda Toyuq(500 gr)",        price: 19.0, category: "Döner", image: NO_IMG },
  { id: 53, restaurantId: 1, name: "Manqal Dönər sacda Ət(300 gr)",           price: 19.0, category: "Döner", image: NO_IMG },
  { id: 54, restaurantId: 1, name: "Manqal Dönər sacda Ət(500 gr)",           price: 34.0, category: "Döner", image: NO_IMG },
  { id: 55, restaurantId: 1, name: "Manqal Dönər sacda Qarışıq(300 gr)",      price: 18.0, category: "Döner", image: NO_IMG },
  { id: 56, restaurantId: 1, name: "Manqal Dönər sacda Qarışıq(500 gr)",      price: 22.0, category: "Döner", image: NO_IMG },

  // Salat
  { id: 57, restaurantId: 1, name: "Dietik alma salatı",         price: 10.0, category: "Salat", image: "https://i.postimg.cc/26jkNt34/IMG-0317.avif" },
  { id: 58, restaurantId: 1, name: "Xırt-xırt badımcan salatı", price: 7.5,  category: "Salat", image: "https://i.postimg.cc/Zqx7XbWf/IMG-0321.avif", isFeatured: true, showInPremiumMenu: true },
  { id: 59, restaurantId: 1, name: "Vişnəli pomidor salatı",    price: 5.9,  category: "Salat", image: "https://i.postimg.cc/SsVPYSqt/IMG-0315.avif" },
  { id: 60, restaurantId: 1, name: "Mövsüm salatı",             price: 5.6,  category: "Salat", image: "https://i.postimg.cc/HLnmSyNc/IMG-0371.avif" },
  { id: 61, restaurantId: 1, name: "Çoban salatı",              price: 4.0,  category: "Salat", image: NO_IMG },
  { id: 62, restaurantId: 1, name: "Sezar salatı",              price: 10.0, category: "Salat", image: `${I}/IMG_9650.JPG.jpeg` },
  { id: 63, restaurantId: 1, name: "Gavurdağ salatı",           price: 5.9,  category: "Salat", image: "https://i.postimg.cc/L5CGwHbn/IMG-0318.avif" },
  { id: 64, restaurantId: 1, name: "Manqal salatı",             price: 5.9,  category: "Salat", image: NO_IMG },
  { id: 65, restaurantId: 1, name: "Mimoza salatı",             price: 5.0,  category: "Salat", image: NO_IMG },
  { id: 66, restaurantId: 1, name: "Paytaxt salatı",            price: 5.0,  category: "Salat", image: NO_IMG },

  // Şorba
  { id: 67, restaurantId: 1, name: "Göbələk şorbası", price: 4.9, category: "Şorba", image: "https://i.postimg.cc/2yRf8XSy/IMG-0369.avif" },
  { id: 68, restaurantId: 1, name: "Tomat şorbası",   price: 4.9, category: "Şorba", image: "https://i.postimg.cc/brs2prdT/IMG-0355.avif" },
  { id: 69, restaurantId: 1, name: "Düşbərə",         price: 4.5, category: "Şorba", image: `${I}/dusbere.jpeg` },
  { id: 70, restaurantId: 1, name: "Toyuq şorbası",   price: 4.0, category: "Şorba", image: NO_IMG },
  { id: 71, restaurantId: 1, name: "Mərci şorbası",   price: 3.5, category: "Şorba", image: NO_IMG },
  { id: 72, restaurantId: 1, name: "Dovğa şorbası",   price: 3.5, category: "Şorba", image: NO_IMG },

  // İsti yemək
  { id: 73, restaurantId: 1, name: "Qaymaqlı toyuq (Kiçik)", price: 12.0, category: "İsti yemək", image: "https://i.postimg.cc/8CJ3JB3h/IMG-0348.avif" },
  { id: 74, restaurantId: 1, name: "Qaymaqlı toyuq (Böyük)", price: 18.0, category: "İsti yemək", image: NO_IMG },
  { id: 75, restaurantId: 1, name: "Şnitzel",                price: 8.9,  category: "İsti yemək", image: "https://i.postimg.cc/7ZvTrx48/IMG-0337.avif" },
  { id: 76, restaurantId: 1, name: "Kiev kotleti",           price: 10.5, category: "İsti yemək", image: "https://i.postimg.cc/HsdfZMcx/IMG-0360.avif" },
  { id: 77, restaurantId: 1, name: "Düyü",                   price: 3.5,  category: "İsti yemək", image: NO_IMG },
  { id: 78, restaurantId: 1, name: "Püre",                   price: 3.0,  category: "İsti yemək", image: `${I}/pure.jpeg` },

  // Qəlyanaltı
  { id: 113131313, restaurantId: 1, name: "Nuggets + Kartof Fri (5 ədəd)",   price: 7.9,  category: "Qəlyanaltı", image: `${I}/nuggets.jpeg` },
  { id: 691213232, restaurantId: 1, name: "Nuggets + Kartof Fri (8 ədəd)",   price: 11.0, category: "Qəlyanaltı", image: `${I}/nuggets.jpeg` },
  { id: 700000777, restaurantId: 1, name: "Nuggets + Kartof Fri (10 ədəd)",  price: 13.0, category: "Qəlyanaltı", image: `${I}/nuggets.jpeg` },
  { id: 71222355,  restaurantId: 1, name: "Nuggets + Kartof Fri (12 ədəd)",  price: 15.0, category: "Qəlyanaltı", image: `${I}/nuggets.jpeg` },
  { id: 728899922, restaurantId: 1, name: "Pendir çubuqları (4 ədəd)",       price: 7.0,  category: "Qəlyanaltı", image: `${I}/pendirCubuqlari.jpeg` },
  { id: 731002300, restaurantId: 1, name: "Kənd sayağı kartof",              price: 4.5,  category: "Qəlyanaltı", image: `${I}/kendSayagi.jpeg` },
  { id: 747780039, restaurantId: 1, name: "Soğan halqaları",                 price: 4.9,  category: "Qəlyanaltı", image: `${I}/soganHalqasi.jpeg`, isFeatured: true, showInPremiumMenu: true },
  { id: 75885023,  restaurantId: 1, name: "Toyuq pop corn",                  price: 6.9,  category: "Qəlyanaltı", image: NO_IMG },
  { id: 7688921,   restaurantId: 1, name: "Full Box",                        price: 18.9, category: "Qəlyanaltı", image: NO_IMG },
  { id: 77333556410, restaurantId: 1, name: "Acar üslublu xaçapuri",        price: 10.5, category: "Qəlyanaltı", image: NO_IMG },

  // Set
  { id: 78112365, restaurantId: 1, name: "Toyuq qanad + qarnir (ayran)",    price: 13.0, category: "Set", image: NO_IMG },
  { id: 79,  restaurantId: 1, name: "Toyuq qanad + qarnir (cola)",          price: 15.0, category: "Set", image: NO_IMG },
  { id: 80,  restaurantId: 1, name: "Toyuq köftə + qarnir (ayran)",         price: 14.0, category: "Set", image: NO_IMG },
  { id: 81,  restaurantId: 1, name: "Toyuq köftə + qarnir (cola)",          price: 16.0, category: "Set", image: NO_IMG },
  { id: 82,  restaurantId: 1, name: "Toyuq file + qarnir (ayran)",          price: 13.0, category: "Set", image: NO_IMG },
  { id: 83,  restaurantId: 1, name: "Toyuq file + qarnir (cola)",           price: 15.0, category: "Set", image: NO_IMG },
  { id: 84,  restaurantId: 1, name: "Quzu lülə + qarnir (ayran)",           price: 13.0, category: "Set", image: NO_IMG },
  { id: 85,  restaurantId: 1, name: "Quzu lülə + qarnir (cola)",            price: 15.0, category: "Set", image: NO_IMG },
  { id: 86,  restaurantId: 1, name: "Köftə ət + qarnir (ayran)",            price: 14.0, category: "Set", image: NO_IMG },
  { id: 87,  restaurantId: 1, name: "Köftə ət + qarnir (cola)",             price: 16.0, category: "Set", image: NO_IMG },
  { id: 88,  restaurantId: 1, name: "Quzu tikə + qarnir (ayran)",           price: 14.0, category: "Set", image: NO_IMG },
  { id: 89,  restaurantId: 1, name: "Quzu tikə + qarnir (cola)",            price: 16.0, category: "Set", image: NO_IMG },
  { id: 96,  restaurantId: 1, name: "Manqal dürüm + Mərci + İçki (ayran)", price: 14.0, category: "Set", image: NO_IMG },
  { id: 97,  restaurantId: 1, name: "Manqal dürüm + Mərci + İçki (cola)",  price: 15.0, category: "Set", image: NO_IMG },
  { id: 98,  restaurantId: 1, name: "İskəndər Dönər + Mərci + İçki (ayran)", price: 18.0, category: "Set", image: NO_IMG },
  { id: 99,  restaurantId: 1, name: "İskəndər Dönər + Mərci + İçki (cola)",  price: 19.0, category: "Set", image: NO_IMG },
  { id: 100, restaurantId: 1, name: "Porsion Dönər + Mərci + İçki (ayran)", price: 14.0, category: "Set", image: NO_IMG },
  { id: 101, restaurantId: 1, name: "Porsion Dönər + Mərci + İçki (cola)",  price: 15.0, category: "Set", image: NO_IMG },
  { id: 102, restaurantId: 1, name: "Manqal dürüm fırında + 2 Mərci + 2 İçki (ayran)", price: 22.0, category: "Set", image: NO_IMG },
  { id: 103, restaurantId: 1, name: "Manqal dürüm fırında + 2 Mərci + 2 İçki (cola)",  price: 24.0, category: "Set", image: NO_IMG },
  { id: 104, restaurantId: 1, name: "Hamburger + Kartof fri + Sərin içki",    price: 9.9,  category: "Set", image: NO_IMG },
  { id: 105, restaurantId: 1, name: "CheeseBurger + Kartof fri + Sərin içki", price: 10.5, category: "Set", image: NO_IMG },
  { id: 106, restaurantId: 1, name: "Nuggets Burger + Kartof fri + Sərin içki", price: 9.5, category: "Set", image: NO_IMG },
  { id: 107, restaurantId: 1, name: "Chicken Burger + Kartof fri + Sərin içki", price: 9.3, category: "Set", image: NO_IMG },
  { id: 146, restaurantId: 1, name: "Pizza Set (Ayran + 2 əd Mərci + 2 əd İçki)", price: 22.0, category: "Set", image: NO_IMG },
  { id: 147, restaurantId: 1, name: "Pizza Set (Cola + 2 əd Mərci + 2 əd İçki)",  price: 24.0, category: "Set", image: NO_IMG },

  // Kabab
  { id: 90, restaurantId: 1, name: "Quzu lülə",     price: 10.0, category: "Kabab", image: NO_IMG },
  { id: 91, restaurantId: 1, name: "Quzu tikə",     price: 10.0, category: "Kabab", image: NO_IMG },
  { id: 92, restaurantId: 1, name: "Quzu köftə",    price: 10.0, category: "Kabab", image: NO_IMG },
  { id: 93, restaurantId: 1, name: "Toyuq File",    price: 8.0,  category: "Kabab", image: NO_IMG },
  { id: 94, restaurantId: 1, name: "Toyuq Qanad",   price: 8.0,  category: "Kabab", image: NO_IMG },
  { id: 95, restaurantId: 1, name: "Toyuq Köftə",   price: 8.0,  category: "Kabab", image: NO_IMG },

  // Köfte
  { id: 108, restaurantId: 1, name: "Köftə çörək, lavaş (Toyuq, 90qr)", price: 4.0,  category: "Köfte", image: NO_IMG },
  { id: 109, restaurantId: 1, name: "Köftə çörək, lavaş (Ət, 90qr)",   price: 4.5,  category: "Köfte", image: NO_IMG },
  { id: 110, restaurantId: 1, name: "Plovüstü Köftə (Toyuq, 90qr)",    price: 9.5,  category: "Köfte", image: NO_IMG },
  { id: 111, restaurantId: 1, name: "Plovüstü Köftə (Ət, 90qr)",       price: 11.5, category: "Köfte", image: NO_IMG },
  { id: 112, restaurantId: 1, name: "Porsion Köftə (Toyuq, 180qr)",    price: 9.0,  category: "Köfte", image: NO_IMG },
  { id: 113, restaurantId: 1, name: "Porsion Köftə (Ət, 180qr)",       price: 10.0, category: "Köfte", image: NO_IMG },
  { id: 114, restaurantId: 1, name: "Manqal Burger (Toyuq)",            price: 6.0,  category: "Köfte", image: NO_IMG },
  { id: 115, restaurantId: 1, name: "Manqal Burger (Ət)",               price: 8.0,  category: "Köfte", image: NO_IMG },
  { id: 116, restaurantId: 1, name: "Big Burger",                       price: 10.0, category: "Köfte", image: NO_IMG },
  { id: 117, restaurantId: 1, name: "Çiy köftə dürüm",                  price: 5.0,  category: "Köfte", image: NO_IMG },
  { id: 118, restaurantId: 1, name: "Çiy köftə porsion",                price: 7.0,  category: "Köfte", image: NO_IMG },
  { id: 119, restaurantId: 1, name: "Manqal Club Sandviç (Toyuq)",     price: 8.0,  category: "Köfte", image: NO_IMG },
  { id: 120, restaurantId: 1, name: "Manqal Club Sandviç (Sucuk)",     price: 9.0,  category: "Köfte", image: NO_IMG },
  { id: 121, restaurantId: 1, name: "Manqal Club Sandviç (Ət)",        price: 10.0, category: "Köfte", image: NO_IMG },

  // Fırın
  { id: 122, restaurantId: 1, name: "Adana Dürüm",        price: 8.9,  category: "Fırın", image: NO_IMG },
  { id: 123, restaurantId: 1, name: "Urfa Dürüm",         price: 8.9,  category: "Fırın", image: NO_IMG },
  { id: 124, restaurantId: 1, name: "Lahmacun (Sadə)",    price: 4.0,  category: "Fırın", image: `${I}/IMG_9646.JPG.jpeg` },
  { id: 125, restaurantId: 1, name: "Lahmacun (Pendirli)", price: 5.0,  category: "Fırın", image: NO_IMG },
  { id: 126, restaurantId: 1, name: "Lahmacun (Qozlu)",   price: 4.5,  category: "Fırın", image: NO_IMG },
  { id: 127, restaurantId: 1, name: "Lahmacun (Qarışıq)", price: 6.0,  category: "Fırın", image: NO_IMG },
  { id: 128, restaurantId: 1, name: "Lahmacun Dürüm (Toyuq)", price: 7.5, category: "Fırın", image: NO_IMG },
  { id: 129, restaurantId: 1, name: "Lahmacun Dürüm (Ət)",    price: 8.5, category: "Fırın", image: NO_IMG },
  { id: 130, restaurantId: 1, name: "Lahmacun Lülə",           price: 11.0, category: "Fırın", image: NO_IMG },
  { id: 131, restaurantId: 1, name: "Dürüm Fırında (Toyuq)",  price: 14.0, category: "Fırın", image: NO_IMG },
  { id: 132, restaurantId: 1, name: "Dürüm Fırında (Ət)",     price: 15.0, category: "Fırın", image: "https://i.postimg.cc/hj0k888G/IMG-0331.avif" },
  { id: 133, restaurantId: 1, name: "Pide (Pendirli)",  price: 8.0,  category: "Fırın", image: NO_IMG, isFeatured: true, showInPremiumMenu: true },
  { id: 134, restaurantId: 1, name: "Pide (Toyuqlu)",   price: 10.0, category: "Fırın", image: NO_IMG },
  { id: 135, restaurantId: 1, name: "Pide (Qiyməli)",   price: 10.0, category: "Fırın", image: "https://i.postimg.cc/FRcRh649/IMG-0335.avif" },
  { id: 136, restaurantId: 1, name: "Pide (Qovurmalı)", price: 13.0, category: "Fırın", image: `${I}/IMG_9647.JPG.jpeg` },
  { id: 137, restaurantId: 1, name: "Pide (Sucuklu)",   price: 12.0, category: "Fırın", image: NO_IMG },

  // Pizza
  { id: 138, restaurantId: 1, name: "Sezar Pizza",        price: 16.0, category: "Pizza", image: NO_IMG },
  { id: 139, restaurantId: 1, name: "Meksikano Pizza",    price: 16.0, category: "Pizza", image: NO_IMG },
  { id: 140, restaurantId: 1, name: "Manqal Pizza Bavariya", price: 15.0, category: "Pizza", image: NO_IMG },
  { id: 141, restaurantId: 1, name: "Manqal Pizza (Ət)",  price: 15.0, category: "Pizza", image: NO_IMG },
  { id: 142, restaurantId: 1, name: "Manqal Pizza (Toyuq)", price: 14.0, category: "Pizza", image: NO_IMG },
  { id: 143, restaurantId: 1, name: "Hot-dog Pizza",      price: 15.0, category: "Pizza", image: NO_IMG },
  { id: 144, restaurantId: 1, name: "BBQ Pizza",          price: 13.0, category: "Pizza", image: NO_IMG },
  { id: 145, restaurantId: 1, name: "Marqarita Pizza",    price: 12.0, category: "Pizza", image: NO_IMG },

  // CoffeeLab desert
  { id: 148, restaurantId: 5, name: "Chocolate Cake", price: 5.0, category: "Desserts", image: NO_IMG, isFeatured: true, showInPremiumMenu: true },

  // Desert
  { id: 149, restaurantId: 1, name: "Red Velvet Çizkeyk",       price: 7.5, category: "Desert", image: NO_IMG, isFeatured: true },
  { id: 150, restaurantId: 1, name: "Trufel Çizkeyk (Şokoladlı)", price: 7.5, category: "Desert", image: NO_IMG },
  { id: 151, restaurantId: 1, name: "Manqo Çizkeyk",            price: 7.5, category: "Desert", image: NO_IMG },
  { id: 152, restaurantId: 1, name: "San Sebastian",            price: 8.5, category: "Desert", image: NO_IMG, isFeatured: true },
  { id: 153, restaurantId: 1, name: "Türk Paxlavası 3 Ədəd",   price: 4.0, category: "Desert", image: NO_IMG },
  { id: 154, restaurantId: 1, name: "Türk Südlü Paxlava 3 Ədəd", price: 4.5, category: "Desert", image: NO_IMG },
  { id: 155, restaurantId: 1, name: "Künefə Sadə",              price: 6.0, category: "Desert", image: NO_IMG },
  { id: 156, restaurantId: 1, name: "Künefə Dondurmalı",        price: 8.0, category: "Desert", image: NO_IMG, isFeatured: true },
  { id: 157, restaurantId: 1, name: "Dondurma 3 Top",           price: 4.5, category: "Desert", image: NO_IMG },

  // Mürəbbə
  { id: 158, restaurantId: 1, name: "Snickers Mürəbbə",  price: 7.0, category: "Mürəbbə", image: NO_IMG },
  { id: 159, restaurantId: 1, name: "Çiyələk Mürəbbə",   price: 6.0, category: "Mürəbbə", image: NO_IMG },
  { id: 160, restaurantId: 1, name: "Ağ Gilas Mürəbbə",  price: 6.0, category: "Mürəbbə", image: NO_IMG },
  { id: 161, restaurantId: 1, name: "Bounty Mürəbbə",    price: 7.0, category: "Mürəbbə", image: NO_IMG },
  { id: 162, restaurantId: 1, name: "Südlac",             price: 5.0, category: "Mürəbbə", image: NO_IMG },

  // İçki
  { id: 163, restaurantId: 1, name: "Coca Cola 330ml (Banka)",  price: 2.5, category: "İçki", image: `${I}/coca2.jpeg` },
  { id: 164, restaurantId: 1, name: "Fanta 330ml (Banka)",      price: 2.5, category: "İçki", image: `${I}/fanta.jpeg` },
  { id: 165, restaurantId: 1, name: "Sprite 330ml (Banka)",     price: 2.5, category: "İçki", image: `${I}/sprite.jpg` },
  { id: 166, restaurantId: 1, name: "Coca Cola 330ml (Şüşə)",   price: 3.0, category: "İçki", image: `${I}/coca1.jpg` },
  { id: 167, restaurantId: 1, name: "Fanta 330ml (Şüşə)",       price: 3.0, category: "İçki", image: `${I}/fanta.webp` },
  { id: 168, restaurantId: 1, name: "Meyvə Şirəsi 200ml",       price: 2.0, category: "İçki", image: `${I}/fruitJuice.jpeg` },
  { id: 169, restaurantId: 1, name: "Köpüklü Ayran",            price: 1.5, category: "İçki", image: `${I}/buttermilk.jpg` },
  { id: 170, restaurantId: 1, name: "Fuse Tea 330ml (Banka)",   price: 2.5, category: "İçki", image: `${I}/fuseTea.jpeg` },
  { id: 171, restaurantId: 1, name: "Kompot 1L",                price: 4.5, category: "İçki", image: `${I}/compote.jpeg` },
  { id: 172, restaurantId: 1, name: "Qazlı Su 500ml",           price: 1.0, category: "İçki", image: `${I}/sparklingW.jpg` },
  { id: 173, restaurantId: 1, name: "Qazsız Su 500ml",          price: 1.0, category: "İçki", image: `${I}/water.jpg` },

  // İsti İçki
  { id: 174, restaurantId: 1, name: "Qara Çay",          price: 5.0, category: "İsti İçki", image: `${I}/blackteaSet.jpeg` },
  { id: 175, restaurantId: 1, name: "Qara Çay 1 Fincan", price: 1.0, category: "İsti İçki", image: `${I}/blacktea.jpg` },
  { id: 176, restaurantId: 1, name: "Yaşıl Çay",         price: 7.0, category: "İsti İçki", image: `${I}/yasilcay.jpeg`, isFeatured: true },
]

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { restaurantId } = req.query
  const filtered = restaurantId
    ? menu.filter((item) => item.restaurantId === Number(restaurantId))
    : menu
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.json(filtered)
}
