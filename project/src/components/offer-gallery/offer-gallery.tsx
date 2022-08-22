import {PageSettings} from '../../const';

type OfferGalleryProps = {
  images: string[];
  type: string;
}

export default function OfferGallery({images, type}: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {
        images.slice(0, PageSettings.MAX_IMAGES_AMOUNT)
          .map((img) => (
            <div key={img} className="property__image-wrapper">
              <img className="property__image" src={img} alt={type} />
            </div>
          ))
      }
    </div>
  );
}
