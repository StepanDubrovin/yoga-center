import React from 'react';
/* import CardClasses from '../components/Card/CardClasses'; */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ClassPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70vh',
                textAlign: 'center',
                fontSize: '24px', 
                color: '#555' 
            }}>
                <p>Эта страница находится в разработке.</p>
                <p>Пожалуйста, зайдите позже.</p>
            </div>
            
            <Footer/>
        </div>
    );
};

export default ClassPage;
