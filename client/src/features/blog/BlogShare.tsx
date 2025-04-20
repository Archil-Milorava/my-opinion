import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

interface BlogShareProps {
  title: string;
}

const BlogShare = ({ title }: BlogShareProps) => {
  const shareUrl = window.location.href;

  // console.log(shareUrl);
  

  return (
    <div className="flex gap-4 items-center justify-end mt-16">
      <TwitterShareButton url={shareUrl} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default BlogShare;
