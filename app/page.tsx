import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { BsBrowserSafari } from "react-icons/bs";
import { FaArrowRight, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { PiTiktokLogo, PiYoutubeLogo } from "react-icons/pi";

export default function Home() {
  const links = [
    {
      href: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-tripoli-al-mahary?checkInDate=2025-01-27&checkOutDate=2025-01-28&searchType=lowest&promotionCode=&voucher=&memberOnlyRatesHotelCodes=LYTIPALM&adults%5B%5D=2&children%5B%5D=0&aoc%5B%5D=",
      Icon: BsBrowserSafari,
      className: "bg-blue-500 group-hover:bg-blue-600",
      title: "Reservation",
    },
    {
      href: "https://wa.me/218943847879",
      Icon: FaWhatsapp,
      className: "bg-green-400 group-hover:bg-green-600",
      title: "Whatsapp",
    },
    {
      href: "https://www.facebook.com/RadissonBluAlMaharyHotelTripoli/",
      Icon: FiFacebook,
      className: "bg-blue-500 group-hover:bg-blue-700",
      title: "Facebook",
    },
    {
      href: "https://www.instagram.com/info.tripoli/",
      Icon: FaInstagram,
      className: "bg-insta bg-opacity-40 group-hover:bg-opacity-60",
      title: "Instagram",
    },

    {
      href: "https://www.tiktok.com/@radissonhotels",
      Icon: PiTiktokLogo,
      className: "bg-black/70 group-hover:bg-black",
      title: "TikTok",
    },
    {
      href: "https://www.linkedin.com/company/radisson-hotel-group/",
      Icon: ImLinkedin2,
      className: "bg-sky-500 group-hover:bg-sky-700 text-white",
      title: "Linkedin",
    },
    {
      href: "https://x.com/radissonhotels",
      Icon: FaXTwitter,
      className: "bg-black/70 group-hover:bg-black text-white",
      title: "X",
    },
    {
      href: "https://youtube.com/@radissonhotelgroup?si=T25secxQb98E2Qzu",
      Icon: PiYoutubeLogo,
      className: "bg-red-500 group-hover:bg-red-600",
      title: "Youtube",
    },
  ];
  return (
    <main className="text-black bg-blue-700 min-h-[150vh]">
      <div className="bg-[url('/radisson-bg.jpg')] relative before:z-10  bg-cover bg-center md:w-1/2 md:rounded-xl mx-auto before:h-full before:w-full before:absolute before:bg-white/70 min-h-[150vh]">
        <div className="relative z-50 gap-6 grid top-10 transform text-center -translate-x-1/2 left-1/2 min-h-full">
          <div className="md:w-[80%] w-[60%]  mx-auto">
            <Image
              src={"/radisson-blu-logo.png"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p>
            Your gateway to everything <b>Radisson Blu Tripoli</b>
          </p>
          <div>
            <nav>
              <ul className="w-[80%] grid gap-4 mx-auto">
                {links.map(({ href, Icon, className, title }, index) => (
                  <CustomLink
                    key={index}
                    href={href}
                    Icon={Icon}
                    className={className}
                    title={title}
                  />
                ))}
              </ul>
              ;
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}

interface LinkProps {
  href: string;
  Icon: IconType;
  title: string;
  className?: string;
}

const CustomLink = ({ href, Icon, title, className }: LinkProps) => {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className={`flex justify-between group hover:bg-white/80 transition-all duration-500 items-center border border-white bg-slate-50/50 rounded-2xl py-4 px-5`}
      >
        <div className=" flex justify-center gap-2 items-center">
          {" "}
          <div
            className={`transition-all duration-500  rounded-full flex justify-center items-center p-2  ${className}`}
          >
            <Icon size={24} className=" text-white" />
          </div>
          <span>{title}</span>
        </div>
        <div>
          <FaArrowRight />
        </div>
      </Link>
    </li>
  );
};
