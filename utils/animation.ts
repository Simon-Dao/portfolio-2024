import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");

  if (!bannerOne) return;

  const tl = gsap.timeline();

  tl.set([bannerOne], {
    yPercent: 0,
  }).to([[bannerOne]], {
    yPercent: 100,
    stagger: 0.2,
    ease: "expo.inOut",
  });
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  // const bannerTwo = document.getElementById("banner-2");
  // const bannerThree = document.getElementById("banner-3");
  // const bannerFour = document.getElementById("banner-4");

  const tl = gsap.timeline();
  // if (!bannerOne || !bannerTwo || !bannerThree || !bannerFour) return;
  if (!bannerOne) return;

  tl.set([bannerOne], {
    yPercent: -100,
  }).to([[bannerOne]], {
    yPercent: 0,
    stagger: 0.2,
    ease: "expo.inOut",
    onComplete: () => {
      router.push(href);
    },
  });
};

export const copiedAnimation = (ref: any) => {
  if (!ref?.current) return;

  const h = 40;

  const tl = gsap.timeline();
  tl.to([ref.current], {
    y: `-=${h}px`,
    duration: 0.2,
  })
    .to([ref.current], {
      duration: 0.3,
    })
    .to([ref.current], {
      y: `+=${h}px`,
      duration: 0.2,
    });
};

export const animateHelloText = (ref: any) => {
  if (!ref?.current) return;

  const [topLine, bottomLine] = ref.current.querySelectorAll("h1");

  const words = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Olá",
    "Hallo",
    "Привет",
    "你好",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "שלום",
    "नमस्ते",
    "হ্যালো",
    "Merhaba",
    "Γειά σου",
    "Hej",
    "Hei",
    "Cześć",
    "Ahoj",
    "Salut",
    "Xin chào",
    "สวัสดี",
    "Halo",
    "Hai",
    "Kamusta",
    "Habari",
    "Sawubona",
    "హలో",
  ];

  const nextWord = () => words[Math.floor(Math.random() * words.length)];

  // All heights match → safe
  const h = 60;

  bottomLine.textContent = nextWord();

  const tl = gsap.timeline({ delay: 2, repeat: -1 });

  tl.to([topLine, bottomLine], {
    delay: 0.7,
    y: `-=${h}px`,
    duration: 0.6,
  })
    .set(topLine, {
      y: `${60}px`,
      onComplete: () => {
        topLine.textContent = nextWord();
      },
    })
    .to([topLine, bottomLine], {
      delay: 0.7,
      y: `-=${h}px`,
      duration: 0.6,
    })
    .set(bottomLine, {
      y: `0px`,
      onComplete: () => {
        bottomLine.textContent = nextWord();
      },
    });
};
