import { AvatarStyle } from "./styled";

interface AvatarProps {
  src: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <>
      <AvatarStyle src={src} />
    </>
  );
}
