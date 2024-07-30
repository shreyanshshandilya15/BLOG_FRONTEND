

export default function Slider() {
   
    const data=[
        "https://source.unsplash.com/random/300×300/?blog",
    ]
   
     
  return (
    <div className="flex-col">
        <div className="text-center">React & Node</div>
        <div className="text-center text-8xl">BLOG</div>
        <img  className="max-h-screen w-full object-cover"src={data[0]} alt=" "/>
    </div>
  )
}
