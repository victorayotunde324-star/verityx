"use client";
import { useEffect, useState } from "react";

export default function Home() {

  const words = ["GROW", "SCALE", "PROMOTE", "ELEVATE", "DOMINATE"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < words[index].length) {
        setSubIndex(subIndex + 1);
        setText(words[index].substring(0, subIndex + 1));
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
        setText(words[index].substring(0, subIndex - 1));
      } else if (!deleting && subIndex === words[index].length) {
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <main>

      {/* HERO */}
      <section className="relative h-screen w-full">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />

        <div className="absolute inset-0 bg-[#0A1931]/70 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            WE <span className="text-[#B3CFE5]">{text}</span>
          </h1>

          <p className="max-w-2xl text-lg mb-10">
            Verityx helps authors dominate Amazon, optimize Goodreads,
            and build powerful personal brands.
          </p>

          <div className="flex gap-4">
            <a href="/services">
              <button className="bg-[#4A7FA7] hover:bg-[#1A3D63] px-8 py-3 rounded-md transition shadow-lg">
                Explore Services
              </button>
            </a>

            <a href="/contact">
              <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-[#0A1931] transition">
                Get Started
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="py-12 bg-[#F6FAFD] overflow-hidden">

        <h2 className="text-center text-xl font-semibold mb-8 text-[#0A1931]">
          Our Trusted Partners
        </h2>

        <div className="relative w-full overflow-hidden fade-mask">

          <div className="flex gap-16 animate-scroll">

            {[
              "amazon",
              "goodreads",
              "fiverr",
              "gmail",
              "facebook",
              "mailchimp",
            ].map((logo, i) => (
              <img
                key={i}
                src={`/${logo}.png`}
                className="h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition duration-300"
              />
            ))}

            {[
              "amazon",
              "goodreads",
              "fiverr",
              "gmail",
              "facebook",
              "mailchimp",
            ].map((logo, i) => (
              <img
                key={`dup-${i}`}
                src={`/${logo}.png`}
                className="h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition duration-300"
              />
            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-[#F6FAFD]">

        <div className="grid md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">

          <div className="bg-[#B3CFE5]/30 p-10 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#4A7FA7]">100+</h2>
            <p className="text-[#1A3D63]">Authors Worked With</p>
          </div>

          <div className="bg-[#B3CFE5]/30 p-10 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#4A7FA7]">1000+</h2>
            <p className="text-[#1A3D63]">Books Sold</p>
          </div>

          <div className="bg-[#B3CFE5]/30 p-10 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#4A7FA7]">500+</h2>
            <p className="text-[#1A3D63]">Successful Campaigns</p>
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
<section className="py-24 px-6 bg-[#EAF3FB]">

  <div className="text-center mb-16">
  <p className="text-sm uppercase tracking-widest text-[#4A7FA7] mb-2">
    Our Process
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-[#0A1931] relative inline-block">
    How We Work

    <span className="block h-1 w-16 bg-gradient-to-r from-[#4A7FA7] to-[#B3CFE5] mt-3 mx-auto rounded-full"></span>
  </h2>
</div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {[
      {
        img: "/step1.jfif",
        title: "Step 1",
        text: "We research authors and their books to identify growth opportunities"
      },
      {
        img: "/step2.jfif",
        title: "Step 2",
        text: "Our marketers personally reach out with tailored strategies"
      },
      {
        img: "/step3.jfif",
        title: "Step 3",
        text: "We build a custom marketing plan for your book"
      },
      {
        img: "/step4.jfif",
        title: "Step 4",
        text: "We execute and scale your visibility across platforms"
      }
    ].map((step, i) => (

      <div
        key={i}
        className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition"
      >

        {/* IMAGE */}
        <img
          src={step.img}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* STEP LABEL */}
        <div className="absolute top-4 left-4 text-white font-semibold text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
          {step.title}
        </div>

        {/* TEXT WITH GLASS EFFECT */}
        <div className="absolute bottom-0 w-full p-4 bg-white/20 backdrop-blur-md text-white text-sm">
          {step.text}
        </div>

      </div>

    ))}

  </div>

</section>

      {/* TESTIMONIAL */}
<section className="py-24 px-6 text-center bg-[#F6FAFD]">

  <h2 className="text-3xl mb-10 text-[#0A1931] font-semibold">
    What Authors Say
  </h2>

  <div className="max-w-3xl mx-auto flex flex-col items-center">

    {/* AUTHOR IMAGE (you will add this file) */}
    <img
      src="/author.jpg"
      alt="R. O. Lane"
      className="w-20 h-20 rounded-full object-cover shadow-md mb-6"
    />

    <p className="italic text-[#1A3D63] mb-6 leading-relaxed">
      Working with this team made a real difference for my book. As a Western romance author,
      gaining visibility isn’t easy, but their targeted approach helped my book reach the right
      audience and gain solid traction.

      <br /><br />

      I saw increased interest and engagement in a short time, and their professionalism stood
      out throughout the process.

      <br /><br />

      I’d definitely recommend them to any author looking to grow their book’s presence.
    </p>

    <p className="font-semibold text-[#0A1931]">
      — R. O. Lane (Author)
    </p>

  </div>

</section>

{/* ABOUT VERITYX */}
<section className="py-28 px-6 bg-[#EAF3FB] relative overflow-hidden">

  {/* SUBTLE BACKGROUND GLOW */}
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#4A7FA7]/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#B3CFE5]/30 blur-3xl rounded-full"></div>

  <div className="text-center mb-14 relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1931] mb-4">
      About Verityx
    </h2>

    {/* Stylish gradient text */}
    <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#4A7FA7] to-[#B3CFE5] bg-clip-text text-transparent">
      Built on Experience. Focused on Results.
    </p>
  </div>

  {/* CARD */}
  <div className="relative z-10 max-w-4xl mx-auto">

    <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-10 md:p-14">

      <div className="text-[#1A3D63] leading-relaxed space-y-6 text-center">

        <p>
          At Verityx, we’re a team of experienced marketers brought together by a shared mission,
          to help authors get the visibility and recognition their work deserves.
        </p>

        <p>
          Although Verityx is a newly established agency, our expertise is built on years of hands-on
          experience in book marketing. We’ve worked with both independent authors and established names,
          helping them grow their audience, increase engagement, and gain real traction in a competitive market.
        </p>

        <p>
          Our approach is simple: combine proven marketing strategies with a deep understanding of the publishing
          space to deliver results that matter. We don’t believe in one-size-fits-all solutions, every book and
          every author has a unique story, and we tailor our strategies to match.
        </p>

        <p className="font-medium text-[#0A1931]">
          At Verityx, your success is our priority.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="py-28 px-6 text-center bg-[#EAF3FB]">

        <h2 className="text-4xl font-bold mb-6 text-[#0A1931]">
          Ready to Scale Your Book?
        </h2>

        <p className="text-[#1A3D63] mb-10">
          Let’s help you reach more readers and grow your author brand.
        </p>

        <a href="/contact">
          <button className="bg-[#4A7FA7] hover:bg-[#1A3D63] text-white px-10 py-4 rounded-md transition shadow-lg">
            Work With Us
          </button>
        </a>

      </section>

      {/* FOOTER */}
      <footer className="relative">

        <div className="absolute inset-0 bg-[#0A1931]"></div>

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="relative z-10 text-white px-6 py-16">

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

            <div>
              <h2 className="text-xl font-semibold mb-4">Verityx</h2>
              <p className="text-sm text-gray-300">
                Helping authors grow, scale, and dominate the digital space.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Amazon Marketing</li>
                <li>Author Branding</li>
                <li>Goodreads Optimization</li>
                <li>Book Promotion</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/team">Our Team</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div>
  <h3 className="font-semibold mb-4">Contact</h3>

  <p className="text-sm text-gray-300 mb-4">
    verityxagency@gmail.com
  </p>

  <div className="flex flex-col gap-2 text-sm">

    <a
      href="https://www.linkedin.com/in/verityx-agency-1b8695378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition"
    >
      LinkedIn
    </a>

    <a
      href="https://www.facebook.com/share/1E8BvZBtUt/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition"
    >
      Facebook
    </a>

    <a
      href="https://www.tiktok.com/@verityxagency?_r=1&_t=ZS-95Vw8O2Chlv"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition break-words"
    >
      TikTok
    </a>

  </div>
</div>

          </div>

          <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Verityx. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}