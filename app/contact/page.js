"use client";

import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="bg-[#F6FAFD] min-h-screen">

      {/* HERO */}
      <section className="relative pt-32 pb-20 text-center px-6 overflow-hidden">

        {/* glow effects */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#4A7FA7]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#B3CFE5]/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A1931] mb-4">
            Let’s Work Together
          </h1>

          <p className="text-lg bg-gradient-to-r from-[#4A7FA7] to-[#B3CFE5] bg-clip-text text-transparent font-semibold">
            Tell us about your book — we’ll handle the growth
          </p>
        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 pb-28">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* FORM */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-lg">

            <h2 className="text-2xl font-semibold text-[#0A1931] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7]"
              />

              <textarea
                placeholder="Tell us about your book..."
                rows="5"
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#4A7FA7] text-white py-3 rounded-md hover:bg-[#1A3D63] transition shadow-md"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center">

            <h2 className="text-3xl font-bold text-[#0A1931] mb-6">
              Get in Touch
            </h2>

            <p className="text-[#1A3D63] mb-8 leading-relaxed">
              Whether you're launching your first book or scaling an existing one,
              our team is ready to help you reach the right audience and grow your presence.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:verityxagency@gmail.com"
                  className="text-[#4A7FA7] font-medium hover:underline"
                >
                  verityxagency@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/verityx-agency-1b8695378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="text-[#4A7FA7] font-medium hover:underline break-words"
                >
                  View Profile
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Facebook</p>
                <a
                  href="https://www.facebook.com/share/1E8BvZBtUt/"
                  target="_blank"
                  className="text-[#4A7FA7] font-medium hover:underline"
                >
                  Visit Page
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">TikTok</p>
                <a
                  href="https://www.tiktok.com/@verityx66?_r=1&_d=ei079bg9k93512&sec_uid=MS4wLjABAAAAb3v3QJHhoAgCYozxJw3bVDull6-H9tp8NeXqHKeFRiKC2oU0_aXuVMi-LhY9w4oQ&share_author_id=7525042922598122497&sharer_language=en&source=h5_m&u_code=el8h00406bh7d7&timestamp=1776100430&user_id=7525042922598122497&sec_user_id=MS4wLjABAAAAb3v3QJHhoAgCYozxJw3bVDull6-H9tp8NeXqHKeFRiKC2oU0_aXuVMi-LhY9w4oQ&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7628127494252168978&share_link_id=09dbdcc0-2599-4cb7-b673-15a50240dfcf&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
                  target="_blank"
                  className="text-[#4A7FA7] font-medium hover:underline break-words"
                >
                  Watch Content
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}