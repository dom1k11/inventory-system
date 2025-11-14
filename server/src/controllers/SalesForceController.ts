import { controller } from '../utils/controllerWrapper';
import { markUserSynced } from '../queries/users/markUserSynced';
export const handleGetSFToken = controller(async (req, res) => {
  const url = `${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`;

  console.log('URL:', url);

  const body = new URLSearchParams({
    grant_type: 'password',
    client_id: process.env.SF_CONSUMER_KEY!,
    client_secret: process.env.SF_CONSUMER_SECRET!,
    username: process.env.SF_USERNAME!,
    password: process.env.SF_PASSWORD!,
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Salesforce token error: ${err}`);
  }

  const data = await response.json();
  return data;
});
export const handleSyncUser = controller(async (req, res) => {
  console.log('REQ BODY:', req.body);

  const tokenUrl = `${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`; //getting token without service
  //TODO GET TOKEN FROM SERVICE
  const tokenBody = new URLSearchParams({
    grant_type: 'password',
    client_id: process.env.SF_CONSUMER_KEY!,
    client_secret: process.env.SF_CONSUMER_SECRET!,
    username: process.env.SF_USERNAME!,
    password: process.env.SF_PASSWORD!,
  });

  const tokenResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: tokenBody.toString(),
  });

  if (!tokenResponse.ok) {
    const errText = await tokenResponse.text();
    throw new Error('Salesforce token error: ' + errText);
  }

  const { access_token, instance_url } = await tokenResponse.json();

  const accountResponse = await fetch(
    `${instance_url}/services/data/v58.0/sobjects/Account`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: req.body.companyName,
      }),
    },
  );

  if (!accountResponse.ok) {
    const errText = await accountResponse.text();
    throw new Error('Salesforce Account error: ' + errText);
  }
  const accountData = await accountResponse.json();
  const accountId = accountData.id;
  const contactResponse = await fetch(
    `${instance_url}/services/data/v58.0/sobjects/Contact`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Phone: req.body.phone,
        AccountId: accountId,
      }),
    },
  );
  if (!contactResponse.ok) {
    const errText = await contactResponse.text();
    throw new Error('Salesforce Contact error: ' + errText);
  }
  const contactData = await contactResponse.json();
  await markUserSynced((req as any).user.id);

  return {
    success: true,
    salesforceAccountId: accountId,
    salesforceContactId: contactData.id,
  };
});
