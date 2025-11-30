import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-1.jpg";
import banner2 from "../../../../public/assets/img/banner/banner-2.jpg";
import banner3 from "../../../../public/assets/img/banner/banner-3.jpg";
import Link from "next/link";
import OptimizedImage from '@/components/common/OptimizedImage';

const BannerTwo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  	return (
		<>
			<div className="banner__two">
				<Swiper
					thumbs={{ swiper: thumbsSwiper }}
					effect= 'fade'
					loop={true}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false,
						reverseDirection: false,
					}}
					navigation={{
						nextEl: '.banner_next',
						prevEl: '.banner_prev',
					}}
					modules={[Autoplay, Thumbs, EffectFade, Navigation]}
				>
				<SwiperSlide>
					<div className="banner__two-area">	
						<div className="banner__two-area-image" style={{backgroundImage: `url(${banner1.src})`}}></div>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-12">
									<div className="banner__two-content">
										<span className="subtitle">Professional Property Services</span>
										<h2>Expert Solutions</h2>
										<h1>Across Sydney</h1>
										<Link className="build_button" href="/about-us">Discover More<i className="flaticon-right-up"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="banner__two-area">	
						<div className="banner__two-area-image" style={{backgroundImage: `url(${banner2.src})`}}></div>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-12">
									<div className="banner__two-content">
										<span className="subtitle">Comprehensive Services</span>
										<h2>Serving Central Coast</h2>
										<h1>& Wollongong</h1>
										<Link className="build_button" href="/about-us">Discover More<i className="flaticon-right-up"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide>
					<div className="banner__two-area">	
						<div className="banner__two-area-image" style={{backgroundImage: `url(${banner3.src})`}}></div>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-12">
									<div className="banner__two-content">
										<span className="subtitle">Trusted Partner</span>
										<h2>Property Services</h2>
										<h1>Excellence</h1>
										<Link className="build_button" href="/about-us">Discover More<i className="flaticon-right-up"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide> */}
				</Swiper>
			</div>
			<div className="banner__two-slide">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="banner__two-slide-area">
								<div className="banner__two-slide-area-thumb dark_image">
									<Swiper
										onSwiper={setThumbsSwiper}
										slidesPerView={3}
										freeMode={true}
										watchSlidesProgress={true}
										autoplay={{
											delay: 4500,
											disableOnInteraction: false,
											reverseDirection: false,
										}}
										modules={[FreeMode, Thumbs, Autoplay]}
									>
										<SwiperSlide className='banner__two-slide-area-thumb-item'>
											<OptimizedImage
                                        src={banner1.src}
                                        alt="banner"
                                        width={1920}
                                        height={980}
                                      />
											<h6>Expert Solutions Across Sydney</h6>
										</SwiperSlide>
										<SwiperSlide className='banner__two-slide-area-thumb-item'>
											<OptimizedImage
                                        src={banner2.src}
                                        alt="banner"
                                        width={1920}
                                        height={980}
                                      />
											<h6>Services At Your Place</h6>
										</SwiperSlide>
										<SwiperSlide className='banner__two-slide-area-thumb-item'>
											<OptimizedImage
                                        src={banner3.src}
                                        alt="banner"
                                        width={1920}
                                        height={980}
                                      />
											<h6>Property Services Excellence</h6>
										</SwiperSlide>
									</Swiper>
								</div>
								<div className="banner__two-slide-area-arrow">
									<div className="banner__two-slide-area-arrow-prev banner_prev"><i className="fal fa-long-arrow-left"></i></div>
									<div className="banner__two-slide-area-arrow-next banner_next"><i className="fal fa-long-arrow-right"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerTwo;
