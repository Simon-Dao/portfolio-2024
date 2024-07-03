import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { MutableRefObject } from 'react';

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  
  if(!bannerOne) return;

  const tl = gsap.timeline()

  tl.set([bannerOne], {
    yPercent: 0,
  }).to([[bannerOne]], {
    yPercent: 100,
    stagger: 0.2, ease: 'expo.inOut'
  })
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  // const bannerTwo = document.getElementById("banner-2");
  // const bannerThree = document.getElementById("banner-3");
  // const bannerFour = document.getElementById("banner-4");

  const tl = gsap.timeline()
  // if (!bannerOne || !bannerTwo || !bannerThree || !bannerFour) return;
  if(!bannerOne) return;

  tl.set([bannerOne], {
    yPercent: -100,
  }).to([[bannerOne]], {
    yPercent: 0,
    stagger: 0.2,
    ease: 'expo.inOut',
    onComplete: () => {
      router.push(href)
    }
  })
}

export const animateHelloText = (ref : any) => {
  if (!ref || !ref.current) return;

  const words = [
    'Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Olá', 'Hallo', 'Привет', 
    '你好', 'こんにちは', '안녕하세요', 'مرحبا', 'שלום', 'नमस्ते', 'হ্যালো', 
    'Merhaba', 'Γειά σου', 'Hej', 'Hej', 'Hei', 'Hei', 'Cześć', 'Ahoj', 'Helló', 
    'Salut', 'Xin chào', 'สวัสดี', 'Halo', 'Hai', 'Kamusta', 'Habari', 'Sawubona', 'Hallo', 'హలో'
  ];

  let currentIndex = 0;
  const updateText = () => {
    if (ref.current) {
      ref.current.textContent = words[currentIndex];
      // currentIndex = (currentIndex + 1) % words.length;
      currentIndex = Math.floor(Math.random() * words.length);
    }
  };

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // Adjust repeatDelay if needed
  tl.to(ref.current, { x: -100, opacity: 0, duration: 0.5, onComplete: updateText }) // Slide out faster
    .set(ref.current, { x: 100 })
    .to(ref.current, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.inOut' }); // Slide in faster
};

export const animateLinkHoverEnter = (ref : any) => {
  if (!ref || !ref.current) return;

  const tl = gsap.timeline();

  tl.set(ref.current, {width: 0})
  .to(ref.current, {width: '100px', duration: 0.5, ease: 'expo.inOut'})
}
export const animateLinkHoverExit = (ref : any) => {
  if (!ref || !ref.current) return;

  const tl = gsap.timeline();

  tl.set(ref.current, {width: '100px'})
  .to(ref.current, {width: '0px', duration: 0.5, ease: 'expo.inOut'})
}