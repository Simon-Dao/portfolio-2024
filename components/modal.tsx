import React, { useEffect, useRef } from 'react';
import { TimelineLite, CSSPlugin } from 'gsap/all';

function Modal({ modalOpen, setModalOpen }: any) {
  const modalWrap = useRef<HTMLDivElement>(null);
  const modalDialog = useRef<HTMLDivElement>(null);
  const modalTween = useRef(new TimelineLite({ paused: true }));

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
  };

  useEffect(() => {
    modalTween.current
      .to(modalWrap.current, 0.01, { autoAlpha: 1 })
      .to(modalDialog.current, 0.25, { y: 50, autoAlpha: 1 }, 0)
      .reversed(true)
      .paused(false);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener('keydown', keyDownHandler);
    } else {
      window.removeEventListener('keydown', keyDownHandler);
    }
    modalTween.current.reversed(!modalOpen);
  }, [modalOpen]);

  return (
    <div
      className="h-20 w-50"
      ref={modalWrap}
      onClick={close}
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      <div
        className=""
        ref={modalDialog}
        onClick={(event) => event.stopPropagation()}
        style={{ opacity: 0, transform: 'translateY(-50px)' }}
      >
        <div className="modal-content">
          <div className="">
            <h4>A Simple Modal Tween</h4>
          </div>
          <div className="">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit provident sunt
              iusto ratione dolore veritatis deserunt ullam vel doloribus.
            </p>
          </div>
          <div className="">
            <button className="btn btn-secondary" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
