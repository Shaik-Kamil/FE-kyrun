import React from 'react';

function MoreInfo(props) {
    return (
        <div className='info'>
            <section className='fade-in'>
                <h1>Kyrun</h1>
                <p>Connect with local joggers in your area.</p>
                {/* add image */}
            </section>
            <section className='fade-in'>
                <h2>Find your match made in running heaven with our custom filters</h2>
                <p>With Kyrun, you can filter runners based on gender, age, location, and even running pace. Once you've selected your preferences, you can browse through the results and click on the profiles that share your common interests and start building your netwrok.</p>
                {/* add image that demonstrates a filter */}
            </section>
            <section className='fade-in'>
                <h2>Tie up your laces and start chatting with your running buddy</h2>
                <p>Easily plan jogging sessions, ask questions, and get to know your jogging partners better with our in App chat feature.</p>
                {/* add image */}
            </section>
            <section className='fade-in'>
                <h2>On Extra Step of Security</h2>
                <p>One key feature of Kyrun is the SOS button, which you can use in case of an imminent threat during a jog with the person you matched with.</p>
                {/* add image */}
            </section>
            
            <p className='fade-in'>Build your network today!</p>

      </div>
    );
}

export default MoreInfo;