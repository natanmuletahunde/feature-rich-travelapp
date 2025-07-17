import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="  flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        <ul></ul>
      </Link>
    </div>
  );
};

export default Navbar;
