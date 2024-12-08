import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaArrowRight, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiYoutubeLogo } from "react-icons/pi";

export default function Home() {
  return (
    <main className="text-black bg-blue-700">
      <div className="bg-[url('/radisson-bg.jpg')] relative before:z-10 min-h-screen bg-cover bg-center md:w-1/2 md:rounded-xl mx-auto before:h-full before:w-full before:absolute before:bg-white/70">
        <div className="relative z-50 gap-6 grid top-10 transform text-center -translate-x-1/2 left-1/2 min-h-full">
          <div className="w-[80%] mx-auto">
            <Image
              src={"/radisson-blu-logo.png"}
              alt="logo"
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
              priority
            />
          </div>
          <p>
            Your gateway to everything <b>Radisson Blu Tripoli</b>
          </p>
          <div>
            <nav>
              <ul className="w-[80%] grid gap-4 mx-auto">
                <CustomLink
                  href={"/"}
                  Icon={PiYoutubeLogo}
                  className="bg-red-500 group-hover:bg-red-600"
                  title={"Youtube"}
                />
                <CustomLink
                  href={"/"}
                  Icon={FaWhatsapp}
                  className="bg-green-400 group-hover:bg-green-600"
                  title={"Whatsapp"}
                />
                <CustomLink
                  href={"/"}
                  Icon={FaInstagram}
                  className="bg-insta bg-opacity-40 group-hover:bg-opacity-60"
                  title={"Instagram"}
                />
                <CustomLink
                  href={"/"}
                  Icon={FiFacebook}
                  className="bg-blue-500 group-hover:bg-blue-700"
                  title={"Facebook"}
                />
              </ul>
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
        className={`flex justify-between group hover:bg-white/70 transition-all duration-500 items-center border border-white bg-white/20 rounded-lg py-4 px-3`}
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
