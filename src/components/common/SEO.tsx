// src/components/common/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image }) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200";

  return (
    <Helmet>
      <title>{title} | Savoria Kitchen</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | Savoria Kitchen`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Savoria Kitchen`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
