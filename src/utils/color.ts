export function convertToRgba(hex: string, alpha: number): string {
    const sanitized = hex.replace('#', '')
    const bigint = parseInt(sanitized, 16)

    if (sanitized.length !== 6 || isNaN(bigint)) {
        console.warn(`Invalid hex color: "${hex}"`)
        return `rgba(0,0,0,${alpha})`
    }

    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}