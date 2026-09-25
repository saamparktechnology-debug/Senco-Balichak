import ngrok from '@ngrok/ngrok';

async function start() {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    const listener = await ngrok.forward({
      addr: port,
      authtoken: process.env.NGROK_AUTHTOKEN || '3IpKb8E4xAvMC4CcCsja0dGzbjh_31HRwaYdytCEL5dH2kzfh',
    });
    console.log(`\n==============================================`);
    console.log(`🚀 SENCO GOLD & DIAMONDS NGROK TUNNEL LIVE:`);
    console.log(`👉 PUBLIC URL: ${listener.url()}`);
    console.log(`🔗 META WEBHOOK URL: ${listener.url()}/api/whatsapp/webhook`);
    console.log(`==============================================\n`);

    // Keep process alive
    setInterval(() => {}, 10000);
  } catch (err) {
    console.error('Ngrok tunnel error:', err);
  }
}

start();
