'use client'

export function VideoSection() {
  return (
    <section className="mx-auto px-6 md:px-12 py-12">
      <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <video 
          autoPlay 
          loop 
          playsInline 
          muted 
          controls
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 45%' }}
        >
          <source src="/auryon-welcome-compressed.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}