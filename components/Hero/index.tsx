export const Hero = () => {
  return (
    <div className="w-full h-1/2scHeight">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
