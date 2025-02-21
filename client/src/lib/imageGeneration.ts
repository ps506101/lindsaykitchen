import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Required for client-side usage
});

export async function generateBackgroundImage(): Promise<string> {
  try {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "Professional food photography composition showing a diverse spread of breakfast and Indian cuisine dishes, including pancakes, eggs, curry dishes, and breads, arranged beautifully on a rustic wooden table with soft, warm lighting. High-end restaurant style, no text, photorealistic style.",
      n: 1,
      size: "1024x1024",
      quality: "standard",
    });

    if (!response.data[0].url) {
      throw new Error('No image URL received from OpenAI');
    }

    return response.data[0].url;
  } catch (error) {
    console.error('Failed to generate image:', error);
    // Return a fallback image URL if generation fails
    return '/attached_assets/WhatsApp Image 2025-01-22 at 6.51.06 PM.jpeg';
  }
}