// netlify/functions/airtable.js

import fetch from "node-fetch";

export async function handler() {
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const baseId = "appte9MwDwd1p6Bu5";
  const tableId = "tblioq7HEm4Z39yt0";

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableId}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
