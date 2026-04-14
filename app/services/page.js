"use client";
import { useState } from "react";

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <main>

      {/* HERO */}
      <section className="text-center px-6 py-20 bg-[#F6FAFD]">
        <p className="uppercase text-sm tracking-widest text-[#4A7FA7] mb-3">
          What We Offer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1931] mb-6">
          Marketing That Actually Sells Books
        </h1>

        <p className="max-w-2xl mx-auto text-[#1A3D63]">
          We don’t just promote books — we position them to dominate their category.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 py-20 bg-[#EAF3FB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Amazon Discoverability",
              desc: "We position your book for maximum exposure on Amazon by optimizing keywords, categories, and metadata. Our approach ensures your book appears in front of the right audience, improving rankings, increasing visibility, and driving consistent sales."
            },
            {
              title: "Goodreads Optimization",
              desc: "We enhance your Goodreads presence by fully optimizing your author profile and book listings. This helps you build credibility, attract genuine readers, and encourage meaningful engagement through reviews, ratings, and community interaction."
            },
            {
              title: "Author Branding",
              desc: "We craft a strong and memorable author identity that sets you apart in a competitive market. From your messaging to your online presence, we ensure your brand connects with your target audience and builds long-term recognition and trust."
            },
            {
              title: "Book Trailers",
              desc: "We create visually engaging and professionally structured book trailers that capture attention and spark curiosity. Our trailers are designed to tell your story in a compelling way, encouraging viewers to take action and explore your book."
            },
            {
              title: "Social Media Management",
              desc: "We manage and grow your social media presence with strategic content that engages your audience and builds a loyal following."
            },
            {
              title: "SEO & Visibility",
              desc: "We implement proven SEO strategies to boost your online presence across search engines and digital platforms."
            }
          ].map((service, i) => (

            <div
              key={i}
              className="relative group rounded-2xl backdrop-blur-xl bg-white/30 border border-white/40 shadow-lg hover:shadow-2xl transition duration-500 p-8"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#4A7FA7]/20 to-[#B3CFE5]/20 blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#0A1931] mb-4 group-hover:text-[#4A7FA7] transition">
                  {service.title}
                </h3>

                <p className="text-[#1A3D63] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>

          ))}

        </div>
      </section>

      {/* RESULTS */}
      <section className="px-6 py-28 bg-[#F6FAFD]">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#4A7FA7] mb-2">
            Proven Results
          </p>

          <h2 className="text-4xl font-bold text-[#0A1931]">
            Past Campaign Performance
          </h2>
        </div>

        {/* AMAZON */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-[#0A1931] mb-10 text-center">
            Amazon Campaigns
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {[
              { i: 1, link: "https://a.co/d/02Rs9YOy" },
              { i: 2, link: "https://www.amazon.com/dp/B0D5YZLT47" },
              { i: 3, link: "https://a.co/d/0b79hoxJ" },
              { i: 4, link: "https://a.co/d/0dlOWLys" }
            ].map(({ i, link }) => (

              <div key={i} className="group p-3">

                <div className="grid grid-cols-2 gap-2 mb-3">

                  {/* BEFORE */}
                  <div className="relative rounded-md bg-white">
                    <img
                      src={`/amazon-before${i}.jpeg`}
                      onClick={() => setSelected(`/amazon-before${i}.jpeg`)}
                      className="cursor-pointer w-full h-40 object-contain"
                    />
                    <span className="absolute bottom-1 left-1 text-[10px] bg-black/60 text-white px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>

                  {/* AFTER */}
                  <div className="relative rounded-md bg-white">
                    <img
                      src={`/amazon-after${i}.jpeg`}
                      onClick={() => setSelected(`/amazon-after${i}.jpeg`)}
                      className="cursor-pointer w-full h-40 object-contain"
                    />
                    <span className="absolute bottom-1 left-1 text-[10px] bg-[#4A7FA7] text-white px-2 py-0.5 rounded">
                      After
                    </span>
                  </div>

                </div>

                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full text-xs bg-[#4A7FA7] text-white py-1.5 rounded hover:bg-[#1A3D63] transition">
                    View Current Metrics
                  </button>
                </a>

              </div>
            ))}

          </div>
        </div>

        {/* GOODREADS */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0A1931] mb-10 text-center">
            Goodreads Campaigns
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {[
              { i: 1, link: "https://www.goodreads.com/book/show/233892871-twisted-pawn" },
              { i: 2, link: "https://www.goodreads.com/book/show/214198078-path-of-conquest" },
              { i: 3, link: "https://www.goodreads.com/book/show/216522420-manufacturing-delusion" },
              { i: 4, link: "https://www.goodreads.com/book/show/244481543-diary-of-a-roblox-avatar-99-nights-part-1" }
            ].map(({ i, link }) => (

              <div key={i} className="group p-3">

                <div className="relative rounded-md bg-white mb-3">
                  <img
                    src={`/goodreads-before${i}.jpeg`}
                    onClick={() => setSelected(`/goodreads-before${i}.jpeg`)}
                    className="cursor-pointer w-full h-40 object-contain"
                  />
                  <span className="absolute bottom-1 left-1 text-[10px] bg-black/60 text-white px-2 py-0.5 rounded">
                    Before
                  </span>
                </div>

                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full text-xs bg-[#4A7FA7] text-white py-1.5 rounded hover:bg-[#1A3D63] transition">
                    Check Current Metrics
                  </button>
                </a>

              </div>
            ))}

          </div>
        </div>

      </section>

      {/* LIGHTBOX FIXED */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      {/* BOOK TRAILERS */}

<section className="px-6 py-24 bg-[#EAF3FB] text-center">

  <h2 className="text-4xl font-bold mb-12 text-[#0A1931]">
    Book Trailers We Create
  </h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

    {/* VIDEO 1 */}
    <a 
      href="https://drive.google.com/file/d/1h8kkx-SGXYxLREIpGePLwB-46y2kyBE9/preview"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >

      <img
        src="/trailer1.jpeg"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

      {/* PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-full text-[#0A1931] text-xl font-bold group-hover:scale-110 transition">
          ▶
        </div>
      </div>

      {/* LABEL */}
      <div className="absolute bottom-0 w-full p-4 bg-white/20 backdrop-blur-md text-white text-sm">
        Watch Trailer
      </div>

    </a>

    {/* VIDEO 2 */}
    <a 
      href="https://drive.google.com/file/d/1PEK0WgSPo5DnJqTtxvZ2_wkZRzGWwiFO/preview"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >

      <img
        src="/trailer2.png"
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

      {/* PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-full text-[#0A1931] text-xl font-bold group-hover:scale-110 transition">
          ▶
        </div>
      </div>

      {/* LABEL */}
      <div className="absolute bottom-0 w-full p-4 bg-white/20 backdrop-blur-md text-white text-sm">
        Watch Trailer
      </div>

    </a>

  </div>

</section>

      {/* CTA */}
      <section className="px-6 py-28 text-center bg-[#F6FAFD]">

        <h2 className="text-4xl font-bold mb-6 text-[#0A1931]">
          Ready to Scale Your Book?
        </h2>

        <p className="text-[#1A3D63] mb-10">
          Let’s build a strategy tailored to your book and audience.
        </p>

        <a href="/contact">
          <button className="bg-[#4A7FA7] hover:bg-[#1A3D63] text-white px-10 py-4 rounded-md transition shadow-lg hover:scale-105">
            Learn More
          </button>
        </a>

      </section>

    </main>
  );
}