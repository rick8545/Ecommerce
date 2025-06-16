import React from 'react'
import { useRouter } from 'next/router'
const Post=()=> {
  const router=useRouter()
  const {slug}=router.query
  return (
    <div>
      The slug is: {slug}
    </div>
  )
}

export default Post
