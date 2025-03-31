// Updated productData with mobile shop products and added more cards
const productData = [
    {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/256/10479/10479821.png',
        title: 'Samsung Galaxy S24 Ultra',
        desc: 'Experience cutting-edge performance with the latest Samsung flagship.',
        price: 1199,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/256/2329/2329385.png',
        title: 'Apple iPhone 15 Pro Max',
        desc: 'The most powerful iPhone yet with an advanced camera system.',
        price: 1299,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://cdn-icons-png.flaticon.com/256/2875/2875763.png',
        title: 'Sony WH-1000XM5 Headphones',
        desc: 'Industry-leading noise cancellation for immersive audio.',
        price: 399,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        title: 'Anker Fast Charger 65W',
        desc: 'Fast-charging technology for all your devices.',
        price: 49,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 5,
        image: 'https://cdn-icons-png.flaticon.com/256/10479/10479821.png',
        title: 'Google Pixel 8 Pro',
        desc: 'AI-powered camera and the latest Google Tensor chip.',
        price: 1099,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 6,
        image: 'https://cdn-icons-png.flaticon.com/256/2875/2875763.png',
        title: 'Bose QuietComfort Earbuds II',
        desc: 'Next-level noise cancellation in a compact form.',
        price: 299,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 7,
        image: 'https://cdn-icons-png.flaticon.com/256/10479/10479821.png',
        title: 'OnePlus 12 Pro',
        desc: 'Flagship killer with top-tier performance.',
        price: 899,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 8,
        image: 'https://cdn-icons-png.flaticon.com/256/2329/2329385.png',
        title: 'Xiaomi 14 Ultra',
        desc: 'High-performance smartphone with Leica camera technology.',
        price: 799,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const HomePageProductCard = () => {
    return (
        <div className="mt-10">
            <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img className="lg:h-80 h-96 w-full" src={image} alt={title} />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Mobile Shop</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">₹{price}</h1>
                                            <div className="flex justify-center">
                                                <button className="bg-gray-800 hover:bg-gray-900 w-full text-white py-[4px] rounded-lg font-bold">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;