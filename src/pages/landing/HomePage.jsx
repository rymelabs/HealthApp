import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    function initIcons() {
      if (window.lucide) {
        window.lucide.createIcons();
      } else {
        setTimeout(initIcons, 100);
      }
    }
    initIcons();
  }, []);

  return (
    <div className="bg-white text-zinc-900 antialiased">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
          body { font-family: 'Plus Jakarta Sans', sans-serif; }
        `}
      </style>

      <section className="relative pt-16 pb-24 px-6 flex flex-col items-center text-center bg-gradient-to-b from-[#e0f2fe] to-white">
        <div className="max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white p-3 rounded-full shadow-md border border-blue-100">
              <img
                src="https://pharmasea.store/PharmAIIcon.svg"
                className="w-12 h-12"
                alt="Pharmasea Logo"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-800 leading-[1.1]">
            Find Which Pharmacy Has Your Medication <br />{" "}
            <span className="text-[#3b82f6]">Before You Leave Home.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            Search for your prescribed drug and see verified pharmacies close to
            you that have it in stock.
          </p>

          <div className="relative max-w-md mx-auto mb-6">
            <button
              onClick={() => navigate("/auth/onboarding")}
              className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-5 px-8 rounded-2xl text-xl transition-all shadow-lg flex items-center justify-center group border-b-4 border-blue-800 active:border-b-0 active:translate-y-1"
            >
              <i
                data-lucide="search"
                className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform"
              ></i>
              Find My Medication Now
            </button>
          </div>

          <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] flex items-center justify-center">
            <i
              data-lucide="map-pin"
              className="mr-2 text-[#3b82f6] w-4 h-4"
            ></i>
            Serving Abuja Central & Environs
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8fafc] border-y border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] text-center mb-4">
            The Problem
          </h2>
          <h3 className="text-3xl font-bold text-center mb-16 text-zinc-800">
            Stop Walking From Pharmacy to Pharmacy.
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-200/60 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <i data-lucide="search-x" className="w-8 h-8"></i>
              </div>
              <p className="font-bold text-zinc-700 text-lg leading-tight">
                Not sure which pharmacy has your drug
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-200/60 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <i data-lucide="truck" className="w-8 h-8"></i>
              </div>
              <p className="font-bold text-zinc-700 text-lg leading-tight">
                Wasting time and transport costs
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-200/60 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <i data-lucide="frown" className="w-8 h-8"></i>
              </div>
              <p className="font-bold text-zinc-700 text-lg leading-tight">
                Stress when medication is urgent
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-20 text-zinc-900">
            How It Works
          </h2>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              <div className="w-20 h-20 shrink-0 bg-[#3b82f6] text-white rounded-[2rem] flex items-center justify-center font-black text-3xl shadow-xl shadow-blue-200">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                  Enter Medication Name
                </h3>
                <p className="text-zinc-500 text-lg">
                  Type the name of your prescribed drug in our search bar.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              <div className="w-20 h-20 shrink-0 bg-[#3b82f6] text-white rounded-[2rem] flex items-center justify-center font-black text-3xl shadow-xl shadow-blue-200">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                  Find Stock Nearby
                </h3>
                <p className="text-zinc-500 text-lg">
                  View real-time stock levels at verified Abuja pharmacies.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              <div className="w-20 h-20 shrink-0 bg-[#3b82f6] text-white rounded-[2rem] flex items-center justify-center font-black text-3xl shadow-xl shadow-blue-200">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                  Order or Connect
                </h3>
                <p className="text-zinc-500 text-lg">
                  Use PharmAI to chat with vendors or order for delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Safe. Verified. <span className="text-blue-400">Reliable.</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <i
                    data-lucide="shield-check"
                    className="text-blue-400 mr-4 w-8 h-8 shrink-0"
                  ></i>
                  <p className="text-xl text-zinc-300">
                    Partner pharmacies are verified and licensed
                  </p>
                </div>

                <div className="flex items-start">
                  <i
                    data-lucide="info"
                    className="text-blue-400 mr-4 w-8 h-8 shrink-0"
                  ></i>
                  <p className="text-xl text-zinc-300">
                    We do not sell drugs — we connect you to pharmacies
                  </p>
                </div>

                <div className="flex items-start">
                  <i
                    data-lucide="lock"
                    className="text-blue-400 mr-4 w-8 h-8 shrink-0"
                  ></i>
                  <p className="text-xl text-zinc-300">
                    Your search information remains private
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#3b82f6] p-10 rounded-[3rem] relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Delivery Available</h3>
                <p className="text-blue-50 text-lg mb-6 leading-tight">
                  Medicines delivered straight to your doorstep on orders above
                  ₦5,000.
                </p>
                <i data-lucide="truck" className="w-16 h-16 text-white/30"></i>
              </div>

              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-10 text-zinc-800">
            Know Before You Go.
          </h2>

          <button
            onClick={() => navigate("/auth/onboarding")}
            className="bg-[#3b82f6] hover:bg-blue-600 text-white font-black py-6 px-16 rounded-[2.5rem] text-2xl transition-all shadow-2xl shadow-blue-200 hover:scale-105 active:scale-95"
          >
            Search for My Medication Now
          </button>

          <div className="mt-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full shadow-lg flex items-center justify-center text-white mb-4 animate-pulse">
              <img
                src="https://pharmasea.store/PharmAIIcon.svg"
                className="w-8 h-8"
                alt=""
              />
            </div>

            <p className="text-sm font-black text-zinc-400 uppercase tracking-[0.3em]">
              Powered by PharmAI
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
