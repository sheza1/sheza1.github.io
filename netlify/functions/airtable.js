// netlify/functions/airtable.js
import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;

    if (!apiKey || !baseId || !tableId) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing environment variables.",
          received: { apiKey: !!apiKey, baseId: !!baseId, tableId: !!tableId }
        }),
      };
    }

    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
