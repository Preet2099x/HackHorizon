"use client";

import Image from "next/image";

export default function Glimpse() {
    const leftImages = [
        { src: "/hackathon-image-1.jpg", caption: "Innovation in Action" },
        { src: "/hackathon-image-3.jpg", caption: "Team Collaboration" },
        { src: "/hackathon-image-5.jpg", caption: "Building Together" },
    ];

    const rightImages = [
        { src: "/hackathon-image-2.jpg", caption: "Code & Create" },
        { src: "/hackathon-image-4.jpg", caption: "Networking & Ideas" },
    ];

    return (
        <div className="relative bg-[#1a1a1a] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
            {/* Background texture overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading with Banner */}
                <div className="flex justify-center mb-12 md:mb-16 lg:mb-20">
                    <div className="relative w-full max-w-4xl">
                        <Image 
                            src="/glimpse-heading.png" 
                            alt="Glimpse Of Hack Horizon 2025" 
                            width={1200}
                            height={300}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Scrolling Gallery Layout */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Photo Column - Scrolling */}
                    <div className="lg:col-span-3 flex flex-col gap-16 md:gap-20">
                        {leftImages.map((image, index) => (
                            <div key={`left-${index}`} className="flex justify-center lg:justify-end">
                                <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                    <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                        clipPath: 'polygon(2% 0%, 98% 1%, 99% 97%, 1% 99%)',
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                                    }}>
                                        <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                            <Image 
                                                src={image.src}
                                                alt={`HackHorizon Memory ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto ${index + 1}%3C/text%3E%3C/svg%3E`;
                                                }}
                                            />
                                        </div>
                                        <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                            {image.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Text Content - Sticky */}
                    <div className="lg:col-span-6">
                        <div className="sticky top-32 text-center px-4 md:px-8 py-8">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium">
                                <span className="font-bold">HackHorizon</span> united <span className="font-bold text-[#7BCAF8]">1,500+ registrations</span>, <span className="font-bold text-[#7BCAF8]">100+ colleges</span>, and <span className="font-bold text-[#7BCAF8]">500+ innovators</span> under one banner of creativity and collaboration. Over action-packed days, participants built <span className="font-bold text-[#7BCAF8]">200+ groundbreaking projects</span>, forged lasting connections, and pushed the boundaries of what&apos;s possible. The journey is just beginning—are you ready to make history at HackHorizon?
                            </p>
                        </div>
                    </div>

                    {/* Right Photo Column - Scrolling */}
                    <div className="lg:col-span-3 flex flex-col gap-16 md:gap-20">
                        {rightImages.map((image, index) => (
                            <div key={`right-${index}`} className="flex justify-center lg:justify-start">
                                <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                    <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                        clipPath: 'polygon(1% 1%, 99% 0%, 98% 99%, 2% 98%)',
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                                    }}>
                                        <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                            <Image 
                                                src={image.src}
                                                alt={`HackHorizon Memory ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto ${index + 1}%3C/text%3E%3C/svg%3E`;
                                                }}
                                            />
                                        </div>
                                        <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                            {image.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-16 md:mb-20">
                    {/* Left Photo Frame */}
                    <div className="lg:col-span-3 flex justify-center lg:justify-end">
                        <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                            <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                clipPath: 'polygon(2% 0%, 98% 1%, 99% 97%, 1% 99%)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                            }}>
                                <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                    <Image 
                                        src="/hackathon-image-1.jpg" 
                                        alt="HackHorizon Memory 1" 
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto 1%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                    HackHorizon united 1,500+ participants
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Text Content */}
                    <div className="lg:col-span-6 text-center px-4 md:px-8">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium">
                            <span className="font-bold">HackHorizon</span> united <span className="font-bold text-[#7BCAF8]">1,500+ registrations</span>, <span className="font-bold text-[#7BCAF8]">100+ colleges</span>, and <span className="font-bold text-[#7BCAF8]">500+ innovators</span> under one banner of creativity and collaboration. Over action-packed days, participants built <span className="font-bold text-[#7BCAF8]">200+ groundbreaking projects</span>, forged lasting connections, and pushed the boundaries of what&apos;s possible. The journey is just beginning—are you ready to make history at HackHorizon?
                        </p>
                    </div>

                    {/* Right Photo Frame */}
                    <div className="lg:col-span-3 flex justify-center lg:justify-start">
                        <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                            <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                clipPath: 'polygon(1% 1%, 99% 0%, 98% 99%, 2% 98%)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                            }}>
                                <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                    <Image 
                                        src="/hackathon-image-2.jpg" 
                                        alt="HackHorizon Memory 2" 
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto 2%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                    Building the future together
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Photos Grid Below */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {/* Photo 3 */}
                    <div className="flex justify-center">
                        <div className="relative transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                            <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                clipPath: 'polygon(1% 0%, 99% 2%, 98% 98%, 2% 99%)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                            }}>
                                <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                    <Image 
                                        src="/hackathon-image-3.jpg" 
                                        alt="HackHorizon Memory 3" 
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto 3%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                    Innovation in Action
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo 4 */}
                    <div className="flex justify-center">
                        <div className="relative transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                            <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                clipPath: 'polygon(2% 1%, 98% 0%, 99% 98%, 1% 97%)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                            }}>
                                <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                    <Image 
                                        src="/hackathon-image-4.jpg" 
                                        alt="HackHorizon Memory 4" 
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto 4%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                    Team Collaboration
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo 5 */}
                    <div className="flex justify-center">
                        <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                            <div className="bg-white p-4 pb-16 shadow-2xl" style={{ 
                                clipPath: 'polygon(1% 2%, 98% 0%, 97% 99%, 2% 98%)',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)'
                            }}>
                                <div className="relative w-[280px] h-[360px] bg-gray-300 overflow-hidden">
                                    <Image 
                                        src="/hackathon-image-5.jpg" 
                                        alt="HackHorizon Memory 5" 
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23333" width="400" height="600"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-size="20"%3EPhoto 5%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <p className="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-medium text-sm">
                                    Code & Create
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
