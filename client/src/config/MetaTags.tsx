import { Helmet } from "react-helmet";

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

      {/* twitter/x */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default MetaTags;
