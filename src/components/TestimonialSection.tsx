import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    client: "Ananya Sharma",
    project: "Modern Penthouse",
    thumbnail: "/video-thumb-1.jpg",
    duration: "1:20"
  },
  {
    id: 2,
    client: "Vikram Reddy",
    project: "Heritage Villa",
    thumbnail: "/video-thumb-2.jpg",
    duration: "0:45"
  },
  {
    id: 3,
    client: "The Mehtas",
    project: "Studio Apartment",
    thumbnail: "/video-thumb-3.jpg",
    duration: "2:10"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F9FAFB] px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block - Compact & Bold */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C4B5FD] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-milchella font-semibold tracking-wider text-[#374151]"
          >
            Voices of <span className="italic">Satisfaction.</span>
          </motion.h2>
        </div>

        {/* Video Grid - Sleek & Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* The Video Card */}
              <div className="relative aspect-[9/16] md:aspect-[3/4] bg-gray-200 rounded-[2.5rem] overflow-hidden">
                {/* Thumbnail Image */}
                <img 
                  src={item.thumbnail} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.client}
                />
                
                {/* Thick Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#374151]/80 via-transparent to-transparent" />

                {/* Play Button - Sleek Accent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-[#C4B5FD] flex items-center justify-center shadow-lg group-hover:bg-white transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 fill-white group-hover:fill-[#C4B5FD] transition-colors ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#C4B5FD] mb-1">
                    {item.project}
                  </p>
                  <h4 className="text-white font-josefin text-xl">
                    {item.client}
                  </h4 >
                </div>

                {/* Duration Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white text-[10px] font-bold tracking-widest">{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action - Compact */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        > 
          <a href='https://www.youtube.com/@Interiorillusions_' className="text-xs font-black uppercase tracking-[0.2em] text-[#374151] hover:text-[#C4B5FD] transition-all flex items-center gap-3 mx-auto group">
            Watch More Stories
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#C4B5FD] transition-all">
              →
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;