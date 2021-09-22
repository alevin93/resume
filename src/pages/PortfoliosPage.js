import React, { useState } from 'react'
import Menu from '../components/Menu';
import Title from '../components/Title'
import portfolios from '../data/portfolios';
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Button from '../components/Button'

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [ menuItem, setMenuItems] = useState(portfolios);
    const [ button ] = useState(allButtons);


    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
