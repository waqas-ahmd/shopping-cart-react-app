import React, {Suspense} from 'react-image'
import {useImage} from 'react-image'
 
function MyImageComponent() {
  const {src} = useImage({
    srcList: 'https://www.example.com/foo.jpg',
  })
 
  return <img src={src} />
}
 
export default function ImageComponent(){
  return (
    <Suspense>
      <MyImageComponent/>
    </Suspense>
  )
}