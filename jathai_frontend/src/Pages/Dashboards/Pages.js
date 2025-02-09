import React from 'react'
import Boardspage from './Boards/Boards';

function Pages() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>My Board Overview</h1>
        <p>
          💡"ที่นี่คุณสามารถดูและจัดการบอร์ดทั้งหมดของคุณได้ในที่เดียว
          จัดระเบียบ ติดตามความคืบหน้า
          และทำงานร่วมกันในโปรเจกต์ของคุณได้อย่างสะดวกและมีประสิทธิภาพ."
        </p>
      </div>
      <Boardspage />
    </div>
  )
}

export default Pages