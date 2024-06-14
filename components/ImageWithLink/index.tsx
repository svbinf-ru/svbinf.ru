import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

export const ImageWithLink: FC<ImageProps & LinkProps> = ({
    href,
    src,
    width,
    height,
    alt,
}) => {
    return (
        <Link href={href} target="_blank">
            <Image src={src} alt={alt} width={width} height={height} />
        </Link>
    )
}
