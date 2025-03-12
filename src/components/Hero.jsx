
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      title: "Urban Development Project",
      description: "Contemporary design meets functionality",
    },
    {
      url: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Architecture",
      description: "Pushing boundaries in structural design",
    },
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      title: "Sustainable Solutions",
      description: "Building for tomorrow",
    },
    {
      url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      title: "Innovative Design",
      description: "Where form meets function",
    },
  
    {
      url: " https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Innovative Design",
      description: "Where form meets function",
    },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            {images[currentImageIndex].title}
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            {images[currentImageIndex].description}
          </p>

      <div className="flex justify-center space-x-4 animate-fade-in">
  <a href="#Projects">
    <button className="border text-black border-white hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-colors duration-200">
      Our Projects
    </button>
  </a>
  <a href="#Contact">
    <button className="border text-black border-white hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-colors duration-200">
      Contact Us
    </button>
  </a>
</div>

        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
