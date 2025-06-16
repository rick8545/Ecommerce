import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="logo">
          <Image
           src="/codeswear.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
