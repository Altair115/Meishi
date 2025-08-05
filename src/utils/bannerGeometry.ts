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
    const slant = slantPercent
    let prevTopRight = 0

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        const w = segment.width
        const nextX = x + w

        const topLeft = i === 0 ? x : prevTopRight
        const topRight = nextX + slant
        const bottomRight = nextX
        const bottomLeft = x

        svgSegments.push({
            points: `${topLeft},0 ${topRight},0 ${bottomRight},100 ${bottomLeft},100`,
            fill: segment.transparent ? 'transparent' : convertToRgba(segment.color ?? '#000', segment.alpha ?? 1),
        })

        x = nextX
        prevTopRight = topRight
    }

    return svgSegments
}