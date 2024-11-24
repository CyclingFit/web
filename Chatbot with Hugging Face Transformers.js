import { pipeline } from '@xenova/transformers';

const generator = await pipeline('text-generation', 'Xenova/mistral-nemo');

async function sendMessage(message) {
  const response = await generator(message, {
    max_length: 50,
    num_return_sequences: 1,
  });
  return response[0].generated_text;
}

export default sendMessage;

