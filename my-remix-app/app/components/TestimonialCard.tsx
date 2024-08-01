const TestimonialCard = () =>{
    return(
        <div className="w-[460px] h-[320px] bg-white rounded-md flex flex-col">
               <div className="m-8 w-40"><img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63fc19e469b16ecb28f5cc6a_Not%20selling%20Liquid-p-500.webp" alt=""/></div>
               <div className="mt-4 flex-1 m-8"><p>"My wife and I are expecting our first baby any day now, and this new job I've got will provide us the income to allow her to be a stay-at-home mom"</p></div>
               <div className="bg-gray-200 rounded-b-md flex items-center justify-between">
                  <div className="m-4 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-green-600">
                          <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63feaf69b65dd155396ea3a9_Xander.webp" className="rounded-full" alt="" />
                        </div>
                        <div className="flex flex-col">
                             <p className="font-semibold">Xander Wernecke</p>
                             <p className="text-gray-600">Shopify Developer</p>
                        </div>
                  </div>
                  <div className="m-8 flex items-center gap-2">
                   <img src="https://assets.website-files.com/63e1bc31ee3b20a0fe075081/63e1bc31ee3b20d25c0750ec_Star.svg" alt=""/><p>5.0</p>
                  </div>
               </div>
        </div>
    )
}

export default TestimonialCard