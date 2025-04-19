import { TwitterShareButton, XIcon } from "react-share";

interface BlogShareProps {
  title: string;
}

const BlogShare = ({ title }: BlogShareProps) => {
  const shareUrl = window.location.href;

  return (
    <div className="flex gap-4 items-center justify-end mt-16">
      <TwitterShareButton url={shareUrl} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default BlogShare;
