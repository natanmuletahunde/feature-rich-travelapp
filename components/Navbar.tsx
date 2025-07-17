import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
    </div>
  );
};

export default Navbar;
