import Image from "next/image";
import Link from "next/link";

const Logo = ({ url = "/" }: { url?: string }) => {
  return (
    <Link href={url}>
      <Image
        src="/logo.svg"
        alt="logo"
        width={60}
        height={60}
        priority
        className="object-fit"
      />
    </Link>
  );
};

export default Logo;
