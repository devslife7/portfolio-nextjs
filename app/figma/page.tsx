export default function MyComponent() {
  return (
    <div className="bg-neutral-800 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <span className="flex w-full max-w-[1142px] flex-col mt-40 mb-28 max-md:max-w-full max-md:my-10">
        <div className="text-white text-4xl self-stretch max-md:max-w-full">Schedule an Free Estimate</div>
        <div className="text-white text-xl leading-7 font-normal mt-8 max-w-3xl">
          We are located in Fort Washington, Maryland. We service Northern Virginia and Southern Maryland including PG
          County, Calvert County, Anne Arundel County Charles County and St. Mary’s County.
          <br />
        </div>
        <div className="flex w-[333px] max-w-full items-start justify-between gap-5 mt-12 self-start max-md:mt-10">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
        </div>
        <div className="self-stretch mt-28 px-px max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
              <span className="bg-neutral-700 flex grow flex-col items-stretch w-full mt-7 pl-11 pr-16 pt-6 pb-12 max-md:mt-10 max-md:px-5">
                <div className="flex flex-col justify-center pl-3.5 pr-16 py-1 rounded-[50%] items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.71] object-contain object-center w-9 overflow-hidden max-w-full"
                  />
                </div>
                <div className="text-white text-3xl whitespace-nowrap mt-7">Send us email</div>
                <div className="text-white text-xl whitespace-nowrap mt-6">email123@gmail.com</div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-neutral-700 flex grow flex-col w-full pl-8 pr-20 py-12 items-start max-md:mt-10 max-md:px-5">
                <div className="flex aspect-[1.125] flex-col justify-center items-center ml-3 px-2.5 py-1.5 rounded-[50%] max-md:ml-2.5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.02] object-contain object-center w-[46px] overflow-hidden"
                  />
                </div>
                <div className="text-white text-4xl ml-5 mt-7 max-md:ml-2.5">WhatsApp</div>
                <div className="text-white text-2xl whitespace-nowrap mt-5">+1 800 000 00000</div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-neutral-700 flex grow flex-col items-stretch w-full mt-7 pt-6 pb-12 px-10 max-md:mt-10 max-md:px-5">
                <div className="flex flex-col justify-center pr-16 py-2 rounded-[50%] items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.1] object-contain object-center w-11 overflow-hidden max-w-full"
                  />
                </div>
                <div className="text-white text-3xl mt-7">Our Location</div>
                <div className="text-white text-xl whitespace-nowrap mt-6">Fort Washington, MD 20744</div>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}
