import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="not-prose mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative aspect-video overflow-hidden rounded-lg border border-primary-500/10 shadow-soft"
        >
          <Image
            src={src}
            alt={`Imagem da galeria ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
