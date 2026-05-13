import { motion } from 'framer-motion';
import videoimg1 from "../assets/video-1.png";
import videoimg2 from "../assets/video-2.png";
import videoimg3 from "../assets/video-3.png";


const testimonials = [
  {
    id: 1,
    client: "Ananya Sharma",
    project: "Aprtment",
    thumbnail: videoimg1,
    duration: "0:44",
    videoUrl: "https://youtu.be/bH1YmrjnvIc?si=hxu35HY_nfXn8dBr"
  },

  {
    id: 2,
    client: "Vikram Reddy",
    project: "Heritage Villa",
    thumbnail: videoimg2,
    duration: "1:05",
    videoUrl: "https://youtu.be/NCr72bMZv8I?si=Z8-XLLhANbfxtYE5"
  },

  {
    id: 3,
    client: "The Mehtas",
    project: "Studio Apartment",
    thumbnail: videoimg3,
    duration: "2:10",
    videoUrl: "https://youtu.be/HFIEhvxB90Y?si=ywS4lOqDzvggPCYT"
  }
];

const TestimonialSection = () => {
  return (
    <section
      className="
        py-20
        md:py-32
        bg-[#F9FAFB]
        px-6
        md:px-12
        lg:px-24
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="
              text-[#C4B5FD]
              text-[10px]
              font-black
              uppercase
              tracking-[0.4em]
              mb-4
              block
            "
          >
            Client Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              text-4xl
              md:text-6xl
              font-milchella
              font-semibold
              tracking-wider
              text-[#374151]
            "
          >
            Voices of <span className="italic">Satisfaction.</span>
          </motion.h2>
        </div>

        {/* VIDEO GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {testimonials.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative block"
            >

              {/* VIDEO CARD */}
              <div
                className="
                  relative
                  h-[500px]
                  md:h-[560px]
                  bg-gray-200
                  rounded-[2.5rem]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                {/* THUMBNAIL */}
                <img
                  src={item.thumbnail}
                  alt={item.client}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#111827]/90
                    via-black/10
                    to-transparent
                  "
                />

                {/* PLAY BUTTON */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-white/20
                      backdrop-blur-xl
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >

                    <svg
                      className="w-6 h-6 fill-white ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                  "
                >

                  <div
                    className="
                      rounded-[1.8rem]
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      px-5
                      py-4
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-[#C4B5FD]
                        mb-2
                      "
                    >
                      {item.project}
                    </p>

                    <h4
                      className="
                        text-white
                        text-xl
                        md:text-2xl
                        font-semibold
                        leading-tight
                      "
                    >
                      {item.client}
                    </h4>
                  </div>
                </div>

                {/* DURATION */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    px-3
                    py-1.5
                    bg-black/30
                    backdrop-blur-xl
                    rounded-full
                    border
                    border-white/10
                  "
                >
                  <span
                    className="
                      text-white
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                    "
                  >
                    {item.duration}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;