import { model, Schema } from 'mongoose';

const ImageSchema = Schema;

const imageSchema = new ImageSchema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});

const Image = model('Image', imageSchema, 'images-data');

export default Image;
