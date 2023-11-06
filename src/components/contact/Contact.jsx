import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { Blob, Container, ImageContainer, TextContainer } from './style';

import { contact } from '../../assets/images';

export function Contact() {
  return (
    <Container>
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img src={contact} alt="photo of a woman with a laptop on her lap" />
      </ImageContainer>
      <TextContainer>
        <a
          href="https://github.com/youngking-joshua"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FaGithub />
            <h4>GitHub</h4>
          </div>
        </a>
        <a
          href="https://linkedin.com/in/joshua-dei-alorse-ba9157236"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FaLinkedin />
            <h4>LinkedIn</h4>
          </div>
        </a>
        <a href="mail:joshuadeialorse@gmail.com">
          <div>
            <MdEmail />
            <h4>Email</h4>
          </div>
        </a>
      </TextContainer>
      <Blob />
    </Container >
  )
}
