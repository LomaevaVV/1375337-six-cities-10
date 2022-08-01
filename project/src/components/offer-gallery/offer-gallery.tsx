import {MAX_IMAGES_ON_PAGE} from '../../const';

type OfferGalleryProps = {
  images: string[];
  type: string;
}

export default function OfferGallery({images, type}: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {
        images.slice(0, MAX_IMAGES_ON_PAGE)
          .map((img) => (
            <div key={img} className="property__image-wrapper">
              <img className="property__image" src={img} alt={type} />
            </div>
          ))
      }
    </div>
  );
}
