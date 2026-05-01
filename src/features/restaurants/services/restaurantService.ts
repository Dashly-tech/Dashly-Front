
// Google Sheets public JSON API-dən məlumat çəkir
// Mock data ilə eyni Restaurant tipini qaytarır

import type { Restaurant } from "../../../types/common.types";

  

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const SHEET_NAME = import.meta.env.VITE_GOOGLE_SHEET_NAME ?? "restaurants";

// Google Sheets JSON endpointi (public sheet üçün pulsuz işləyir)
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

// Googleun cavabını bizim Restaurant tipinə çeviririk
function parseRow(row: any[]): Restaurant {
  return {
    id: Number(row[0]?.v ?? 0),
    name: String(row[1]?.v ?? ""),
    slug: String(row[2]?.v ?? ""),
    logo: String(row[3]?.v ?? ""),
    coverImage: String(row[4]?.v ?? ""),
    description: String(row[5]?.v ?? ""),
    whatsappNumber: String(row[6]?.v ?? ""),
    address: String(row[7]?.v ?? ""),
    locationText: String(row[8]?.v ?? ""),
    cuisineType: String(row[9]?.v ?? ""),
    isFeatured: row[10]?.v === true || row[10]?.v === "TRUE",
    isActive: row[11]?.v === true || row[11]?.v === "TRUE",
    location: {
      lat: Number(row[12]?.v ?? 0),
      lng: Number(row[13]?.v ?? 0),
    },
    deliveryRadiusKm: Number(row[14]?.v ?? 5),
  };
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  try {
    const res = await fetch(SHEET_URL);
    const text = await res.text();

    // Google cavabı JSON deyil, onu parse etmək lazımdır
    const json = JSON.parse(text.substring(47).slice(0, -2));

    const rows: any[][] = json.table.rows.map((r: any) => r.c);

    // Birinci sıra başlıqdır, onu atlayırıq
    return rows.slice(1).map(parseRow).filter((r) => r.id > 0);
  } catch (err) {
    console.error("Google Sheets yüklənmədi:", err);
    return []; 
  }
}

