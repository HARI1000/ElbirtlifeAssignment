import { Jost} from 'next/font/google';
import InnerModule from './components/InnerModule';
import IngredientsCard from './components/IngredientsCard';
import BlogTemplate1 from './components/BlogTemplate1';
import BlogTemplate2 from './components/BlogTemplate2';
import Footer from './components/Footer';
import FunctionCard from './components/FunctionCard';
const jost = Jost({
  subsets: ["latin"],
});
const ComponentData1 = [
  { img: "flask.svg", heading: "Clinically Studied", paragraph: "All products that we offer have undergone lab and safety tests" },
  { img: "vege.svg", heading: "Vegetarian Friendly", paragraph: "We have a wide selection of vegetarian products to meet your needs" },
  { img: "india.svg", heading: "Made in India", paragraph: "Shop local and explore health products made right here in India" },
];
const ComponentData2 = [
  { img: "freeshiping.svg", heading: "Free shipping", paragraph: "We deliver to your door with no shipping costs on your orders" },
  { img: "norisk.svg", heading: "No Risk", paragraph: "We ensure that all products are safe and within their use-by date" },
  { img: "gmo.svg", heading: "GMO free", paragraph: "Natural, no modified products and derivatives for those who need it" },
];

const IngredientsData1 = [
  { img: "vitaminc", heading: "Vitamin C", paragraph: "Vitamin C as ascorbic acid" },
  { img: "vitaminb3", heading: "Vitamin B3", paragraph: "Niacin for healthy gut and skin" },
];
const IngredientsData2 = [
  { img: "magnesium", heading: "Magnesium", paragraph: "Boost energy and support muscle function" },
  { img: "hyaluronicacid", heading: "HyaluronicAcid", paragraph: "For smooth supple and soft skin!" },
  { img: "lactobacillus", heading: "Lactobacillus", paragraph: "Invigorate your gut microbiome" }
];

const functionsData = [{ img: "vitamins.svg", heading: "Vitamins", para: "Increased Vitamins and minerals in your diet" },
{ img: "weightloss.svg", heading: "Weight Loss", para: "Weight Loss Find Scientifically proven solutions" },
{ img: "functional.svg", heading: "Functional Foods", para: "Functional Foods From protein powders to baby fromula" }];

export default function Home() {
  return (
    <div className={`${jost.className} w-[100vw]`}>
      <div className="p-1">
        <img src="logo1.png" alt="logo"  className="ml-10 w-[12vw] h-[6vh]"/>
      </div>
      <div className=''>
        <div className='bg-[#E2F5FB]  px-[2%] py-[1%]'>
          <div className='flex justify-center items-center'>
            <div className="sm:text-9xl text-4xl text-[#003569] font-extrabold m-6 ">Essential Vitamins</div>
          </div>
          <div className='sm:flex justify-around py-6'>
            <div className='sm:w-[30vw] py-2'>
              <div className="text-[26px] text-[#727272] font-normal ">Online Medical Supplies</div>
              <div className="text-4xl  text-[#003569] font-medium mt-4">Get Your Vitamins & Minerals</div>
              <button className="font-semibold text-base bg-[#17414F] text-white rounded-3xl px-10 py-4 mt-8 ">EXPLORE</button>
            </div>
            <div className='sm:w-[25vw] py-2'>
              <div className='rounded-tl-[100px] rounded-br-[100px] bg-[#FFE9B5]'>
                <img src="probiotics.png" className='w-[95%] h-[95%]' alt="logo" />
              </div>
            </div>

            <div className='sm:w-[30vw]'>
              {functionsData.map((i,index) => {
                return <FunctionCard key={index} img={i.img} heading={i.heading} para={i.para} />
              })}
            </div>
          </div>
        </div>
        <div className='flex bg-[#E2F5FB] p-12'>
          <div className='font-black text-6xl text-[#727272]'>.</div>
          <div className='font-black text-6xl text-[#727272]'>.</div>
        </div>
        <div className='px-[8vw] py-8 sm:mx-[8vw] rounded-xl bg-[#17414F]'>
          <div >
            <div className='sm:flex justify-around'>
              {ComponentData1.map((data,index) => {
                return <InnerModule key={index} img={data.img} heading={data.heading} paragraph={data.paragraph} />
              })}
            </div>
            <div className='sm:flex justify-around'>
              {ComponentData2.map((data,index) => {
                return <InnerModule key={index} img={data.img} heading={data.heading} paragraph={data.paragraph} />
              })}
            </div>
          </div>
        </div>

        <div className='pt-6 '>
          <div className='sm:flex justify-around pt-6 '>
            <div className='sm:w-[35vw] h-[41vh] p-3'>
              <div className='font-semibold text-[#003569] py-2'>INgredients</div>
              <div className='font-semibold text-5xl text-[#17414F] py-2' >Better Ingredients</div>
              <div className='font-normal text-[#727272]' >Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </div>
            </div>
            {IngredientsData1.map((i,index) => {
              return <IngredientsCard key={index} img={i.img} heading={i.heading} paragraph={i.paragraph} />
            })}
          </div>
          <div>
            <div className='sm:flex justify-around pt-4'>
              {IngredientsData2.map((i,index) => {
                return <IngredientsCard key={index} img={i.img} heading={i.heading} paragraph={i.paragraph} />
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center p-2'>
          <div className='p-2 font-semibold  text-[#17414F]' >OUR BLOG</div>
          <div className='p-2 font-semibold text-5xl text-[#17414F]' >Latest News</div>
        </div>
        <div className='grid  sm:grid-cols-4 grid-cols-2  sm:grid-rows-4 gap-4 h-[80vh] px-12 my-6'>
          <BlogTemplate1 />
          <BlogTemplate2 />
          <BlogTemplate1 />
          <BlogTemplate2 />
          <BlogTemplate1 />
          <BlogTemplate1 />
          <BlogTemplate2 />
          <BlogTemplate2 />
        </div>
      </div>
      <Footer />
    </div>
  );
}
