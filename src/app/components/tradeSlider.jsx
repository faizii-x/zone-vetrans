"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Trade1 from "../../../public/png/trade1.png";
import Trade2 from "../../../public/png/trade2.png";
import Trade3 from "../../../public/png/trade3.png";
import Trade4 from "../../../public/png/trade4.png";
import Link from "next/link";

function TradeSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                General Requirements
              </h4>
              <Link href="/trades/general">
                <div className="border border-white hover:bg-red hover:text-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="md:block hidden absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Sitework Estimating
              </h4>
              <Link href="/trades/sitework">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className=" md:block hidden absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
            <Link href="/trades/sitework/landscape">
              <div className="absolute top-[310px] left-6 bg-red flex justify-center rounded-md w-[220px] h-[55px]">
                <button className="text-white">Landscaping Estimating</button>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade3} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Concrete Estimating
              </h4>
              <Link href="/trades/concrete">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Masonry Estimating
              </h4>
              <Link href="/trades/masonry">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Metals Estimating
              </h4>
              <Link href="/trades/metals">
                <div className="border border-white hover:bg-red rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
            <Link href="/trades/metals/rebar">
              <div className="absolute top-[310px] left-6 bg-red flex justify-center rounded-md w-[240px] h-[55px]">
                <button className="text-white">
                  Rebar Estimating Services
                </button>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Lumber Takeoff
              </h4>
              <Link href="/trades/lumber">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-6 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Thermal & Moist Protection Estimating
              </h4>
              <Link href="/trades/thermal">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
            <div className="flex justify-between gap-3 absolute top-[310px] left-6">
              <Link href="/trades/thermal/roofing">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2 cursor-pointer">
                  <button className="text-white">
                    Roofing Estimating Services
                  </button>
                </div>
              </Link>
              <Link href="/trades/thermal/insulating">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2 cursor-pointer">
                  <button className="text-white">
                    Insulation Estimating Services
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Framing Estimating
              </h4>
              <Link href="/trades/framing">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Interior & Exterior Finishes
              </h4>
              <Link href="/trades/interior">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
            <div className="flex justify-between gap-3 absolute top-[310px] left-6">
              <Link href="/trades/interior/drywall">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px]">
                  <button className="text-white">
                    Drywall Estimating Services
                  </button>
                </div>
              </Link>
              <Link href="/trades/interior/flooring">
                <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px]">
                  <button className="text-white">
                    Flooring Estimating Services
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Specialties
              </h4>
              <Link href="/trades/specialties">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Equipment Estimating
              </h4>
              <Link href="/trades/equipment">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Furnishings Estimating
              </h4>
              <Link href="/trades/furnishing">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Special Construction Estimating
              </h4>
              <Link href="/trades/specialConstruction">
                <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6  text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Conveying Systems Estimating
              </h4>
              <Link href="/trades/convey">
              <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade2} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                MEP Estimating
              </h4>
              <Link href="/trades/mep">
              <div className="border hover:bg-red border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              </Link>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
            <div className="flex justify-between gap-3 absolute top-[260px] left-6">
              <Link href="/trades/mep/">
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Mechanical Estimating Services
                </button>
              </div>
              </Link>
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Electrical Estimating Services
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-3 absolute top-[320px] left-6">
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Plumbing Estimating Services
                </button>
              </div>
              <div className=" bg-red flex justify-center rounded-md w-[240px] h-[55px] p-2">
                <button className="text-white">
                  Gutter Estimating Services
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                HVAC Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Commercial Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Industrial Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>

          <div className="relative">
            <Image className="lg:w-[90%] w-full h-[390px]" src={Trade1} />
            <div className="flex justify-between gap-16 absolute top-10 left-6">
              <h4 className=" text-[20px] text-white font-poppins font-semibold">
                Residential Estimating
              </h4>
              <div className="border border-white rounded-full flex justify-center items-center w-[40px] h-[40px] -mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6  text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <p className="absolute top-24 left-6 w-[80%] text-[14px] font-poppins font-light text-white">
              Lörem ipsum egenanställningsföretag popona som pseudock i exobel
              äga frågan, esam, om sehans niren syvis ekogam eurode reagon.
              Voska safäde makroning oktig, Lasse Berghagen-vin av ponat desper
              i higt om semidat fåde och kykrologi karriärcoach, Nesper bebåren
              eftersom tet medan tågyl eller fånirar ira fast usk. Epiliga eng
              multigon kad och plada ose spening kåsebel anana treska spertad i
              nojoktig fast filoitet sende.{" "}
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TradeSlider;
