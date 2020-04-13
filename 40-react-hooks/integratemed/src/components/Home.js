import React from 'react';

const Home = props => {
    return (
        <div>
            <div> 
                <img src="https://www.mailman.columbia.edu/sites/default/files/styles/hero_1500x632/public/jpg/alternative_medicine_1500x632.jpg?itok=NLREPpoM" alt="something health inspiring?"/>
                <h1>WELCOME TO ALL THE COOL MEDICINE HACKS</h1>
                <p>The corner of health ave and happiness St</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                    <h3>ARTICLE TITLE! </h3>
                    <p>here's a description!!!</p>
                </div>
                <div>
                    <h3>ARTICLE TITLE! </h3>
                    <p>here's a description!!!</p>
                </div>
                <div>
                    <h3>ARTICLE TITLE! </h3>
                    <p>here's a description!!!</p>
                </div>
            </div>
        </div>
    )
}

export default Home;