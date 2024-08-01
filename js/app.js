function videoOverlay() {
    const openBtn = document.querySelector('.overlay-open')
    const closeBtn = document.querySelector('.overlay-close')
    const overlayEl = document.querySelector('.overlay')

    if (openBtn && closeBtn && overlayEl) {
        const video = document.querySelector('.video-player')
        const seekBar = document.querySelector('.video-input')
        const playBtn = document.querySelector('.video__btn')

        function openOverlay() {
            openBtn.addEventListener('click', function() {
                overlayEl.classList.add('active')
            })
        }

        function closeOverlay() {
            closeBtn.addEventListener('click', function() {
                overlayEl.classList.remove('active')
                video.pause()
                playBtn.classList.remove('active')
            })
        }

        function getVideoTime() {
            video.addEventListener('timeupdate', function () {
                let value = (video.currentTime / video.duration) * 100
                seekBar.value = value
            })
        }

        function changeSeekBar() {
            seekBar.addEventListener('change', function () {
                let time = video.duration * (seekBar.value / 100)
                video.currentTime = time
            })
        }

        function playVideo() {
            playBtn.addEventListener('click', function () {
                if (video.paused) {
                    video.play()
                    video.classList.add('active')
                    playBtn.classList.add('active')
                } else {
                    video.pause()
                    playBtn.classList.remove('active')
                }
            })
        }

        openOverlay()
        closeOverlay()
        getVideoTime()
        changeSeekBar()
        playVideo()
    }
}

function stepsScroll() {
    const stepItems = document.querySelectorAll('.step')

    if (stepItems.length) {
        stepItems.forEach(function(step) {
            window.addEventListener('scroll', function () {
                if (step.getBoundingClientRect().top < this.window.innerHeight / 2) {
                    step.classList.add('active')
                }
            })
        })
    }
}

window.addEventListener('DOMContentLoaded', function() {
    videoOverlay()
    stepsScroll( )
})