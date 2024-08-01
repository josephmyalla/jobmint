import type { V2_MetaFunction } from "@remix-run/node";
import TestimonialCard from "~/components/TestimonialCard";
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="flex flex-col bg-[#2F6648]">
{/*--- nav --*/}
<section className="p-12">
   <nav className="flex justify-between items-center">
         <div className="flex items-center justify-center gap-2"><div className="w-12 h-12 rounded-full bg-gray-100"></div><p className="navitem">jobmint</p></div>

         <div className="flex gap-8"><p className="navitem">For Developers</p>
         <p className="navitem">For Companies</p>
         <p className="navitem">Contact</p></div>
         <div className="flex items-center gap-4">
           
           <div className="text-gray-100 font-medium hover:text-[#c1f157] hover:border-b hover:border-[#c1f157] duration-100">Login</div>
           <button className="w-[140px] h-[60px] bg-white rounded-md text-gray-50 hover:bg-[#c1f157] duration-100"><p className="text-gray-900 font-bold">Get Started</p>
       </button>
         </div>
</nav>
</section>
{/*--- nav --*/}
{/*--- hero --*/}
<section id="hero"  className="flex mt-24 pb-56] overflow-hidden">
<div className="mx-auto flex p-20">
   <div className="w-1/2 flex flex-col gap-10">
       <h1 className="text-6xl text-gray-100 font-extrabold max-w-5xl">Let's match you with your <span className="text-[#c1f157]">dream</span> tech job</h1>
        <div className="flex items-center gap-8">
          <div className="flex relative ml-8">
             <div className="w-16 h-16 rounded-full bg-white"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full" alt=""/></div>
              <div className="w-16 h-16 rounded-full bg-white absolute right-8"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full" alt=""/></div>
          </div>
          <p className="text-gray-100">Our single, free tech interview plugs you into perfect-match agencies and startups.</p>
        </div>
        <div className="flex gap-8">
             <div className="btn-wrapper-orange">
                <button className="btn-custome-orange">Get Started</button>
             </div>
              <div className="btn-wrapper-white">
                <button className="btn-custome-white"><span className="text-gray-900">For Companies</span></button>
             </div>
        </div>
        <div className="flex items-center gap-2">  
           <div className="w-8 h-8 rounded-full bg-[#c1f157]"></div>
             <p className="text-white">Start the process in 1 minute</p>
        </div>
   </div>
   <div>
     Right
   </div>
   </div>
</section>

{/*--- hero --*/}
{/*--- industry leaders --*/}
<main className="bg-[#c1f157] h-[200px] mt-12 flex items-center justify-center">
  <h2 className="text-4xl">Used and loved by industry leaders</h2>
</main>
{/*--- industry leaders --*/}

{/*--- dream --*/}
<section className="flex flex-col items-center p-12 bg-gray-50 pt-16 pb-16">
     <h2 className="text-6xl max-w-3xl text-center py-16 font-bold">Your <span className="text-[#474BC5]">dream job</span> is 3 steps away</h2>
     <div id="steps" className="flex gap-20">
       <div className="flex flex-col">
          <h2 className="text-7xl font-bold m-4">1</h2>
          <h3 className="text-3xl font-bold m-4">Apply Now</h3>
          <p>A simple technical quiz that takes 5 minutes</p>
       </div>

        <div className="flex flex-col">
          <h2 className="text-7xl font-bold m-4">2</h2>
          <h3 className="text-3xl font-bold m-4">Pass an Assesment</h3>
          <p>Pre-qualify for technical roles at our full network of companies</p>
       </div>

        <div className="flex flex-col">
          <h2 className="text-7xl font-bold m-4">3</h2>
          <h3 className="text-3xl font-bold m-4">Get Placed</h3>
          <p>Our matching algorithm will get you final round interviews at companies</p>
       </div>
     </div>
     <div className="mt-20">
       <div className="btn-wrapper-orange">
        <button className="btn-custome-orange">
            Get Started
        </button>
     </div>
     </div>
</section>
{/*--- dream --*/}

{/*--- Skip ----*/}
<section className="pt-16 pb-16 bg-[#2F6648] flex items-center">
<div className="w-1/2 p-20">
     <div className="grid grid-cols-6 grid-rows-6 gap-0.5 bg-[#649683] p-0.5 relative">
       <div className="bg-white w-[360px] z-20 h-[460px] absolute rounded-lg -top-2 shadow-lg flex flex-col p-8">
         <h2 className="text-2xl  font-semibold">Interview with Vision AI</h2>
         <div className="w-full h-20 rounded-md bg-orange-500 mt-10 flex items-center justify-center gap-4">
             <div className="w-8 h-8 rounded-full bg-white"></div><p className="text-white font-semibold">Waiting for your reply</p>
         </div>
         <div className="mt-12 ml-32">
            <div className="flex relative">
            <div className="w-16 h-16 rounded-full bg-black z-20">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full" alt=""/>
            </div>
            <div className="w-16 h-16 rounded-full bg-blue-700 absolute -left-12 z-10">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full" alt=""/>
            </div>
             <div className="w-16 h-16 rounded-full bg-red-600 absolute -left-24">
               <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full" alt=""/>
             </div>
              <div className="w-16 h-16 rounded-full bg-green-500 absolute -left-32 -z-10">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full" alt=""/>
              </div>
          </div>
         </div>
         <div className="mt-20">
            <p className="font-semibold">Last updated</p>
             <p className="">16/05/2023</p>
         </div>
       </div>

       <div className="bg-[#c1f157] w-[260px] z-30 h-[160px] absolute rounded-lg -bottom-2 -right-2 shadow-lg">
       </div>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
          <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
          <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
          <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
          <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
          <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
          <p className="w-full h-full bg-[#2F6648] grid place-content-center"></p>
         <p className="w-full h-20 bg-[#2F6648] grid place-content-center"></p>
         
     </div>
  </div>
  
  <div className="flex flex-col w-1/2">
     <h2 className="text-6xl text-gray-50 font-medium">Skip straight to <span className="text-[#c1f157] border-b border-[#c1f157]">the good part</span></h2>
     <p className="text-gray-100 mt-8 mb-10">Skip forward in the interview process, save time applying, and get a better company match.</p>
     <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-white"></div>
             <p className="text-white">Snappy Interview Process</p>
          </div>
           <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-white"></div>
             <p className="text-white">Final Rounds to Your Inbox</p>
          </div>
           <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-white"></div>
             <p className="text-white">Company match algorithm</p>
          </div>
           <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-white"></div>
             <p className="text-white">No annoying back-and-forths</p>
          </div>
     </div>
  </div>
 
</section>
{/*--- Skip ----*/}

{/*--- Does this sound like you ----*/}
<section className="flex flex-col items-center p-12 bg-gray-50 pt-16 pb-16">
     <h2 className="text-6xl max-w-3xl text-center py-16 font-bold">Does This Sound Like <span className="text-[#474BC5]">You?</span></h2>
     <div id="steps" className="flex gap-20">
       <div className="flex flex-col">
          <div className="flex items-center gap-4">
          <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b20801e07512a_Icon%201.svg" alt=""/>
          <p className="text-2xl font-bold">Front End Engineer</p>
          </div>
          <p className="mt-6 leading-8 text-lg">If UI's and the web are your zone of comfort, then you're in-demand in our network</p>
       </div>

        <div className="flex flex-col">
          <div  className="flex items-center gap-4">
           <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b207f5f07512b_Icon%202.svg" alt=""/>
          <h3 className="text-2xl font-bold">Back End Engineer</h3>
          </div>
          <p className="mt-6 leading-8 text-lg">Regardless of your server-side language of choice, we got you covered</p>
       </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b20a6a007512c_Icon%203.svg" alt=""/>
            <h3 className="text-sxl font-bold">Ecommerce Dev</h3>
          </div>
          <p className="mt-6 leading-8 text-lg">Shopify Experts and developers, we want you. Our network of agencies is always hiring!</p>
       </div>
     </div>
</section>
{/*--- Does this sound like you ----*/}
{/*---- testimonials  */}
<section className="pt-20 pb-16 bg flex items-center bg-[#2F6648] justify-center relative">
  <div className="absolute right-0 bottom-0">
       <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b200eee0750e7_right%20stair.svg" alt="" />
  </div>
   <div className="absolute left-0 top-0 rotate-180">
       <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b200eee0750e7_right%20stair.svg" alt="" />
  </div>

  <div className="flex flex-col">
     <h2 className="text-5xl text-gray-50 font-medium mt-8 text-center">See why <span className="text-[#c1f157] border-b border-[#c1f157]">software devs </span> love us</h2>
     <p className="text-gray-100 mt-8 mb-10 text-center">Talented engineers power our operation, here's what they say:.</p>
     {/* start of slide --*/}
     <div className="flex flex-col">
     <div className="flex gap-10">
      <TestimonialCard />
      <TestimonialCard />    
             
       </div>
      {/* slide buttons */}
             <div className="p-8 flex items-center gap-4 justify-center">
                    <div className="w-10 h-10 rounded-full ring-2 ring-white hover:bg-[#c1f157] grid place-content-center hover:ring-0"><span className="text-white font-bold text-2xl hover:text-black">G</span></div>
                     <div className="w-10 h-10 rounded-full ring-2 ring-white hover:bg-[#c1f157] grid place-content-center hover:ring-0"><span className="text-white font-bold text-2xl hover:text-black">S</span></div>
             </div>
             {/* slide buttons */}
     </div>
       {/*  end of slide  */}
  </div>
</section>
{/*---- testimonials */}

{/*---- perfect */}
<section className="p6-20 pb-20 bg-white h-[600px]">
     <div className="stripes w-[20px] h-[10px]"></div>
</section>
{/*---- perfect */}
{/* Footer */}
  <section className="pt-20 pb-16 bg flex items-center bg-[#2F6648] justify-center relative">
  <div className="bg-[#c1f157] h-[380px] w-[1100px] rounded-lg absolute -top-40 flex flex-col space-y-8 items-center justify-center">
    <h2 className="text-6xl font-bold w-[480px]">Start waking up <span className="text-[#2F6648]">excited</span> for work</h2>
    <p>It just takes 1 minute to get things going</p>
    
    
        <div className="btn-wrapper-black">
         <button className="btn-custome-black">
           Get Started
         </button>
    </div>
    
   

       <div className="w-80 h-40 absolute left-0 bottom-0">
         <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b204aad0750f0_CTA%20Image.svg" alt=""/>
       </div>

       <div className="w-80 h-40 absolute -right-20 -top-8">
        <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b204aad0750f0_CTA%20Image.svg " className="rotate-180" alt=""/>
     </div>

   
  </div>


<div className="mt-60 flex w-[1100px]">
   <div className="w-2/5 space-y-4">
      <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100"></div><p className="navitem">jobmint</p>
      </div>

      <p className="text-gray-100 text-lg leading-normal w-66">
        Our single interview process sources, <br/>vets and matches programmers with<br/> their dream companies. Built for <br/>startups and agencies.
      </p>
   </div>
   <div className="w-3/5 flex justify-between">
      <div className="flex flex-col space-y-4 items-center">
        <h2 className="text-bold text-white">PAGES</h2>
        <p className="text-white">For Developers</p>
        <p className="text-white">For Companies</p>
        <p className="text-white">Contact</p>
        <p className="text-white">Login</p>

      </div>
      <div className="flex flex-col space-y-8 items-center">
         <h2 className="text-bold text-white">FOR DEVELOPERS</h2>
         <div className="btn-wrapper-black">
               <button className="btn-custome-black">
                     <p className="text-bold">Sign Up</p>
               </button>
          </div>
      </div>
       <div className="flex flex-col space-y-8 items-center">
          <h2 className="text-bold text-white">FOR COMPANIES</h2>
          <div className="btn-wrapper-orange">
               <button className="btn-custome-orange">
                     <p className="text-bold">Start Hiring</p>
               </button>
          </div>
      </div>
      
   </div>

</div>


</section>
      {/* Footer */}
    </div>
  );
}
