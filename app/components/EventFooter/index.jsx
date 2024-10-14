// components/EventFooter.js
import React, {useEffect} from 'react';


function EventFooter({page, setPage}) {

    const onClickPage = (pageInfo) => {
        setPage(pageInfo)
    };

    useEffect(() => {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach((clickedTab) => {
            clickedTab.addEventListener('click', () => {
                tabs.forEach((tab => {
                    tab.classList.remove("active");
                }))
                clickedTab.classList.add("active");
                const clickedTabBGColor = getComputedStyle
                (clickedTab).getPropertyValue(
                    "color"
                );
                document.body.style.background = clickedTabBGColor;
            });
        });
    }, []);


    return (<>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
            <div className='vitals-footer'>
                <div className="tab-nav-container">
                    <div className="tab active purple" onClick={()=>{onClickPage('HOME')}}>
                        <i className="fas fa-home"></i>
                        <p>HOME</p>
                    </div>
                    <div className="tab pink" onClick={()=>{onClickPage('INFO')}}>
                        <i className="fas fa-briefcase"></i>
                        <p>INFO</p>
                    </div>
                    <div className="tab yellow" onClick={()=>{onClickPage('PARTNER')}}>
                        <i className="far fa-handshake"></i>
                        <p>PARTNER</p>
                    </div>
                    <div className="tab teal" onClick={()=>{location.href='https://x.com/vitals_fbrc20';onClickPage('REQUEST')}}>
                        <i className="fas fa-phone-alt"></i>
                        <p>REQUEST</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventFooter;
