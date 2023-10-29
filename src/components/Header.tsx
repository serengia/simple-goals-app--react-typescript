import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image: { src, alt }, children }: Props) {
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
}
