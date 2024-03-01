import { AvatarStyle } from "./styled";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <>
      <AvatarStyle src={src} hasBorder={hasBorder} />
    </>
  );
}
