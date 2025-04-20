import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const MetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  return (
   
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* twittr */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:site" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Open Graph (Facebook + Twitter fallback) */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
    
  );
};

export default MetaTags;
