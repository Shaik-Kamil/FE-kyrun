import React from 'react';

function MoreInfo(props) {
    return (
        <div className='display-6'>
            <section className='masthead'>
                <h1>Kyrun</h1>
                <p>Safety In Numbers.</p>
                {/* add image */}
            </section>
            <section className='fade-in'>
                <h2>There's safety in numbers.</h2>
                <p>Many people do not feel safe jogging alone, even in broad daylight. That's where Kyrun comes in. Kyrun allows you to find likeminded people who want to feel safe while achieveing their fitness goals.</p>
                {/* add image */}
            </section>
            <section className='fade-in'>
                <h2>Find a group that suits your running lifestyle and start building a fitness network.</h2>
                <p>With Kyrun, you can search through countless groups to join or create your own group and safely begin your jouney!</p>
                {/* add image that demonstrates a filter */}
            </section>
            <section className='fade-in'>
                <h2>Not sure where to run?</h2>
                <p>Kyrun also offers suggestions for each borough for you and your new running buddies to explore! </p>
                {/* add image */}
            </section>
            
            <p className='fade-in'>Build your network today!</p>

      </div>
    );
}

export default MoreInfo;