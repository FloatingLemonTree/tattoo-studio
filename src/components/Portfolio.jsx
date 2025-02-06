import { motion } from 'framer-motion';

const Portfolio = () => {
  const containerStyle = {
    position: 'fixed',
    top: -15,
    left: 0,
    width: '100%',
    overflow: 'hidden',
  };

  const marqueeStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    minWidth: '100%',
  };

  const wordStyle = {
    paddingRight: '0.5rem',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#F6F3EC',
    opacity: 0.5,
  };

  const words = new Array(100).fill('Portfolio');

  const containerBottomStyle = {
    ...containerStyle,
    bottom: -15, 
    top: 'auto', 
  };

  return (
    <>
      {/* upAnuimation */}
      <div style={containerStyle}>
        <motion.div
          style={marqueeStyle}
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {words.map((word, index) => (
            <span key={index} style={wordStyle}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      {/* downAnimation */}
      <div style={containerBottomStyle}>
        <motion.div
          style={marqueeStyle}
          animate={{ x: ['-100%', '0%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {words.map((word, index) => (
            <span key={index} style={wordStyle}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
