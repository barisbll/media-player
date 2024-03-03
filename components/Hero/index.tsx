export const Hero = () => {
  return (
    <div className="w-full h-1/2scHeight relative flex">
      <div className="w-full h-full bg-black bg-opacity-50 z-10"></div>
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
        controls
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
