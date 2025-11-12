import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ image, title, description, link }) {
  return (
    <div className="w-full">
      <Image
        src={image}
        alt={title}
        className="max-h-[230px] w-full rounded-sm object-cover"
      />
      <Link href={link || "/"} className="font-bold text-base text-dark-gray leading-normal mt-3 block"> {title}
      </Link>
      <p className="text-dark-gray-500 text-sm leading-normal mt-1">
        {description}
      </p>
    </div>
  );
}
