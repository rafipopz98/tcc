const Footer = () => {
  return (
    <section className="nav w-full h-[40vh] sm:h-[50vh] lg:h-[123vh] bg-[#FBF2E1] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col justify-center text-center leading-[0.82]">
        <h1 className="text-[39vw] mr-2 ml-2 font-extrabold uppercase text-[#14000F] tracking-tight">
          THE CITY
        </h1>
        <h1 className="text-[47vw] mr-2 ml-2 font-extrabold uppercase text-[#14000F] tracking-tight">
          CREW
        </h1>
      </div>

      <div className="relative z-10 text-yellow-400 font-handwritten text-5xl md:text-9xl uppercase rotate-[-4deg] text-center leading-tight">
        <p>Never Go</p>
        <p>Extinct</p>
      </div>
    </section>
  );
};

export default Footer;
