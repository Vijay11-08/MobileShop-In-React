import { useNavigate } from "react-router";

// productData 
const productData = [
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/81ql3U3xAwL._SX679_.jpg',
        title: 'Xiaomi 15 Ultra (Silver Chrome, 16GB RAM, 512GB Storage)',
        desc: 'Xiaomi 15 Ultra (Silver Chrome, 16GB RAM, 512GB Storage).',
        price: 100050,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/713SsA7gftL._SX679_.jpg',
        title: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine',
        desc: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/61SKi94cImL._SX679_.jpg',
        title: 'iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; White',
        desc: 'iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; White',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/81LlPWpcBvL._SX679_.jpg',
        title: 'OPPO F29 5G (Solid Purple, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        desc: 'OPPO F29 5G (Solid Purple, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/81SBe5lWfwL._SX522_.jpg',
        title: 'boAt Tag Bluetooth Item Finder for Android Devices, Google Find My Device App Support, 80dB Alarm, Additional Battery, 1 Year Battery (Black)',
        desc: 'boAt Tag Bluetooth Item Finder for Android Devices, Google Find My Device App Support, 80dB Alarm, Additional Battery, 1 Year Battery (Black)',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/71L5lSfJIPS._SX679_.jpg',
        title: 'New Apple AirTag 4 Pack',
        desc: 'New Apple AirTag 4 Pack',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/61R805AyUXL._SX679_.jpg',
        title: 'TECNO Phantom V Flip 2 (Travertine Green, 8GB+256GB) |Strongest Flip Ever | 4720mAh with 70W Charger | Advance AI Features | 50MP OIS+50MP Camera | 6.9" 120Hz AMOLED Main & 3.64" AMOLED Cover Screen',
        desc: 'TECNO Phantom V Flip 2 (Travertine Green, 8GB+256GB) |Strongest Flip Ever | 4720mAh with 70W Charger | Advance AI Features | 50MP OIS+50MP Camera | 6.9" 120Hz AMOLED Main & 3.64" AMOLED Cover Screen',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/7191m+RPB4L._SX679_.jpg',
        title: 'Lava Agni 3 5G (Pristine Glass, 8GB+128GB) | Indias 1st Dual AMOLED | 1.5K Curved Display | Dimensity 7300X | 50MP Triple AI Telephoto Camera | 66W Fast Charge | with Charging Adapter',
        desc: 'Lava Agni 3 5G (Pristine Glass, 8GB+128GB) | Indias 1st Dual AMOLED | 1.5K Curved Display | Dimensity 7300X | 50MP Triple AI Telephoto Camera | 66W Fast Charge | with Charging Adapter.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]
const HomePageProductCard = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate('/productinfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={image}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                LikeZone
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;