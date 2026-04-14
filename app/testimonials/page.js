"use client";

export default function Testimonials() {

  const reviews = [
    {
      name: "Natasha Bowen",
      text: "Working with Verityx completely shifted how my book performed online. Their understanding of positioning and audience targeting is impressive. Within weeks, I noticed stronger engagement and better visibility where it mattered most.",
    },
    {
      name: "D. J. Rintoul",
      text: "I’ve worked with marketing teams before, but this felt different. Everything was tailored, intentional, and backed by real strategy. The results came steadily, and more importantly, sustainably.",
    },
    {
      name: "Javier Munoz",
      text: "Verityx knows exactly how to present a book to the right audience. The improvement in reach and reader interaction was clear almost immediately. Highly professional and easy to work with.",
    },
    {
      name: "L.J. Shen",
      text: "Their approach is both creative and data-driven, which is rare to find. My book gained visibility in places I hadn’t been able to break into before. Definitely a team that delivers.",
    },
  ];

  const references = [
    {
      name: "R O Lane",
      image: "/author.jpg",
      email: "authorrobertlane@gmail.com",
    },
    {
      name: "Buck Sexton",
      image: "/buck.jpg",
      email: "authorbuckcontact@gmail.com",
    },
  ];

  return (
    <main className="bg-[#F6FAFD] min-h-screen">

      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0A1931] mb-4">
          What Authors Are Saying
        </h1>

        <p className="text-lg bg-gradient-to-r from-[#4A7FA7] to-[#B3CFE5] bg-clip-text text-transparent font-semibold">
          Real feedback from authors we've worked with
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >

              {/* STARS */}
              <div className="flex gap-1 mb-4 text-[#FFD700] text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              {/* TEXT */}
              <p className="text-[#1A3D63] italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* NAME */}
              <p className="font-semibold text-[#0A1931]">
                — {review.name}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* REFERENCES */}
      <section className="px-6 py-24 bg-[#EAF3FB]">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A1931] mb-4">
            Meet Some of Our References
          </h2>

          <p className="text-[#1A3D63]">
            These authors have worked with us and are open to being contacted.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {references.map((ref, i) => (
            <div key={i} className="text-center group">

              {/* IMAGE */}
              <div className="w-36 h-36 mx-auto mb-6">
                <img
                  src={ref.image}
                  alt={ref.name}
                  className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white group-hover:scale-105 transition"
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold text-[#0A1931] mb-3">
                {ref.name}
              </h3>

              {/* EMAIL BUTTON */}
              <a
                href={`mailto:${ref.email}`}
                className="inline-block bg-[#4A7FA7] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1A3D63] transition"
              >
                Contact Author
              </a>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}