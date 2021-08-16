import makeCarouselEndPointHandler from './carousel-endpoint';
import makeCarouselList from './carousel.list';

const carouselList = makeCarouselList();
const carouselEndpointHandler = makeCarouselEndPointHandler({ carouselList });

export default carouselEndpointHandler;
