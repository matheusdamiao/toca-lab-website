import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { getFileAsset } from "@sanity/asset-utils";
import HeroSectionsProjetos from "@/components/projetos/heroSectionProjetos";
import HeroTextSlider from "@/components/home/heroTextSlider";
import AllProjetos from "@/components/projetos/allProjetos";
import ContactSection from "@/components/home/contactSection";
import FooterSection from "@/components/home/footerSection";

const POSTS_QUERY = `*[_type == "post"]{_id, nome, slug, date, description, image1, video1, tags}|order(date desc)`;


interface Project extends SanityDocument {
    _id: string;
    nome: string;
    slug: string;
    date: string;
    description: string;
    image1: any;
    video1: { asset: { _ref: string } };
    tags: string[];
  }

export default async function IndexPage() {
    const posts = await sanityFetch<Project[]>({query: POSTS_QUERY});
    // console.log(posts);

    const video = getFileAsset(posts[0].video1.asset._ref, {projectId: 'n1j6o79d', dataset: 'production'});

    // console.log(video.url);

    return(
        <div className="flex flex-col">
            <HeroSectionsProjetos/>
            {/* <HeroTextSlider/> */}
            <AllProjetos posts={posts}/>
            <ContactSection/>
            <FooterSection/>
        </div>
    )
}