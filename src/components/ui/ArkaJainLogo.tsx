import Image from "next/image";

export default function ArkaJainLogo() {
  return (
    <div className="w-[800x] h-auto">
      <Image
        src="/arka_jain_logo.png"
        alt="ARKA JAIN University Logo"
        width={900}
        height={100}
        className="object-contain"
        draggable={false}
      />
    </div>
  );
}