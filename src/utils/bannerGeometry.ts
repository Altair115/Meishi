import { convertToRgba } from './color'

export interface SegmentInput {
    width: number
    color?: string
    alpha?: number
    transparent?: boolean
}

export interface SvgSegment {
    points: string
    fill: string
}

export function computeSegments(segments: SegmentInput[], slantPercent: number): SvgSegment[] {
    const svgSegments: SvgSegment[] = []

    let x = 0
    for (const segment of segments) {
        const w = segment.width
        const nextX = x + w

        const slant = slantPercent

        const topLeft = x
        const topRight = nextX + slant
        const bottomRight = nextX
        const bottomLeft = x

        // Ensures next segment starts where previous ended
        svgSegments.push({
            points: `${topLeft},0 ${topRight},0 ${bottomRight},100 ${bottomLeft},100`,
            fill: segment.transparent ? 'transparent' : convertToRgba(segment.color ?? '#000', segment.alpha ?? 1),
        })

        x = nextX
    }

    return svgSegments
}