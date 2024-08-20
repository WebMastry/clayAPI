import express from 'express';
import cors from 'cors';
import { promptsText } from './prompts';
import { isValidDomain } from './utils/isValidDomain';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const prompts = express.Router();

prompts.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

prompts.get('/cohere-journalist', (req, res) => {
  const { url } = req.body;

  if (!url || !isValidDomain(url)) {
    return res.status(400).json({
      error: 'Bad Input: paramName is either missing or not a valid URL.'
    });
  }

  return res.status(200).json({ message: `${promptsText.journalist} ${url}` });
});

prompts.get('/cold-email', (req, res) => {
  const { research } = req.body;

  if (!research) {
    return res.status(400).json({
      error: 'Bad Input: paramName is either missing or not a valid URL.'
    });
  }

  return res
    .status(200)
    .json({ message: `${promptsText.coldEmailCopy}${research}` });
});

// Version the api
app.use('/prompts', prompts);
