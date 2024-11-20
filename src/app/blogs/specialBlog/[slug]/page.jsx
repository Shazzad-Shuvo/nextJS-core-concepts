import React from 'react';

const SpecialBlogDetails = async ({params}) => {
    const slug = (await params).slug;
    console.log(slug);
    return (
        <div>
            Special Blog Details page
        </div>
    );
};

export default SpecialBlogDetails;