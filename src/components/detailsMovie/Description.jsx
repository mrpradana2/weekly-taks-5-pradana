import React from "react";
import Thumbnail from "/images/hero/hero-3.png";

export default function Description() {
  return (
    <>
      <section className="md:grid md:grid-cols-12 md:gap-6 px-7 md:relative">
        <div className="flex justify-center items-center relative bottom-40 md:col-span-3 md:col-start-2 md:bottom-90 md:absolute md:top-0">
          <img
            src={Thumbnail}
            alt="hero"
            className="w-[80%] rounded-lg min-[440px]:w-[70%] min-[550px]:w-[60%] md:w-[85%]"
          />
        </div>
        <div className="relative bottom-20 grid grid-cols-2 col-span-10 col-start-5 row-start-1 md:col-end-12 md:bottom-0">
          <h1 className="font-bold text-xl text-center relative bottom-10 col-span-2 md:bottom-0 md:text-3xl md:pt-5">
            Spider-Man: Homecoming
          </h1>
          <div className="flex gap-4 justify-center relative bottom-5 col-span-2 md:bottom-0 md:py-4">
            <p className="px-2 py-1 bg-color-ligthgrey text-color-grey rounded-2xl text-[13px] md:h-max">
              Action
            </p>
            <p className="px-2 py-1 bg-color-ligthgrey text-color-grey rounded-2xl text-[13px] md:h-max">
              Action
            </p>
          </div>
          <div className="px-4 py-2 min-[440px]:px-8 min-[550px]:px-14 min-[770px]:px-22 md:px-0 md:py-0">
            <h6 className="text-color-grey text-[15px]">Release date</h6>
            <p className="text-[20px]">June 28, 2017</p>
          </div>
          <div className="px-4 py-2 min-[440px]:px-8 min-[550px]:px-14 min-[770px]:px-22 md:px-0 md:py-0">
            <h6 className="text-color-grey text-[15px]">Directed by</h6>
            <p className="text-[20px]">Jon Watss</p>
          </div>
          <div className="px-4 py-2 min-[440px]:px-8 min-[550px]:px-14 min-[770px]:px-22 md:px-0 md:pb-0">
            <h6 className="text-color-grey text-[15px]">Duration</h6>
            <p className="text-[20px]">2 hrs 13 min</p>
          </div>
          <div className="px-4 py-2 min-[440px]:px-8 min-[550px]:px-14 min-[770px]:px-22 md:px-0 md:pb-0">
            <h6 className="text-color-grey text-[15px]">Casts</h6>
            <p className="text-[20px]">Tom Holland, Robert Downey Jr., etc.</p>
          </div>
        </div>
        <div className="col-span-2 px-4 py-2 min-[440px]:px-8 min-[550px]:px-14 min-[770px]:px-22 md:col-span-12">
          <h6 className="text-[1.2rem] font-bold text-color-dark relative bottom-12 md:bottom-0 md:pb-4">
            Synopsis
          </h6>
          <p className="text-color-grey text-[20px] relative bottom-6 md:bottom-0">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </p>
        </div>
      </section>
    </>
  );
}
