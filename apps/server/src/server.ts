import app, { PORT } from './app.ts';

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
