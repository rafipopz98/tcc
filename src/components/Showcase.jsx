const Showcase = () => {
  return (
    <section
      data-scroll
      className="bg-[#06182e] w-full px-5 sm:px-10 lg:px-16 py-12"
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          data-scroll
          data-scroll-speed="-0.3"
          src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68820f0ab20497c5cbd8c39f_BlueSushiBham-4%201.avif"
          alt=""
          className="w-full h-[60vh sm:h-[70vh] lg:h-[110vh] object-cover"
        />
      </div>
    </section>
  );
};

export default Showcase;
