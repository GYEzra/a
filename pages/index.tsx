import { BaseLayout, Navbar } from "@/components";
import { useWeb3 } from "@/components/providers/web3";


export default function Home() {
  // const { data } = useWeb3();

  return (

    <>
      <BaseLayout>
        <div className="bg-black">
          <div className="w-full sm:px-6 sm:py-16 lg:px-8 h-[600px]">
            <div className="flex justify-between px-6 items-center">
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              >
                <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto text-center lg:mx-0 lg:text-left">
                <p className="text-md text-white font-bold text-center overlap-text uppercase">THIS ITEM WAS FEATURED ON <span className="primary-text">FINTECH</span> </p>
                <div className="text-8xl font-bold tracking-tight text-white sm:text-7xl text-center overlap-text not-select">
                  Meet Powerful Of
                  <p className="primary-text">
                    NFT Marketplace</p>
                  WordPres Plugin
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300 overlap-text text-center ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mx-auto text-center lg:mx-0 lg:text-left">
                <img
                  alt="App screenshot"
                  src="images/Group-901-min.webp"
                  className="w-2/4 h-auto max-w-none rounded-md bg-white/5 ring-1 ring-white/10 "
                />
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
