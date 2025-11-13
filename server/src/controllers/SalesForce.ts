import { controller } from "../utils/controllerWrapper";

export const handleGetSFToken = controller(async (req, res) => {
  const url = `${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`;

  console.log("URL:", url);

  const body = new URLSearchParams({
    grant_type: "password",
    client_id: process.env.SF_CONSUMER_KEY!,
    client_secret: process.env.SF_CONSUMER_SECRET!,
    username: process.env.SF_USERNAME!,
    password: process.env.SF_PASSWORD!,
  });

  console.log("STEP 1: START FETCH");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  console.log("STEP 2: FETCH DONE");

  if (!response.ok) {
    const err = await response.text();
    console.log("STEP 3: ERROR:", err);
    throw new Error(`Salesforce token error: ${err}`);
  }

  const data = await response.json();

  console.log("STEP 4: PARSED:", data);

  return data;
});
