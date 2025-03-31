const Track = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Feature 1 */}
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 bg-white hover:shadow-lg rounded-xl transition-all duration-300 p-6">
                            <div className="inline-flex items-center justify-center rounded-full bg-gray-100 w-16 h-16 mb-4">
                                <img 
                                    className="w-8 h-8 object-contain" 
                                    src="https://cdn-icons-png.flaticon.com/512/833/833593.png" 
                                    alt="Smartphone" 
                                />
                            </div>
                            <h2 className="title-font font-medium text-xl text-gray-900 mb-3">
                                Latest Smartphones
                            </h2>
                            <p className="leading-relaxed text-gray-600 text-base">
                                Discover the newest models with cutting-edge technology
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 bg-white hover:shadow-lg rounded-xl transition-all duration-300 p-6">
                            <div className="inline-flex items-center justify-center rounded-full bg-gray-100 w-16 h-16 mb-4">
                                <img 
                                    className="w-8 h-8 object-contain" 
                                    src="https://cdn-icons-png.flaticon.com/512/809/809593.png" 
                                    alt="Accessories" 
                                />
                            </div>
                            <h2 className="title-font font-medium text-xl text-gray-900 mb-3">
                                Best Accessories
                            </h2>
                            <p className="leading-relaxed text-gray-600 text-base">
                                Find the perfect accessories for your devices
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 bg-white hover:shadow-lg rounded-xl transition-all duration-300 p-6">
                            <div className="inline-flex items-center justify-center rounded-full bg-gray-100 w-16 h-16 mb-4">
                                <img 
                                    className="w-8 h-8 object-contain" 
                                    src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
                                    alt="Offers" 
                                />
                            </div>
                            <h2 className="title-font font-medium text-xl text-gray-900 mb-3">
                                Exclusive Offers
                            </h2>
                            <p className="leading-relaxed text-gray-600 text-base">
                                Get the best deals on top brands and models
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;                                                