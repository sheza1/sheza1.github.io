export async function handler() {

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const BASE_ID = "appte9MwDwd1p6Bu5";
  const TABLE_ID = "tblioq7HEm4Z39yt0";

  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
