import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Question from './Question';
import Answer from './Answer';
import SessionStats from './SessionStats';
import Info from './Info';
import AllTimeStats from './AllTimeStats';

export function Dashboard(props) {
    
    let allTimeStats;
    let info;
    if (props.wantsAllTimeStats) {
        allTimeStats = <AllTimeStats />;
    };

    if (props.wantsInfo) {
        info = <Info />;
    }
            
    return (
        <main role="main" className="dashboard">
            {info}
            <Question />
            <Answer />
            <SessionStats />
            {allTimeStats}
        </main>
    );    
}

const mapStateToProps = state => {
    return {        
        wantsAllTimeStats: state.allTimeStats.wantsAllTimeStats,
        wantsInfo: state.questions.wantsInfo
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
