// netlify/functions/fetch-recipes.js
export async function handler() {
  try {
    const response = await fetch(`${process.env.URL}/.netlify/functions/airtable`);
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
