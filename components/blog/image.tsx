import NextImage from "next/image";
const Image = ({ src, alt, height, width }: any) => {
  const imageProps = {
    src,
    alt,
    height,
    width,
  };
  return <NextImage {...imageProps} />;
};
export default Image;
