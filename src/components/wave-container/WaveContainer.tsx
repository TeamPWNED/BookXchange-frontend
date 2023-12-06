'use client';
import { Button } from '../ui/button';

export default function WaveContainer() {
    return (
        <div className='flex-col gap-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" preserveAspectRatio="none">
                <path
                    fill="#000"
                    fillOpacity="1"
                    d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <div className='bg-black flex flex-col items-center justify-center font pb-10 gap-10'>
                <h1 className='text-white font-bold mt-20 text-center text-3xl md:text-5xl'>
                    Are you Invited to join our platform?
                </h1>
                <div className='flex gap-5'>
                    <Button variant='red'>
                        Yes I am Invited
                    </Button>

                    <Button variant='red'>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
}
