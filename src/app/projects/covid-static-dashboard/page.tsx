import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CovidStaticDashboard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Image src="/ohio_dashboard.png" alt="Official Ohio COVID-19 Dashboard" width="300" height="400" style={{ marginRight: '20px' }} />
                <Image src="/my_static_dashboard.jpg" alt="My Rendition of this Dashboard" width="300" height="370" />
            </div>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                This static dashboard was created using R. The images depict the visualizations of COVID-19 data. On the left is the official Ohio COVID-19 Dashboard, which can be found at <Link legacyBehavior href="https://data.ohio.gov/wps/portal/gov/data/view/covid-19-reporting">found here.</Link> 
		The image on the right is my recreation of this dashboard. The code for this can be found at <Link legacyBehavior href="https://github.com/bdmaldonado/ohio-covid19-static-dashboard" target="_blank" rel="noopener noreferrer">this Github repository.</Link>
	    </p>        
	</div>
    );
};

export default CovidStaticDashboard;
