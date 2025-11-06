import Image from "next/image";

export default function NewsCard({ image, title, description, link }) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        className="max-h-[230px] rounded-sm object-cover"
      />
      <a href={link} className="font-bold text-base text-dark-gray leading-normal mt-3 block"> {title}
      </a>
      <p className="text-dark-gray-500 text-sm leading-normal mt-1">
        {description}
      </p>
    </div>
  );
}
