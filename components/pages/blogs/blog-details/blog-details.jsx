import Link from 'next/link';
import Social from '@/components/data/social';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import avatar1 from '../../../../public/assets/img/team/member-5.jpg';
import avatar2 from '../../../../public/assets/img/team/member-3.jpg';
import avatar3 from '../../../../public/assets/img/team/member-1.jpg';
import image1 from '../../../../public/assets/img/about/about-1.jpg';
import image2 from '../../../../public/assets/img/page/choose-us.jpg';
import FormArea from '../../contacts/form';
import blogData from '@/components/data/blog-data';

const BlogSingleMain = ({singleData}) => {
    const blogPost = blogData.slice(0, 3);

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 lg-mb-25">
                        <div className="blog__details-area">
                            <img src={singleData.image.src} alt="image" />
                            <h3 className="mt-25 mb-20">{singleData.title}</h3>
                            <p>{singleData.description}</p>
                            <p>Urban development presents unique challenges, including space constraints, zoning regulations, and community impact. As cities continue to grow, finding innovative solutions to these challenges is crucial. Strategies such as mixed-use developments, green spaces and sustainable transportation can transform urban areas into vibrant communities. Engaging with local stakeholder.</p>
                            <div className="blog__details-area-box">
                                <i className="fas fa-quote-right"></i>
                                <div>
                                    <h6>This article sheds light on important industry trends, offering valuable strategies for navigating property service challenges effectively</h6>                                
                                    <span>Sarah L - Project Coordinator</span>
                                </div>
                            </div>
                            <h4 className="mb-20">Weather Considerations for Property Services</h4>
                            <p>Weather conditions can significantly impact property service projects. Heavy rainfall can cause delays in demolition, waste management, and outdoor cleaning activities. Wet surfaces can lead to safety hazards, and proper planning ensures we adapt our services to weather conditions while maintaining safety and quality standards.</p>
                            <div className="row mt-40 mb-40 blog__details-area-image">
                                <div className="col-sm-6 sm-mb-25">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="col-sm-6">
                                    <img src={image2.src} alt="image" />
                                </div>
                            </div>
                            <p>Delivering superior property services through expert techniques, innovative solutions, and a commitment to quality. We balance efficiency with thoroughness, ensuring that each service not only meets but exceeds expectations. Our approach focuses on meticulous planning, sustainable practices, and advanced equipment to deliver services that are both effective and environmentally responsible. By prioritizing attention to detail and client satisfaction.</p>
                            <div className="blog__details-area-tag">
                                <h5>Related Tags :</h5>
                                <div className="all__sidebar-item-tag">
                                    <ul>
                                        {blogPost.map((data, id) => (
                                            <li key={id}><Link href={`/blog/${data.id}`}>{data.title.split(' ').slice(0, 2).join(' ')}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__details-area-author">
                                <div className="blog__details-area-author-image">
                                    <img src={avatar1.src} alt="avatar-image" />
                                </div>
                                <div className="blog__details-area-author-content">
                                    <h5>Joshua Harvey</h5>
                                    <p>Starting a product design from scratch is an iterative process that may involve multiple cycles of design, testing, and refinement to achieve the best possible user experience and product</p>
                                    <div className="social__icon">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-area-comment mt-40">
                                <h3 className="mb-30">Comments (2)</h3>
                                <div className="blog__details-area-comment-item">
                                    <div className="blog__details-area-comment-item-comment">
                                        <div className="blog__details-area-comment-item-comment-image">
                                            <img src={avatar2.src} alt="avatar-image" />	
                                        </div>									
                                        <div className="blog__details-area-comment-item-comment-content">
                                            <h5>Guy Hawkins<Link href="#"><i className="far fa-reply-all"></i>Reply</Link></h5>
                                            <span>20 Dec, 2025  At 9:PM</span>
                                            <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details-area-comment-item ml-65 sm-ml-0">
                                    <div className="blog__details-area-comment-item-comment">
                                        <div className="blog__details-area-comment-item-comment-image">
                                            <img src={avatar3.src} alt="avatar-image" />
                                        </div>									
                                        <div className="blog__details-area-comment-item-comment-content">
                                            <h5>Kristin Watson<Link href="#"><i className="far fa-reply-all"></i>Reply</Link></h5>
                                            <span>22 Dec, 2025  At 7:PM</span>
                                            <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-area-contact mt-60">
                                <h3>Post Comment</h3>
                                <p>Your email address will not be published. Required fields are marked</p>
                                <div className="blog__details-area-contact-form">
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 columns_sticky">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>    
        </>
    );
};

export default BlogSingleMain;