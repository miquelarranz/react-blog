import * as React from 'react';
import { useImagesCarouselStyles } from './ImagesCarousel.styles';
import { Carousel } from 'carousel-component-lib';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '../../../store/Images/reducer';
import { Image } from '../../../models/Image';
import { getImage } from '../../../store/Images/actions/getImage';

export const ImagesCarousel = () => {
    const classes = useImagesCarouselStyles();
    const carouselName = 'images-carousel';

    const generateImage = (source: string) => {
        return <img className={classes.image} src={source} />;
    };
    const images = useSelector(selectImages);
    const dispatch = useDispatch();
    const [generatedImages, setGeneratedImages] = React.useState<React.ReactNode[]>([]);
    const INITIAL_SLIDE_POSITION = 0;
    const SLIDE_OFFSET = 1;
    const LAST_SLIDE_POSITION = generatedImages.length - 1;
    const [currentSlide, setCurrentSlide] = React.useState<number>(INITIAL_SLIDE_POSITION);

    const carouselInitialSlides = [
        generateImage('https://i.picsum.photos/id/485/700/100.jpg?hmac=cMHzEpRz8qODO22bG8lpcJqAdBs9mssD2p5pVizqKW8'),
        generateImage('https://i.picsum.photos/id/611/700/100.jpg?hmac=laAPLgGaVKfVFl_99S7t7waanJn4TF3_N3PaaIaMbyo'),
        generateImage('https://i.picsum.photos/id/985/700/100.jpg?hmac=sX2MnGOfDI-UGaXgxqIwHTRipwOBvkzv6EiKhVnwTPk'),
    ];

    React.useEffect(() => {
        if (images) {
            setGeneratedImages(carouselInitialSlides.concat(generateStoredImages()));
        }
    }, [images]);

    const generateStoredImages = (): JSX.Element[] => {
        return images.map((image: Image) => {
            return generateImage(image.source);
        });
    };

    const onPreviousClickHandler = (position: number) => {
        const isFirstSlide = currentSlide === INITIAL_SLIDE_POSITION;

        if (isFirstSlide) {
            dispatch(getImage());
            setCurrentSlide(LAST_SLIDE_POSITION + SLIDE_OFFSET);
        } else {
            setCurrentSlide(position);
        }
    };

    const onNextClickHandler = (position: number) => {
        const isLastSlide = position === LAST_SLIDE_POSITION;

        if (isLastSlide) {
            dispatch(getImage());
        }

        setCurrentSlide(position);
    };

    return (
        <section className={classes.images}>
            <Carousel
                name={carouselName}
                slides={generatedImages}
                currentPosition={currentSlide}
                onNextClick={onNextClickHandler}
                onPreviousClick={onPreviousClickHandler}
            />
        </section>
    );
};
