import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. Chat features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateChatResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  lastMessage: string
): Promise<string> => {
  const client = getClient();
  if (!client) return "I'm sorry, I'm currently offline (API Key missing).";

  try {
    const chat = client.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `You are "CyberFox", a friendly and witty cybersecurity portfolio assistant. 
            Your persona is a clever orange fox who loves technology and security.
            You are here to answer questions about the portfolio owner's skills (Network Security, Python, Linux, etc.), 
            their projects (Port Scanner, Home Lab), and general cybersecurity concepts.
            Keep answers concise (under 100 words usually) and use cybersecurity metaphors or fox puns occasionally.
            If asked about something unrelated to security or this portfolio, politely steer the conversation back to the portfolio topics.`
        },
        history: history,
    });

    const result = await chat.sendMessage({ message: lastMessage });
    return result.text || "I couldn't decode that signal. Try again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. My firewall blocked that request (Error generating response).";
  }
};