'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Orc Nation" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Orc Nation</span> is an extraordinary NFT project presenting a collection of 10,000 uniquely minted Orcs, each with varying degrees of rarity. Beyond mere digital assets, these NFTs form the backbone of an epic narrative where every Orc character has its role in the{' '}
        <span className="font-extrabold text-white">
          overarching saga
        </span>{' '}
        The beauty of Orc Nation lies in the{' '}
        <span className="font-extrabold text-white">fusion</span> of art, technology, and storytelling{' '}
        <span className="font-extrabold text-white">creating a vibrant</span> decentralized community of digital collectors and fantasy enthusiasts.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
