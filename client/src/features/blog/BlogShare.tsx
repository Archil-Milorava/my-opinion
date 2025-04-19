import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

interface BlogShareProps {
  title: string;
  blogId: number;
}

const BlogShare = ({ title, blogId }: BlogShareProps) => {
  const shareUrl = `${window.location.origin}/api/v1/blog/share/${blogId}`;

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
