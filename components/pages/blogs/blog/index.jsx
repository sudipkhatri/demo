"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header-two";
import SwitchTab from "../../common/dark-light";
import CustomCursor from "../../common/cursor";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='News & Insights' />
            <SwitchTab />
            <CustomCursor />
            <HeaderTwo />
            <BreadCrumb title="News & Insights" innerTitle="News & Insights" />
            <BlogGridMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;