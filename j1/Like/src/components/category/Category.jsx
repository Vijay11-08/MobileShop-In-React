const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/1034/1034155.png',
        name: 'Smartphones'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10479/10479821.png',
        name: 'Accessories'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/3845/3845734.png',
        name: 'Laptops'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/2645/2645881.png',
        name: 'Tablets'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/2329/2329385.png',
        name: 'Smartwatches'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/2331/2331713.png',
        name: 'Headphones'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Chargers'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/2875/2875763.png',
        name: 'Gaming'
    }
];

const Category = () => {
    return (
        <div className="mt-5 px-4">
            {/* Responsive Grid for Large Screens */}
            <div className="hidden lg:grid grid-cols-4 gap-6 justify-center">
                {category.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-200 transition-all hover:bg-gray-300 cursor-pointer flex justify-center items-center shadow-md">
                            <img className="w-12 h-12" src={item.image} alt={item.name} />
                        </div>
                        <h1 className="text-sm lg:text-lg text-center font-medium text-gray-700 uppercase mt-2">{item.name}</h1>
                    </div>
                ))}
            </div>

            {/* Scrollable Row for Mobile Screens */}
            <div className="flex overflow-x-auto lg:hidden hide-scroll-bar space-x-4">
                {category.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-200 transition-all hover:bg-gray-300 cursor-pointer flex justify-center items-center shadow-md">
                            <img className="w-10 h-10" src={item.image} alt={item.name} />
                        </div>
                        <h1 className="text-sm text-center font-medium text-gray-700 uppercase mt-1">{item.name}</h1>
                    </div>
                ))}
            </div>

            {/* Hide Scrollbar */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; }.hide-scroll-bar::-webkit-scrollbar { display: none; }" }} />
        </div>
    );
};

export default Category;
