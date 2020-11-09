import React from 'react';
import { red, blue, green } from '@material-ui/core/colors';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

/* https://github.com/TeamWertarbyte/material-auto-rotating-carousel */

const Carousel = () => {
    return (
        <div>
            <AutoRotatingCarousel
                label="Get started"
                open={true}
                hideArrows={() => false}
                autoplay={true}
                mobile={true}
                interval={5000}
                style={{ position: 'absolute' }}
            >
                <Slide
                    media={
                        <img
                            src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"
                            alt="Img1"
                        />
                    }
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title="This is a very cool feature"
                    subtitle="Just using this will blow your mind."
                />
                <Slide
                    media={
                        <img
                            src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png"
                            alt="Img2"
                        />
                    }
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title="Ever wanted to be popular?"
                    subtitle="Well just mix two colors and your are good to go!"
                />
                <Slide
                    media={
                        <img
                            src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png"
                            alt="Img3"
                        />
                    }
                    mediaBackgroundStyle={{ backgroundColor: green[400] }}
                    style={{ backgroundColor: green[600] }}
                    title="May the force be with you"
                    subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
                />
            </AutoRotatingCarousel>
        </div>
    );
};

export default Carousel;
