import React from "react";
import { ORIGINS } from "../constants";

const Origin: React.FC = () => {
  const visibleOrigins = ORIGINS.filter((o) => o.enabled);

  return (
    <section id="origins" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-zen-50/60 -skew-x-6 origin-top-right pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* section header */}
        <div className="max-w-2xl mb-20">
          <h2 className="font-serif text-4xl text-stone-800 mb-6">
            Origins of Zen
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Sourced from the misty highlands of China, where tradition meets
            ecological purity. Our matcha comes from regions known as the
            “Golden Tea Belt.”
          </p>
        </div>

        {/* origins blocks */}
        <div className="space-y-28">
          {visibleOrigins.map((o, idx) => (
            <div
              key={o.id}
              className={`flex flex-col items-center gap-12 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* image */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={o.image}
                    alt={o.region}
                    className="rounded-xl shadow-xl w-full h-[420px] object-cover"
                    loading="lazy"
                  />

                  {/* latitude badge（只在 Jingshan 显示，可删） */}
                  {o.id === "jingshan" && (
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-zen-700 text-white flex items-center justify-center text-sm tracking-widest shadow-lg">
                      30°N
                    </div>
                  )}
                </div>
              </div>

              {/* text */}
              <div className="lg:w-1/2">
                <h3 className="font-serif text-3xl text-stone-800 mb-2">
                  {o.region}
                </h3>
                <h4 className="text-zen-700 uppercase tracking-widest text-sm mb-6">
                  {o.title}
                </h4>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {o.description}
                </p>

                <ul className="space-y-3">
                  {o.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-stone-700"
                    >
                      <span className="w-1.5 h-1.5 bg-zen-500 rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Origin;
