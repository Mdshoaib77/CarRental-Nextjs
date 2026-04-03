import { FOOTERLINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-container padding-container flex flex-col border-t border-gray-100 py-12">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.png"}
            alt="logoImg"
            height={111}
            width={111}
            className="object-contain h-auto w-28"
          />
          <p className="text-base text-gray-50">
            Carvana Rentals 2024 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-28">
          {FOOTERLINKS.map((item) => (
            <FooterColumn heading={item.heading}>
              <ul className="flex flex-col gap-6 ">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className="text-gray-30 text-[15px]" >
                    {link.title}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
      </div>
      <div className="flexBetween flex-col gap-4 sm:flex-row flex-wrap mt-10 border-t border-gray-100 py-10 mb-10">
        <p>@2024 Rentals. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href={'/'} className="text-gray-500">
          Privacy Policy
          </Link>
          <Link href={'/'} className="text-gray-500">
          Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  heading: string;
  children: React.ReactNode;
};

const FooterColumn = ({ heading, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[17px] font-bold">{heading}</h4>
      {children}
    </div>
  );
};

export default Footer;
