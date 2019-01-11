import React from 'react';

export function Info(props) {
    
    return (
        <section className="info">
            <h2>What to expect</h2>
            <p>You'll be presented with a question, and once you submit your answer, you will immediately receive feedback to let you know if you are indeed correct!  If not, we'll give you the correct answer so you can learn it for next time.</p> 
            <p>The more trouble you have with a question, the more you will see it, and the less trouble you have with a question, the less you will see it.  This spaced repetition system will have you speaking the lingo faster, upping your status and your stats!</p>
            <p>Speaking of stats, you will see your stats for the current session as you answer questions--keep looking for that 100%! You can reset the current session stats, see your All Time Stats, or come back to this info at any time you want...we have buttons for that.  Let's go!</p>
        </section>
    );
}

export default Info;