

import type { MenuItem } from "../../../types/common.types";

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;


const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=menu`;

function parseRow(row: any[]): MenuItem {
  return {
    id: Number(row[0]?.v ?? 0),
    restaurantId: Number(row[1]?.v ?? 0),
    name: String(row[2]?.v ?? ""),
    price: Number(row[3]?.v ?? 0),
    category: String(row[4]?.v ?? ""),
    description: String(row[5]?.v ?? ""),
    image: String(row[6]?.v ?? ""),
    isFeatured: row[7]?.v === true || row[7]?.v === "TRUE",
    isDishOfDay: row[8]?.v === true || row[8]?.v === "TRUE",
    showInPremiumMenu: row[9]?.v === true || row[9]?.v === "TRUE",
  };
}

export async function fetchMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch(SHEET_URL);
    const text = await res.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows: any[][] = json.table.rows.map((r: any) => r.c);


   return rows.map(parseRow).filter((r) => r.id > 0);
  } catch (err) {
    console.error("Menu Google Sheets xətası:", err);
    return [];
  }
}