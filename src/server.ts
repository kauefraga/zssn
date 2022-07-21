import 'dotenv/config';
import app from './app';

function bootServer(port: string | number) {
  const server = app();

  return server.listen(port, () => {
    console.log(`[server] running on port ${port}`);
  });
}

const PORT = process.env.PORT || 3333;

bootServer(PORT);
