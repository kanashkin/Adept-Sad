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

function possibleTabs() {
	const possibleBlock = document.querySelector('.possible__main.desktop')
	const tabs = possibleBlock.querySelectorAll('.possible-tab')
	const contentBlocks = possibleBlock.querySelectorAll('.possible-item')

	tabs[0].classList.add('active')
	contentBlocks[0].classList.add('active')

	tabs.forEach(function (tab) {
		tab.addEventListener('click', function () {
			tabs.forEach(function (tab) {
				tab.classList.remove('active')
			})

			contentBlocks.forEach(function (block) {
				block.classList.remove('active')
			})

			const tabIndex = Array.from(tabs).indexOf(tab)
			tab.classList.add('active')
			contentBlocks[tabIndex].classList.add('active')
		})
	})
}

function possibleCollapse() {
	const possibleBlock = document.querySelector('.possible__main.mobile')
	const triggerBtns = possibleBlock.querySelectorAll('.possible-tab')

	triggerBtns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			let currentBlock = btn.nextElementSibling

			if (btn.classList.contains('active')) {
				currentBlock.style.height = ''
			} else {
				currentBlock.style.height = currentBlock.scrollHeight + 80 + 'px'
			}

			btn.classList.toggle('active')
			currentBlock.classList.toggle('active')
		})
	})
}

function reviewSwiper() {
    const swiperEl = document.querySelector('.reviews-swiper')

    if (swiperEl) {
        new Swiper(swiperEl, {
            spaceBetween: 30,
			loop: true,
			slidesPerView: 'auto',
            navigation: {
                nextEl: '.reviews-btn__next'
            },
            speed: 600
        })
    }
}

function collapse() {
	const triggers = document.querySelectorAll('.faq-question')

	triggers.forEach(function (item) {
		item.addEventListener('click', function () {
			let answer = item.nextElementSibling
			if (item.closest('.faq__block').classList.contains('active')) {
				answer.style.height = ''
			} else {
				answer.style.height = answer.scrollHeight + 'px'
			}
			item.closest('.faq__block').classList.toggle('active')
		})
	})
}

window.addEventListener('DOMContentLoaded', function() {
    videoOverlay()
    stepsScroll()
    possibleTabs()
    possibleCollapse()
    reviewSwiper()
    collapse()
})