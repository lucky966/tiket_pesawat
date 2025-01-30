import Image from "next/image"
import Link from "next/link"
import { getCityFilter } from "./lib/data"
import CompanyLogos from "../components/CompanyLogos"
import Navbar from "../components/Navbar"
import { searchFlight } from "./lib/actions"

export default async function HomePage() {
  const filter = await getCityFilter()
  // console.log(filter)

  return (
    <>
      {/* header */}
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0">
          <Navbar />
          <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-10 mt-10 px-4 sm:mt-16 sm:gap-14 md:mt-20 md:gap-20 lg:mt-[103px] lg:gap-[90px]">
            <div className="title flex flex-col gap-4 text-center sm:gap-6 md:gap-8 lg:gap-[30px] lg:text-left">
              <h1 className="font-extrabold text-4xl leading-tight sm:text-5xl sm:leading-[60px] md:text-6xl md:leading-[70px] lg:text-[80px] lg:leading-[90px]">
                Penerbangan
                <br />
                Terbaik.
              </h1>
              <p className="font-medium text-base leading-[28px] sm:text-lg sm:leading-[32px] md:leading-[36px]">
                Tidak perlu antri panjang lagi. <br />
                dapatkan lebih banyak makanan berat yang lezat.
              </p>
            </div>
            <form
              action={searchFlight}
              className="bg-white text-flysha-black w-full flex flex-col gap-4 rounded-[20px] p-5 sm:flex-row sm:gap-8 sm:items-center md:p-6 lg:p-5 lg:gap-[50px]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex flex-col justify-center gap-2">
                  <label
                    htmlFor="departure"
                    className="text-sm sm:text-base md:text-lg"
                  >
                    Keberangkatan
                  </label>
                  <div className="flex items-center gap-2">
                    <Image
                      width={24}
                      height={24}
                      src="/assets/images/icons/airplane.svg"
                      alt="icon"
                    />
                    <select
                      name="departure"
                      id="departure"
                      className="font-semibold text-sm sm:text-base md:text-lg appearance-none bg-transparent pr-6"
                    >
                      <option value="" disabled selected>
                        Kebarangkatan
                      </option>
                      {filter.map((item, index) => (
                        <option key={index} value={item.departureCity}>
                          {item.departureCity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="hidden sm:block border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-2">
                  <label
                    htmlFor="arrival"
                    className="text-sm sm:text-base md:text-lg"
                  >
                    Kedatangan
                  </label>
                  <div className="flex items-center gap-2">
                    <Image
                      width={24}
                      height={24}
                      src="/assets/images/icons/airplane.svg"
                      alt="icon"
                    />
                    <select
                      name="arrival"
                      id="arrival"
                      className="font-semibold text-sm sm:text-base md:text-lg appearance-none bg-transparent pr-6"
                    >
                      <option value="" disabled selected>
                        Kedatangan
                      </option>
                      {filter.map((item, index) => (
                        <option key={index} value={item.destinationCity}>
                          {item.destinationCity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="hidden sm:block border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-2">
                  <label
                    htmlFor="date"
                    className="text-sm sm:text-base md:text-lg"
                  >
                    Tanggal Kebarangkatan
                  </label>
                  <div className="flex items-center gap-2">
                    <Image
                      width={24}
                      height={24}
                      src="/assets/images/icons/calendar.svg"
                      alt="icon"
                    />
                    <input
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      name="date"
                      id="date"
                      className="relative font-semibold text-sm sm:text-base md:text-lg bg-transparent focus:outline-none appearance-none pr-6"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="font-bold text-base sm:text-lg md:text-xl leading-6 text-flysha-black text-center bg-flysha-light-purple rounded-[18px] p-3 transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
              >
                Jelajahi Sekarang
              </button>
            </form>
          </div>
          <CompanyLogos />
        </div>
      </section>

      {/* layanan */}
      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          Kami Memastikan Anda <br />
          Terbang Bersama Kami Selamanya
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/profile-2user.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Kru Berbakat</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Jet kami dilindungi oleh logam yang tidak dapat dihancurkan
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/shield-tick.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Penjaga yang Aman
              </p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/crown.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Penghargaan Terbaik
              </p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/building-3.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Penjemputan di rumah
              </p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* paket */}
      <section
        id="Selected"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Selektif Terbaik
          </h2>
          <div className="flex gap-[10px]">
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                width={20}
                height={20}
                src="/assets/images/icons/arrow-right.svg"
                className="rotate-180"
                alt="icon"
              />
            </button>
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                src="/assets/images/icons/arrow-right.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                src="/assets/images/thumbnail/thumbnail1.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                width={40}
                height={40}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Bahasa Pertama</p>
                <p className="text-flysha-off-purple">Bandara MJK</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                src="/assets/images/thumbnail/thumbnail2.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                width={40}
                height={40}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Bisnis Pertama</p>
                <p className="text-flysha-off-purple">Gulfstream 109-BB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                src="/assets/images/thumbnail/thumbnail3.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                width={40}
                height={40}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Penjemputan di rumah</p>
                <p className="text-flysha-off-purple">Bentley Banta</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                src="/assets/images/thumbnail/thumbnail4.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
                width={40}
                height={40}
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Ruang Terbang</p>
                <p className="text-flysha-off-purple">Capung A19-22</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimoni */}
      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Testimoni
          </h2>
          <p className="font-medium text-flysha-off-purple">
            Kami memberi mereka semua pengalaman terbaik yang pernah ada
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden">
          <div className="slider flex shrink-0 w-max">
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Saya pikir yang murah itu tidak bagus, yah, saya pribadi tidak
                  pernah punya pengalaman yang luar biasa ini.
                </p>
                <div className="flex">
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    width={30}
                    height={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={30}
                      height={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessica Fistika</p>
                    <p className="text-sm text-flysha-off-purple">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="flex flex-col justify-between mt-[150px] border-t-[6px] border-flysha-light-purple p-[100px_10px_30px]">
        <div className="container max-w-[1130px] mx-auto flex justify-between relative">
          <Image
            src="/assets/images/icons/Ellipse 4.png"
            className="absolute h-[300px] -top-[45px] -left-[20px] z-0"
            alt="icon"
            width={300}
            height={300}
          />
          <div className="flex shrink-0 h-fit z-10">
            <Image
              src="/assets/images/logos/logo.svg"
              alt=""
              width={150}
              height={70}
            />
          </div>
          <div className="flex gap-[100px] z-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Telusuri</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Layanan
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Tentang
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Testimoni
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Layanan</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Penjemputan di Rumah
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                First Lounge Plus
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Ruang Bisnis
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Bentley Power
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Tentang</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Profil Perusahaan
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Investor Kami
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Media Press
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Karir
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Hubungi</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/call.svg"
                  alt="icon"
                />
                +628121221
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/dribbble.svg"
                  alt="icon"
                />
                Airplane
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/sms.svg"
                  alt="icon"
                />
                flysha@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-[60px] text-[#A0A0AC] text-sm z-10">
          All Rights Reserved. Copyright ©️LuckyRobert 2024.
        </p>
      </footer>
    </>
  )
}
