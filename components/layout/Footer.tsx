import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row flex-wrap justify-around">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="font-bold">{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.title} href={item.url} className="text-gray-500">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
