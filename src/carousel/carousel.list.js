import Image from '../models/feature/image';

export default function makeCarouselList() {
  async function insertImage(data) {
    return new Image(data).save();
  }

  async function findImages(limit = 5) {
    return Image.find({}, { _id: 0, __v: 0 }).limit(Number(limit));
  }

  return Object.freeze({
    insertImage,
    findImages,
  });
}
