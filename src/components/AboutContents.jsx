import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div className='flex gap-5'>
            <Link href="/about/history">History</Link>
            <Link href="/about/vision">Vision</Link>
        </div>
    );
};

export default AboutContents;