import { Ai } from '@cloudflare/ai'
import { Hono } from 'hono'

export interface Env {
  AI: any
}

const app = new Hono<{ Bindings: Env }>()

// GET /?query="How is your day today?"
app.get("/", async c => {
  const ai = new Ai(c.env.AI)

  // Add a text field for the user to input

  const content = "Create one joke. Only respond with one joke. Not more than one. Only one. Do not include any /n or any extra characters"

  const messages = [
    { role: 'system', content: 'You are a Dad. A funny one. You create some of the funniest Dad jokes on the planet.' },
    { role: 'user', content }
  ];

  const inputs = { messages }

  const res = await ai.run("@cf/meta/llama-3-8b-instruct-awq", inputs)

  const result = res.response
  return c.json(result)
})

export default app