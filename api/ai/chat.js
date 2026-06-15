export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages, siteContext, contextNote } = req.body

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' })
  }

  const systemPrompt = `
${siteContext || 'You are a helpful assistant for a restaurant website.'}

IMPORTANT INSTRUCTIONS:
- You have three core capabilities:
  1. SITE INFO: Answer questions about the website, its features, how to use it, and what it offers.
  2. MEAL SUGGESTIONS: Based on the current time of day and weather conditions, suggest appropriate meals and include approximate calorie counts.
  3. RESTAURANT RATINGS: When users ask about restaurant ratings, tell them ratings are live from Google.

- When suggesting meals use this format:
  ⏰ Vaxt: [qısa qeyd]
  🌡️ Hava: [qısa qeyd]
  🍽️ Tövsiyələr:
    • [Yemək adı] — ~[kalori] kcal — [səbəb]
    • [Yemək adı] — ~[kalori] kcal — [səbəb]
    • [Yemək adı] — ~[kalori] kcal — [səbəb]

- Always respond in the same language the user writes in.
- Keep responses friendly and concise.
`.trim()

  const processedMessages = messages.map((m, i) => {
    if (i === messages.length - 1 && m.role === 'user' && contextNote) {
      return { ...m, content: `${contextNote}\n\n${m.content}` }
    }
    return m
  })

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        system: systemPrompt,
        messages: processedMessages,
      }),
    })

    const data = await response.json()
    const reply = data.content?.[0]?.text ?? 'Cavab alına bilmədi.'
    res.status(200).json({ reply })
  } catch (error) {
    console.error('Chat error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}