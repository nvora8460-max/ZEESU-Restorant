import React from 'react'

const HeroSection = () => {
  return (
    <section className='heroSection' id="heroSection">
        <div className='container'>
            <div className='banner'>
                <div className='largeBox'>
                    <h1 className='title'>Delicious</h1>
                </div>
                <div className='combined_boxes'>
                    <div className = "imageBox">
                        <img src="https://images.unsplash.com/photo-1623073284788-0d846f75e329?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBkaXNofGVufDB8fDB8fHww" alt="Delicious roasted lamb" />
                    </div>
                    <div className="textAndLogo">
                        <div className="textWithSvg">
                            <h1 className='title'>Food</h1>
                            <h1 className='title dishes_title'>Dishes</h1>
                            <img src="/threelines.svg" alt="Decorative divider" />
                        </div>
                        {/* <img src="/logo.svg" alt="Zeesu Restaurant Logo" className="logo" /> */}
                    </div>
                </div>
            </div>

            <div className='banner'>
                <div className="imageBox">
                    <img src="https://images.unsplash.com/photo-1657196118354-f25f29fe636d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGRpc2h8ZW58MHx8MHx8fDA%3D" alt="Citrus cured salmon" />
                </div>
                <h1 className='title dishes_title'>Dishes </h1>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
