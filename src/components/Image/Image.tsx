interface ImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  loading?: 'lazy' | 'eager'
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void
  onClick?: () => void
}

export default function Image({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  onError,
  onClick,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      onError={onError}
      onClick={onClick}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
      }}
    />
  )
}
