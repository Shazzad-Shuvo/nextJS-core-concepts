import React from 'react';

const CategoriesDetailsPage = async ({params}) => {
    const routeParams = await params;
    // console.log(routeParams);
    if(routeParams.features.length === 3){
        return <div>{routeParams.features[2]}</div>
    }
    if(routeParams.features.length === 2){
        return <div>{routeParams.features[1]}</div>
    }
    return (
        <div className='h-screen'>
            Categories Details: {routeParams.features[0]}
        </div>
    );
};

export default CategoriesDetailsPage;