import Image from "next/image";
import Link from "next/link";

const Logo = ({ url = "/", size = 60 }: { url?: string; size?: number }) => {
  return (
    <Link href={url}>
      <Image
        src="/logo.svg"
        alt="logo"
        width={size}
        height={size}
        priority
        className="object-fit"
      />
    </Link>
  );
};

export default Logo;
