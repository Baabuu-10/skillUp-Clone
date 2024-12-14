import logos from '../../public/logo/logo.json'; 
import '../components/style.css'
import Form from './Form';

const Companys = () => {
  return (
    <>
    <div className="mt-16">
      <h1 className="md:text-4xl text-2xl font-bold text-center">
        We've worked with over <span className="text-red-600">65 +</span> companies globally
      </h1>

      <div className="relative w-full overflow-hidden mt-4">
        <div className="flex animation-scroll-left">
        
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="px-4 flex-none w-1/6">
              <div className="flex items-center justify-center h-full">
                <img
                  src={logo.logo}
                  alt={`logo-${index}`}
                  className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto mx-auto transition duration-300 ease-in-out filter grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Form />
    </>
  );
};

export default Companys;
