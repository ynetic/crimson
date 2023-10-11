import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.container}>
      <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className={styles.handle} layout transition={spring} />
      </div>
    </div>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
