import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv'

dotenv.config()

const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

const text = await hf.textGeneration({
  model: 'mistralai/Mistral-7B-Instruct-v0.3',
  inputs: 'what is the meaning of life?'
})

console.log('text', text.generated_text)
