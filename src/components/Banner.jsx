import { useEffect, useRef } from "react";

const brands = [
  {
    name: "LONGi",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Longi_Silicon_Materials_logo.png",
  },
  {
    name: "JinkoSolar",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/JinkoSolarLOGO.png",
  },
  {
    name: "Huawei",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Huawei_wordmark.svg",
  },
  {
    name: "Deye",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Deye_logo.png",
  },
  {
    name: "CHINT",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chint_logo.png",
  },
  {
    name: "Schneider Electric",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/SchneiderElectric_Logo.svg",
  },
  {
    name: "ABB",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/ABB_logo.svg",
  },
];

export default function Banner() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animation = track.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: 28000,
        iterations: Infinity,
        easing: "linear",
      },
    );

    animationRef.current = animation;

    return () => animation.cancel();
  }, []);

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full overflow-hidden bg-white py-4">
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => animationRef.current?.pause()}
        onMouseLeave={() => animationRef.current?.play()}
      >
        <div ref={trackRef} className="flex w-max items-center">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="mx-6 flex h-20 w-36 shrink-0 items-center justify-center sm:mx-10 sm:w-44"
            >
              <img
                src={brand.src}
                alt={brand.name}
                loading="eager"
                draggable="false"
                className="max-h-12 max-w-full object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
