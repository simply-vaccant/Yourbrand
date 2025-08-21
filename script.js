<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>YourBrand | Welcome</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: white;
      font-family: 'Inter', sans-serif;
    }
    .glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeUp 1s ease forwards;
    }
    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- Hero Section -->
  <section class="flex flex-col items-center justify-center text-center min-h-screen px-6 fade-up">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">Welcome to <span class="text-indigo-400">YourBrand</span></h1>
    <p class="text-lg md:text-xl mb-8 max-w-2xl">We create amazing digital experiences that blend design, technology, and storytelling.</p>
    <a href="https://yourbrand.com" target="_blank"
       class="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow hover:bg-gray-200 transition">
      Explore Now
    </a>
  </section>

  <!-- About Section -->
  <section class="py-20 px-6 fade-up">
    <div class="max-w-4xl mx-auto glass p-10 rounded-2xl shadow-xl">
      <h2 class="text-3xl font-bold mb-4 text-indigo-300">About Us</h2>
      <p class="text-lg text-gray-200">At YourBrand, we’re passionate about innovation. Our mission is to design solutions that inspire and empower people worldwide.</p>
    </div>
  </section>

  <!-- Features/Projects Section -->
  <section class="py-20 px-6 fade-up">
    <h2 class="text-3xl font-bold mb-10 text-center text-indigo-300">What We Do</h2>
    <div class="grid gap-8 md:grid-cols-3">
      <div class="glass p-6 rounded-2xl shadow hover:scale-105 transition">
        <h3 class="text-xl font-semibold mb-3">🚀 Innovation</h3>
        <p class="text-gray-200">We craft cutting-edge solutions tailored to modern needs.</p>
      </div>
      <div class="glass p-6 rounded-2xl shadow hover:scale-105 transition">
        <h3 class="text-xl font-semibold mb-3">🎨 Design</h3>
        <p class="text-gray-200">We focus on user-friendly, beautiful, and functional experiences.</p>
      </div>
      <div class="glass p-6 rounded-2xl shadow hover:scale-105 transition">
        <h3 class="text-xl font-semibold mb-3">🌍 Reach</h3>
        <p class="text-gray-200">Our projects are built to connect globally and scale infinitely.</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-20 px-6 fade-up">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 text-indigo-300">Let’s Connect</h2>
      <p class="mb-6 text-gray-200">Have an idea or a project? Reach out and let’s make it happen.</p>
      <form class="space-y-4 glass p-6 rounded-2xl shadow-xl">
        <input type="text" placeholder="Your Name" class="w-full p-3 rounded-lg text-black" required/>
        <input type="email" placeholder="Your Email" class="w-full p-3 rounded-lg text-black" required/>
        <textarea placeholder="Your Message" rows="4" class="w-full p-3 rounded-lg text-black" required></textarea>
        <button type="submit" class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold">Send Message</button>
      </form>
      <div class="mt-8 flex justify-center gap-6">
        <a href="https://twitter.com/yourbrand" target="_blank" class="hover:text-indigo-400">Twitter</a>
        <a href="https://instagram.com/yourbrand" target="_blank" class="hover:text-indigo-400">Instagram</a>
        <a href="mailto:info@yourbrand.com" class="hover:text-indigo-400">Email</a>
      </div>
    </div>
  </section>

  <footer class="text-center py-6 text-gray-400 text-sm">
    © 2025 YourBrand. All rights reserved.
  </footer>

</body>
</html>
