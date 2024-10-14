'use client';
import React from 'react';
import Image from 'next/image';
import './ImageModal.scss'; // 모달에 대한 스타일

const Modal = ({image, title, content, buttonText, onClick, onClose}) => {
    return (
        <div className='image-modal-backdrop' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {image && (
                    <div className='modal-image-container'>
                        <Image onContextMenu={() => {
                            return false;
                        }} style={{WebkitTouchCallout: 'none'}} onContextMenu={() => {
                            return false;
                        }} style={{WebkitTouchCallout: 'none'}} src={image} alt='Modal banner' sizes='100vw'
                               width={500} height={500}/>
                    </div>
                )}
                {title && <div className='modal-title'>{title}</div>}
                <div className='modal-body'>{content}</div>
                <div className='modal-footer'>
                    <button onClick={onClick}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
