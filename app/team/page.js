"use client";

export default function Team() {
  const members = [
    {
      name: "Sophie Bennett",
      image: "/sophie.jpg",
      email: "sophiebennett925@gmail.com",
      facebook: "https://web.facebook.com/profile.php?id=61584066504615",
    },
    {
      name: "Katrina Cecilia",
      image: "/katrina.jpeg",
      email: "katrinaaccecilia@gmail.com",
      facebook: "https://www.facebook.com/profile.php?id=61585145390514",
    },
    {
      name: "Freddy Alexson",
      image: "/freddy.jpeg",
      email: "freddyalexson@gmail.com",
      facebook: null,
    },
    {
      name: "Cecilia Aria",
      image: "/cecilia.jpeg",
      email: "cecilia.aria.contact@gmail.com",
      facebook: "https://www.facebook.com/profile.php?id=61576295613231",
    },
    {
      name: "Hutchins David",
      image: "/hutchins.png",
      email: "hutchinsdavide@gmail.com",
      facebook: null,
    }
  ];

  return (
    <main className="bg-[#F6FAFD] min-h-screen">

      {/* HERO HEADER (FIXED + STYLISH) */}
      <section className="relative pt-32 pb-20 text-center px-6 overflow-hidden">

        {/* background glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#4A7FA7]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#B3CFE5]/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <h1 className="text-5xl md:text-6xl font-bold text-[#0A1931] mb-4">
            Meet The Team
          </h1>

          <p className="text-lg md:text-xl bg-gradient-to-r from-[#4A7FA7] to-[#B3CFE5] bg-clip-text text-transparent font-semibold">
            The minds behind your growth
          </p>

        </div>

      </section>

      {/* TEAM GRID */}
      <section className="px-6 pb-28">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">

          {members.map((member, i) => (
            <div key={i} className="text-center group">

              {/* IMAGE */}
              <div className="relative mx-auto w-44 h-44 mb-6">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white group-hover:scale-105 transition duration-300"
                />

                {/* glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#4A7FA7]/40 group-hover:scale-110 transition"></div>

              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold text-[#0A1931] mb-4 tracking-wide">
                {member.name}
              </h3>

              {/* FLOATING ICON CARD */}
              <div className="flex justify-center">

                <div className="flex gap-4 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition">

                  {/* EMAIL */}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#4A7FA7] hover:text-[#1A3D63] transition text-lg"
                  >
                    ✉️
                  </a>

                  {/* FACEBOOK */}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A7FA7] hover:text-[#1A3D63] transition text-lg font-bold"
                    >
                      f
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}