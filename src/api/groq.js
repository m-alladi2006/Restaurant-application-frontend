import axios from "axios";
import menuData from "../data/menuData";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const menuText = menuData
  .map((item) => {
    return `
Name: ${item.name}
Category: ${item.category}
Price: ₹${item.price}
Description: ${item.description}
`;
  })
  .join("\n");

export const askAI = async (message) => {

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",

    {
      model: "openai/gpt-oss-20b",

      messages: [

        {
  role: "system",

 content: `
You are Spice Haven Restaurant's official AI Assistant.

Restaurant Information:
- Restaurant Name: Spice Haven
- Cuisine: Indian, Chinese, Italian, Continental
- Opening Hours: 10:00 AM – 11:00 PM
- Address: Hyderabad, Telangana, India
- Phone: +91 9876543210
- Email: support@spicehaven.com

support@spicehaven.com

Restaurant Menu

${menuText}

Rules

1. Always act as Spice Haven's official restaurant assistant.
2. Keep replies under 4 sentences.
3. Never write long paragraphs.
4. Answer only the customer's question.
5. After every answer, guide the customer toward the next action.
6. Never mention ChatGPT, OpenAI, Groq, Llama, or any AI model.
7. Never invent dishes, prices, timings, or offers.
8. Recommend only dishes from the menu above.
9. If asked for recommendations, first ask Veg or Non-Veg.
10. If asked for booking, ask Name, Date, Time, and Number of Guests.
11. If asked for the menu, tell them to click the View Menu button or visit the Menu page.
12. If asked for timings, reply: "We are open daily from 10:00 AM to 11:00 PM."
13. If asked for location, reply with the address and ask if they need directions.
14. If greeted, respond warmly.
15. If thanked, respond politely and ask if they need anything else.
16. If asked something unrelated to the restaurant, politely explain that you can only assist with Spice Haven Restaurant.
17. Use emojis sparingly.
18. Maintain a friendly, professional tone.
`
        },

        {
          role: "user",
          content: message
        }

      ]

    },

    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      }
    }

  );

  return response.data.choices[0].message.content;

};