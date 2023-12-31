import blobLight from '../assets/images/blobLight.svg';
import blobDark from '../assets/images/blobDark.svg';

export const lightTheme = {
  accent: 'var(--dark-900)',
  background: 'var(--white)',
  blob: `url(${blobLight})`,
  border: 'var(--grey-200)',
  button: 'var(--blue-300)',
  contact: 'var(--blue-300)',
  gradient: 'linear-gradient(to right, var(--blue-400), var(--malva-300), var(--maize-300))',
  iconColor: 'var(--blue-400)',
  iconBg: 'var(--white)',
  navbar: 'rgba(255, 255, 255, 0.75)',
  position: 'start',
  text: 'var(--dark-800)',
  textButton: 'var(--white)',
  textDeveloper: 'var(--purple-900)'
}

export const darkTheme = {
  accent: 'var(--white)',
  background: 'var(--dark-900)',
  blob: `url(${blobDark})`,
  border: 'var(--purple-900)',
  button: 'var(--blue-400)',
  contact: 'var(--purple-700)',
  gradient: 'linear-gradient(to right, var(--blue-500), var(--malva-300), var(--blue-400))',
  iconColor: 'var(--purple-900)',
  iconBg: 'var(--white)',
  navbar: 'rgba(25, 22, 34, 0.75)',
  position: 'end',
  text: 'var(--white)',
  textButton: 'var(--white)',
  textDeveloper: 'var(--white)'
}