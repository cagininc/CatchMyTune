// next.config.mjs
const nextConfig = {
  reactStrictMode: true, // Geliştirme sırasında potansiyel hataları daha hızlı fark etmenizi sağlar
  swcMinify: true, // Kodunuzu küçültmek için Next.js SWC kullanır

  images: {
    domains: ['your-image-domain.com'], // Dış resim kaynaklarını belirtin, örneğin 'your-image-domain.com'
  },

  // Tailwind CSS veya diğer CSS modülleri ile ilgili ayarlar
  };

export default nextConfig;
