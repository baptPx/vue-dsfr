import { render } from '@testing-library/vue'

import DsfrVideo from './DsfrVideo.vue'

describe('DsfrVideo', () => {
  it('should render a div with a small video with transcription', () => {
    // Given
    const size = 'small'
    const format4x3 = false
    const src = 'https://www.youtube.com/embed/HyirpmPL43I'
    const legend = 'Vidéo de ouf'
    const transcriptionUrl = 'http://example.com/transcription'
    const transcriptionLabel = 'Label de la transcription'

    // When
    const { container, getByText } = render(DsfrVideo, {
      props: {
        size,
        format4x3,
        src,
        legend,
        transcriptionUrl,
        transcriptionLabel,
      },
    })

    const wrapperEl = container.querySelector('.fr-content-media')
    const captionEl = getByText(legend)
    const link = getByText(transcriptionLabel)

    // Then
    expect(wrapperEl).toHaveClass('fr-content-media--sm')
    expect(wrapperEl).not.toHaveClass('fr-content-media--lg')
    expect(captionEl).toHaveClass('fr-content-media__caption')
    expect(link).toHaveClass('fr-btn')
    expect(link).toHaveAttribute('href', transcriptionUrl)
  })

  it('should render a div with a video without transcription', () => {
    // Given
    const src = 'https://www.youtube.com/embed/HyirpmPL43I'
    const legend = 'Vidéo de ouf'

    // When
    const { container, getByText } = render(DsfrVideo, {
      props: {
        src,
        legend,
      },
    })

    const wrapperEl = container.querySelector('.fr-content-media')
    const responsiveEl = container.querySelector('.fr-responsive-vid')
    const captionEl = getByText(legend)
    const contentMediaEl = container.querySelector('.fr-content-media__transcription')
    const iframeEl = container.querySelector('.fr-responsive-vid__player')

    // Then
    expect(contentMediaEl).toBeNull()
    expect(responsiveEl).toHaveClass('fr-ratio-16x9')
    expect(wrapperEl).not.toHaveClass('fr-content-media--sm')
    expect(wrapperEl).not.toHaveClass('fr-content-media--lg')
    expect(captionEl).toHaveClass('fr-content-media__caption')
    expect(iframeEl).toHaveAttribute('src', src)
  })
})
