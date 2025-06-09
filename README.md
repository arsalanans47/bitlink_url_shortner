# 🔗 Bitlinks – URL Shortener App

Bitlinks is a modern and minimal URL shortener built with **Next.js 13 (App Router)**, **Tailwind CSS**, and **MongoDB**. It allows users to convert long, bulky URLs into short and manageable links using a simple and intuitive interface.

---

## 🚀 Features

- ✂️ Shorten long URLs into custom aliases
- 🔁 Automatically redirect from short URL to original
- 💅 Clean and responsive UI using Tailwind CSS
- 🧠 Built with React 19 and Next.js App Router
- 💾 Persistent link storage with MongoDB
- 🧩 Component-based design with `Navbar`, form, and pages

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [PostCSS](https://postcss.org/)

---

## 📁 Folder Structure

```
bitlinks/
├── app/                      # Next.js app directory
│   ├── api/generate/         # API to generate short URLs
│   ├── shorten/              # Page to enter a URL and shorten
│   ├── [shorturl]/           # Dynamic route for redirecting
│   ├── layout.js             # Root layout
│   └── page.js               # Home page
├── components/
│   └── Navbar.js             # Navigation bar
├── lib/
│   └── mongodb.js            # MongoDB connection helper
├── public/                   # Static assets
├── .env.local                # Environment variables
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.mjs        # PostCSS config
├── package.json              # Scripts and dependencies
└── README.md
```

---

## 📦 Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/arsalanans47/bitlink_url_shortner.git
   cd bitlink_url_shortner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env.local` file**
   ```
   MONGODB_URI=mongodb://localhost:27017
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📸 Screenshots


![Landing Page](https://github.com/arsalanans47/bitlink_url_shortner/blob/c98fd8cc7d6cdce03d2ad7f35758631878fd78df/landing%20page.png)
![Shorten Page](https://github.com/arsalanans47/bitlink_url_shortner/blob/3416502cbeee45e6bb12bfe8693843e4e3496d61/shorten%20page.png)

---

## 💡 Future Enhancements

- 📊 Add click tracking and analytics
- 🔐 Implement authentication for custom link dashboards
- 📆 Link expiration support
- 📱 Enhance mobile responsiveness

---

## 🙋‍♂️ Author

**Made with ❤️ by [Arsalan Ayub]**  
- GitHub: [github.com/arsalanans47](https://github.com/arsalanans47)  
- LinkedIn: [linkedin.com/in/arsalan47](https://www.linkedin.com/in/arsalan47/)

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use it, modify it, and learn from it!
