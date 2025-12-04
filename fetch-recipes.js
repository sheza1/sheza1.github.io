const AIRTABLE_TOKEN = "$AIRTABLE_TOKEN$";
const BASE_ID = "appte9MwDwd1p6Bu5";
const TABLE_ID = "tblioq7HEm4Z39yt0";

async function loadRecipes() {
  const response = await fetch("/.netlify/functions/airtable");
  const data = await response.json();

  const container = document.getElementById("recipes");
  container.innerHTML = "";

  data.records.forEach(record => {
    const fields = record.fields;

    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <h3>${fields.Name || "Untitled Recipe"}</h3>
      <p><strong>Difficulty:</strong> ${fields.Difficulty || "N/A"}</p>
      <p><strong>Category:</strong> ${fields.Category || "N/A"}</p>
      <p><strong>Time Required:</strong> ${fields["Time Required"] || "N/A"}</p>
    `;

    container.appendChild(card);
  });
}

loadRecipes();
