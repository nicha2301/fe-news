import  { useEffect } from 'react'

export default function FallingStar() {
    useEffect(() => {
        const createStars = () => {
          const container = document.querySelector('.star-container') as HTMLElement;
          for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const delay = Math.random() * 5;
            const duration = Math.random() * 2 + 3;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${delay}s`;
            star.style.animationDuration = `${duration}s`;
            container.appendChild(star);
          }
        };
    
        createStars();
      }, []);
    
      return <div className="star-container"></div>;
}
