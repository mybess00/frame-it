# Frame it!

Frame it is a web application that allows you to frame and customize your favorite tweets in a simple way. You can choose from various layouts and customization options to make your tweets unique. Once you've created your design, you can download your custom tweet as a PNG file and share it on other social networks. Make your tweets stand out with Frame it!

## Available options

### Personalization Options 🎨:
✅ Background of the tweet and photo (includes gradients and solid colors).  
✅ Margins and borders.  
✅ Support emojis.  
✅ Font size, style and color.  
✅ Size and layout of the tweet images.  
✅ Size of the image that is exported. 

### Pending Updates ⏸:
⌛ Add badges for hashtags (#), links, and usernames.  

### Future ideas 💡:
🚀 Telegram bot.  
🚀 Share directly with other social networks.  
🚀 Multiple font family options.  
🚀 Add support for Twitter threads.  

## Dev information:

### Tech stack 💻:

- Next.js
- [Tailwindcss](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [satori](https://github.com/vercel/satori)

### Other information 📄:

Within the `components/options` folder are functions used for the operation of the app. Within `components/tools` is the configuration of all available customization tools; and inside `components/tweet` you can find the tweet preview components.  

`TweetMockup.jsx` contains all the HTML elements that are converted to SVG using the satori library.  

[Satori](https://github.com/vercel/satori) is the library of choice used to convert HTML to SVG.  
