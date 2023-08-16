import React from 'react';
import Countdown from 'react-countdown';

function MainSection() {
  // Date for the countdown (replace with your launch date)
  const launchDate = new Date('2023-08-31T00:00:00');

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="countdown">
      <div>{days} Days</div>
      <div>{hours} Hours</div>
      <div>{minutes} Minutes</div>
      <div>{seconds} Seconds</div>
    </div>
  );

  return (
    <main  >
      <h1 className='maintitle'>We Will Be Launching Soon...</h1>
      <h1 className='comingh'>Coming soon...</h1>
      <p className='mainpa'>Empowering Your Journey to Bac Exam Excellence: Unlocking Success with Premium Features and Comprehensive Support</p>
      
      <img className='mainlogo' src="/logo.png" alt="Logo" />
      <svg  className='mainsvg' xmlns="http://www.w3.org/2000/svg" width="148" height="168" viewBox="0 0 148 168" fill="none">
        <path d="M63.3862 131.771C64.423 131.994 65.1843 132.552 65.8979 133.285C71.8499 139.406 78.6932 144.243 86.4658 147.805C95.6719 152.023 105.078 155.452 115.246 156.538C120.581 157.11 125.91 157.494 131.273 157.323C131.883 157.304 132.668 157.01 133.029 157.67C133.492 158.512 132.598 158.94 132.176 159.466C131.098 160.811 129.887 162.054 128.891 163.457C128.141 164.514 128.318 166.13 129.052 166.735C130.054 167.564 130.92 166.898 131.777 166.395C132.168 166.168 132.559 165.93 132.927 165.668C137.068 162.724 141.194 159.759 145.352 156.834C146.906 155.738 147.737 154.334 147.407 152.426C147.085 150.557 145.695 149.778 144.011 149.325C138.141 147.735 132.278 146.116 126.406 144.522C125.62 144.309 124.811 144.14 124.003 144.073C123.16 144.003 122.321 144.185 121.958 145.083C121.585 146.003 122.115 146.668 122.813 147.165C123.474 147.638 124.222 147.989 124.894 148.451C125.613 148.939 126.572 149.101 127.082 149.982C126.329 150.636 125.51 150.36 124.733 150.337C114.176 150.03 104.048 147.716 94.317 143.67C88.27 141.156 82.3714 138.35 77.2603 134.149C76.8166 133.782 76.0551 133.572 76.3629 132.598C79.5587 132.125 82.7482 131.462 85.8923 130.566C103.922 125.423 111.309 106.038 104.773 91.3094C103.405 88.2254 101.973 85.1604 99.9292 82.4944C94.5942 75.5418 87.545 71.2097 78.7945 70.4106C62.1932 68.9008 51.3046 84.203 50.289 95.2995C49.5195 103.674 51.6837 111.501 55.4788 118.923C56.0842 120.109 56.985 121.153 57.3697 122.605C56.5294 122.819 56.1141 122.601 55.7046 122.429C49.5518 119.825 43.8847 116.418 38.9391 111.914C27.8264 101.789 19.5033 89.6328 13.5202 75.9129C9.57923 66.8794 7.369 57.287 5.96114 47.5538C4.13721 34.8828 4.69204 22.3612 8.98207 10.1686C10.016 7.22583 11.2484 4.40578 14.0659 2.67137C14.605 2.3396 15.3309 2.0404 14.9675 1.25731C14.5765 0.416001 13.7714 0.606785 13.0575 0.822289C12.2573 1.0615 11.6056 1.55466 10.9686 2.07356C9.46623 3.29924 8.31673 4.81264 7.43635 6.5222C3.37841 14.4028 1.27976 22.844 0.959602 31.6447C0.253153 51.2382 3.92663 69.9994 12.8164 87.5286C19.1545 100.034 27.337 111.214 38.5698 119.869C45.9856 125.586 54.1616 129.796 63.3862 131.771ZM67.177 124.021C61.8903 117.157 58.0047 109.721 56.8051 100.983C55.5113 91.5629 61.1656 81.363 69.9136 77.8335C74.8141 75.8567 79.7276 76.1144 84.4696 78.2052C89.6512 80.4913 93.8833 83.954 96.5701 89.0943C98.6868 93.1455 100.476 97.2817 100.576 101.959C100.619 103.977 100.302 105.934 99.7852 107.543C97.6631 115.63 92.9158 120.926 85.2924 123.594C80.7105 125.198 76.018 126.061 71.1515 125.95C69.5099 125.914 68.225 125.377 67.177 124.021Z" fill="#FF6B00"/>
      </svg>

      <div className="countdown-container">
        <Countdown date={launchDate} renderer={renderer} />
        <p className='psub'>Get notified when we launch</p>

       <div className='btnform'>
        
       <form
          action="https://formcarry.com/s/cXekuq2Ud"
          method="POST"
          accept-charset="UTF-8"
          className='subscription-form'
        >
          {/* Email input field */}
          <input type='email' placeholder='Enter your email' name="email" className='email-input' />

          {/* Subscribe button */}
          <button type='submit' className='subscribe-button'>Subscribe</button>
        </form>
        </div>  {/* Formcarry form */}
        
      </div>
  <div className='container' >
  {/* Social Icons */}
  <img   src="/Social-Icons.png" alt="Social Icons" className="social-icons" />

{/* Copyright notice */}
<p className="copyright">© Copyrights Afidni-Edu | All Rights Reserved</p>
  </div>
  
     
    </main>
  );
}

export default MainSection;
