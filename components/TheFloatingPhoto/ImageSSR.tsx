import Image from "next/image";
import TheFloatingPhoto from "./TheFloatingPhoto";

function ImageSSR() {
  return (
    <TheFloatingPhoto>
      <Image
        width={600}
        height={600}
        className="w-135 max-[1200px]:w-110 max-[600px]:w-55 h-auto"
        src="/hero-image.webp"
        alt="Image of Rino Godson. Rino Godson. Rino Godson"
      />
    </TheFloatingPhoto>
  );
}

export default ImageSSR;
