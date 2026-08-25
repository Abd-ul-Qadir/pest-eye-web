import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import About2 from '../components/about/About2';
import Team from '../components/team/Team';
import Footer from '../components/footer';
import dataAbout from '../assets/fake-data/data-about';
import dataTeam from '../assets/fake-data/data-team';

function About02(props) {
    return (
        <div className="page-about home-1">
            {/* Page Title */}
            <PageTitle title="About PestEYE" />

            {/* About Section */}
            <About2 data={dataAbout} />

            {/* Team Section */}
            <Team data={dataTeam} />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About02;
