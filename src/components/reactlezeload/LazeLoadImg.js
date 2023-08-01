import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function LazeLoadImg() {


    console.log();

    return (
        <div>
            <LazyLoadImage
                alt='img'
                effect='opacity'
                delayTime='1000'
                src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80'
            />
        </div>
    );
}

export default LazeLoadImg;